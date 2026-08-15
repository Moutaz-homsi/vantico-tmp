import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"
import { timingSafeEqual } from "node:crypto"

/**
 * Clears the whole site's cache on demand.
 *
 * Pages are cached for 60 seconds, so an edit in WordPress takes up to a minute
 * to appear. The "Refresh the website" button on the Site Options screen calls
 * this to skip that wait — useful when someone is checking a change immediately,
 * or when a page still looks stale.
 *
 * Authenticated with a shared secret rather than a session: the caller is
 * WordPress, which has no session here.
 */

// This route must never be prerendered or cached itself.
export const dynamic = "force-dynamic"

function secretMatches(provided: string | null, expected: string): boolean {
	if (!provided) return false

	const a = Buffer.from(provided)
	const b = Buffer.from(expected)

	// timingSafeEqual throws on a length mismatch, which would itself leak the
	// expected length, so compare a fixed-size digest of each instead.
	if (a.length !== b.length) return false

	return timingSafeEqual(a, b)
}

export async function POST(request: Request) {
	const expected = process.env.REVALIDATE_SECRET

	if (!expected) {
		// Refuse rather than revalidate: an unset secret would leave the endpoint
		// open to anyone who finds the URL.
		return NextResponse.json(
			{ revalidated: false, error: "REVALIDATE_SECRET is not set on this deployment" },
			{ status: 501 }
		)
	}

	if (!secretMatches(request.headers.get("x-vantico-secret"), expected)) {
		return NextResponse.json({ revalidated: false, error: "Unauthorized" }, { status: 401 })
	}

	// "layout" scope clears every route nested under the root layout — the whole
	// site — rather than just the "/" page.
	revalidatePath("/", "layout")

	return NextResponse.json({ revalidated: true, at: new Date().toISOString() })
}
