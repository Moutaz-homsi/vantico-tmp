"use client"
import SectionLabel from "@/components/section-label"
import { Image } from "@/components/ui"
import { Button } from "@/components/ui/button"
import Title from "@/components/ui/title"
import { cn } from "@/utils"
import { getImageUrlFromObject } from "@/utils/image-loader"
import { Fancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox.css"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { ChevronRight } from "lucide-react"
import { Key, SetStateAction, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import { AspectRatio } from "@/components/ui/aspect-ratio"

Fancybox.defaults.Hash = false

interface Property {
	id: Key | null | undefined
	image?: {
		url?: string
		alt?: string
	} | null
}

interface PropertyTourProps {
	properties: Property[]
}

const PropertyTour = ({ properties }: PropertyTourProps) => {
	return (
		<section id="tour" className="bg-black text-white py-20 px-4">
			<div className="container mx-auto max-w-6xl">
				{/* <div className="text-center">
					<SectionLabel label={"QUICK PROPERTY TOUR"} variant="dark" />
				</div> */}

				<Title className="text-2xl text-white text-center mt-6 mb-12">
					A glimpse into some
					<br />
					of our assets
				</Title>

				<Carousel
					opts={{
						align: "center",
						loop: true, // Prevent scrolling from last to first
						containScroll: "trimSnaps"
					}}
					plugins={[
						Autoplay({
							delay: 2000,
							stopOnMouseEnter: true,
							stopOnInteraction: false
						})
					]}
					style={
						{
							// maskImage: "linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,1) 20%,rgba(0,0,0,0))",
							// WebkitMaskImage: "linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,1) 20%,rgba(0,0,0,0))"
						}
					}
					className="w-full overflow-hidden"
				>
					<CarouselContent
						className="touch-pan-y touch-pinch-zoom -ml-4
             [transform:translate3d(0,0,0)] flex items-center "
					>
						{properties.map((property) => {
							return (
								<CarouselItem key={property.id} className={`flex-[0_0_70%] min-w-0 pl-4`} onClick={() => {}}>
									<div className={cn("relative ")}>
										<AspectRatio ratio={16 / 10}>
											<Image
												isFill
												src={property.image?.url}
												strapiImage={property.image as any}
												alt={property.image?.alt || "Property image"}
												className="object-cover pointer-events-none select-none rounded"
											/>
										</AspectRatio>
									</div>
								</CarouselItem>
							)
						})}
					</CarouselContent>
					<div className="">
						<CarouselPrevious className="left-2 bg-black/30 size-16 p-5 [&_svg:not([class*='size-'])]:size-8" />
						<CarouselNext className="right-2 bg-black/30 p-5 size-16 [&_svg:not([class*='size-'])]:size-8" />
					</div>
				</Carousel>
				{/* 
				<div className="mt-10 md:mt-20 relative">
					<div className="flex gap-4 w-full">
						{properties?.length > 0
							? properties?.map((property: Property, index: number) => {
									const isSelected = index === selected
									const width = isSelected ? "66%" : "17%"
									// const width = "100%"

									return (
										<div
											key={property.id}
											onClick={() => {
												setSelected(index)
											}}
											style={{
												width,
												transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)"
											}}
											className={cn(
												"h-[350px] md:h-[500px] relative",
												"hover:cursor-pointer hover:opacity-90 transition-all duration-100",
												index > 2 ? "hidden" : "block"
											)}
										>
											<a
												key={property.id}
												data-fancybox="tour"
												href={getImageUrlFromObject({ fileObject: property.image })}
												style={{
													width
												}}
												className={cn("hidden")}
											></a>
											{property.image && (
												<Image
													isFill
													src={property.image.url || ""}
													alt={property.image.alt || "Property image"}
													className="object-cover select-none"
												/>
											)}
										</div>
									)
							  })
							: null}
					</div>
				</div> */}

				{/* <div className="flex justify-center mt-6 md:mt-10">
					<a data-fancybox-trigger="tour">
						<Button onClick={() => {}}>
							Explore more opportunities <ChevronRight className="ml-2" />
						</Button>
					</a>
				</div> */}
			</div>
		</section>
	)
}

export default PropertyTour
