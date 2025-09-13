import Cards from "./blocks/cards"
import Banner from "./blocks/banner"
import { Container } from "../layout"
import ContentBlock from "./blocks/content-block"
import CarouselBlock from "./blocks/carousel-block"
import { CtaBlock, DynamicQueryBlock, ListBlock } from "./blocks"
import fetchData from "@/utils/api"
import { stringify } from "qs"
import EcosystemSection from "./blocks/ecosystem"
import TenantsSection from "./blocks/TenantsSection"
import NewsBlock from "./blocks/news-block"

export default function PageBuilder({ data }) {
	return (
		<div className="flex flex-col">
			{data?.blocks?.length > 0 &&
				data?.blocks.map(({ __component, ...rest }, index) => {
					switch (__component) {
						case "pages.cta":
							return (
								<Container key={rest?.id ? `cta-${rest?.id}` : `cta-${index}`}>
									<CtaBlock {...rest} />
								</Container>
							)
						case "pages.lists":
							return (
								<Container key={rest?.id ? `lists-${rest?.id}` : `lists-${index}`}>
									<ListBlock {...rest} />
								</Container>
							)

						case "pages.query":
							return (
								<Container key={rest?.id ? `query-${rest?.id}` : `query-${index}`}>
									<DynamicQueryBlock {...rest} />
								</Container>
							)

						case "pages.text-content":
							return <ContentBlock key={rest?.id ? `text-content-${rest?.id}` : `text-content-${index}`} data={rest} />
						case "elements.cards-block":
							return <Cards key={rest?.id ? `cards-${rest?.id}` : `cards-${index}`} data={rest} />
						case "pages.banner":
							return <Banner key={rest?.id ? `banner-${rest?.id}` : `banner-${index}`} {...rest} />
						case "pages.css-carousel":
							async function rendererFunction(ready_components) {
								if (ready_components) {
									const query = stringify({
										populate: [
											"tenants.first_row_images",
											"tenants.second_row_images",
											"tenants.third_row_images",
											"ecosystem_sliders.first_slider.image",
											"ecosystem_sliders.second_slider.image",
											"ecosystem_sliders.third_slider.image"
										],
										locale: "en"
									})

									const homeData = await fetchData({ route: `homepage?${query}` })

									switch (ready_components) {
										case "partners":
											return (
												<EcosystemSection
													className="[&_.sub-title]:text-lg [&_.sub-title]:md:text-2xl [&_.sub-title]:font-light"
													hide_btn
													hide_pattern
													key={rest?.id ? `partners-${rest?.id}` : `partners-${index}`}
													slides={homeData.data.ecosystem_sliders}
												/>
											)
										case "bayers":
											return (
												<TenantsSection
													className="[&_.sub-title]:text-lg [&_.sub-title]:md:text-2xl [&_.sub-title]:font-light"
													hide_pattern
													key={rest?.id ? `bayers-${rest?.id}` : `bayers-${index}`}
													tenants={homeData.data.tenants}
												/>
											)

										default:
											break
									}
								} else {
									return <CarouselBlock key={rest?.id ? `carousel-${rest?.id}` : `carousel-${index}`} {...rest} />
								}
							}
							const renderer = rendererFunction(rest.ready_components)
							return renderer

						case "pages.news":
							return <NewsBlock key={index} {...rest} />
						default:
							return null
					}
				})}
		</div>
	)
}
