import fetchData from "@/utils/api"
import { Container } from "@/components/layout"
import PageBuilder from "@/components/page-builder"

export default async function Page({ params }) {
	const { slug } = await params
	const response = await fetchData({ route: `pages/slug/${slug}` })
	// TODO handle not found and server errors
	if (!response.data) return "not found"
	return (
		<Container fluid noGutters>
			<PageBuilder data={response.data} />
		</Container>
	)
}

// reference: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// SSG
export async function generateStaticParams() {
	const response = await fetchData({ route: `pages/slugs` })

	return response.results
}

export const revalidate = 60
