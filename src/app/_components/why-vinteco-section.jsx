import { ArrowUpRight, BarChart3, Building, Scale, Shield, Target, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function InvestmentOverview() {
	return (
		<section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
			{/* Background gradient with animated effect */}
			<div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background opacity-80"></div>
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>

			<div className="container px-4 md:px-6 relative z-10">
				<div className="mx-auto max-w-[800px] space-y-4 text-center mb-10 md:mb-16">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
						Our Investment Approach
					</h2>
					<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
						Blue Ridge Capital Fund specializes in high-end dental and underutilized commercial property investments in
						the thriving Mid-Atlantic market. With a 12-year track record, our principals manage Triangle Family
						Dentistry and Carolina Orthodontics & Children's Dentistry, now oversee $250M in real estate assets across
						20+ properties.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
					<StrategyCard
						icon={<Target className="h-10 w-10" />}
						title="Target Market and Strategy"
						description="Focused on acquiring high-growth, dental-anchored properties across the Mid-Atlantic, our strategy capitalizes on stable, long-term leases that drive consistent returns."
						gradientFrom="from-primary"
						gradientTo="to-indigo-500"
					/>

					<StrategyCard
						icon={<Users className="h-10 w-10" />}
						title="Proven Leadership Team"
						description="Backed by decades of industry experience, our leadership team has a track record of building and exiting multi-million-dollar ventures, positioning us to deliver superior results."
						gradientFrom="from-blue-500"
						gradientTo="to-cyan-400"
					/>

					<StrategyCard
						icon={<BarChart3 className="h-10 w-10" />}
						title="Compelling Financial Returns"
						description="We target 14-20% annual returns and aim to triple your investment within five years, offering a preferred 8% return before profits are shared."
						gradientFrom="from-green-500"
						gradientTo="to-emerald-400"
					/>

					<StrategyCard
						icon={<Building className="h-10 w-10" />}
						title="Strategic Partnerships"
						description="Our dental partnerships will ensure long-term lease commitments, providing steady income streams and strong asset value growth."
						gradientFrom="from-amber-500"
						gradientTo="to-yellow-400"
					/>

					<StrategyCard
						icon={<Scale className="h-10 w-10" />}
						title="Risk Mitigation and Alignment"
						description="Our waterfall structure prioritizes investors by guaranteeing their preferred return first, and our General Partners co-invest to ensure full alignment of interests."
						gradientFrom="from-purple-500"
						gradientTo="to-violet-400"
					/>

					<StrategyCard
						icon={<Shield className="h-10 w-10" />}
						title="Opportunistic Growth"
						description="With plans to acquire 20 new dental locations and underutilized commercial properties, we are primed to scale and maximize value for our investors."
						gradientFrom="from-rose-500"
						gradientTo="to-pink-400"
					/>
				</div>

				<div className="grid  md:grid-cols-3">
					<MetricCard value="12" label="years experience" gradientFrom="from-primary" gradientTo="to-indigo-600" />
					<MetricCard value="$250M" label="real estate assets" gradientFrom="from-blue-500" gradientTo="to-cyan-500" />
					<MetricCard value="20+" label="properties" gradientFrom="from-indigo-600" gradientTo="to-purple-600" />
				</div>
			</div>
		</section>
	)
}

function StrategyCard({ icon, title, description, gradientFrom, gradientTo }) {
	return (
		<Card className="overflow-hidden relative group transition-all duration-300 hover:shadow-xl border border-white/10 backdrop-blur-sm bg-white/5 dark:bg-black/5">
			{/* Gradient border effect */}
			<div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-br from-white/5 to-white/20 dark:from-white/10 dark:to-white/5"></div>

			{/* Gradient hover effect */}
			<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/10 via-white/5 to-transparent dark:from-white/5 dark:via-white/2 dark:to-transparent"></div>

			<CardContent className="p-6 relative z-10">
				<div
					className={`mb-4 rounded-full w-14 h-14 flex items-center justify-center bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white`}
				>
					{icon}
				</div>
				<h3 className="text-xl font-bold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
					{title}
					<ArrowUpRight className="h-4 w-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
				</h3>
				<p className="text-muted-foreground">{description}</p>
			</CardContent>
		</Card>
	)
}

function MetricCard({ value, label, gradientFrom, gradientTo }) {
	return (
		<div className="relative group overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-transparent"></div>

			{/* Border gradient */}
			<div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-br from-white/20 to-white/5 dark:from-white/10 dark:to-white/5"></div>

			{/* Content */}
			<div className="relative z-10 p-8 text-center backdrop-blur-sm">
				<div
					className={`text-5xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
				>
					{value}
				</div>
				<div className="text-muted-foreground font-medium">{label}</div>
			</div>

			{/* Animated gradient overlay on hover */}
			<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 via-transparent to-transparent dark:from-white/5"></div>
		</div>
	)
}
