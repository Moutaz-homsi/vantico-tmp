"use client"
import React from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/utils"
import SectionLabel from "@/components/section-label"
import { Button } from "@/components/ui"

export type InvestmentStep = {
	number: number
	description: string
}

interface InvestmentApproachProps {
	title?: string
	subtitle?: string
	description?: string
	steps: InvestmentStep[]
	ctaText?: string
	onCtaClick?: () => void
	className?: string
}

const InvestmentApproach: React.FC<InvestmentApproachProps> = ({
	title = "OUR INVESTMENT APPROACH",
	subtitle = "BUSINESS MODEL",
	description = "Vantico's primary anchor tenant is a high-end, fast-growing network of dental practices in which the fund principal has a strategic ownership interest.",
	steps,
	ctaText = "Learn more",
	onCtaClick,
	className
}) => {
	return (
		<section id="approach" className={cn("w-full py-16 px-4 bg-white", className)}>
			<div className="flex flex-col items-center max-w-6xl mx-auto">
				<SectionLabel label="Our Investment Approach" />
				<h2 className="text-4xl md:text-5xl text-center uppercase mb-6">
					OUR INVESTMENT <br />
					APPROACH
				</h2>

				{description && <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">{description}</p>}

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 ">
					{steps.map((step) => (
						<div key={step.number} className="bg-gray-50 flex items-center">
							<span className="text-[250px] leading-[100%]  text-neutral-200 ">{step.number}</span>
							<p className="text-lg text-gray-700 px-10">{step.description}</p>
						</div>
					))}
				</div>

				{ctaText && (
					<div className="flex justify-center">
						<Button onClick={onCtaClick} variant="dark">
							{ctaText} <ChevronRight className="ml-1" size={20} />
						</Button>
					</div>
				)}
			</div>
		</section>
	)
}

export default InvestmentApproach
