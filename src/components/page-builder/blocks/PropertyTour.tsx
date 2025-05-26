"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import SectionLabel from "@/components/section-label"
import { cn } from "@/utils"
import { Image } from "@/components/ui"

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
	const [selected, setSelected] = useState(0)
	return (
		<section id="tour" className="bg-black text-white py-16 px-4">
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
					<div className="hidden md:block flex gap-4 w-full" style={{ height: 500 }}>
						{images.slice(0, 3).map((image, index) => {
							const isSelected = index === selected
							// 66% for selected, 17% for others (total 100%)
							const width = isSelected ? "66%" : "17%"
							return (
								<div
									key={index}
									onClick={() => setSelected(index)}
									className={cn(
										"relative rounded-sm overflow-hidden hover:cursor-pointer hover:opacity-90 transition-all duration-100",
										isSelected ? "z-10" : "z-0"
									)}
									style={{
										width,
										transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)"
									}}
								>
									<div className="relative w-full h-[500px]">
										<Image isFill src={image.url} alt={image.alt} className="object-cover " />
									</div>
								</div>
							)
						})}
					</div>
					{/* WE MAY NEED THIS FOR MOBILE */}
					<Carousel
						opts={{
							align: "start",
							loop: true
						}}
						className="w-full md:hidden"
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
						{/* <div className="md:hidden ">
							<CarouselPrevious className="left-0 bg-black/30" />
							<CarouselNext className="right-0 " />
						</div> */}
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
