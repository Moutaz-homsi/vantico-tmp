"use client"
import SectionLabel from "@/components/section-label"
import { Image } from "@/components/ui"
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
		<section id="tenants" className={cn("w-full py-20 bg-white", className)}>
			<div className="  px-4">
				{/* Header */}
				<div className="mb-16 max-w-6xl mx-auto">
					<SectionLabel label={"TENANTS"} />
					<h2 className="text-5xl font-medium tracking-wider uppercase mb-6 leading-tight">
						A PORTFOLIO OF HIGH-QUALITY <br /> RECESSION-RESISTANT <br /> 216+ TENANTS
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl">
						Our properties attract top-tier tenants, ensuring stability, high occupancy rates, and long-term revenue
						growth.
					</p>
				</div>

				<div className="relative w-full   h-[400px]">
					<Image isFill src="/images/tenants-logos.png" alt="Tenants Logos" className="px-20" />
				</div>
				{/* we may need it */}
				{/* Tenant logos grid */}
				{/* <div className="mt-16">
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
				</div> */}
			</div>
		</section>
	)
}
