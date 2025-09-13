export function getStrapiURL(): string {
	// For server-side requests, use 127.0.0.1 instead of localhost
	const serverUrl = process.env.STRAPI_URL || "http://127.0.0.1:1337"
	const clientUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"

	// Use different URLs for server vs client
	return typeof window === "undefined" ? serverUrl : clientUrl
}

export function getStrapiImageUrl(url: string | undefined): string {
	if (!url) return ""

	if (url.startsWith("http://localhost:1337") && process.env.NODE_ENV === "development") {
		return url.replace("http://localhost:1337", "http://127.0.0.1:1337")
	}

	if (url.startsWith("http")) {
		return url
	}

	const baseUrl = getStrapiURL()
	let final = `${baseUrl}${url}`

	if (final.startsWith("http://localhost:1337") && process.env.NODE_ENV === "development") {
		final = final.replace("http://localhost:1337", "http://127.0.0.1:1337")
	}

	return final
}
