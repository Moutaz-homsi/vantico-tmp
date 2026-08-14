import { getOptions } from "@/lib/cms"
import Layout from "@/components/layout"

export default async function PortfoliosPage() {
	const options = await getOptions()
	return (
		<Layout options={options}>
			<div>PortfoliosPage</div>
		</Layout>
	)
}
