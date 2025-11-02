import Title from "@/components/ui/title"
import { Container } from "@/components/layout"
import TenantCarousel from "@/components/ui/carousels/tenant-carousel"
import { cn } from "@/utils"

export interface Tenant {
	name: string
	logo: string
	url?: string
	alt?: string
}

interface TenantsSectionProps {
	// title?: string
	// subtitle?: string
	// description?: string
	// tenantCount?: string
	tenants?: { first_row_images: Tenant[]; second_row_images: Tenant[]; third_row_images: Tenant[] }
	hide_pattern?: boolean
	className?: string
}

export default function TenantsSection({ tenants, hide_pattern, className }: TenantsSectionProps) {
	return (
		<Container as="section" id="tenants" 
		{...(hide_pattern ? { pattern: "hidden" } : {})}
		className={cn("px-0" ,className)}>
			<div className="max-w-6xl mx-auto flex flex-col gap-6 items-start px-6 md:px-0">
				<Title className="text-2xl">
					Diversified Portfolio with <span className="text-4xl">220+</span> High-Quality Tenants
					<br />
				</Title>
				<p className="text-[#535353] text-lg leading-[160%] sub-title">
					Our assets are leased to recession resilient and creditworthy tenants including private equity backed operators in healthcare and essential services. This structure supports stable cash flow and long term value.
				</p>
			</div>
			<div className="max-w-7xl mt-20 mx-auto flex flex-col ">
				<TenantCarousel images={tenants?.first_row_images || []} />
				<TenantCarousel images={tenants?.second_row_images || []} />
				<TenantCarousel images={tenants?.third_row_images || []} />
			</div>
		</Container>
	)
}
