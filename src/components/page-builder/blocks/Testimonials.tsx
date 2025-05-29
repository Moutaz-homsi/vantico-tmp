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

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: "Muhammad W. Ahmad",
		title: "CEO of Company Name",
		quote:
			"I've been investing in real estate for the past year now. The improvement is constant. I collect my monthly dividends and have invested in different properties. It's easy, accessible, and very transparent. Highly recommended.",
		image: "/mock/team1.png"
	},
	{
		id: 2,
		name: "Dakota Woods",
		title: "Head of Company Name",
		quote:
			"The platform exceeded our expectations. We've seen remarkable returns on our investments with minimal effort. The transparency and ease of use make it a standout choice for anyone looking to diversify their portfolio.",
		image: "/mock/team2.jpg"
	},
	{
		id: 3,
		name: "William Nelson",
		title: "CTO of Company Name",
		quote:
			"As someone who values technological efficiency, I'm impressed with how seamlessly everything works. The reporting tools and dashboard provide all the insights we need, and the customer service has been exceptional throughout our partnership.",
		image: "/mock/team3.jpg"
	}
]

const Testimonials = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	const handlePrev = () => {
		setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
	}

	const handleNext = () => {
		setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
	}

	return (
		<section id="testimonials" className="bg-black text-white pb-20 md:pb-40 px-4 xl:px-0">
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
									<Image isFill src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
								</div>
								<div className="flex flex-col gap-3 py-2">
									<h3 className="text-lg md:text-2xl">{testimonial.name}</h3>
									<p className="text-[#ABABAB] text-md md:text-lg">{testimonial.title}</p>
								</div>
							</div>
						))}
					</div>

					<div className="col-span-3">
						<blockquote className="text-2xl md:text-3xl leading-[160%]  pt-4">
							"{testimonials[activeIndex].quote}"
						</blockquote>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
