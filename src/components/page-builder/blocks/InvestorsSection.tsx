"use client"
import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/utils"
import { Button, Image } from "@/components/ui"
import { Percent, LogIn } from "lucide-react"
import Title from "@/components/ui/title"

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
		<section id="investors" className="w-full py-10 md:py-40 px-4 md:px-8 lg:px-16 bg-black text-white">
			<div className="max-w-7xl mx-auto">
				{/* Section header */}
				<Title className="text-white text-center">What’s in it for investors?</Title>

				{/* Stats grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-20 gap-4 md:gap-6">
					{stats.map((stat, index) => (
						<Card key={index} className="rounded-sm bg-neutral-900 border-0 overflow-hidden">
							<CardContent className="py-10 px-20 text-center flex flex-col justify-center  h-full ">
								<p className="text-5xl text-white font-secondary font-light mb-3">{stat.value}</p>
								<p className="text-lg text-[#ABABAB] mb-1">{stat.label}</p>
								<p className="text-lg text-[#ABABAB] mb-1">{stat.sublabel}</p>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Funding progress */}
				<div className="w-full mt-16 md:mt-36">
					{/* <Progress value={fundingProgress.raisedPercent + fundingProgress.committedPercent} className="h-10 mb-3" /> */}
					{/* <div className="grid grid-cols-3 w-full h-5 rounded-md overflow-hidden">
						<div className="bg-white"></div>
						<div className="bg-amber-100"></div>
						<div className="bg-neutral-400"></div>
					</div> */}
					<div className="grid grid-cols-4 w-full text-end ">
						<div className="space-y-4">
							<div className="bg-white h-5 w-full rounded-l-md"></div>
							<p className="mt-2">$18M Raised</p>
						</div>
						<div className="col-span-2 space-y-4">
							<div className="bg-[#AB804A] h-5 w-full"></div>
							<p className="mt-2">68M Committed</p>
						</div>
						<div className="space-y-4">
							<div className="bg-neutral-400 h-5 w-full rounded-r-md"></div>
							<p className="mt-2">$17M To Go</p>
						</div>
					</div>
				</div>

				{/* Investment details */}
				<div className="flex flex-col gap-8 md:gap-16 max-w-2xl mx-auto mt-16 md:mt-36">
					{investmentDetails.map((detail, index) => (
						<div key={index}>
							<div className="flex justify-between items-center gap-4 py-2 mb-2 ">
								<p className="text-[#ABABAB] text-lg md:text-2xl font-medium flex-1">{detail.label}</p>
								<p
									className={cn(
										"text-xl md:text-4xl flex-1 text-end font-medium tracking-tighter leading-[140%]",
										detail.className ?? ""
									)}
								>
									{detail.value}
								</p>
							</div>
							<Separator className="bg-neutral-700" />
						</div>
					))}
				</div>
				<div className="bg-[#1E1E1E] mt-16 md:mt-36  p-8 md:p-20 rounded-sm">
					<Tab />
				</div>
			</div>
		</section>
	)
}

const content = {
	returns: `Any distributions below an annualized PRR of 8% will be accrued by the fund and paid on a preferential basis
					at property exit or fund exit, before waterfall.`,
	exit: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`
}

const size = 40
const imageSizeProps = {
	width: size,
	height: size
}
function Tab() {
	const [activeTab, setActiveTab] = useState("returns")

	function buildButtonProps(tab) {
		return {
			className: cn("text-2xl", activeTab != tab && "text-neutral-500 font-normal"),
			variant: "text",
			onClick: () => {
				setActiveTab(tab)
			}
		}
	}
	return (
		<div className="grid md:grid-cols-5 gap-4 items-baseline">
			<div className="md:col-span-2 flex md:flex-col gap-4 text-start items-start ">
				<Button {...buildButtonProps("returns")}>
					<PercentIcon color={activeTab !== "returns" ? "#ABABAB" : "white"} /> Returns
				</Button>
				<Button {...buildButtonProps("exit")}>
					<ExitIcon color={activeTab !== "exit" ? "#ABABAB" : "white"} />
					Exit
				</Button>
			</div>
			<div className="md:col-span-3">
				<p className="col-span-2 text-lg leading-[160%] text-[#ABABAB]">{content[activeTab]}</p>
			</div>
		</div>
	)
}

function ExitIcon({ color = "white" }) {
	return (
		<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9 25H3.66667C2.95942 25 2.28115 24.719 1.78105 24.219C1.28095 23.7189 1 23.0406 1 22.3333V3.66667C1 2.95942 1.28095 2.28115 1.78105 1.78105C2.28115 1.28095 2.95942 1 3.66667 1H9"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18.3333 19.6663L24.9999 12.9997L18.3333 6.33301"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path d="M25 13H8.99997" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

function PercentIcon({ color = "white" }) {
	return (
		<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12.9999 25C19.6273 25 24.9999 19.6274 24.9999 13C24.9999 6.37258 19.6273 1 12.9999 1C6.37251 1 0.999924 6.37258 0.999924 13C0.999924 19.6274 6.37251 25 12.9999 25Z"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16.5999 9.40039L9.39989 16.6004"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path d="M9.39989 9.40039H9.41189" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M16.5999 16.5996H16.6119" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}
export default InvestorsSection
