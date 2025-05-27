"use client"
import SectionLabel from "@/components/section-label"
import { Separator } from "@/components/ui/separator"
import Title from "@/components/ui/title"
import React from "react"

export interface HistoryItem {
	year: string
	description: string
	imageUrl: string
	imageAlt: string
}

interface OurHistoryProps {
	items: HistoryItem[]
	onCtaClick?: () => void
}

const OurHistory: React.FC<OurHistoryProps> = ({ items, onCtaClick }) => {
	return (
		<section id="history" className="w-full py-10 md:py-40 px-4 md:px-8 lg:px-16 bg-black text-white">
			<div className="max-w-7xl mx-auto">
				{/* Section header */}
				<div className="text-center">
					<SectionLabel label={"Our History"} variant="dark" />
					<Title className="text-white mt-6">A SUCCESS STORY</Title>
				</div>

				{/* Timeline items */}
				<div className="space-y-8 md:space-y-20 mt-8 md:mt-20">
					{items.map((item, index) => (
						<div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
							{/* Image */}
							<div className="lg:col-span-8 lg:col-start-3">
								<div className="aspect-[16/9] bg-gray-900 overflow-hidden">
									<img src={item.imageUrl} alt={item.imageAlt} className="w-full h-full object-cover" />
								</div>
							</div>

							{/* Content */}
							<div className="lg:col-span-8 lg:col-start-3 flex flex-col sm:flex-row gap-6">
								<div className="w-full sm:w-24 flex-shrink-0">
									<span className="text-2xl font-medium text-neutral-400">{item.year}</span>
								</div>
								<div className="flex-grow">
									<p className="text-gray-300 text-lg">{item.description}</p>
									{index < items.length - 1 && <Separator className="mt-10 bg-gray-800" />}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default OurHistory
