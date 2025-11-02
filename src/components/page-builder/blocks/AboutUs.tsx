"use client"
import React from "react"
import Title from "@/components/ui/title"
import { ChevronRight } from "lucide-react"
import { Container } from "@/components/layout"
import SectionLabel from "@/components/section-label"
import LinkButton from "@/components/ui/buttons/link-button"

interface AboutUsProps {
	onCtaClick?: () => void
	className?: string
}

const AboutUs: React.FC<AboutUsProps> = () => {
	return (
		<Container as="section" id="about" className="pb-8 md:pb-18">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
					<div className="col-span-12 text-center">
						<SectionLabel label={"Crafting Excellence in Investment"} />
						<Title className="my-6 text-left">Trust. Discipline. Enduring Value.</Title>
						<p className="text-lg md:text-2xl font-light text-black leading-[160%] mt-10 text-left">
							<span className="font-medium">VANTICO</span> is a privately held global investment firm defined by
							precision, partnership, and long-term alignment. We work with a select network of families, institutions,
							and entrepreneurs across U.S. real estate, healthcare, and private equity. Our disciplined approach is
							guided by data, grounded in trust, and committed to lasting value. We do not aim to be the largest. We aim
							to be the most trusted.
						</p>
					</div>

					<div className="col-span-12 grid grid-cols-12 gap-4">
						<div
							className="col-span-12 md:col-span-8 text-5xl lg:text-7xl [&_*]:font-secondary"
							style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
						>
							<div className="w-full text-center md:text-left relative md:top-7">
								{/* <AnimatedValue value={`$${addCommas("1.5")}B`} duration={2.5} /> */}
								<span className="text-6xl">$</span>
								<b>1.2B</b>
								<b className="font-medium text-xl ml-3 lg:text-5xl">+</b>
							</div>
							<div className="text-xs text-gray-400 mt-6 relative top-20 hidden md:block">
								*Combined Transaction and Affiliated Platform Value Reflects cumulative enterprise value across select
								real estate, healthcare, and private equity transactions involving VANTICO’s co-investment or strategic
								participation..
							</div>
						</div>

						<div className="col-span-12 md:col-span-4 flex justify-center md:justify-end items-center mt-5 md:mt-10">
							<LinkButton link="/about" className="bg-black text-white">
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
		</Container>
	)
}

export default AboutUs
