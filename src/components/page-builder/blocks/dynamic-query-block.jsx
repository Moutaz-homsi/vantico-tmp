import Title from "@/components/ui/title"
import { NewsCard } from "@/components/ui/news/card"
import MeetTheTeam from "./MeetTheTeam"
import PropertyTour from "./PropertyTour"

/**
 * "Automatic list" block: renders content the CMS selected for it rather than
 * items an editor picked by hand. WordPress resolves `results` server-side from
 * the block's `type` and `limit`, so this component only has to render them.
 */
export default function DynamicQueryBlock({ type, title, description, results = [] }) {
	if (results.length === 0) return null

	return (
		<section className="w-full py-10 md:py-20">
			{title ? <Title text={title} /> : null}
			{description ? <p className="sub-title mt-4">{description}</p> : null}

			<div className="mt-8 md:mt-12">{renderList(type, results)}</div>
		</section>
	)
}

function renderList(type, results) {
	switch (type) {
		case "team":
			return <MeetTheTeam members={results} />

		case "property":
			return <PropertyTour properties={results} />

		case "new":
		default:
			return (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
					{results.map((item) => (
						<NewsCard key={item.id} item={item} />
					))}
				</div>
			)
	}
}
