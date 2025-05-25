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
		<section id="approach" className={cn("w-full py-30 px-4 bg-white", className)}>
			<div className="flex flex-col mx-auto">
				<div className="flex flex-col items-center max-w-5xl mx-auto gap-6">
					<SectionLabel label="Business Model" />
					<h2 className="text-[56px] font-secondary leading-[100%] tracking-[-4%] text-center uppercase">
						OUR INVESTMENT <br />
						APPROACH
					</h2>
					{description && <p className="text-center text-2xl text-[#535353] leading-[140%]">{description}</p>}
				</div>

				<div className="w-full xl:px-30 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
					{steps.map((step) => (
						<div key={step.number} className="bg-gray-50 flex items-center">
							<span className="text-[270px] leading-[100%] min-w-50 text-neutral-200 ">{step.number}</span>
							<p className="text-lg text-[#151515] leading-[160%] max-w-85 mx-auto ">{step.description}</p>
						</div>
					))}
				</div>

				{ctaText && (
					<div className="flex justify-center mt-10">
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
