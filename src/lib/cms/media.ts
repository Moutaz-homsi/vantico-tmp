import { getCmsUrl } from "./client"
import type { CmsMedia } from "./types"

/**
 * Absolute URL for a CMS media reference.
 *
 * WordPress already returns absolute URLs, so this is mostly a pass-through —
 * it exists to cover relative paths (e.g. when a WordPress install is moved and
 * `source_url` has not been rewritten yet) and to give call sites a single place
 * to go through, the way `getStrapiImageUrl` used to.
 */
export function getMediaUrl(media: CmsMedia | string | null | undefined): string {
	const url = typeof media === "string" ? media : media?.url

	if (!url) return ""
	if (url.startsWith("http://") || url.startsWith("https://")) return url

	return `${getCmsUrl()}${url.startsWith("/") ? "" : "/"}${url}`
}

/** Alt text, tolerating either key the endpoints emit. */
export function getMediaAlt(media: CmsMedia | null | undefined, fallback = ""): string {
	return media?.alt || media?.alternativeText || fallback
}
