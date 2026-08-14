import { getOptions, getPageBySlug, getPageSlugs } from "@/lib/cms"
import Layout, { Container } from "@/components/layout"
import PageBuilder from "@/components/page-builder"

export default async function Page({ params }) {
	const { slug } = await params

	const [page, options] = await Promise.all([getPageBySlug(slug), getOptions()])

	// TODO handle not found and server errors
	if (!page) return "not found"

	return (
		<Layout options={options}>
			<Container fluid noGutters className="py-0 md:py-0 lg:py-0">
				<PageBuilder data={page} />
			</Container>
		</Layout>
	)
}

// reference: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// SSG
export async function generateStaticParams() {
	const pages = await getPageSlugs()

	return pages.map(({ slug }) => ({ slug }))
}

export const revalidate = 60
