import Title from "@/components/ui/title"
import { Container } from "@/components/layout"
import CssCarousel from "@/components/ui/carousels/css-caroucel"
import LinkButton from "@/components/ui/buttons/link-button"
import { ChevronRight } from "lucide-react"
import { cn } from "@/utils"

export interface Ecosystem {
	name: string
	logo: string
	url?: string
	alt?: string
}

interface EcosystemSectionProps {
	slides?: { first_slider: Ecosystem[]; second_slider: Ecosystem[]; third_slider: Ecosystem[] }
	hide_pattern?: boolean
	hide_btn?: boolean
	className?: string
}

export default function EcosystemSection({ slides, hide_pattern, hide_btn = false, className }: EcosystemSectionProps) {
	return (
		<Container as="section" id="ecosystem" 
		{...(hide_pattern ? { pattern: "hidden" } : {})}
		className={cn("px-0" ,className)}>
			{/* <div className="max-w-6xl mx-auto"> */}
				<div className="flex flex-col gap-6 items-center text-center px-6 md:px-0 lg:px-12">
					<Title className="text-2xl">A Proven Ecosystem of Excellence</Title>
					<p className="sub-title">
						A network of elite partners ensures credibility, seamless operations, and consistent investment success.{" "}
						<br />
						we are proud to collaborate with a distinguished network of:
					</p>
				</div>
				<div className="mt-10 flex flex-col">
					<CssCarousel data={slides?.first_slider || []} />
					<CssCarousel data={slides?.second_slider || []} />
					<CssCarousel data={slides?.third_slider || []} />
				</div>

				{!hide_btn ? (
					<div className="flex justify-center md:justify-right mt-6 md:mt-10 px-6 md:px-8 lg:px-12">
						<LinkButton link="/partner-network" className="bg-black text-white">
							Explore Our Partner Network <ChevronRight className="ml-2" />
						</LinkButton>
					</div>
				) : null}
				<div className="mt-4 mb-4 px-6 md:px-8 lg:px-12">
					<div className="col-span-12 text-xs text-gray-400 relative top-16 lg:top-30">
						Logos displayed represent institutions and counterparties with whom VANTICO or its affiliates have engaged
						in various business transactions, partnerships, or professional relationships. Inclusion does not imply an
						endorsement or ongoing commercial relationship unless explicitly stated.
					</div>
				</div>
			{/* </div> */}
		</Container>
	)
}
