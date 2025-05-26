"use client"
import React, { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronRight, UserRound } from "lucide-react"
import Link from "next/link"
import Title from "@/components/ui/title"

interface MeetTheTeamProps {
	members: []
	onReadMoreClick: (memberId: number) => void
}

const MeetTheTeam = ({ members, onReadMoreClick }: MeetTheTeamProps) => {
	const [expandedMember, setExpandedMember] = useState<number | null>(-1) // Default to show Dr. Anas Bakour's bio

	const toggleExpandMember = (id: number) => {
		return
		setExpandedMember(expandedMember === id ? null : id)
	}

	return (
		<section id="team" className="bg-black text-white py-40 px-4">
			<div className="container mx-auto max-w-6xl">
				<Title className="mb-4 text-white">Meet the team</Title>
				<p className="text-[#ABABAB] text-2xl leading-[160%] mt-6 max-w-2xl">
					Lorem ipsum dolor sit amet consectetur adisplicing elit
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-y-11">
					{members.map((member) => (
						<div key={member.id} className="flex flex-col group transition-all duration-300 relative bg-transparent">
							<div className="h-100 mb-10 relative overflow-hidden ">
								<img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale" />
								{/* Overlay for bio on hover */}

								<div className="absolute inset-0 bg-black bg-opacity-95 flex flex-col justify-between opacity-0  group-hover:opacity-100 transition-opacity duration-300 p-8">
									<p className="text-xl !leading-[140%] text-white mb-8 line-clamp-6">{member.bio}</p>
									<Link
										href={`/team/${member.id}`}
										className="text-xl text-white hover:text-primary self-end flex items-center gap-2 transition-colors"
									>
										Read more <ChevronRight className="ml-3" size={18} />
									</Link>
								</div>
							</div>

							<h3 className="text-3xl mb-2">{member.name}</h3>
							<p className="text-[#ABABAB] pr-4">{member.title}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default MeetTheTeam
