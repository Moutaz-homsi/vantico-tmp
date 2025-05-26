"use client"
import React from "react"
import {
	ChevronDown,
	ChevronUp,
	ChartColumn,
	Target,
	TrendingUp,
	Users,
	ChartBar,
	Handshake,
	FileText
} from "lucide-react"
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
	chartBar: ChartColumn,
	handshake: Handshake,
	fileText: FileText
}

const StrategyAccordion: React.FC<StrategyAccordionProps> = ({ items, className }) => {
	const [openItemIndex, setOpenItemIndex] = React.useState<number | null>(0)

	const toggleItem = (index: number) => {
		setOpenItemIndex(openItemIndex === index ? null : index)
	}

	return (
		<section id="strategy" className={cn("max-w-5xl mx-auto py-30", className)}>
			<div className="flex flex-col justify-center items-center">
				<SectionLabel label={"Why Vantico"} />
				<h2 className="text-4xl md:text-5xl font-secondary text-[#151515] text-[56px] tracking-[4%] leading-[100%]  text-center  mt-6 mb-4">
					Precision-driven <br />
					investment strategy
				</h2>
				<p className="text-xl text-center text-gray-600">The Surgeon's Scalpel Approach</p>
			</div>

			<div className="space-y-14 max-w-3xl mx-auto mt-20">
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
								className="flex items-center justify-between w-full text-left hover:cursor-pointer "
								aria-expanded={isOpen}
							>
								<div className="flex items-center gap-8">
									<div className="p-3 rounded-sm bg-gray-100 ">
										<Icon className="size-10" strokeWidth={1} />
									</div>
									<h4 className="text-[32px]">{item.title}</h4>
								</div>
								<div>
									{isOpen ? (
										<ChevronUp strokeWidth={1} className="size-10" />
									) : (
										<ChevronDown strokeWidth={1} className="size-10" />
									)}
								</div>
							</button>

							<div
								className={cn(
									"mt-4 pl-24 pr-10  overflow-hidden transition-all duration-300",
									isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
								)}
								style={{
									transitionProperty: "opacity"
								}}
							>
								<p className="text-[18px] text-[#535353]">{item.content}</p>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default StrategyAccordion
