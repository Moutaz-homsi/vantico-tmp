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
			<h2 className="text-5xl  tracking-wider text-white mb-12">{title}</h2>

			<div className="space-y-4">
				{items.map((item, index) => (
					<div key={index} className="bg-[#222222] rounded-md overflow-hidden transition-all duration-300">
						<button
							onClick={() => toggleQuestion(index)}
							className="w-full px-6 py-6 flex justify-between items-center text-left text-white hover:bg-[#2a2a2a] transition-colors"
						>
							<h3 className="text-xl font-normal">{item.question}</h3>
							{openIndex === index ? (
								<ChevronUp className="flex-shrink-0 ml-4" />
							) : (
								<ChevronDown className="flex-shrink-0 ml-4" />
							)}
						</button>

						<div
							className={cn(
								"px-6 overflow-hidden text-gray-300 transition-all duration-300",
								openIndex === index ? "max-h-96 pb-6" : "max-h-0"
							)}
						>
							<p className="leading-relaxed">{item.answer}</p>
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
