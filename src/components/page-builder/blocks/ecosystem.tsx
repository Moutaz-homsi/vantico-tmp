import Title from "@/components/ui/title"
import { Container } from "@/components/layout"
import CssCarousel from "@/components/ui/carousels/css-caroucel"
import LinkButton from "@/components/ui/buttons/link-button"
import { ChevronRight } from "lucide-react"

export interface Ecosystem {
	name: string
	logo: string
	url?: string
	alt?: string
}

interface EcosystemSectionProps {
	slides?: { first_slider: Ecosystem[]; second_slider: Ecosystem[]; third_slider: Ecosystem[] }
}

export default function EcosystemSection({ slides }: EcosystemSectionProps) {
	return (
		<Container as="section" id="ecosystem">
			<div className="px-4 max-w-6xl mx-auto">
				<div className="flex flex-col gap-6 items-center text-center">
					<Title className="text-2xl">A Proven Ecosystem of Excellence</Title>
					<p className="">
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

				<div className="flex justify-center md:justify-right mt-6 md:mt-10">
					<LinkButton link="/partner-network" className="bg-black text-white">
						Explore Our Partner Network <ChevronRight className="ml-2" />
					</LinkButton>
				</div>

				<div className="mt-4 mb-4">
					<div className="col-span-12 text-xs text-gray-400">
						Logos displayed represent institutions and counterparties with whom VANTICO or its affiliates have engaged
						in various business transactions, partnerships, or professional relationships. Inclusion does not imply an
						endorsement or ongoing commercial relationship unless explicitly stated.
					</div>
				</div>
			</div>
		</Container>
	)
}
