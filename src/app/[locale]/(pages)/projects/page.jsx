import fetchData from "@/utils/api"
import Layout, { Container } from "@/components/layout"
import PageBuilder from "@/components/page-builder"

export default async function Project() {
	const [response, options] = await Promise.all([
		fetchData({ route: `pages/slug/projects` }),
		fetchData({ route: "option" })
	])
	return (
		<Layout options={options?.data}>
			<Container fluid noGutters>
				<PageBuilder data={response?.data} />
			</Container>
		</Layout>
	)
}
