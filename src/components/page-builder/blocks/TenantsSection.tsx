"use client"
import SectionLabel from "@/components/section-label"
import { Image } from "@/components/ui"
import Title from "@/components/ui/title"
import { cn } from "@/utils"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import TenantCarousel from "../../ui/carousels/tenant-carousel"

export interface Tenant {
	name: string
	logo: string
	url?: string
	alt?: string
}

interface TenantsSectionProps {
	title?: string
	subtitle?: string
	description?: string
	tenantCount?: string
	tenants?: { first_row_images: Tenant[]; second_row_images: Tenant[]; third_row_images: Tenant[] }
	className?: string
}

export default function TenantsSection({ tenants, className }: TenantsSectionProps) {
	return (
		<section id="tenants" className={cn("w-full py-10 lg:py-30 bg-white", className)}>
			<div className="  px-4">
				<div className="max-w-6xl mx-auto flex flex-col gap-6 items-start">
					{/* <SectionLabel label={"TENANTS"} /> */}
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
					<TenantCarousel images={tenants?.first_row_images || []}/>
					<TenantCarousel images={tenants?.second_row_images || []}/>
					<TenantCarousel images={tenants?.third_row_images || []}/>
				</div>
			</div>
		</section>
	)
}
