"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, TrendingUp } from "lucide-react"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/utils"

export default function ROICalculator() {
	const [monthlyDeposit, setMonthlyDeposit] = useState(1000)
	const [years, setYears] = useState("5")
	const [yield_, setYield] = useState("10")
	const [chartData, setChartData] = useState<any[]>([])
	const [portfolioValue, setPortfolioValue] = useState(0)
	const [monthlyRental, setMonthlyRental] = useState(0)
	const [isCompound, setIsCompound] = useState(false)
	const [depositFrequency, setDepositFrequency] = useState<"monthly" | "yearly">("yearly")

	useEffect(() => {
		// Calculate portfolio value based on deposits, years, and yield
		const yearsNum = Number.parseInt(years)
		const yieldNum = Number.parseInt(yield_) / 100

		// Initialize variables
		let total = 0
		const data = []

		for (let i = 1; i <= yearsNum; i++) {
			// Calculate yearly deposit based on frequency
			const yearlyDeposit = depositFrequency === "monthly" ? monthlyDeposit * 12 : monthlyDeposit

			// Add yearly deposit
			total += yearlyDeposit

			if (isCompound) {
				// Apply compound appreciation
				total *= 1 + yieldNum
			} else {
				// For non-compound, we only apply the yield to the initial investments
				// and add it to the total without compounding previous yields
				const initialInvestment = depositFrequency === "monthly" ? monthlyDeposit * 12 * i : monthlyDeposit * i
				const yieldAmount = initialInvestment * yieldNum
				total = initialInvestment + yieldAmount
			}

			// Add data point for chart
			data.push({
				year: `Y${i}`,
				value: total
			})
		}

		setChartData(data)
		setPortfolioValue(Math.round(total))
		setMonthlyRental(Math.round((total * 0.043) / 12))
	}, [monthlyDeposit, years, yield_, isCompound, depositFrequency])

	const formatCurrency = (value: number) => {
		return new Intl.NumberFormat("en-us", {
			style: "decimal",
			maximumFractionDigits: 0
		}).format(value)
	}

	return (
		<div className="bg-gray-50 p-8 rounded-3xl max-w-6xl mx-auto">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Left Column */}
				<div className="space-y-8">
					<div>
						<h3 className="text-emerald-600 font-medium mb-2">How will I make money?</h3>
						<h1 className="text-4xl font-bold text-gray-900 mb-8">Calculate your potential returns</h1>
					</div>

					<div className="space-y-2">
						<div className="flex items-center gap-3">
							<div className="bg-white p-2 rounded-md">
								<DollarSign className="h-5 w-5 text-emerald-500" />
							</div>
							<h2 className="text-xl font-semibold">Annual Rental Yield</h2>
						</div>
						<p className="text-gray-600 ml-10">Receive consistent passive income from monthly rental payments.</p>
					</div>

					<div className="relative py-6">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-300"></div>
						</div>
						<div className="relative flex justify-center">
							<span className="bg-white border border-gray-300 rounded-full p-2">
								<span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
									+
								</span>
							</span>
						</div>
					</div>

					<div className="space-y-2">
						<div className="flex items-center gap-3">
							<div className="bg-white p-2 rounded-md">
								<TrendingUp className="h-5 w-5 text-emerald-500" />
							</div>
							<h2 className="text-xl font-semibold">Annual Appreciation</h2>
						</div>
						<p className="text-gray-600 ml-10">Watch your investment grow as the property value appreciates.</p>
					</div>

					{/* <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-md py-6 px-8 w-full sm:w-auto">
						Sign up
					</Button> */}
				</div>

				{/* Right Column */}
				<div className="bg-white p-6 rounded-xl shadow-sm">
					<div className="space-y-6">
						<div className="flex justify-between items-center">
							<h3 className="text-lg font-medium">{depositFrequency === "monthly" ? "Monthly" : "Yearly"} Deposits</h3>
							<p className="text-2xl font-bold">${formatCurrency(monthlyDeposit)}</p>
						</div>

						{/* Deposit Frequency Toggle */}
						<div className="inline-flex p-1 bg-gray-100 rounded-lg">
							<button
								onClick={() => setDepositFrequency("monthly")}
								className={cn(
									"px-4 py-2 text-sm font-medium rounded-md transition-all",
									depositFrequency === "monthly"
										? "bg-emerald-500 text-white shadow-sm"
										: "text-gray-600 hover:text-gray-900"
								)}
							>
								Monthly
							</button>
							<button
								onClick={() => setDepositFrequency("yearly")}
								className={cn(
									"px-4 py-2 text-sm font-medium rounded-md transition-all",
									depositFrequency === "yearly"
										? "bg-emerald-500 text-white shadow-sm"
										: "text-gray-600 hover:text-gray-900"
								)}
							>
								Yearly
							</button>
						</div>

						<Slider
							value={[monthlyDeposit]}
							min={1000}
							max={depositFrequency === "monthly" ? 10000 : 120000}
							step={depositFrequency === "monthly" ? 100 : 1000}
							onValueChange={(value) => setMonthlyDeposit(value[0])}
							className="py-4"
							thumbClassName="bg-emerald-500 border-4 border-white"
							trackClassName="bg-emerald-500"
						/>

						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-2">
								<Switch
									id="compound-mode"
									checked={isCompound}
									onCheckedChange={setIsCompound}
									className="data-[state=checked]:bg-emerald-500"
								/>
								<label htmlFor="compound-mode" className="text-sm font-medium">
									{isCompound ? "Compound Interest" : "Simple Interest"}
								</label>
							</div>
							<span className="text-xs text-emerald-600 font-medium">
								{isCompound ? "Returns reinvested" : "Returns not reinvested"}
							</span>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div className="bg-emerald-50 p-4 rounded-lg">
								<h3 className="text-2xl font-bold text-emerald-700">${formatCurrency(portfolioValue)}</h3>
								<p className="text-sm text-emerald-700">Projected Portfolio value by year {years}</p>
							</div>
							<div className="bg-emerald-50 p-4 rounded-lg">
								<h3 className="text-2xl font-bold text-emerald-700">${formatCurrency(monthlyRental)}</h3>
								<p className="text-sm text-emerald-700">Monthly rental income by year {years}</p>
							</div>
						</div>

						<div className="h-64">
							<ResponsiveContainer width="100%" height="100%">
								<LineChart data={chartData} margin={{ top: 20, right: 5, left: 5, bottom: 5 }}>
									<XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
									<YAxis
										axisLine={false}
										tickLine={false}
										tick={{ fontSize: 12 }}
										tickFormatter={(value) => {
											if (value >= 1000000) return `${value / 1000000}M`
											if (value >= 1000) return `${value / 1000}K`
											return value
										}}
									/>

									<Tooltip />

									<Line
										type="monotone"
										dataKey="value"
										stroke="#10b981"
										strokeWidth={2}
										dot={{ r: 3 }}
										activeDot={{ r: 6, fill: "#10b981", stroke: "white", strokeWidth: 2 }}
									/>
								</LineChart>
							</ResponsiveContainer>
						</div>

						<div className="flex items-center gap-2 text-sm">
							<div className="flex items-center gap-1">
								<span className="h-3 w-3 rounded-full bg-emerald-500"></span>
								<span>Projection</span>
							</div>
							<div className="flex items-center gap-1 ml-4">
								<span className="h-3 w-3 rounded-full bg-emerald-100"></span>
								<span>Likely Range</span>
							</div>
						</div>
						{/* currently we will use fixed values */}
						<div className="grid grid-cols-2 gap-4">
							<Select value={years} onValueChange={setYears}>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select years" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="5">5 years</SelectItem>
									<SelectItem value="10">10 years</SelectItem>
									<SelectItem value="15">15 years</SelectItem>
									<SelectItem value="20">20 years</SelectItem>
								</SelectContent>
							</Select>

							<Select value={yield_} onValueChange={setYield}>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select yield" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="4">4% net yield</SelectItem>
									<SelectItem value="5">5% net yield</SelectItem>
									<SelectItem value="6">6% net yield</SelectItem>
									<SelectItem value="7">7% net yield</SelectItem>
									<SelectItem value="10">10% net yield</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<p className="text-xs text-gray-500">
							All projected values are before any property costs and platform fees, and based on a 5-year holding
							period. We expect the asset value to grow 30% over the next 5 years
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
