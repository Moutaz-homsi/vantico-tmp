"use client"
import { useState, useRef, useEffect } from "react"
import { Container } from "@/components/layout"
import { Image } from "@/components/ui"
import { getResponsiveGridClasses } from "@/utils/grid-utils"
import { Linkedin, ChevronDown } from "lucide-react"
import Title from "@/components/ui/title"
import SectionLabel from "@/components/section-label"
import { cn } from "@/utils"

interface Image {
	url: string
	width?: number
	height?: number
	alternativeText?: string
}
interface TeamMember {
	id: number
	name: string
	link: string
	role: string
	bio?: string
	rank?: number
	position?: string
	image?: Image
	mobile_image?: Image
}

interface MeetTheTeamProps {
	members: TeamMember[]
}


const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
	const [expanded, setExpanded] = useState(false)
	const [isClamped, setIsClamped] = useState(false)
	const bioRef = useRef<HTMLParagraphElement>(null)
	if (member.name.startsWith("Yah")) console.log("member,", member)

	useEffect(() => {
		const el = bioRef.current
		if (el) setIsClamped(el.scrollHeight > el.clientHeight)
	}, [])

	return (
		<div className={cn("pt-8", index !== 0 && "border-t border-[#E0DDD9] ")}>
			<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
				<div className="md:col-span-4">
					<div className="relative w-full h-[320px] rounded-xl overflow-hidden">
						<Image
							src={member.image?.url || "/images/avatar-placeholder.jpg"}
							alt={member.name}
							isFill
							className={cn("object-cover", getImagePositionClass(member.position))}
						/>
					</div>
				</div>

				<div className="md:col-span-8 flex flex-col justify-between gap-4">
					<div>
						<div className="flex items-center gap-3 mb-1">
							<h3 className="font-secondary text-2xl md:text-3xl text-[#151515]">{member.name}</h3>
							{member.link && (
								<a
									href={member.link}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn"
									className="text-[#151515] hover:text-[#AB804A] transition-colors"
								>
									<Linkedin size={20} />
								</a>
							)}
						</div>
						<p className="text-[#535353] text-lg mb-4">{member.role}</p>

						{member.bio && (
							<p
								ref={bioRef}
								className={`text-[#535353] leading-[170%] text-base whitespace-pre-line ${expanded ? "" : "line-clamp-6"}`}
							>
								{member.bio}
							</p>
						)}
					</div>

					{(isClamped || expanded) && (
						<button
							onClick={() => setExpanded((v) => !v)}
							className="flex items-center gap-2 text-sm font-medium text-[#151515] hover:text-[#AB804A] transition-colors self-start mt-2"
						>
							{expanded ? "Read less" : "Read more"}
							<ChevronDown size={16} className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

const TeamMemberGridCard = ({ member }: { member: TeamMember }) => {
	const [expanded, setExpanded] = useState(false)
	const [isClamped, setIsClamped] = useState(false)
	const bioRef = useRef<HTMLParagraphElement>(null)

	useEffect(() => {
		const el = bioRef.current
		if (el) setIsClamped(el.scrollHeight > el.clientHeight)
	}, [])

	return (
		<div className="group flex flex-col border border-[#E0DDD9] rounded-xl overflow-hidden bg-white hover:border-[#C8C2BA] transition-colors duration-300">
			{/* Photo */}
			<div className="relative w-full h-[300px] overflow-hidden">
				<Image
					src={member.image?.url || "/images/avatar-placeholder.jpg"}
					alt={member.name}
					isFill
					className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
				/>
				{/* Gold accent bar at bottom of photo */}
				<div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#AB804A] group-hover:w-full transition-all duration-500" />
			</div>

			{/* Content */}
			<div className="flex flex-col flex-1 p-6 gap-3">
				{/* Name + LinkedIn */}
				<div className="flex items-start justify-between gap-2">
					<div>
						<h3 className="font-secondary text-xl md:text-2xl text-[#151515] leading-snug">{member.name}</h3>
						<p className="text-[#AB804A] text-sm tracking-widest uppercase mt-1">{member.role}</p>
					</div>
					{member.link && (
						<a
							href={member.link}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="mt-1 shrink-0 text-[#C8C2BA] hover:text-[#AB804A] transition-colors duration-200"
						>
							<Linkedin size={18} />
						</a>
					)}
				</div>

				{/* Divider */}
				<div className="w-8 h-px bg-[#E0DDD9]" />

				{/* Bio */}
				{member.bio && (
					<div className="flex flex-col flex-1 gap-3">
						<p
							ref={bioRef}
							className={`text-[#535353] text-sm leading-[175%] whitespace-pre-line ${expanded ? "" : "line-clamp-6"}`}
						>
							{member.bio}
						</p>
						{(isClamped || expanded) && (
							<button
								onClick={() => setExpanded((v) => !v)}
								className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-[#151515] hover:text-[#AB804A] transition-colors duration-200 self-start mt-auto pt-1"
							>
								{expanded ? "Read less" : "Read more"}
								<ChevronDown
									size={13}
									className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
								/>
							</button>
						)}
					</div>
				)}
			</div>
		</div>
	)
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
							<a href={member.link || "#"} target="_blank" className="w-full" rel="noopener noreferrer">
								<div className="relative w-full h-[440px] mb-4 rounded-2xl overflow-hidden">
									<Image
										src={member.image?.url || "/images/avatar-placeholder.jpg"}
										alt={member.name}
										isFill
										className="object-cover object-top hover:opacity-90 transition-opacity duration-200"
									/>
								</div>
								<div className="flex justify-center gap-4  items-center">
									<h3 className="text-2xl md:text-3xl mb-2 font-medium hover:text-primary">{member.name}</h3>
									<span aria-label="LinkedIn">
										<Linkedin size={24} />
									</span>
								</div>
								<p className=" text-lg">{member.role}</p>
							</a>
						</div>
					))}
				</div>
			</div>
		</Container>
	)
}
export const MeetTheTeam2 = ({ members }: MeetTheTeamProps) => {
	return (
		<Container id="team" className="">
			<div className="container mx-auto max-w-7xl">
				<div className="flex flex-col gap-12">
					{members.map((member, index) => (
						<TeamMemberCard key={member.id} member={member} index={index} />
					))}
				</div>
			</div>
		</Container>
	)
}

function getImagePositionClass(position: string | undefined) {
	if (position === "top") return "object-top"
	if (position === "center") return "object-center"
	if (position === "bottom") return "object-bottom"

	return "object-center"
}

export default MeetTheTeam
