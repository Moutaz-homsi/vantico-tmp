import Title from "@/components/ui/title"
import { Container } from "@/components/layout"
import TenantCarousel from "@/components/ui/carousels/tenant-carousel"

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
}

export default function TenantsSection({ tenants }: TenantsSectionProps) {
	return (
		<Container as="section" id="tenants">
			<div className="max-w-6xl mx-auto flex flex-col gap-6 items-start">
				<Title className="text-2xl">
					A portfolio of high-quality, recession-resistant <span className="text-4xl">220+</span> tenants
					<br />
				</Title>
				<p className="text-[#535353] text-lg leading-[160%]">
					Our properties attract top-tier tenants, ensuring stability, high occupancy rates, and long-term revenue
					growth.
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
