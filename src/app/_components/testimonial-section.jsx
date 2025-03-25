"use client"

import { useState } from "react"
import { Button, Card, CardContent } from "@/components/ui"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
import getNotfoundImaUrl from "@/components/not-found-img"

export default function TestimonialSection({ testimonials = [] }) {
	const [activeIndex, setActiveIndex] = useState(0)
	const itemsPerPage = 3
	const totalPages = Math.ceil(testimonials.length / itemsPerPage)

	const nextSlide = () => {
		setActiveIndex((prev) => (prev + 1) % totalPages)
	}

	const prevSlide = () => {
		setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages)
	}

	const visibleTestimonials = testimonials.slice(activeIndex * itemsPerPage, (activeIndex + 1) * itemsPerPage)

	return (
		<section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-muted to-background"></div>

			{/* Decorative elements */}
			<div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-[100px]"></div>
			<div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-blue-500/5 blur-[100px]"></div>
			<div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-primary/20 blur-sm animate-float animate-pulse-slow"></div>
			<div
				className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-blue-400/20 blur-sm animate-float animate-pulse-slow"
				style={{ animationDelay: "1.5s" }}
			></div>

			<div className="container px-4 md:px-6 relative z-10">
				<div className="mx-auto max-w-[800px] space-y-4 text-center mb-12 md:mb-16">
					<div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
						Client Success Stories
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Investors Say</h2>
					<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
						Hear from our satisfied investors about their experience with Blue Ridge Capital Fund.
					</p>
				</div>

				<div className="relative">
					{/* Navigation buttons */}
					<div className="absolute -top-16 right-0 flex space-x-2 md:space-x-4">
						<Button
							variant="outline"
							size="icon"
							onClick={prevSlide}
							className="h-10 w-10 rounded-full border-primary/20 bg-background hover:bg-primary/10"
							aria-label="Previous testimonials"
						>
							<ChevronLeft className="h-5 w-5" />
						</Button>
						<Button
							variant="outline"
							size="icon"
							onClick={nextSlide}
							className="h-10 w-10 rounded-full border-primary/20 bg-background hover:bg-primary/10"
							aria-label="Next testimonials"
						>
							<ChevronRight className="h-5 w-5" />
						</Button>
					</div>

					{/* Testimonials grid */}
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{visibleTestimonials.map((testimonial) => (
							<TestimonialCard key={testimonial.id} testimonial={testimonial} />
						))}
					</div>

					{/* Pagination indicators */}
					<div className="flex justify-center space-x-2 mt-8">
						{Array.from({ length: totalPages }).map((_, index) => (
							<button
								key={index}
								onClick={() => setActiveIndex(index)}
								className={`h-2 w-2 rounded-full transition-all ${
									activeIndex === index ? "bg-primary w-6" : "bg-primary/30"
								}`}
								aria-label={`Go to page ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

function TestimonialCard({ testimonial }) {
	return (
		<Card className="overflow-hidden relative group transition-all duration-300 hover:shadow-lg border border-primary/10 bg-background">
			<CardContent className="p-6 relative z-10">
				<div className="mb-6 text-primary">
					<Quote className="h-10 w-10 rotate-180 opacity-80" />
				</div>

				<p className="text-muted-foreground mb-6 italic">"{testimonial.comment}"</p>

				<div className="flex items-center gap-4">
					<div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
						<Image
							src={testimonial.image?.url || getNotfoundImaUrl()}
							alt={testimonial.user_name}
							fill
							className="object-cover"
						/>
					</div>
					<div>
						<h4 className="font-semibold">{testimonial.user_name}</h4>
						{/* <p className="text-sm text-muted-foreground">{testimonial.title}</p> */}
					</div>
				</div>

				<div className="absolute top-6 right-6 flex">
					{Array.from({ length: 5 }).map((_, i) => (
						<svg
							key={i}
							className={`h-5 w-5 ${i < testimonial.rating ? "text-primary" : "text-muted"}`}
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
					))}
				</div>
			</CardContent>
		</Card>
	)
}
