"use client"

import React, { useState } from "react"
import { addCommas } from "@/utils/numberUtils"
import Title from "@/components/ui/title"

export default function ROICalculator() {
	const [amountInvested, setAmountInvested] = useState(33000)
	const [amountReturned, setAmountReturned] = useState(80000)
	const [investmentPeriod, setInvestmentPeriod] = useState(36)

	const totalGain = amountReturned - amountInvested
	const roi = amountInvested > 0 ? (totalGain / amountInvested) * 100 : 0
	const annualROI = investmentPeriod > 0 ? roi / (investmentPeriod / 12) : 0

	return (
		<section id="roi" className="bg-black  px-8 md:px-0  py-10 md:py-40">
			<div className="bg-[#1E1E1E] lg:max-w-7xl mx-auto text-white rounded-md p-8 md:p-20">
				{/* title */}
				<Title className="text-white text-center ">ROI Calculator</Title>
				{/* inputs */}
				<div className="grid lg:grid-cols-3 gap-6 mt-10 md:mt-20">
					{/* first input: invested */}
					<div className="space-y-6">
						<label className="block text-sm font-light text-[#ABABAB]">Amount invested</label>
						<div className="flex items-center bg-[#161616] rounded-sm px-8 py-6">
							<span className="text-[#535353] text-xl mr-2">$</span>
							<input
								type="number"
								value={amountInvested}
								onChange={(e) => setAmountInvested(Number(e.target.value))}
								className="w-full bg-transparent text-white text-2xl  outline-none text-right pr-2"
								style={{ fontFamily: "Montserrat, Arial, sans-serif", letterSpacing: 1 }}
							/>
						</div>
					</div>
					{/* second input: returned */}
					<div className="space-y-6">
						<label className="block text-sm font-light  text-[#ABABAB]">Amount returned</label>
						<div className="flex items-center bg-[#161616] rounded-sm px-8 py-6">
							<span className="text-[#535353] text-xl mr-2">$</span>
							<input
								type="number"
								value={amountReturned}
								onChange={(e) => setAmountReturned(Number(e.target.value))}
								className="w-full bg-transparent text-white text-2xl  outline-none text-right pr-2"
								style={{ fontFamily: "Montserrat, Arial, sans-serif", letterSpacing: 1 }}
							/>
						</div>
					</div>
					{/* third input: months */}
					<div className="space-y-6">
						<label className="block text-sm font-light text-[#ABABAB]">Investment period (in months)</label>
						<div className="flex items-center justify-between bg-[#161616] rounded-sm px-8 py-6">
							<input
								type="number"
								value={investmentPeriod}
								onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
								className="w-full bg-transparent text-white text-2xl  outline-none  pr-2"
								style={{ fontFamily: "Montserrat, Arial, sans-serif", letterSpacing: 1 }}
							/>
							<span className="text-[#535353] ml-3  text-xl">Months</span>
						</div>
					</div>
				</div>
				{/* results */}
				<div className="flex flex-col gap-8 md:gap-20 text-2xl mt-8 md:mt-16 font-light">
					<div className="border-b border-neutral-700 py-6 flex items-center gap-2 justify-between">
						<span className="text-[#ABABAB] text-xl md:text-2xl lg:text-3xl">Total Gain on Investment</span>
						<span
							className="text-white font-medium text-3xl lg:text-5xl"
							style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
						>
							{addCommas(totalGain)}
						</span>
					</div>
					<div className="border-b border-neutral-700 py-6 flex items-center gap-2 justify-between">
						<span className="text-[#ABABAB] text-xl md:text-2xl lg:text-3xl">Return on Investment (ROI)</span>
						<span
							className="text-white font-medium text-3xl lg:text-5xl"
							style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
						>
							{addCommas(roi.toFixed(2))}%
						</span>
					</div>
					<div className="border-b border-neutral-700 py-6 flex items-center gap-2 justify-between">
						<span className="text-[#ABABAB] text-xl md:text-2xl lg:text-3xl">Simple Annual (ROI)</span>
						<span
							className="text-white font-medium text-3xl  lg:text-5xl"
							style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
						>
							{addCommas(annualROI.toFixed(1))}%
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}
