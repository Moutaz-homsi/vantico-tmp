"use client"
import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/utils"
import SectionLabel from "@/components/section-label"
import { Image } from "@/components/ui"

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
		<section id="testimonials" className="bg-black text-white pb-20 px-4 md:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="mb-12">
					<SectionLabel label="Testimonials" variant="dark" />
					<h2 className="text-4xl md:text-6xl uppercase mt-6">TRUSTED BY ELITE PARTNERS</h2>
				</div>

				<div className="grid md:grid-cols-5 gap-4">
					<div className="col-span-2 space-y-6">
						{testimonials.map((testimonial, index) => (
							<div
								key={testimonial.id}
								className={cn(
									"flex items-center gap-4 p-4 transition-all duration-300",
									activeIndex === index ? "opacity-100" : "opacity-40 hover:opacity-70 cursor-pointer"
								)}
								onClick={() => setActiveIndex(index)}
							>
								<div className="h-16 w-16 relative rounded-sm overflow-hidden">
									<Image isFill src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
								</div>
								<div className="flex flex-col gap-3">
									<h3 className="font-semibold text-xl">{testimonial.name}</h3>
									<p className="text-gray-400">{testimonial.title}</p>
								</div>
							</div>
						))}
					</div>

					<div className="col-span-3">
						<blockquote className="text-3xl leading-relaxed  pt-4">"{testimonials[activeIndex].quote}"</blockquote>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
