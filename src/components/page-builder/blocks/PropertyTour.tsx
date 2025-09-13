"use client"
import { Image } from "@/components/ui"
import Title from "@/components/ui/title"
import { cn } from "@/utils"
import { Fancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox.css"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Key } from "react"
import Autoplay from "embla-carousel-autoplay"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Container } from "@/components/layout"

Fancybox.defaults.Hash = false

export interface Property {
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
		<section id="tour" className="bg-black text-white">
			<Container>
				<div className="container mx-auto max-w-6xl">
					<Title className="text-2xl text-white text-center mt-6 mb-12">A glimpse into some of our assets</Title>
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
				</div>
			</Container>
		</section>
	)
}

export default PropertyTour
