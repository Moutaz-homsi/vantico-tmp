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
		<section className="bg-black text-white py-16 px-4">
			<div className="container mx-auto max-w-6xl">
				<h2 className="text-5xl lg:text-6xl font-bold mb-4 tracking-wider">MEET THE TEAM</h2>
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

							<h3 className="text-2xl lg:text-3xl font-bold mb-1">{member.name}</h3>
							<p className="text-gray-400 mb-2">{member.title}</p>

							{expandedMember === member.id && member.bio && (
								<Card className="bg-zinc-900 border-zinc-800 mt-4 mb-4">
									<CardContent className="pt-4">
										<p className="text-gray-300">{member.bio}</p>
									</CardContent>
								</Card>
							)}

							{member.bio && (
								<Button
									variant="ghost"
									className="text-white px-0 justify-start hover:bg-transparent hover:text-gray-300 w-fit"
									onClick={() => {
										toggleExpandMember(member.id)
										if (expandedMember !== member.id) {
											onReadMoreClick(member.id)
										}
									}}
								>
									{expandedMember === member.id ? "Read less" : "Read more"} <ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default MeetTheTeam
