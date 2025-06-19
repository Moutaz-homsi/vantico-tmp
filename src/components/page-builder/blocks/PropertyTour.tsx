"use client"
import SectionLabel from "@/components/section-label"
import { Image } from "@/components/ui"
import { Button } from "@/components/ui/button"
import Title from "@/components/ui/title"
import { cn } from "@/utils"
import { getImageUrlFromObject } from "@/utils/image-loader"
import { Fancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox.css"
import { ChevronRight } from "lucide-react"
import { useState } from "react"

Fancybox.defaults.Hash = false

const PropertyTour = ({ properties }) => {
	const [selected, setSelected] = useState(0)
	return (
		<section id="tour" className="bg-black text-white pb-20 md:pb-40 px-4">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center">
					<SectionLabel label={"QUICK PROPERTY TOUR"} variant="dark" />
				</div>

				<Title className="text-2xl text-white text-center mt-6 leading-[100%] ">
					A glimpse into some
					<br />
					of our prime assets
				</Title>

				<div className="mt-10 md:mt-20 relative">
					<div className="flex gap-4 w-full">
						{properties.map((property, index) => {
							const isSelected = index === selected
							const width = isSelected ? "66%" : "17%"
							// const width = "100%"

							return (
								<a
									key={property.id}
									data-fancybox="tour"
									href={getImageUrlFromObject({ fileObject: property.image })}
									style={{
										width
									}}
									className={cn("h-[350px] md:h-[500px] relative", index > 2 ? "hidden" : "block")}
								>
									<Image
										isFill
										strapiImage={property.image}
										src={property.image?.url}
										alt={property.image?.alt}
										className="object-cover "
									/>
								</a>
							)
						})}
					</div>
				</div>

				<div className="flex justify-center mt-6 md:mt-10">
					<a data-fancybox-trigger="tour">
						<Button onClick={() => {}}>
							Explore more opportunities <ChevronRight className="ml-2" />
						</Button>
					</a>
				</div>
			</div>
		</section>
	)
}

export default PropertyTour
