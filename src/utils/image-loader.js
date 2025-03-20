import simplifyStrapiResponse from "./simplify-strapi-response"

// TODO modify breakpoints and formats and space url (use env instead )
// https://nextjs.org/docs/pages/api-reference/next-config-js/images
export const breakpoints = {
  xlarge: 1500,
  large: 1000,
  medium: 800,
  small: 600,
  msmall: 400,
  xsmall: 300,
}
export function strapiImageLoader({ src, width, quality, imageTypeFormat }, strapiImageObject) {
  if (!src.includes("digitaloceanspaces.com")) return src

  const typeFormat = imageTypeFormat || "original"

  const strapiImage = simplifyStrapiResponse(strapiImageObject)

  let imageSrc = src.slice("https://ritzy-do-spaces.nyc3.digitaloceanspaces.com/".length)
  let imageFormat = imageSrc.split("_")[0]

  if (!Object.keys(breakpoints).includes(imageFormat)) {
    const formats = ["xsmall", "msmall", "small", "medium", "large", "xlarge"]
    imageFormat = formats.find((format) => width <= breakpoints[format]) || "original"
  }

  let result = ""
  if (strapiImage?.formats?.[`${imageFormat}_${typeFormat}`]) {
    result = strapiImage?.formats?.[`${imageFormat}_${typeFormat}`]?.url
  } else {
    result = strapiImage?.url || src
  }

  if (!result.includes("cdn.digitaloceanspaces")) result = result.replace("digitaloceanspaces", "cdn.digitaloceanspaces")

  return result
}

export default function getStrapiImageLoader(strapiImageObject) {
  return function ({ src, width, quality }) {
    return strapiImageLoader({ src, width, quality }, strapiImageObject)
  }
}
