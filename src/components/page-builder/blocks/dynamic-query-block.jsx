import { Typography } from "@/components/ui"
import React from "react"
import { NewsItem } from "./news-section"

export default function DynamicQueryBlock({ __component, type, title, description, results = [] }) {
	return (
		<section>
			<Typography variant="h2">{title}</Typography>
			<Typography>{description}</Typography>
			{renderList(type, results)}
			{/* <ul>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul> */}
		</section>
	)
}

function renderList(type, results) {
	switch (type) {
		case "team":
			return <TeamSection teamMembers={results} />
		case "review":
			return <TestimonialSection testimonials={results} />
		case "project":
			return (
				<div className="grid grid-cols-3 gap-4">
					{results.map((project, index) => (
						<ProjectItem key={index} {...project} />
					))}
				</div>
			)
		case "new":
			return (
				<div className="grid grid-cols-3 gap-4">
					{results.map((item, index) => (
						<NewsItem key={index} item={item} />
					))}
				</div>
			)
		default:
			return <Typography>count {results.length}</Typography>
	}
}
