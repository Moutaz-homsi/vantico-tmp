import { getOptions, getPageBySlug } from "@/lib/cms"
import Layout, { Container } from "@/components/layout"
import PageBuilder from "@/components/page-builder"

export default async function Project() {
	const [page, options] = await Promise.all([getPageBySlug("projects"), getOptions()])

	return (
		<Layout options={options}>
			<Container fluid noGutters>
				<PageBuilder data={page} />
			</Container>
		</Layout>
	)
}
