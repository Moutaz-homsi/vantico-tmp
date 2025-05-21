"use client"
import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

interface InvestorStat {
	value: string
	label: string
	sublabel?: string
}

interface InvestmentDetail {
	label: string
	value: string
}

interface InvestorsSectionProps {
	stats: InvestorStat[]
	fundingProgress: {
		raised: string
		committed: string
		toGo: string
		total: number
		raisedPercent: number
		committedPercent: number
	}
	investmentDetails: InvestmentDetail[]
}

const InvestorsSection: React.FC<InvestorsSectionProps> = ({ stats, fundingProgress, investmentDetails }) => {
	return (
		<div className="w-full py-24 px-4 md:px-8 lg:px-16 bg-black text-white">
			<div className="max-w-7xl mx-auto">
				{/* Section header */}
				<div className="text-center mb-20">
					<h2 className="text-4xl md:text-5xl lg:text-6xl  tracking-tight uppercase">What's in it for investors?</h2>
				</div>

				{/* Stats grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5  mb-20">
					{stats.map((stat, index) => (
						<Card key={index} className="rounded-sm bg-neutral-900 border-0 overflow-hidden">
							<CardContent className="py-8 px-20 text-center flex flex-col justify-center  h-full ">
								<p className="text-3xl md:text-4xl lg:text-5xl text-white font-secondary font-light mb-3">
									{stat.value}
								</p>
								<p className="text-neutral-400 mb-1">{stat.label}</p>
								<p className="text-neutral-400 mb-1">{stat.sublabel}</p>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Funding progress */}
				<div className="mb-24 w-full">
					{/* <Progress value={fundingProgress.raisedPercent + fundingProgress.committedPercent} className="h-10 mb-3" /> */}
					{/* <div className="grid grid-cols-3 w-full h-5 rounded-md overflow-hidden">
						<div className="bg-white"></div>
						<div className="bg-amber-100"></div>
						<div className="bg-neutral-400"></div>
					</div> */}
					<div className="grid grid-cols-4 w-full text-end ">
						<div>
							<div className="bg-white h-5 w-full rounded-l-md"></div>
							<p className="mt-2">$18M Raised</p>
						</div>
						<div className="col-span-2">
							<div className="bg-[#AB804A] h-5 w-full"></div>
							<p className="mt-2">68M Committed</p>
						</div>
						<div>
							<div className="bg-neutral-400 h-5 w-full rounded-r-md"></div>
							<p className="mt-2">$17M To Go</p>
						</div>
					</div>
				</div>

				{/* Investment details */}
				<div className="flex flex-col gap-8 max-w-2xl mx-auto">
					{investmentDetails.map((detail, index) => (
						<div key={index}>
							<div className="flex justify-between items-center mb-2 ">
								<p className="text-gray-300">{detail.label}</p>
								<p className="text-2xl md:text-3xl font-semibold">{detail.value}</p>
							</div>
							{index < investmentDetails.length - 1 && <Separator className="bg-neutral-700" />}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default InvestorsSection
