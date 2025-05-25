"use client"
import React from "react"
import { ChevronDown, ChevronUp, Target, TrendingUp, Users, ChartBar, Handshake, FileText } from "lucide-react"
import { cn } from "@/utils"
import SectionLabel from "@/components/section-label"

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

const StrategyAccordion: React.FC<StrategyAccordionProps> = ({ items, className }) => {
	const [openItemIndex, setOpenItemIndex] = React.useState<number | null>(0)

	const toggleItem = (index: number) => {
		setOpenItemIndex(openItemIndex === index ? null : index)
	}

	return (
		<section id="strategy" className={cn("max-w-5xl mx-auto px-4 py-16", className)}>
			<div className="flex flex-col justify-center items-center gap-4">
				<SectionLabel label={"Why Vantico"} />
				<h2 className="text-4xl md:text-5xl  text-center uppercase  mb-1">
					PRECISION-DRIVEN <br />
					INVESTMENT STRATEGY
				</h2>
			</div>

			<p className="text-xl text-center text-gray-600 mb-14">The Surgeon's Scalpel Approach</p>

			<div className="space-y-4 max-w-3xl mx-auto">
				{items.map((item, index) => {
					const Icon = IconMap[item.icon]
					const isOpen = openItemIndex === index

					return (
						<div
							key={index}
							className={cn(
								"rounded-md overflow-hidden transition-all duration-200"
								// isOpen ? "bg-gray-50" : "bg-white"
							)}
						>
							<button
								onClick={() => toggleItem(index)}
								className="flex items-center justify-between w-full p-5 text-left hover:cursor-pointer "
								aria-expanded={isOpen}
							>
								<div className="flex items-center gap-4">
									<div className="p-3 rounded-sm bg-gray-100 ">
										<Icon className="w-5 h-5" />
									</div>
									<h4 className="text-xl font-medium">{item.title}</h4>
								</div>
								<div>{isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}</div>
							</button>

							<div
								className={cn(
									"px-5 pt-0 pb-5 pl-11 overflow-hidden transition-all duration-300",
									isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
								)}
								style={{
									transitionProperty: "opacity"
								}}
							>
								<p className="text-neutral-400">{item.content}</p>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default StrategyAccordion
