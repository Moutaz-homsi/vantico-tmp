import getStrapiImageLoader, { strapiImageLoader } from "@/utils/image-loader"
import NextImage from "next/image"

// TODO : Optimize the image component

const generateSrcSet = (format, src, strapiImage) => {
	const sizes = [300, 400, 600, 800, 1000, 1500, 1920]

	return sizes
		.map((width) => {
			const imgSrc = strapiImageLoader({ src, width, imageTypeFormat: format }, strapiImage)
			return `${imgSrc} ${width}w`
		})
		.join(", ")
}

export default function Image({
	src = "",
	alt = "",
	width = undefined,
	height = undefined,
	styles = "",
	className = "",
	quality = "",
	priority = false,
	isFill = false,
	sizes = "",
	isLoad = true,
	loading = "eager",
	sourceCyaSize = "",
	fetchPriority = undefined,
	strapiImage = null
	// placeholder,
}) {
	// we need this when testing with local development uploads, we need to add the base url
	if (typeof src === "string" && !src.includes("http") && src.startsWith("/upload"))
		src = process.env.NEXT_PUBLIC_API_URL + src

	// const [loaded, setLoaded] = useState(false)

	// function handleImageLoad() {
	//   setLoaded(true)
	// }
	// useEffect(() => {
	//   handleImageLoad()
	// }, [])

	// if ((width && height) || isFill == true) {
	// const customLoader = ({ src, width, quality }) => {
	//   // return `${src}?w=${width}&q=${quality || 75}`
	//   return "/images/placeholder.webp"
	// }
	const qSrc = sourceCyaSize ? `${src}?${sourceCyaSize}` : src
	const additionalAtts = {}
	if (fetchPriority) {
		additionalAtts["fetchPriority"] = fetchPriority
	}

	if (strapiImage) {
		additionalAtts["loader"] = getStrapiImageLoader(strapiImage)
	}
	// if ( placeholder ) {
	//   additionalAtts['placeholder'] = placeholder
	// }

	const ImageElement = (
		<NextImage
			alt={alt}
			{...(width ? { width } : {})}
			{...(height ? { height } : {})}
			{...(styles ? { styles } : {})}
			className={className}
			priority={priority}
			fill={isFill}
			sizes={sizes}
			loading={loading}
			{...(quality ? { quality } : {})}
			src={qSrc}
			{...additionalAtts}
		/>
	)

	if (!src?.length) return null
	if (strapiImage)
		return (
			<picture>
				<source type="image/avif" srcSet={generateSrcSet("avif", src, strapiImage)} sizes={sizes} />
				<source type="image/webp" srcSet={generateSrcSet("webp", src, strapiImage)} sizes={sizes} />
				{ImageElement}
			</picture>
		)

	return ImageElement
}
