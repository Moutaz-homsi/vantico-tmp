import CssCarousel from "@/components/ui/carousels/css-caroucel"
import Wysiwyg from "./wysiwyg"
import { Container } from "@/components/layout"
import Title from "@/components/ui/title"
import { cn } from "@/utils"
// import EcosystemSection from "./ecosystem"
// import fetchData from "@/utils/api"
// import { stringify } from "qs"
// import TenantsSection from "./TenantsSection"

interface ICarouselBlock {
	title: string
	slide_item: Array<{ image: string }>
	description: string
	skin: string
	pattern: string
	sub_description: string
}

export default async function CarouselBlock({
	title,
	slide_item,
	description,
	skin,
	pattern,
	sub_description
}: ICarouselBlock) {
	return (
		<Container pattern={pattern} patternSkin={skin}>
			<Title text={title} className={cn("capitalize mb-6", skin == "dark" ? "text-white" : "text-[#151515]")} />
			<Wysiwyg data={description} />
			<CssCarousel data={slide_item} />
			{sub_description ? <Wysiwyg data={sub_description} /> : null}
		</Container>
	)
}
