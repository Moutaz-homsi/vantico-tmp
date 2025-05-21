"use client"
import React from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface AboutUsProps {
	onCtaClick?: () => void
	className?: string
}

const AboutUs: React.FC<AboutUsProps> = ({ onCtaClick, className }) => {
	return (
		<div className="w-full py-20 px-4 md:px-8 lg:px-16 bg-white">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
					{/* Left side content */}
					<div className="lg:col-span-7">
						<div className="mb-6">
							<span className="bg-amber-50 text-amber-700 font-medium px-4 py-2">ABOUT US</span>
						</div>

						<h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight uppercase mb-8">
							STEP INTO A PROVEN, <br />
							RECESSION-RESISTANT <br />
							MODEL
						</h2>

						<p className="text-lg text-gray-600 mb-10">
							Vantico specializes in high-end dental and underutilized commercial property investments in the
							Mid-Atlantic market. We create high-yield investment by merging real estate ownership with the booming
							healthcare sector, giving investors stability and long-term growth.
						</p>

						<Button
							onClick={onCtaClick}
							variant="default"
							className="bg-black hover:bg-gray-800 text-white py-6 px-8 text-lg rounded-none"
						>
							Get started <ArrowRight className="ml-2" size={20} />
						</Button>
					</div>

					{/* Right side stats */}
					<div className="lg:col-span-5">
						<div className="grid grid-cols-1 gap-8">
							<Card className="bg-gray-100 border-none p-8">
								<div className="space-y-2">
									<h3 className="text-6xl font-semibold">$265M</h3>
									<p className="text-xl text-gray-600">Total Assets Value</p>
								</div>
							</Card>

							<Card className="bg-gray-100 border-none p-8">
								<div className="space-y-2">
									<h3 className="text-6xl font-semibold">26</h3>
									<p className="text-xl text-gray-600">
										Properties across <br />
										Prime Locations
									</p>
								</div>
							</Card>

							<Card className="bg-gray-100 border-none p-8">
								<div className="space-y-2">
									<h3 className="text-6xl font-semibold">1M+</h3>
									<p className="text-xl text-gray-600">
										Square feet of <br />
										Premium Real Estate
									</p>
								</div>
							</Card>
						</div>
					</div>
				</div>

				{/* Partners section */}
				<div className="mt-24 pt-10 border-t border-gray-200">
					<h4 className="text-gray-600 mb-6">Trusted by</h4>
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
						<div className="hidden lg:flex items-center grayscale opacity-60">
							{/* Empty space for logo alignment on larger screens */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
