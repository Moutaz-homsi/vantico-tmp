"use client"
import SectionLabel from "@/components/section-label"
import { Image } from "@/components/ui"
import Title from "@/components/ui/title"
import { cn } from "@/utils"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import TenantCarousel from "../../ui/carousels/tenant-carousel"
import CssCarousel from "@/components/ui/carousels/css-caroucel"

export interface Ecosystem {
	name: string
	logo: string
	url?: string
	alt?: string
}

interface EcosystemSectionProps {
	title?: string
	subtitle?: string
	description?: string
	tenantCount?: string
	slides?: { first_slider: Ecosystem[]; second_slider: Ecosystem[]; third_slider: Ecosystem[] }
	className?: string
}

export default function EcosystemSection({ slides, className }: EcosystemSectionProps) {
	return (
		// border-b-2 border-b-amber-50
		<section id="ecosystem" className={cn("w-full pt-10 lg:pt-18", className)}>
			<div className="px-4 max-w-6xl mx-auto">
				<div className="flex flex-col gap-6 items-center text-center">
					<Title className="text-2xl">A Proven Ecosystem of Excellence</Title>
					<p className="">
						A network of elite partners ensures credibility, seamless operations, and consistent investment success. <br/>we are proud to collaborate with a distinguished network of:
					</p>
				</div>
				<div className="mt-10 flex flex-col">
					<CssCarousel data={slides?.first_slider || []} />
					<CssCarousel data={slides?.second_slider || []} />
					<CssCarousel data={slides?.third_slider || []} />
				</div>
				<div className="mt-4 mb-4">
					<div className="col-span-12 text-xs text-gray-400">
						Logos displayed represent institutions and counterparties with whom VANTICO or its affiliates have engaged
						in various business transactions, partnerships, or professional relationships. Inclusion does not imply an
						endorsement or ongoing commercial relationship unless explicitly stated.
					</div>
				</div>
			</div>
		</section>
	)
}
