import { Container } from "@/components/layout"
import PageBuilder from "@/components/page-builder"
import { Typography, Button } from "@/components/ui"
import fetchData from "@/utils/api"
export default async function Project() {
	const response = await fetchData({ route: `pages/slug/projects` })

	return (
		<Container>
			<Typography variant="h1">Static projects page</Typography>
			<PageBuilder data={response.data} />
		</Container>
	)
}
