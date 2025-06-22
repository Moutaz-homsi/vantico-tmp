import InvestmentApproach from "@/components/page-builder/blocks/InvestmentApproach"
import React from "react"
import { investmentSteps } from "@/data/investmentData"

export default function InvestmentApproachPage() {
	return (
		<div>
			<InvestmentApproach steps={investmentSteps} />
		</div>
	)
}
