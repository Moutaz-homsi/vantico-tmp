import React from "react"
import { CtaBlock, DynamicQueryBlock, ListBlock } from "./blocks"

export default function PageBuilder({ data }) {
	return (
		<div>
			<div style={{}} className="flex flex-col gap-8">
				{data?.blocks?.length > 0 &&
					data?.blocks.map(({ __component, ...rest }, index) => {
						switch (__component) {
							case "cta":
								return <CtaBlock key={index} {...rest} />
							case "pages.lists":
								return <ListBlock key={index} {...rest} />
							case "pages.query":
								return <DynamicQueryBlock key={index} {...rest} />
							default:
								return <p key={index}>Unrecognized component</p>
						}
					})}
			</div>
		</div>
	)
}
