import CssCarousel from "@/components/ui/carousels/css-caroucel"

interface ICarouselBlock {
	title: string
	slides: { image: string }[]
	description: string
}

export default function CarouselBlock({ title, slides, description }: ICarouselBlock) {
	return <div><h2>{title}</h2><p>{description}</p></div>
  // return (
	// 	<div>
	// 		<h2>{title}</h2>
	// 		<p>{description}</p>
	// 		<CssCarousel data={slides} />
	// 	</div>
	// )
}
