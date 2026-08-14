import { devLog, inDevelopment } from "@/utils/dev-utils"

/**
 * Base URL of the WordPress install exposing the `vantico/v1` REST namespace.
 * Server and browser can need different hosts (a local WordPress is reachable
 * over its .local domain from both, but a containerised setup may not be), so
 * the server URL can be overridden separately.
 */
export function getCmsUrl(): string {
	// The fallback is the local wp-up.sh install; it only applies when neither
	// variable is set, which on a deployed site means someone forgot one.
	const serverUrl = process.env.CMS_URL || process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:8080"
	const clientUrl = process.env.NEXT_PUBLIC_CMS_URL || serverUrl

	return (typeof window === "undefined" ? serverUrl : clientUrl).replace(/\/$/, "")
}

interface CmsFetchOptions {
	method?: "GET" | "POST"
	body?: unknown
	/** Passed to Next's fetch cache; defaults to the 60s ISR window used site-wide. */
	revalidate?: number | false
	debug?: boolean
}

/**
 * Single fetch primitive for the CMS. Mirrors the old `fetchData` in
 * src/utils/api.js so call sites read the same way, but talks to the
 * WordPress REST namespace and returns the payload unwrapped (the endpoints
 * emit bare objects and arrays, not a Strapi-style `{ data }` envelope).
 */
export async function cmsFetch<T>(route: string, { method = "GET", body, revalidate = 60, debug = inDevelopment }: CmsFetchOptions = {}): Promise<T | null> {
	const url = `${getCmsUrl()}/wp-json/vantico/v1/${route.replace(/^\//, "")}`

	try {
		const response = await fetch(url, {
			method,
			headers: {
				"Content-Type": "application/json"
			},
			...(body ? { body: JSON.stringify(body) } : {}),
			...(method === "GET" && revalidate !== false ? { next: { revalidate } } : { cache: "no-store" as const })
		})

		const data = await response.json()

		if (!response.ok) {
			log(`error response [${response.status}]`, data)
			return null
		}

		return data as T
	} catch (error) {
		log("request failed", url, error)
		return null
	}

	function log(...args: unknown[]) {
		if (debug) devLog("🚀cmsFetch", ...args)
	}
}
