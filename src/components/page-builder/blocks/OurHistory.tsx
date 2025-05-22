"use client"
import SectionLabel from "@/components/section-label"
import { Separator } from "@/components/ui/separator"
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
		<div className="w-full py-24 px-4 md:px-8 lg:px-16 bg-black text-white">
			<div className="max-w-7xl mx-auto">
				{/* Section header */}
				<div className="text-center mb-16">
					<SectionLabel label={"Our History"} variant="dark" />
					<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase mt-4">A SUCCESS STORY</h2>
				</div>

				{/* Timeline items */}
				<div className="space-y-20">
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
		</div>
	)
}

export default OurHistory
