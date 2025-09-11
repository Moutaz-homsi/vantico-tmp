"use client"
import React from "react"
import { Card /* CardContent */ } from "@/components/ui/card"
import SectionLabel from "@/components/section-label"
import Title from "@/components/ui/title"
import AnimatedValue from "@/components/ui/header/animated-value"
import TenantCarousel from "@/components/ui/tenant-carousel"
import { addCommas } from "@/utils/numberUtils"
import LinkButton from "@/components/ui/buttons/link-button"
import { ChevronRight } from "lucide-react"

// import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
// import { ArrowRight, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Image } from "@/components/ui"
// import Autoplay from "embla-carousel-autoplay"
// import { cn } from "@/utils"
// import { useModal } from "@/hooks/use-model"
// import CountUp from "react-countup"

interface AboutUsProps {
	onCtaClick?: () => void
	className?: string
	logos?: {
		id: number
		title: string
		description: string
		image: object
	}[]
}

const stats = [
	{
		value: "$500M",
		label: "Total Assets Value"
	},
	{
		value: "30",
		label: (
			<>
				Properties across <br />
				Prime Locations
			</>
		)
	},
	{
		value: "2M+",
		label: (
			<>
				Square feet of <br />
				Premium Real Estate
			</>
		)
	}
]
const AboutUs: React.FC<AboutUsProps> = ({ logos = [] /* , onCtaClick, className */ }) => {
	// const { open, close } = useModal()
	return (
		// bg-neutral-900
		<section id="about" className="w-full pt-28 pb-10 px-4 md:px-8 lg:px-16 bg-white">
			<div className="max-w-7xl mx-auto">
				{/* Grid container */}
				{/* mb-14 md:mb-22 */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 ">
					{/* Left side content */}
					{/* p-8 md:p-20 */}
					<div className="col-span-12 text-center">
						<SectionLabel label={"Crafting Excellence in Investment"} />

						<Title className="my-6">Trust. Discipline. Enduring Value.</Title>

						{/* text-sm md:text-base */}
						<p className="text-md md:text-xl font-light text-black leading-[160%] my-10">
							<span className="font-medium">VANTICO</span> is a privately held global investment firm distinguished by
							precision, partnership, and long-term conviction. We co-invest with a curated network of high-net-worth
							individuals, family offices, and institutions across U.S. real estate, healthcare, and private equity. Our
							approach is guided by data, discipline, and deep market insight. We do not seek to be the largest. We
							strive to be the most trusted. Every investment reflects our commitment to sustainable value that endures
							over time.
						</p>
					</div>

					<div className="col-span-12 grid grid-cols-12">
						<div
							className="col-span-4 font-semibold text-3xl lg:text-7xl [&_*]:font-secondary"
							style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
						>
							<AnimatedValue value={`$${addCommas("1.5")}B`} duration={2.5} />{" "}
							<b className="font-medium text-5xl">AUM</b>
						</div>

						<div></div>
					</div>

					<div className="col-span-12 text-xs text-gray-400">
						*Collective AUM includes assets managed across VANTICO’s affiliated funds, operating platforms, and
						strategic partnerships.
					</div>

					<div className="flex justify-end items-center mt-6 md:mt-10 col-span-12">
						<LinkButton link="/real-estate" className="bg-black text-white">
							Explore Our Investment Focus <ChevronRight className="ml-2" />
						</LinkButton>
					</div>
					{/* Right side stats */}
					{/* <div className="lg:col-span-3">
						<div className="grid h-full grid-cols-1 gap-6">
							{stats.map((stat, idx) => (
								<Card
									key={idx}
									className="flex flex-col justify-center gap-2 py-8 border-none text-center"
								>
									<h3 className="text-[48px] tracking-[-4%] font-medium text-neutral-900">
										<AnimatedValue value={stat.value} duration={1} />
									</h3>
									<p className="text-lg text-[#ABABAB]">{stat.label}</p>
								</Card>
							))}
						</div>
					</div> */}
				</div>

				{/* <p className="py-2 text-center text-[#ABABAB] select-none text-2xl md:text-4xl mb-8">Trusted by</p>

				<TenantCarousel
					images={logos.map((logo: any) => ({
						id: logo.id,
						url: logo?.image?.url,
						title: logo.title
					}))}
					imgHeight="h-12"
				/> */}
				{/* <Carousel
					opts={{
						align: "start",
						loop: false
					}}
					plugins={[
						Autoplay({
							delay: 2000,
							stopOnMouseEnter: true,
							stopOnInteraction: false
						})
					]}
					className="w-full h-15 "
				>
					<CarouselContent className="  flex items-center ">
						<CarouselItem className={`hidden md:block md:basis-1/5`}>
							<span className="text-[#ABABAB] select-none text-lg">Trusted by</span>
						</CarouselItem>
						{logos.map((item) => {
							return (
								<CarouselItem
									key={item.id}
									className={`basis-1/3 md:basis-1/5`}
									onClick={() => {
										open({
											title: "todo show company details",
											children: <p>{item.description}</p>
										})
									}}
								>
									<div
										className={cn(
											"relative w-full h-12 ",
											// effects
											"grayscale opacity-40 hover:grayscale-0 hover:bg-white rounded-sm  hover:opacity-100"
										)}
									>
										<Image
											isFill
											src={item.image?.url}
											strapiImage={item.image}
											alt={item.title}
											className="object-contain pointer-events-none select-none"
										/>
									</div>
								</CarouselItem>
							)
						})}
					</CarouselContent>
				</Carousel> */}
			</div>
		</section>
	)
}

export default AboutUs
