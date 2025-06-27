"use client"
import Title from "@/components/ui/title"
import SectionLabel from "@/components/section-label"
import React, { useEffect, useRef, useState } from "react"

export interface HistoryItem {
	id: number
	title: string
	description: string
}

interface OurHistoryProps {
	items: HistoryItem[]
}

export default function OurHistory({ items }: OurHistoryProps) {
	const [activeSection, setActiveSection] = useState(0)
	const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

	useEffect(() => {
		const handleScroll = () => {
			const viewportHeight = window.innerHeight
			let closestIndex = 0
			let minDistance = Infinity

			sectionRefs.current.forEach((ref, index) => {
				if (ref) {
					const rect = ref.getBoundingClientRect()
					const centerY = rect.top + rect.height / 2
					const distanceToCenter = Math.abs(centerY - viewportHeight / 2)

					// Check if the section is in the viewport at all
					if (rect.bottom > 0 && rect.top < viewportHeight) {
						if (distanceToCenter < minDistance) {
							minDistance = distanceToCenter
							closestIndex = index
						}
					}
				}
			})

			setActiveSection(closestIndex)
		}

		window.addEventListener("scroll", handleScroll)
		handleScroll()

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<>
			<section className="relative min-h-screen bg-black text-white">
				<div className="text-center pt-20 pb-12 mb-6">
					<SectionLabel label={"Our History"} />
					<Title className="text-white mt-6">A SUCCESS STORY</Title>
				</div>

				<div className="relative max-w-6xl mx-auto px-4 md:px-8 pb-20">
					<div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-white/20 via-white/40 to-white/20 h-full" />

					<div className="space-y-12 md:space-y-12">
						{items.map((section, index) => (
							<div
								key={section.id}
								ref={(el) => {
									sectionRefs.current[index] = el
								}}
								className={`relative transition-all duration-1000 ${
									activeSection >= index ? "translate-y-0 opacity-100" : "translate-y-16 opacity-40"
								}`}
								style={{ minHeight: typeof window !== "undefined" && window.innerWidth < 1024 ? "30vh" : "40vh" }}
							>
								<div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
									<div
										className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
											activeSection === index
												? "bg-white border-white scale-125 shadow-lg shadow-white/50"
												: "bg-black border-white/50"
										}`}
									></div>
								</div>

								<div
									className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center ${
										index % 2 === 0 ? "" : "lg:grid-flow-col-dense"
									}`}
								>
									<div className={`${index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:pl-16"}`}>
										<span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white/70">{section.title}</span>
									</div>

									<div className={`${index % 2 === 0 ? "lg:pl-16" : "lg:pr-16 lg:col-start-1"}`}>
										<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
											<p className="text-gray-300 text-base md:text-lg leading-relaxed">{section.description}</p>
											<div
												className={`mt-4 md:mt-6 h-1 w-16 md:w-20 bg-gradient-to-r from-[#AB804A] to-transparent transition-all duration-500 ${
													activeSection === index ? "opacity-100" : "opacity-50"
												}`}
											></div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
