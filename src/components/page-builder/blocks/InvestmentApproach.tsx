"use client"
import React from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/utils"

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
			<div className="max-w-6xl mx-auto">
				{subtitle && <h3 className="text-center text-lg font-medium tracking-wider text-amber-700 mb-4">{subtitle}</h3>}

				<h2 className="text-center text-5xl font-light tracking-wider uppercase mb-8">{title}</h2>

				{description && <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">{description}</p>}

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
					{steps.map((step) => (
						<div key={step.number} className="bg-gray-50 p-8 flex items-start relative">
							<span className="text-[140px] font-light text-gray-200 absolute top-0 left-4">{step.number}</span>
							<div className="mt-16 relative z-10">
								<p className="text-lg text-gray-700">{step.description}</p>
							</div>
						</div>
					))}
				</div>

				{ctaText && (
					<div className="flex justify-center">
						<button
							onClick={onCtaClick}
							className="bg-black text-white px-8 py-4 flex items-center hover:bg-gray-800 transition-colors"
						>
							{ctaText} <ChevronRight className="ml-1" size={20} />
						</button>
					</div>
				)}
			</div>
		</section>
	)
}

export default InvestmentApproach
