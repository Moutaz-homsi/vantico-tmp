"use client"

import React from "react"
import Container from "@/components/layout/container"
import Image from "@/components/ui/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function AboutUsSection({
	sectionTitle,
	headingStart,
	headingBold,
	headingEnd,
	description,
	partnerLogos,
	trustedByText
}) {
	const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false }))

	return (
		<Container className={"pt-28 pb-14 w-[95%] shadow-md"}>
			{sectionTitle && <p className="uppercase tracking-widest mb-8 text-xl font-extralight">{sectionTitle}</p>}
			<div className="mb-24 grid gap-x-28 grid-cols-[1.2fr_1fr]">
				<h2 className="text-[4rem] font-extralight grow leading-[110%]">
					{headingStart} <span className="font-normal">{headingBold}</span> {headingEnd}
				</h2>
				<p className="text-xl font-normal leading-[140%]">{description}</p>
			</div>
			{partnerLogos?.length > 0 && (
				<div className="flex items-center gap-x-20">
					<p className="text-title text-lg font-normal leading-[140%] whitespace-nowrap">{trustedByText}</p>
					<Carousel
						opts={{
							align: "start",
							loop: true,
							dragFree: true
						}}
						plugins={[plugin.current]}
						className="w-full"
					>
						<CarouselContent className="-ml-4">
							{[...partnerLogos, ...partnerLogos].map((logo, index) => (
								<CarouselItem key={index} className="pl-24 flex-[0_0_auto]">
									<div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
										<Image
											src={logo.url}
											strapiImage={logo}
											width={200}
											height={60}
											className="object-contain h-12 w-auto"
											alt={`Partner logo ${index + 1}`}
										/>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			)}
		</Container>
	)
}
