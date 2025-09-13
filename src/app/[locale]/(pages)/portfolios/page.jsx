import fetchData from "@/utils/api"
import Layout from "@/components/layout"

export default async function PortfoliosPage() {
	const [options] = await Promise.all([fetchData({ route: "option" })])
	return (
		<Layout options={options?.data}>
			<div>PortfoliosPage</div>
		</Layout>
	)
}
