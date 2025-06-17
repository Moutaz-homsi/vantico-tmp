"use client"
import SectionLabel from "@/components/section-label"
import { Image } from "@/components/ui"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Title from "@/components/ui/title"
import { cn } from "@/utils"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

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
				<div className="max-w-7xl mt-20 mx-auto flex flex-col ">
					<LogosCarousel images={tenants.first_row_images || []} />
					<LogosCarousel images={tenants.second_row_images || []} direction="rtl" />
					<LogosCarousel images={tenants.third_row_images || []} />
				</div>
			</div>
		</section>
	)
}

function LogosCarousel({ images, direction = "ltr" }) {
	return (
		<Carousel
			opts={{
				align: "start",
				direction,
				loop: true // Prevent scrolling from last to first
			}}
			plugins={[
				Autoplay({
					delay: 2000,
					stopOnMouseEnter: true,
					stopOnInteraction: false
				})
			]}
			style={{
				maskImage: "linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,1) 20%,rgba(0,0,0,0))"
			}}
			className="w-full"
		>
			<CarouselContent dir={direction} className="  flex items-center ">
				{/* <span className="text-2xl font-light text-gray-300">Trusted by</span> */}
				{images.map((item) => {
					return (
						<CarouselItem key={item.id} className={`basis-1/3 md:basis-1/6`} onClick={() => {}}>
							{/* <p className="text-white">{item.id}</p> */}
							<div
								className={cn(
									"relative w-full h-32 "
									// effects
									// "grayscale opacity-40 hover:grayscale-0 hover:bg-white hover:opacity-100"
								)}
							>
								<Image
									isFill
									src={item.url}
									strapiImage={item}
									alt={item.alt}
									className="object-contain pointer-events-none select-none"
								/>
							</div>
						</CarouselItem>
					)
				})}
			</CarouselContent>
			{/* <div className="md:hidden ">
							<CarouselPrevious className="left-0 bg-black/30" />
							<CarouselNext className="right-0 " />
						</div> */}
		</Carousel>
	)
}