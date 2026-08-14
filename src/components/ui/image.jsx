import getMediaLoader, { mediaLoader } from "@/utils/media-loader"
import NextImage from "next/image"

// TODO : Optimize the image component

const generateSrcSet = (format, src, media) => {
	const sizes = [300, 400, 600, 800, 1000, 1500, 1920]

	return sizes
		.map((width) => {
			const imgSrc = mediaLoader({ src, width, imageTypeFormat: format }, media)
			return `${imgSrc} ${width}w`
		})
		.join(", ")
}

export default function Image({
	src = "",
	alt = "",
	width = 0,
	height = 0,
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
	media = null
	// placeholder,
}) {
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

	if (media) {
		additionalAtts["loader"] = getMediaLoader(media)
	}
	// if ( placeholder ) {
	//   additionalAtts['placeholder'] = placeholder
	// }

	const ImageElement = (
		<NextImage
			alt={alt}
			{...(width > 0 ? { width } : {})}
			{...(height > 0 ? { height } : {})}
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
	if (media)
		return (
			<picture>
				<source type="image/avif" srcSet={generateSrcSet("avif", src, media)} sizes={sizes} />
				<source type="image/webp" srcSet={generateSrcSet("webp", src, media)} sizes={sizes} />
				{ImageElement}
			</picture>
		)

	return ImageElement
}
