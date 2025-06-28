"use client"
import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/utils"
import SectionLabel from "@/components/section-label"
import { Image } from "@/components/ui"
import Title from "@/components/ui/title"

interface Testimonial {
	id: number
	name: string
	title: string
	quote: string
	image: string
}

 

const Testimonials = ({ testimonials }) => {
	const [activeIndex, setActiveIndex] = useState(0)

	const handlePrev = () => {
		setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
	}

	const handleNext = () => {
		setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
	}

	return (
		<section id="testimonials" className="bg-black text-white pt-12 md:pt-0 pb-20 md:pb-40 px-4 xl:px-0">
			<div className="max-w-7xl mx-auto">
				<div className="mb-8 md:mb-20">
					<SectionLabel label="Testimonials" variant="dark" />
					<Title className="mt-4 md:mt-6 text-white">Trusted by elite partners</Title>
				</div>

				<div className="grid lg:grid-cols-5 gap-4">
					<div className="col-span-2 space-y-4 md:space-y-8">
						{testimonials.map((testimonial, index) => (
							<div
								key={testimonial.id}
								className={cn(
									"flex items-center gap-4 transition-all duration-300",
									activeIndex === index ? "opacity-100" : "opacity-40 hover:opacity-70 cursor-pointer"
								)}
								onClick={() => setActiveIndex(index)}
							>
								<div className="h-18 w-18 relative rounded-xs overflow-hidden">
									<Image
										isFill
										strapiImage={testimonial.avatar}
										src={testimonial.avatar?.url}
										alt={testimonial.author}
										className="h-full w-full object-cover"
									/>
								</div>
								<div className="flex flex-col gap-3 py-2">
									<h3 className="text-lg md:text-2xl">{testimonial.author}</h3>
									<p className="text-[#ABABAB] text-md md:text-lg">{testimonial.author_role}</p>
								</div>
							</div>
						))}
					</div>

					<div className="col-span-3">
						<blockquote className="text-2xl md:text-3xl leading-[160%]  pt-4">
							"{testimonials[activeIndex].comment}"
						</blockquote>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
