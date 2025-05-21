"use client"
import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/utils"

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
		image: "/lovable-uploads/de967a1d-c552-4828-bd93-d40c65f9cc2d.png"
	},
	{
		id: 2,
		name: "Dakota Woods",
		title: "Head of Company Name",
		quote:
			"The platform exceeded our expectations. We've seen remarkable returns on our investments with minimal effort. The transparency and ease of use make it a standout choice for anyone looking to diversify their portfolio.",
		image: "/lovable-uploads/de967a1d-c552-4828-bd93-d40c65f9cc2d.png"
	},
	{
		id: 3,
		name: "William Nelson",
		title: "CTO of Company Name",
		quote:
			"As someone who values technological efficiency, I'm impressed with how seamlessly everything works. The reporting tools and dashboard provide all the insights we need, and the customer service has been exceptional throughout our partnership.",
		image: "/lovable-uploads/de967a1d-c552-4828-bd93-d40c65f9cc2d.png"
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
		<section className="bg-black text-white py-16 px-4 md:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="mb-12">
					<div className="inline-block bg-[#1A1A1A] rounded-lg px-4 py-2 mb-6">
						<span className="text-amber-500 font-medium">TESTIMONIALS</span>
					</div>
					<h2 className="text-4xl md:text-6xl font-bold tracking-wider uppercase">TRUSTED BY ELITE PARTNERS</h2>
				</div>

				<div className="grid md:grid-cols-3 gap-8 items-center">
					<div className="col-span-1 space-y-6">
						{testimonials.map((testimonial, index) => (
							<div
								key={testimonial.id}
								className={cn(
									"flex items-center gap-4 p-4 transition-all duration-300",
									activeIndex === index ? "opacity-100" : "opacity-40 hover:opacity-70 cursor-pointer"
								)}
								onClick={() => setActiveIndex(index)}
							>
								<div className="h-16 w-16 rounded-lg overflow-hidden">
									<img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
								</div>
								<div>
									<h3 className="font-semibold text-xl">{testimonial.name}</h3>
									<p className="text-gray-400">{testimonial.title}</p>
								</div>
							</div>
						))}
					</div>

					<div className="col-span-2">
						<div className="bg-[#111111] p-6 md:p-8 rounded-2xl">
							<blockquote className="text-xl md:text-3xl font-light mb-6">
								"{testimonials[activeIndex].quote}"
							</blockquote>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-4">
									<div className="h-12 w-12 rounded-lg overflow-hidden md:hidden">
										<img
											src={testimonials[activeIndex].image}
											alt={testimonials[activeIndex].name}
											className="h-full w-full object-cover"
										/>
									</div>
									<div className="md:hidden">
										<h3 className="font-semibold">{testimonials[activeIndex].name}</h3>
										<p className="text-gray-400 text-sm">{testimonials[activeIndex].title}</p>
									</div>
								</div>
								<div className="flex gap-2">
									<button
										onClick={handlePrev}
										className="p-2 rounded-full border border-gray-700 hover:bg-gray-800"
										aria-label="Previous testimonial"
									>
										<ChevronLeft size={20} />
									</button>
									<button
										onClick={handleNext}
										className="p-2 rounded-full border border-gray-700 hover:bg-gray-800"
										aria-label="Next testimonial"
									>
										<ChevronRight size={20} />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
