import InvestmentApproach from "@/components/page-builder/blocks/InvestmentApproach"
import React from "react"
import { investmentSteps } from "@/data/investmentData"
import { getOptions } from "@/lib/cms"
import Layout from "@/components/layout"

export default async function InvestmentApproachPage() {
	const options = await getOptions()
	return (
		<Layout options={options}>
			<div>
				<InvestmentApproach steps={investmentSteps} />
			</div>
		</Layout>
	)
}
