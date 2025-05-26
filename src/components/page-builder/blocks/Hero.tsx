"use client"
import { Image } from "@/components/ui"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronRight, Play } from "lucide-react"
import React, { useState } from "react"

interface HeroProps {
	title?: string
	subtitle?: string
	ctaText?: string
	onCtaClick?: () => void
	className?: string
}

const videoId = "1017406920" // Replace with your actual Vimeo video ID

const Hero: React.FC<HeroProps> = ({
	title = "BUILD WEALTH WITH VANTICO",
	subtitle = "Prime investments in the Mid-Atlantic in high-end dental and underutilized commercial properties",
	ctaText = "Get started",
	onCtaClick,
	className
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<section id="hero" className="w-full bg-black flex  justify-center">
			{/* Background overlay for video/image */}

			<div className="w-full max-w-7xl flex flex-col gap-6 ">
				<div className="relative z-10 text-center pt-24 pb-8 ">
					<h1 className="text-[80px] font-secondary tracking-[-5%] leading-[100%] text-white   mb-6">
						Build wealth <br /> with Vantico
					</h1>

					<p className="text-2xl text-[#ABABAB] mt-6 mb-10 max-w-3xl mx-auto">{subtitle}</p>

					<Button onClick={onCtaClick}>
						{ctaText} <ChevronRight className="ml-2" size={20} />
					</Button>
				</div>

				<AspectRatio className="relative" ratio={16 / 9}>
					{/* <div className="w-full h-[600px] relative"> */}
					{/* <Image isFill alt="Video Background" src="/images/video-background.png" /> */}
					{/* </div> */}
					<div className="h-full w-full absolute top-16">
						{/* test */}
						<Image isFill alt="Video Background" src="/images/video-background.png" />
					</div>
					<div className="absolute top-16 left-0 w-full h-full flex items-center justify-center">
						<div
							onClick={() => {
								setIsModalOpen(true)
							}}
							className="bg-black/80 shadow-lg p-8 rounded-full hover:bg-black/60 transition-all duration-300 cursor-pointer"
						>
							<Play className="text-white text-3xl" fill="white" size={52} />
						</div>
					</div>
				</AspectRatio>
			</div>

			{/* Video Modal */}
			<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
				<DialogContent className="max-w-5xl p-0 overflow-hidden bg-black border-none">
					{/* <DialogHeader className="px-6 pt-6 pb-2">
									<DialogTitle className="text-white text-xl">Our Product Video</DialogTitle>
								</DialogHeader> */}
					<div className="aspect-video w-full">
						<iframe
							src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
							className="w-full h-full"
							frameBorder="0"
							allow="autoplay; fullscreen; picture-in-picture"
							allowFullScreen
							title="Featured video"
						></iframe>
					</div>
				</DialogContent>
			</Dialog>
		</section>
	)
}

export default Hero
