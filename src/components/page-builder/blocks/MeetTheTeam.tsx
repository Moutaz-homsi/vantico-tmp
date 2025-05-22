"use client"
import React, { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, UserRound } from "lucide-react"

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
				<h2 className="text-5xl lg:text-6xl font-secondary mb-4 tracking-tighter">MEET THE TEAM</h2>
				<p className="text-gray-300 mb-12 max-w-2xl">
					Our team of experienced professionals brings diverse expertise in real estate, healthcare, and business
					development.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{members.map((member) => (
						<div key={member.id} className={`flex flex-col ${expandedMember === member.id ? "lg:col-span-2" : ""}`}>
							<div className="h-80 mb-4 relative overflow-hidden">
								<img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale" />
							</div>

							<h3 className="text-3xl mb-1">{member.name}</h3>
							<p className="text-neutral-400 mb-2">{member.title}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default MeetTheTeam
