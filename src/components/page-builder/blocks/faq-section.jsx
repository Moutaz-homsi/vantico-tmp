"use client"

import React from "react"
import Container from "@/components/layout/container"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { ChevronRight } from "lucide-react"

export default function FaqSection({ title, subtitle, faqs = [], ctaText, ctaLink }) {
	return (
		<Container className={"py-20"}>
			<div className=" mx-auto p-20 shadow-lg w-[50rem]">
				<h2 className="text-[4rem] font-extralight text-[#1a1a1a] leading-[110%] mb-3">{title || "FAQs"}</h2>
				{subtitle && <p className="text-gray-600 mb-8 text-center">{subtitle}</p>}

				<Accordion type="single" collapsible className="mt-8">
					{faqs.map((faq, index) => (
						<AccordionItem key={index} value={`item-${index} `} className="py-4">
							<AccordionTrigger className="text-[1.75rem] font-light text-[#212121]">{faq.question}</AccordionTrigger>
							<AccordionContent className="text-[1.75rem] font-light text-gray-600">{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>

				{ctaText && (
					<div className="mt-12 text-left flex items-center justify-between gap-12">
						<p className="text-[3.5rem] font-extralight text-black leading-[110%] text-wrap">
							Couldn't find an answer?
						</p>
						<a
							href={ctaLink || "#"}
							className="text-xl font-medium text-nowrap flex items-center justify-center gap-3 hover:no-underline"
						>
							{ctaText}
							<div className="flex items-center justify-center m-auto p-1 border rounded-full border-black">
								<ChevronRight className="size-8" />
							</div>
						</a>
					</div>
				)}
			</div>
		</Container>
	)
}
