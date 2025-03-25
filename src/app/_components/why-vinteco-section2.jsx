import { TrendingUp, Users, TrendingUp as ArrowUpRight, Hand, ShieldCheck, Lightbulb } from "lucide-react"
import { twMerge } from "tailwind-merge"

const InvestmentHighlights = () => {
	const highlights = [
		{
			icon: <TrendingUp className="text-4xl text-blue-400 mb-4" />,
			title: "Target Market and Strategy",
			description:
				"Focused on acquiring high-growth, dental-anchored properties across the Mid-Atlantic, our strategy capitalizes on stable, long-term leases that drive consistent returns."
		},
		{
			icon: <Users className="text-4xl text-blue-400 mb-4" />,
			title: "Proven Leadership Team",
			description:
				"Backed by decades of industry experience, our leadership team has a track record of building and exiting multi-million-dollar ventures, positioning us to deliver superior results."
		},
		{
			icon: <ArrowUpRight className="text-4xl text-blue-400 mb-4" />,
			title: "Compelling Financial Returns",
			description:
				"We target 14-20% annual returns and aim to triple your investment within five years, offering a preferred 8% return before profits are shared."
		},
		{
			icon: <Hand className="text-4xl text-blue-400 mb-4" />,
			title: "Strategic Partnerships",
			description:
				"Our dental partnerships will ensure long-term lease commitments, providing steady income streams and strong asset value growth."
		},
		{
			icon: <ShieldCheck className="text-4xl text-blue-400 mb-4" />,
			title: "Risk Mitigation and Alignment",
			description:
				"Our waterfall structure prioritizes investors by guaranteeing their preferred return first, and our General Partners co-invest to ensure full alignment of interests."
		},
		{
			icon: <Lightbulb className="text-4xl text-blue-400 mb-4" />,
			title: "Opportunistic Growth",
			description:
				"With plans to acquire 20 new dental locations and underutilized commercial properties, we are primed to scale and maximize value for our investors."
		}
	]

	return (
		<section className="py-16 bg-gradient-to-br from-gray-50 to-white/50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Investment Highlights</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{highlights.map((highlight, index) => (
						<div
							key={index}
							className={twMerge(
								"bg-white rounded-xl shadow-lg transition-all duration-300",
								"border border-gray-100",
								"flex flex-col h-full",
								"hover:shadow-xl hover:border-blue-500/40",
								"bg-gradient-to-br from-white to-gray-50", // Added gradient
								"relative overflow-hidden", // Added for pseudo-element
								"group" // Added for group hover
							)}
						>
							{/* Pseudo-element for the angled overlay */}
							<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-80 transition-opacity duration-500 rounded-xl -skew-y-12" />

							<div className="relative z-10 p-6">
								<div className="mb-4 text-blue-400">{highlight.icon}</div>
								<h3 className="text-xl font-semibold mb-3 text-gray-900">{highlight.title}</h3>
								<p className="text-gray-600 flex-grow">{highlight.description}</p>
								{/* Use flex-grow */}
							</div>
						</div>
					))}
				</div>
				<div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
					<div className="space-y-2">
						<span className="text-4xl font-bold text-blue-600">12+</span>
						<p className="text-sm text-gray-700">Years Experience</p>
					</div>
					<div className="space-y-2">
						<span className="text-4xl font-bold text-blue-600">$250M+</span>
						<p className="text-sm text-gray-700">Real Estate Assets</p>
					</div>
					<div className="space-y-2">
						<span className="text-4xl font-bold text-blue-600">20+</span>
						<p className="text-sm text-gray-700">Properties</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default InvestmentHighlights
