"use client"
import React, { useState } from "react"
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react"
import { cn } from "@/utils"
import { Button } from "@/components/ui"

export type FAQItem = {
	question: string
	answer: string
}

interface FAQProps {
	title?: string
	items: FAQItem[]
	ctaText?: string
	onCtaClick?: () => void
}

const FAQ: React.FC<FAQProps> = ({ title = "FAQs", items, ctaText = "Ask your own question", onCtaClick }) => {
	const [openIndex, setOpenIndex] = useState<number | null>(0)

	const toggleQuestion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section id="faq" className="w-full max-w-3xl mx-auto py-16 px-4">
			<h2 className="text-5xl font-secondary  tracking-wider text-white mb-12">{title}</h2>

			<div className="space-y-6">
				{/* Questions */}
				{items.map((item, index) => (
					<div
						key={index}
						className="bg-[#1E1E1E] p-10 hover:bg-[#2a2a2a]  rounded-md overflow-hidden transition-all duration-300"
					>
						<button
							onClick={() => toggleQuestion(index)}
							className="w-full flex justify-between items-center text-left text-white  transition-colors"
						>
							<h3 className="text-2xl font-semibold">{item.question}</h3>
							{openIndex === index ? (
								<ChevronUp className="flex-shrink-0 ml-4" />
							) : (
								<ChevronDown className="flex-shrink-0 ml-4" />
							)}
						</button>

						<div
							className={cn(
								"overflow-hidden text-[#ABABAB]  transition-all duration-300",
								openIndex === index ? "max-h-96 pb-6 mt-6" : "max-h-0"
							)}
						>
							<p className="leading-relaxed text-lg">{item.answer}</p>
						</div>
					</div>
				))}
			</div>

			{ctaText && (
				<div className="mt-16 flex justify-between items-center">
					<p className="text-2xl text-white">Couldn't find an answer?</p>
					<Button className="font-semibold" onClick={onCtaClick}>
						{ctaText} <ChevronRight className="ml-2" />
					</Button>
				</div>
			)}
		</section>
	)
}

export default FAQ
