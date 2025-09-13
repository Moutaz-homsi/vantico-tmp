import Cards from "./blocks/cards"
import Banner from "./blocks/banner"
import { Container } from "../layout"
import ContentBlock from "./blocks/content-block"
import CarouselBlock from "./blocks/carousel-block"
import { CtaBlock, DynamicQueryBlock, ListBlock } from "./blocks"
import MeetTheTeam from "./blocks/MeetTheTeam"
import fetchData from "@/utils/api"
import { stringify } from "qs"
import EcosystemSection from "./blocks/ecosystem"
import TenantsSection from "./blocks/TenantsSection"

export default function PageBuilder({ data }) {
	return (
		<div>
			<div style={{}} className="flex flex-col">
				{data?.blocks?.length > 0 &&
					data?.blocks.map(({ __component, ...rest }, index) => {
						switch (__component) {
							case "pages.cta":
								return (
									<Container>
										<CtaBlock key={index} {...rest} />
									</Container>
								)
							case "pages.lists":
								return (
									<Container>
										<ListBlock key={index} {...rest} />
									</Container>
								)

							case "pages.query":
								return (
									<Container>
										<DynamicQueryBlock key={index} {...rest} />
									</Container>
								)

							case "pages.text-content":
								return <ContentBlock key={index} data={rest} />
							case "elements.cards-block":
								return <Cards key={index} data={rest} />
							case "pages.banner":
								return <Banner key={index} {...rest} />
							case "pages.team-block":
								return <MeetTheTeam key={index} members={rest.teams} />
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
										console.log("ready_components: ", ready_components)
										switch (ready_components) {
											case "partners":
												return <EcosystemSection hide_pattern slides={homeData.data.ecosystem_sliders} />
											case "bayers":
												return <TenantsSection hide_pattern tenants={homeData.data.tenants} />

											default:
												break
										}
									} else {
										return <CarouselBlock key={index} {...rest} />
									}
								}
								const renderer = rendererFunction(rest.ready_components)
								return renderer

							default:
								return null
						}
					})}
			</div>
		</div>
	)
}
