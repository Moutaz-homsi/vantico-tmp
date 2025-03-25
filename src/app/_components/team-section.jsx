"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Mail } from "lucide-react"
import Link from "next/link"

export default function TeamSection({ teamMembers = [] }) {
	const [startIndex, setStartIndex] = useState(0)
	const visibleCount = 4
	const maxStartIndex = Math.max(0, teamMembers.length - visibleCount)

	const nextSlide = () => {
		setStartIndex((prev) => Math.min(prev + 1, maxStartIndex))
	}

	const prevSlide = () => {
		setStartIndex((prev) => Math.max(prev - 1, 0))
	}

	const visibleTeamMembers = teamMembers.slice(startIndex, startIndex + visibleCount)

	return (
		<section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-background to-muted"></div>

			<div className="container px-4 md:px-6 relative z-10">
				<div className="mx-auto max-w-[800px] space-y-4 text-center mb-12 md:mb-16">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Leadership Team</h2>
					<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
						Meet the experienced professionals behind Blue Ridge Capital Fund's success.
					</p>
				</div>

				<div className="relative">
					{/* Navigation buttons */}
					<button
						onClick={prevSlide}
						disabled={startIndex === 0}
						className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground rounded-full p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hidden md:flex"
						aria-label="Previous team members"
					>
						<ChevronLeft className="h-6 w-6" />
					</button>

					<div className="flex flex-wrap justify-center gap-8 md:gap-4 lg:gap-8">
						{visibleTeamMembers.map((member) => (
							<TeamMemberCard
								key={member.id}
								member={{ ...member, name: `${member.first_name} ${member.last_name}` }}
							/>
						))}
					</div>

					<button
						onClick={nextSlide}
						disabled={startIndex >= maxStartIndex}
						className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground rounded-full p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hidden md:flex"
						aria-label="Next team members"
					>
						<ChevronRight className="h-6 w-6" />
					</button>
				</div>

				{/* Mobile navigation */}
				<div className="flex justify-center gap-4 mt-8 md:hidden">
					<Button variant="outline" size="icon" onClick={prevSlide} disabled={startIndex === 0}>
						<ChevronLeft className="h-4 w-4" />
					</Button>
					<Button variant="outline" size="icon" onClick={nextSlide} disabled={startIndex >= maxStartIndex}>
						<ChevronRight className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</section>
	)
}

function TeamMemberCard({ member }) {
	return (
		<div className="flex flex-col items-center max-w-[250px]">
			<div className="relative mb-4 rounded-full border-4 border-primary overflow-hidden w-[140px] h-[140px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px]">
				<Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
			</div>
			<h3 className="text-xl font-bold text-center">{member.name}</h3>
			<p className="text-sm text-muted-foreground text-center mb-2">{member.role}</p>
			<Link
				href={`mailto:${member.email}`}
				className="flex items-center gap-1 text-sm text-primary hover:underline mb-4"
			>
				<Mail className="h-3 w-3" />
				{member.email}
			</Link>
			<Button
				variant="outline"
				className="rounded-full bg-primary/10 hover:bg-primary/20 border-primary/20 text-primary"
			>
				Know more
			</Button>
		</div>
	)
}
