"use client"
import React from "react"
import Title from "@/components/ui/title"
import { ChevronRight } from "lucide-react"
import { addCommas } from "@/utils/numberUtils"
import SectionLabel from "@/components/section-label"
import LinkButton from "@/components/ui/buttons/link-button"
import AnimatedValue from "@/components/ui/header/animated-value"
import SectionBg from "@/components/ui/section-bg"

interface AboutUsProps {
	onCtaClick?: () => void
	className?: string
	logos?: {
		id: number
		title: string
		description: string
		image: object
	}[]
}

const AboutUs: React.FC<AboutUsProps> = () => {
	return (
		<SectionBg id="about" className="pb-8 md:pb-18">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
					<div className="col-span-12 text-center">
						<SectionLabel label={"Crafting Excellence in Investment"} />
						<Title className="my-6">Trust. Discipline. Enduring Value.</Title>
						<p className="text-lg md:text-2xl font-light text-black leading-[160%] mt-10">
							<span className="font-medium">VANTICO</span> is a privately held global investment firm distinguished by
							precision, partnership, and long-term conviction. We co-invest with a curated network of high-net-worth
							individuals, family offices, and institutions across U.S. real estate, healthcare, and private equity. Our
							approach is guided by data, discipline, and deep market insight. We do not seek to be the largest. We
							strive to be the most trusted. Every investment reflects our commitment to sustainable value that endures
							over time.
						</p>
					</div>

					<div className="col-span-12 grid grid-cols-12 gap-4">
						<div
							className="col-span-12 md:col-span-8 text-5xl lg:text-7xl [&_*]:font-secondary"
							style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
						>
							<div className="w-full text-center md:text-left relative md:top-7">
								{/* <AnimatedValue value={`$${addCommas("1.5")}B`} duration={2.5} /> */}
								<span className="text-6xl">$</span><b>1.5B</b>
								<b className="font-medium text-xl ml-3 lg:text-5xl">AUM</b><em className="text-xs text-gray-400 relative top-1 ml-1"> 1</em>
							</div>
							<div className="text-xs text-gray-400 mt-6 relative top-16 hidden md:block">
								*Collective AUM includes assets managed across VANTICO’s affiliated funds, operating platforms, and
								strategic partnerships.
							</div>
						</div>

						<div className="col-span-12 md:col-span-4 flex justify-center md:justify-end items-center mt-5 md:mt-10">
							<LinkButton link="/real-estate" className="bg-black text-white">
								Learn More About Vantico <ChevronRight className="ml-2" />
							</LinkButton>
						</div>
						<div className="col-span-12 text-xs text-gray-400 mt-6 relative top-6 md:hidden">
							*Collective AUM includes assets managed across VANTICO’s affiliated funds, operating platforms, and
							strategic partnerships.
						</div>
					</div>
				</div>
			</div>
		</SectionBg>
	)
}

export default AboutUs
