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
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight uppercase">
						What's in it for investors?
					</h2>
				</div>

				{/* Stats grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
					{stats.map((stat, index) => (
						<Card key={index} className="bg-gray-900 border-0 overflow-hidden">
							<CardContent className="py-8 px-6 text-center">
								<p className="text-3xl md:text-4xl lg:text-5xl font-light mb-3">{stat.value}</p>
								<p className="text-gray-300 mb-1">{stat.label}</p>
								{stat.sublabel && <p className="text-sm text-gray-400">{stat.sublabel}</p>}
							</CardContent>
						</Card>
					))}
				</div>

				{/* Funding progress */}
				<div className="mb-24">
					<Progress value={fundingProgress.raisedPercent + fundingProgress.committedPercent} className="h-10 mb-3" />
					<div className="flex justify-between text-sm">
						<div>
							<p className="font-semibold">{fundingProgress.raised}</p>
							<p className="text-gray-400">Raised</p>
						</div>
						<div>
							<p className="font-semibold">{fundingProgress.committed}</p>
							<p className="text-gray-400">Committed</p>
						</div>
						<div>
							<p className="font-semibold">{fundingProgress.toGo}</p>
							<p className="text-gray-400">To Go</p>
						</div>
					</div>
				</div>

				{/* Investment details */}
				<div className="max-w-2xl mx-auto">
					{investmentDetails.map((detail, index) => (
						<div key={index}>
							<div className="flex justify-between items-center py-5">
								<p className="text-gray-300">{detail.label}</p>
								<p className="text-2xl md:text-3xl font-light">{detail.value}</p>
							</div>
							{index < investmentDetails.length - 1 && <Separator className="bg-gray-800" />}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default InvestorsSection
