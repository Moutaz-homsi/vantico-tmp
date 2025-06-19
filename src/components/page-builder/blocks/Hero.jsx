"use client"
import { Image } from "@/components/ui"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/utils"
import { ChevronRight, Play } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"

const Hero = ({
	title = "BUILD WEALTH WITH VANTICO",
	subtitle = "Prime investments in the Mid-Atlantic in high-end dental and underutilized commercial properties",
	ctaText = "Get started",
	onCtaClick,
	className,
	videoId,
	calendlyUrl
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const videoUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`

	const videoRef = useRef(null)

	useEffect(() => {
		const sendCommand = (command) => {
			if (!videoRef.current) return

			videoRef.current.contentWindow?.postMessage(
				{
					method: command
				},
				"https://player.vimeo.com"
			)
		}

		if (isModalOpen) {
			sendCommand("play")
		} else {
			sendCommand("pause")
		}
	}, [isModalOpen])

	return (
		<section id="hero" className="w-full bg-black flex  justify-center">
			{/* Background overlay for video/image */}

			<div className="w-full max-w-7xl flex flex-col gap-6 ">
				<div className="relative z-10 text-center pt-24 pb-8 ">
					<h1 className="text-4xl md:text-[80px] font-secondary tracking-[-5%] leading-[100%] text-white   mb-6">
						Build wealth <br /> with Vantico
					</h1>

					<p className="text-lg md:text-2xl text-[#ABABAB] mt-6 mb-10  max-w-3xl mx-auto">{subtitle}</p>

					<Button onClick={onCtaClick}>
						{ctaText} <ChevronRight className="ml-2" size={20} />
					</Button>
				</div>

				<AspectRatio className="relative" ratio={2.2}>
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
			{/* <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
				<DialogContent className="max-w-5xl p-0 overflow-hidden bg-black border-none">
			 
					<div className="aspect-video w-full">
						<iframe
							ref={videoRef}
							id="vidFrame"
							src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
							className="w-full h-full"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="Featured video"
						></iframe>
					</div>
				</DialogContent>
			</Dialog> */}

			<CustomDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
				<div className="max-w-5xl p-0 overflow-hidden bg-black border-none">
					<div className="aspect-video w-full">
						<iframe
							src={videoUrl}
							ref={videoRef}
							id="vidFrame"
							className="w-full h-full"
							frameBorder="0"
							allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="Featured video"
						></iframe>
					</div>
				</div>
			</CustomDialog>
		</section>
	)
}

function CustomDialog({ open, onOpenChange, children }) {
	return (
		<div data-state={open ? "open" : "closed"} className={cn("absolute", open ? "block z-[100]" : "hidden")}>
			<div
				onClick={() => {
					onOpenChange(false)
				}}
				className={cn(
					"fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
					open && "opacity-100"
				)}
			></div>
			<div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
				{children}
			</div>
		</div>
	)
}

export default Hero
