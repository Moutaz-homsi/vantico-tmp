"use client"
import React from "react"
import { ArrowRight, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import AboutUs from "./AboutUs"
import { Image } from "@/components/ui"

interface HeroProps {
	title?: string
	subtitle?: string
	ctaText?: string
	onCtaClick?: () => void
	className?: string
}

const Hero: React.FC<HeroProps> = ({
	title = "BUILD WEALTH WITH VANTICO",
	subtitle = "Prime investments in the Mid-Atlantic in high-end dental and underutilized commercial properties",
	ctaText = "Get started",
	onCtaClick,
	className
}) => {
	return (
		<section id="hero" className="w-full  pt-20  bg-black flex  justify-center">
			{/* Background overlay for video/image */}

			<div className="w-full max-w-7xl flex flex-col gap-6 ">
				<div className="relative z-10 text-center  ">
					<h1 className="text-7xl font-secondary tracking-tighter text-white uppercase  mb-6">
						BUILD WEALTH <br /> WITH VANTICO
					</h1>

					<p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">{subtitle}</p>

					<Button onClick={onCtaClick}>
						{ctaText} <ChevronRight className="ml-2" size={20} />
					</Button>
				</div>

				<AspectRatio className=" mt-10 relative" ratio={16 / 9}>
					{/* <div className="w-full h-[600px] relative"> */}
					{/* <Image isFill alt="Video Background" src="/images/video-background.png" /> */}
					{/* </div> */}
					<div className="h-full w-full absolute top-16">
						{/* test */}
						<Image isFill alt="Video Background" src="/images/video-background.png" />
					</div>
					<div className="absolute top-16 left-0 w-full h-full flex items-center justify-center">
						<div className="bg-black/80 shadow-lg p-8 rounded-full hover:bg-black/60 transition-all duration-300 cursor-pointer">
							<Play className="text-white text-3xl" fill="white" size={52} />
						</div>
					</div>
				</AspectRatio>
			</div>
		</section>
	)
}

export default Hero
