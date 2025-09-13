import InvestmentApproach from "@/components/page-builder/blocks/InvestmentApproach"
import React from "react"
import { investmentSteps } from "@/data/investmentData"
import fetchData from "@/utils/api"
import Layout from "@/components/layout"

export default async function InvestmentApproachPage() {
	const options = await fetchData({ route: "option" })
	return (
		<Layout options={options?.data}>
			<div>
				<InvestmentApproach steps={investmentSteps} />
			</div>
		</Layout>
	)
}
