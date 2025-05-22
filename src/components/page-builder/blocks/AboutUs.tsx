"use client"
import React from "react"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import SectionLabel from "@/components/section-label"

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
		<section id="about" className="w-full py-20 px-4 md:px-8 lg:px-16 bg-neutral-900">
			<div className="max-w-7xl mx-auto">
				{/* Grid container */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
					{/* Left side content */}
					<div className="lg:col-span-9 px-16 py-18  bg-white">
						<div className="mb-6">
							<SectionLabel label={"About Us"} />
						</div>

						<h2 className="text-5xl  font-secondary  tracking-tighter uppercase mb-8">
							STEP INTO A PROVEN, <br />
							RECESSION-RESISTANT <br />
							MODEL
						</h2>

						<p className="text-lg text-gray-600 leading-relaxed mb-10">
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
								<Card key={idx} className="bg-neutral-800 border-none py-9  text-center">
									<div className="space-y-4">
										<h3 className="text-5xl tracking-tighter font-secondary text-white">{stat.value}</h3>
										<p className="text-sm text-muted-foreground">{stat.label}</p>
									</div>
								</Card>
							))}
						</div>
					</div>
				</div>

				{/* Partners section */}
				<div className="mt-12">
					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
						{/* <h4 className="text-gray-600 mb-6">Trusted by</h4> */}
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
						<div className="hidden lg:flex items-center grayscale opacity-60">
							{/* Empty space for logo alignment on larger screens */}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
