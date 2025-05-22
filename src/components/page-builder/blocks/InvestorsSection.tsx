"use client"
import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/utils"
import { Button, Image } from "@/components/ui"
import { Percent, LogIn } from "lucide-react"

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
		<section id="investor" className="w-full py-24 px-4 md:px-8 lg:px-16 bg-black text-white">
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
								<p className="text-gray-300 flex-1">{detail.label}</p>
								<p className={cn("text-3xl flex-1 text-end font-semibold", detail.className ?? "")}>{detail.value}</p>
							</div>
							<Separator className="bg-neutral-700" />
						</div>
					))}
				</div>

				<Tab />
			</div>
		</section>
	)
}

const content = {
	returns: `Any distributions below an annualized PRR of 8% will be accrued by the fund and paid on a preferential basis
					at property exit or fund exit, before waterfall.`,
	exit: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`
}
function Tab() {
	const [activeTab, setActiveTab] = useState("returns")

	return (
		<div className="bg-neutral-800 mt-16 max-w-6xl mx-auto px-16 py-16 rounded-sm">
			<div className="grid grid-cols-5 gap-4 items-baseline">
				<div className="col-span-2 flex flex-col gap-4 text-start items-start ">
					<Button
						onClick={() => {
							setActiveTab("returns")
						}}
						className={cn(activeTab != "returns" && "text-neutral-500")}
						variant="text"
					>
						<Image alt="percent icon" src="/icons/percent-icon.png" width={36} height={36} /> Returns
					</Button>
					<Button
						onClick={() => {
							setActiveTab("exit")
						}}
						className={cn(activeTab != "exit" && "text-neutral-500")}
						variant="text"
					>
						<Image alt="percent icon" src="/icons/exit-icon.png" width={36} height={36} />
						Exit
					</Button>
				</div>
				<div className="col-span-3">
					<p className="col-span-2 text-[#ABABAB]">{content[activeTab]}</p>
				</div>
			</div>
		</div>
	)
}
export default InvestorsSection
