"use client"
import SectionLabel from "@/components/section-label"
import { Image } from "@/components/ui"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Title from "@/components/ui/title"
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
		<section id="tenants" className={cn("w-full py-30 bg-white", className)}>
			<div className="  px-4">
				{/* Header */}
				<div className="max-w-6xl mx-auto flex flex-col gap-6 items-start">
					<SectionLabel label={"TENANTS"} />
					<Title className="">
						A portfolio of high-quality,
						<br /> recession-resistant <br /> 216+ tenants
					</Title>
					<p className="text-[#535353] text-lg leading-[160%]  max-w-xl">
						Our properties attract top-tier tenants, ensuring stability, high occupancy rates, and long-term revenue
						growth.
					</p>
				</div>

				<div className="relative  mt-10 md:mt-20 w-full h-[200px] md:h-[400px]">
					<Image isFill src="/images/tenants-logos.png" alt="Tenants Logos" className="object-contain " />
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
