"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import SectionLabel from "@/components/section-label"

interface PropertyImage {
	id: number
	url: string
	alt: string
}

interface PropertyTourProps {
	images: PropertyImage[]
	onCtaClick: () => void
}

const PropertyTour = ({ images, onCtaClick }: PropertyTourProps) => {
	return (
		<section className="bg-black text-white py-16 px-4">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-4">
					<SectionLabel label={"QUICK PROPERTY TOUR"} variant="dark" />
				</div>

				<h2 className="text-4xl md:text-5xl lg:text-6xl  text-center mb-16 uppercase">
					A GLIMPSE INTO SOME
					<br />
					OF OUR PRIME ASSETS
				</h2>

				<div className="mb-12 relative">
					<Carousel
						opts={{
							align: "start",
							loop: true
						}}
						className="w-full"
					>
						<CarouselContent>
							{images.map((image) => (
								<CarouselItem key={image.id} className="basis-full md:basis-1/2 lg:basis-1/3 pl-0 md:pl-4">
									<div className="aspect-square md:aspect-[4/5] h-full">
										<img src={image.url} alt={image.alt} className="w-full h-full object-cover rounded-md" />
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<div className="hidden md:block">
							<CarouselPrevious className="left-0" />
							<CarouselNext className="right-0" />
						</div>
					</Carousel>
				</div>

				<div className="flex justify-center">
					<Button onClick={onCtaClick}>
						Explore more opportunities <ChevronRight className="ml-2" />
					</Button>
				</div>
			</div>
		</section>
	)
}

export default PropertyTour
