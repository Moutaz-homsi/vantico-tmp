"use client"
import { Button, Image } from "@/components/ui"
import Title from "@/components/ui/title"
import { useModal } from "@/hooks/use-model"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface MeetTheTeamProps {
	members: []
	onReadMoreClick: (memberId: number) => void
}

const MeetTheTeam = ({ members, onReadMoreClick }: MeetTheTeamProps) => {
	const [expandedMember, setExpandedMember] = useState<number | null>(-1) // Default to show Dr. Anas Bakour's bio
	const { open } = useModal()
	const handleCardClick = (id: number) => {
		// Only trigger on touch devices
		if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
			setExpandedMember(expandedMember === id ? null : id)
		}
	}

	return (
		<section id="team" className="bg-black text-white py-10 md:py-40 px-4">
			<div className="container mx-auto max-w-7xl">
				<Title className="text-white font-secondary">Meet the team</Title>
				<p className="text-neutral-400 text-lg md:text-2xl leading-[160%] mt-2 md:mt-6 max-w-2xl">
					Lorem ipsum dolor sit amet consectetur adisplicing elit
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-8 md:mt-20  gap-y-4 md:gap-y-11">
					{members.map((member) => (
						<div
							key={member.id}
							className="flex flex-col group transition-all duration-300 relative bg-transparent"
							onClick={() => handleCardClick(member.id)}
						>
							<div className="mb-2 md:mb-4 relative overflow-hidden ">
								{/* Use custom Image component as per your guide */}
								<div className="relative w-full h-[440px]">
									<Image
										strapiImage={member.image}
										src={member.image?.url}
										alt={member.name}
										isFill
										className="object-cover grayscale"
									/>
								</div>
								{/* Overlay for bio on hover or mobile tap */}
								<div
									className={`
                                        absolute inset-0 bg-neutral-950 bg-opacity-95 flex flex-col justify-between
                                        transition-opacity duration-300 p-8
                                        ${expandedMember === member.id ? "opacity-100" : "opacity-0"}
                                        group-hover:opacity-100
                                        ${expandedMember === member.id ? "pointer-events-auto" : "pointer-events-none"}
                                        group-hover:pointer-events-auto
                                    `}
								>
									<p className="text-lg md:text-xl !leading-[140%] text-white mb-8 line-clamp-6">{member.bio}</p>
									<Button
										variant="text"
										onClick={() => {
											open({
												title: `About ${member.name}`,
												children: member.bio
												// children:
												// 	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. end"
											})
										}}
										className="self-end  gap-2 transition-colors"
									>
										Read more <ChevronRight size={18} />
									</Button>
								</div>
							</div>
							<h3 className="text-3xl mb-2">{member.name}</h3>
							<p className="text-neutral-400 pr-4">{member.role}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default MeetTheTeam
