"use client"
import React from "react"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SectionLabel from "@/components/section-label"
import { Image } from "@/components/ui"
import Title from "@/components/ui/title"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/utils"
import { useModal } from "@/hooks/use-model"
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
		value: "$265M",
		label: "Total Assets Value"
	},
	{
		value: "26",
		label: (
			<>
				Properties across <br />
				Prime Locations
			</>
		)
	},
	{
		value: "1M+",
		label: (
			<>
				Square feet of <br />
				Premium Real Estate
			</>
		)
	}
]
const AboutUs: React.FC<AboutUsProps> = ({ logos = [], onCtaClick, className }) => {
	const { open, close } = useModal()
	return (
		<section id="about" className="w-full pt-28 pb-20 px-4 md:px-8 lg:px-16 bg-neutral-900">
			<div className="max-w-7xl mx-auto">
				{/* Grid container */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
					{/* Left side content */}
					<div className="lg:col-span-9 p-8 md:p-20  bg-white">
						<SectionLabel label={"About Us"} />

						<Title className=" my-6">
							Step into a proven, <br /> recession-resistant <br /> model
						</Title>

						<p className="text-md md:text-lg text-[#535353] leading-[160%] mb-10">
							Vantico specializes in high-end dental and underutilized commercial property investments in the
							Mid-Atlantic market. We create high-yield investment by merging real estate ownership with the booming
							healthcare sector, giving investors stability and long-term growth.
						</p>

						<Button
							onClick={onCtaClick}
							variant="dark"
							// className="bg-black hover:bg-gray-800 text-white py-6 px-8 text-lg rounded-none"
						>
							Get started <ChevronRight className="ml-2" size={20} />
						</Button>
					</div>

					{/* Right side stats */}
					<div className="lg:col-span-3">
						<div className="grid h-full grid-cols-1 gap-6">
							{stats.map((stat, idx) => (
								<Card
									key={idx}
									className="flex flex-col justify-center gap-2 py-8 bg-neutral-800 border-none   text-center"
								>
									<h3 className="text-[48px] tracking-[-4%] font-medium text-white">{stat.value}</h3>
									<p className="text-lg text-[#ABABAB]">{stat.label}</p>
								</Card>
							))}
						</div>
					</div>
				</div>

				{/* Partners section */}
				<div className="w-full h-20 mt-16 ">
					{/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 h-12 gap-8">
						<div className="flex items-center grayscale opacity-60">
							<span className="text-2xl font-light text-gray-300">Trusted by</span>
						</div>
						{logos.map((item) => {
							return (
								<div key={item.id} className="relative">
									<Image isFill src={item.src} alt={item.alt} className="object-contain grayscale opacity-40" />
								</div>
							)
						})}
					</div> */}
				</div>

				<p className="md:hidden py-2 text-center text-[#ABABAB] select-none text-lg">Trusted by</p>

				<Carousel
					opts={{
						align: "start",
						loop: false // Prevent scrolling from last to first
					}}
					plugins={[
						Autoplay({
							delay: 2000
						})
					]}
					className="w-full h-15 "
				>
					<CarouselContent className="  flex items-center ">
						{/* Add right padding to show next item */}
						<CarouselItem className={`hidden md:block md:basis-1/5`}>
							<span className="text-[#ABABAB] select-none text-lg">Trusted by</span>
						</CarouselItem>
						{/* <span className="text-2xl font-light text-gray-300">Trusted by</span> */}
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
									{/* <p className="text-white">{item.id}</p> */}
									<div
										className={cn(
											"relative w-full h-12 ",
											// effects
											"grayscale opacity-40 hover:grayscale-0 hover:bg-white hover:opacity-100"
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
					{/* <div className="md:hidden ">
							<CarouselPrevious className="left-0 bg-black/30" />
							<CarouselNext className="right-0 " />
						</div> */}
				</Carousel>
			</div>
		</section>
	)
}

export default AboutUs
