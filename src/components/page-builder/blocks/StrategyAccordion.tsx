"use client"
import React from "react"
import { ChevronDown, ChevronUp, Target, TrendingUp, Users, ChartBar, Handshake, FileText } from "lucide-react"
import { cn } from "@/utils"

export type StrategyAccordionItem = {
	icon: "target" | "trendingUp" | "users" | "chartBar" | "handshake" | "fileText"
	title: string
	content: string
}

export type StrategyAccordionProps = {
	heading?: string
	subheading?: string
	title?: string
	items: StrategyAccordionItem[]
	className?: string
}

const IconMap = {
	target: Target,
	trendingUp: TrendingUp,
	users: Users,
	chartBar: ChartBar,
	handshake: Handshake,
	fileText: FileText
}

const StrategyAccordion: React.FC<StrategyAccordionProps> = ({
	heading = "WHY CHOOSE US?",
	subheading = "PRECISION-DRIVEN",
	title = "INVESTMENT STRATEGY",
	items,
	className
}) => {
	const [openItemIndex, setOpenItemIndex] = React.useState<number | null>(0)

	const toggleItem = (index: number) => {
		setOpenItemIndex(openItemIndex === index ? null : index)
	}

	return (
		<div className={cn("max-w-5xl mx-auto px-4 py-16", className)}>
			{heading && <p className="text-center text-amber-700 font-medium mb-4">{heading}</p>}
			{subheading && (
				<h2 className="text-4xl md:text-5xl font-light text-center uppercase tracking-wider mb-1">{subheading}</h2>
			)}
			{title && <h3 className="text-4xl md:text-5xl font-light text-center uppercase tracking-wider mb-10">{title}</h3>}
			<p className="text-xl text-center text-gray-600 mb-14">The Surgeon's Scalpel Approach</p>

			<div className="space-y-4">
				{items.map((item, index) => {
					const Icon = IconMap[item.icon]
					const isOpen = openItemIndex === index

					return (
						<div
							key={index}
							className={cn(
								"border rounded-md overflow-hidden transition-all duration-200",
								isOpen ? "bg-gray-50" : "bg-white"
							)}
						>
							<button
								onClick={() => toggleItem(index)}
								className="flex items-center justify-between w-full p-5 text-left"
								aria-expanded={isOpen}
							>
								<div className="flex items-center gap-4">
									<div className="p-2 bg-gray-100 rounded-full">
										<Icon className="w-5 h-5" />
									</div>
									<h4 className="text-xl font-medium">{item.title}</h4>
								</div>
								<div>{isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}</div>
							</button>

							{isOpen && (
								<div className="px-5 pb-5 pt-0">
									<div className="pl-11">
										<p className="text-gray-600">{item.content}</p>
									</div>
								</div>
							)}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default StrategyAccordion
