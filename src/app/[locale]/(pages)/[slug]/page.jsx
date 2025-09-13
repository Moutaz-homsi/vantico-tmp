import fetchData from "@/utils/api"
import Layout, { Container } from "@/components/layout"
import PageBuilder from "@/components/page-builder"

export default async function Page({ params }) {
	const { slug } = await params

	const [pageResponse, optionsResponse] = await Promise.all([
		fetchData({ route: `pages/slug/${slug}` }),
		fetchData({ route: "option" })
	])

	// TODO handle not found and server errors
	if (!pageResponse.data) return "not found"

	return (
		<Layout options={optionsResponse?.data}>
			<Container fluid noGutters>
				<PageBuilder data={pageResponse.data} />
			</Container>
		</Layout>
	)
}

// reference: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// SSG
export async function generateStaticParams() {
	const response = await fetchData({ route: `pages/slugs` })

	return response.results.map((slug) => ({ slug }))
}

export const revalidate = 60
