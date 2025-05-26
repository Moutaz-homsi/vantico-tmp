"use client"
import React from "react"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import SectionLabel from "@/components/section-label"
import { Image } from "@/components/ui"
import Title from "@/components/ui/title"

interface AboutUsProps {
	onCtaClick?: () => void
	className?: string
}

const AboutUs: React.FC<AboutUsProps> = ({ onCtaClick, className }) => {
	const stats = [
		{
			value: "$265M",
			label: "Total Assets Value"
		},
		{
			value: "26",
			label: (
				<>
					Properties across <br />
					Prime Locations
				</>
			)
		},
		{
			value: "1M+",
			label: (
				<>
					Square feet of <br />
					Premium Real Estate
				</>
			)
		}
	]

	return (
		<section id="about" className="w-full pt-28 pb-20 px-4 md:px-8 lg:px-16 bg-neutral-900">
			<div className="max-w-7xl mx-auto">
				{/* Grid container */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
					{/* Left side content */}
					<div className="lg:col-span-9 p-20  bg-white">
						<SectionLabel label={"About Us"} />

						<Title className="my-6">
							Step into a proven, <br /> recession-resistant <br /> model
						</Title>

						<p className="text-lg text-[#535353] leading-[160%] mb-10">
							Vantico specializes in high-end dental and underutilized commercial property investments in the
							Mid-Atlantic market. We create high-yield investment by merging real estate ownership with the booming
							healthcare sector, giving investors stability and long-term growth.
						</p>

						<Button
							onClick={onCtaClick}
							variant="dark"
							// className="bg-black hover:bg-gray-800 text-white py-6 px-8 text-lg rounded-none"
						>
							Get started <ChevronRight className="ml-2" size={20} />
						</Button>
					</div>

					{/* Right side stats */}
					<div className="lg:col-span-3">
						<div className="grid h-full grid-cols-1 gap-6">
							{stats.map((stat, idx) => (
								<Card key={idx} className="flex flex-col justify-center gap-2 bg-neutral-800 border-none   text-center">
									<h3 className="text-[48px] tracking-[-4%] font-secondary text-white">{stat.value}</h3>
									<p className="text-lg text-[#ABABAB]">{stat.label}</p>
								</Card>
							))}
						</div>
					</div>
				</div>
				{/* trusted by */}
				<div className="w-full h-20 mt-16 relative ">
					<Image isFill src={"/images/trusted-by.png"} alt="Trusted by" />
				</div>
				{/* Partners section */}
				{/* <div className="mt-12">
					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
 						<div className="flex items-center grayscale opacity-60">
							<span className="text-2xl font-light text-gray-400">brownrudnick</span>
						</div>
						<div className="flex items-center grayscale opacity-60">
							<span className="text-2xl font-light text-gray-400">CohnReznick</span>
						</div>
						<div className="flex items-center grayscale opacity-60">
							<span className="text-2xl font-light text-gray-400">Lightwave</span>
						</div>
						<div className="flex items-center grayscale opacity-60">
							<span className="text-2xl font-light text-gray-400">LIG</span>
						</div>

					</div>
				</div> */}
			</div>
		</section>
	)
}

export default AboutUs
