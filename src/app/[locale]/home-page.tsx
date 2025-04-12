import PageBuilder from "@/components/page-builder"
import fetchData from "@/utils/api"
import simplifyStrapiResponse from "@/utils/simplify-strapi-response"

export default async function HomePage() {
	try {
		const response = await fetchData({
			route: "homepage?populate[sections][populate]=*"
		})

		// Simplify the nested Strapi response
		const data = simplifyStrapiResponse(response)

		return (
			<main>
				<PageBuilder data={data} />
			</main>
		)
	} catch (error) {
		console.error("Error loading homepage:", error)
		return <div>Error loading page content</div>
	}
}
