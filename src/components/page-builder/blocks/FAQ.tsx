"use client"
import React, { useState } from "react"
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react"
import { cn } from "@/utils"
import { Button } from "@/components/ui"
import Title from "@/components/ui/title"

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
		<section id="faq" className="w-full bg-black py-10 md:py-40 px-4">
			<div className=" max-w-3xl mx-auto">
				<Title className="text-white mb-12">{title}</Title>

				<div className="space-y-6 my-10 md:my-20">
					{/* Questions */}
					{items.map((item, index) => (
						<div
							key={index}
							className="bg-[#1E1E1E] p-6 md:p-10 hover:bg-[#2a2a2a]  rounded-md overflow-hidden transition-all duration-300"
						>
							<button
								onClick={() => toggleQuestion(index)}
								className="w-full flex justify-between items-center text-left text-white  transition-colors"
							>
								<h3 className="text-lg md:text-2xl font-semibold">{item.question}</h3>
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
								<p className="leading-relaxed text-md lg:text-lg">{item.answer}</p>
							</div>
						</div>
					))}
				</div>

				{ctaText && (
					<div className="flex flex-col md:flex-row gap-4 md:justify-between items-center">
						<p className="text-2xl text-white">Couldn't find an answer?</p>
						<Button className="font-semibold" onClick={onCtaClick}>
							{ctaText} <ChevronRight className="ml-2" />
						</Button>
					</div>
				)}
			</div>
		</section>
	)
}

export default FAQ
