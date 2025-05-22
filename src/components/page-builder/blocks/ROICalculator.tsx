"use client"
import React, { useState } from "react"

export default function ROICalculator() {
	const [amountInvested, setAmountInvested] = useState(33000)
	const [amountReturned, setAmountReturned] = useState(80000)
	const [investmentPeriod, setInvestmentPeriod] = useState(36)

	const totalGain = amountReturned - amountInvested
	const roi = ((totalGain / amountInvested) * 100).toFixed(2)
	const annualROI = (roi / (investmentPeriod / 12)).toFixed(1)

	return (
		<section id="roi" className="bg-black text-white p-10 rounded-lg max-w-[800px] mx-auto">
			<h2 className="text-4xl font-light text-center mb-10 tracking-widest">ROI CALCULATOR</h2>
			<div className="grid grid-cols-3 gap-6 mb-10">
				<div>
					<label className="block text-sm font-light mb-2 text-gray-400">Amount invested</label>
					<div className="flex items-center bg-gray-800 rounded px-4 py-2">
						<span className="text-gray-400">$</span>
						<input
							type="number"
							value={amountInvested}
							onChange={(e) => setAmountInvested(Number(e.target.value))}
							className="w-full bg-transparent text-white text-lg font-light outline-none ml-2"
						/>
					</div>
				</div>
				<div>
					<label className="block text-sm font-light mb-2 text-gray-400">Amount returned</label>
					<div className="flex items-center bg-gray-800 rounded px-4 py-2">
						<span className="text-gray-400">$</span>
						<input
							type="number"
							value={amountReturned}
							onChange={(e) => setAmountReturned(Number(e.target.value))}
							className="w-full bg-transparent text-white text-lg font-light outline-none ml-2"
						/>
					</div>
				</div>
				<div>
					<label className="block text-sm font-light mb-2 text-gray-400">Investment period (in months)</label>
					<div className="flex items-center bg-gray-800 rounded px-4 py-2">
						<input
							type="number"
							value={investmentPeriod}
							onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
							className="w-full bg-transparent text-white text-lg font-light outline-none"
						/>
						<span className="text-gray-400 ml-2">Months</span>
					</div>
				</div>
			</div>
			<div className="text-2xl font-light">
				<div className="border-t border-gray-700 py-4">
					<p className="text-gray-400">Total Gain on Investment</p>
					<p className="text-white font-normal text-3xl">${totalGain.toLocaleString()}</p>
				</div>
				<div className="border-t border-gray-700 py-4">
					<p className="text-gray-400">Return on Investment (ROI)</p>
					<p className="text-white font-normal text-3xl">{roi}%</p>
				</div>
				<div className="border-t border-gray-700 py-4">
					<p className="text-gray-400">Simple Annual (ROI)</p>
					<p className="text-white font-normal text-3xl">{annualROI}%</p>
				</div>
			</div>
		</section>
	)
}
