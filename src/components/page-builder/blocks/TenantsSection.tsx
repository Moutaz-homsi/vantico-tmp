"use client"
import { cn } from "@/utils"

export interface Tenant {
	name: string
	logo: string
}

interface TenantsSectionProps {
	title?: string
	subtitle?: string
	description?: string
	tenantCount?: string
	tenants?: Tenant[]
	className?: string
}

export default function TenantsSection({
	title = "A PORTFOLIO OF HIGH-QUALITY, RECESSION-RESISTANT",
	subtitle = "TENANTS",
	description = "Our properties attract top-tier tenants, ensuring stability, high occupancy rates, and long-term revenue growth.",
	tenantCount = "216+",
	tenants = [],
	className
}: TenantsSectionProps) {
	return (
		<section className={cn("w-full py-20 bg-white", className)}>
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="max-w-4xl mb-16">
					<div className="inline-block text-amber-700 font-medium mb-6">{subtitle}</div>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-wider uppercase mb-6 leading-tight">
						{title} <br /> {tenantCount} {subtitle}
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl">{description}</p>
				</div>

				{/* Tenant logos grid */}
				<div className="mt-16">
					{tenants.length > 0 && (
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
							{tenants.map((tenant, index) => (
								<div key={index} className="flex items-center justify-center p-4 h-16">
									<img
										src={tenant.logo || "/placeholder.svg"}
										alt={`${tenant.name} logo`}
										className="max-h-full max-w-full object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
									/>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
