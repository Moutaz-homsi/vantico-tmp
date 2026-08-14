// Custom next/image loader.
//
// The CMS serves absolute URLs, for which this is a pass-through. It only does
// real work for the legacy DigitalOcean Spaces bucket, where a named size has to
// be selected from the media object's `formats` map.
//
// https://nextjs.org/docs/app/api-reference/components/image#loader

export const breakpoints = {
	xlarge: 1500,
	large: 1000,
	medium: 800,
	small: 600,
	msmall: 400,
	xsmall: 300
}

const SPACES_HOST = "digitaloceanspaces.com"
const SPACES_PREFIX = "https://do-spaces.nyc3.digitaloceanspaces.com/"

/**
 * @param {{src: string, width: number, quality?: number, imageTypeFormat?: string}} params
 * @param {{url?: string, formats?: Record<string, {url: string}>}} [media] The media object the image came from.
 */
export function mediaLoader({ src, width, quality, imageTypeFormat }, media) {
	if (!src.includes(SPACES_HOST)) return src

	const typeFormat = imageTypeFormat || "original"

	let imageFormat = src.slice(SPACES_PREFIX.length).split("_")[0]

	if (!Object.keys(breakpoints).includes(imageFormat)) {
		const formats = ["xsmall", "msmall", "small", "medium", "large", "xlarge"]
		imageFormat = formats.find((format) => width <= breakpoints[format]) || "original"
	}

	let result = media?.formats?.[`${imageFormat}_${typeFormat}`]?.url || media?.url || src

	if (!result.includes("cdn.digitaloceanspaces")) {
		result = result.replace("digitaloceanspaces", "cdn.digitaloceanspaces")
	}

	return result
}

export default function getMediaLoader(media) {
	return function ({ src, width, quality }) {
		return mediaLoader({ src, width, quality }, media)
	}
}
