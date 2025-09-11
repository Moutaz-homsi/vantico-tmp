import { IconHealthcare, IconPrivate, IconRealEstate } from "@/components/icons"
import SectionLabel from "@/components/section-label"
import IconBlox from "@/components/ui/boxes/icon-box"
import LinkButton from "@/components/ui/buttons/link-button"
import { ChevronRight } from "lucide-react"
// import { Image } from "@/components/ui"
// import { Button } from "@/components/ui/button"
// import Title from "@/components/ui/title"
// import { cn } from "@/utils"
// import { getImageUrlFromObject } from "@/utils/image-loader"
// import { Fancybox } from "@fancyapps/ui"
// import "@fancyapps/ui/dist/fancybox.css"

// Fancybox.defaults.Hash = false

export default function InvestWithPurpose() {
	return (
		<section id="tour" className="bg-black text-white py-20 px-4 border-b-2 border-b-amber-50">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center">
					<SectionLabel label={"Invest with Purpose"} variant="dark" />
				</div>
				<div className="relative z-10 text-center pt-16 pb-8 ">
					<div className="flex justify-start">
						<h1 className="text-4xl md:text-[4rem] font-medium font-secondary leading-[100%] text-white mb-2">
							Precision
						</h1>
					</div>
					{/* justify-center */}
					<div className="flex justify-start">
						<h1 className="text-4xl md:text-[4rem] font-medium font-secondary leading-[100%] text-white mb-2">
							Partnership
						</h1>
					</div>
					{/* justify-end */}
					<div className="flex justify-start">
						<h1 className="text-4xl md:text-[4rem] font-medium font-secondary leading-[100%] text-white mb-2">
							Conviction
						</h1>
					</div>

					{/* <p className="text-lg md:text-2xl text-[#ABABAB] mt-6 mb-10  max-w-3xl mx-auto">{subtitle}</p> */}

					{/* <Button onClick={onCtaClick}>
						{ctaText} <ChevronRight className="ml-2" size={20} />
					</Button> */}
				</div>

				<div className="mt-6 md:mt-10">
					<div className="flex gap-4 w-full text-xl text-center">
						At VANTICO, we focus on sectors with long-term growth potential, creating resilient strategies powered by
						data, market insight, and true alignment with our partners.
					</div>
				</div>

				<div className="grid grid-cols-12 gap-y-20 md:gap-8 mt-20">
					<div className="col-span-12 md:col-span-4">
						<IconBlox
							icon={<IconRealEstate className="text-white w-16 h-16" />}
							title="Real Estate Excellence"
							content="High-demand, income-generating commercial assets dental-anchored centers, healthcare plazas, and mixed-use developments in high-growth markets."
						/>
					</div>
					<div className="col-span-12 md:col-span-4">
						<IconBlox
							icon={<IconHealthcare className="text-white w-16 h-16" />}
							title="Healthcare Innovation"
							content="Scaling founder-led healthcare businesses with capital, strategy, and operational expertise to deliver better care and long-term value."
						/>
					</div>
					<div className="col-span-12 md:col-span-4">
						<IconBlox
							icon={<IconPrivate className="text-white w-16 h-16" />}
							title="Private Equity Impact"
							content={
								<div className="text-base md:text-lg font-light">
									Transformative growth with disciplined risk. <br />
									Selective co-investments with visionary operators for sustainable growth.
								</div>
							}
						/>
					</div>
				</div>

				<div className="flex justify-center mt-6 md:mt-10">
					<LinkButton link="/real-estate" className="bg-white text-black">
						Explore Our Investment Focus <ChevronRight className="ml-2" />
					</LinkButton>
					{/* <Link href="/real-estate">
						Explore Our Investment Focus <ChevronRight className="ml-2" />
					</Link> */}
					{/* <a data-fancybox-trigger="tour">
						<Button onClick={() => {}}>
							Explore Our Investment Focus <ChevronRight className="ml-2" />
						</Button>
					</a> */}
				</div>
			</div>
		</section>
	)
}
