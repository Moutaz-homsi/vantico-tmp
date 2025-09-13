"use client"
import { Container } from "@/components/layout"
import { Image } from "@/components/ui"
import { getResponsiveGridClasses } from "@/utils/grid-utils"

interface TeamMember {
	id: number
	name: string
	role: string
	bio?: string
	rank?: number
	image?: {
		url: string
		width?: number
		height?: number
		alternativeText?: string
	}
}

interface MeetTheTeamProps {
	members: TeamMember[]
}

const MeetTheTeam = ({ members }: MeetTheTeamProps) => {
	return (
		<Container id="team" className="">
			<div className="container mx-auto max-w-7xl">
				<div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-y-8 md:gap-y-12 gap-x-4 md:gap-x-8 justify-items-center">
					{members.map((member, index) => (
						<div
							key={index}
							className={`flex flex-col items-center w-full text-center ${getResponsiveGridClasses(
								index,
								members.length
							)}`}
						>
							<div className="relative w-full h-[440px] mb-4 rounded-2xl overflow-hidden">
								<Image
									src={member.image?.url || "/images/avatar-placeholder.jpg"}
									alt={member.name}
									isFill
									className="object-cover object-top"
								/>
							</div>
							<h3 className="text-2xl md:text-3xl mb-2 font-medium">{member.name}</h3>
							<p className=" text-lg">{member.role}</p>
						</div>
					))}
				</div>
			</div>
		</Container>
	)
}

export default MeetTheTeam
