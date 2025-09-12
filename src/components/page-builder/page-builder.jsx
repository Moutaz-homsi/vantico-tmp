import Cards from "./blocks/cards"
import Banner from "./blocks/banner"
import { Container } from "../layout"
import ContentBlock from "./blocks/content-block"
import { CtaBlock, DynamicQueryBlock, ListBlock } from "./blocks"

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
							default:
								return null
						}
					})}
			</div>
		</div>
	)
}
