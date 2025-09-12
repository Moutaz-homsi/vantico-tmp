"use client"
import { Image } from "@/components/ui"
import { cn } from "@/utils"
import React, { useEffect, useRef, useState } from "react"

const HeroVideo = ({
	videoId,
	hero_video_url,
	subtitle = "Prime investments in the Mid-Atlantic in high-end dental and underutilized commercial properties"
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
		<section
			id="hero"
			className="relative w-full h-screen min-h-[820px] flex justify-center items-center overflow-hidden bg-black" /* className="w-full bg-black flex justify-center relative" */
		>
			<video
				className="absolute top-0 left-0 w-full h-full object-cover"
				src={hero_video_url || "hero-video-1-min.mp4"}
				autoPlay
				loop
				muted
				playsInline
			/>
			<div className="absolute inset-0 bg-black/60"></div>

			<div className="w-full max-w-7xl flex flex-col gap-6 ">
				<div className="relative z-10 text-center pt-0 pb-0">
					<div className="flex justify-start">
						<h1 className="text-4xl md:text-[4rem] font-medium font-secondary leading-[100%] text-white mb-2">
							Precision
						</h1>
					</div>
					<div className="flex justify-start">
						<h1 className="text-4xl md:text-[4rem] font-medium font-secondary leading-[100%] text-white mb-2">
							Partnership
						</h1>
					</div>
					<div className="flex justify-start">
						<h1 className="text-4xl md:text-[4rem] font-medium font-secondary leading-[100%] text-white mb-2">
							Conviction
						</h1>
					</div>

					<p className="text-lg md:text-2xl text-[#ABABAB] mt-6 mb-10 max-w-3xl mx-auto">{subtitle}</p>
				</div>

				<div className="flex gap-8 mb-16">
					<div className="w-2/5">
						<div
							className="relative w-[300px] h-[400px] aspect-[3/4] mx-auto" /* className="relative w-[400px] h-[533px] mx-auto" */
						>
							<Image src="/images/dr-hesham-baky.jpg" alt="CEO Image" className="rounded-lg" isFill />
						</div>
					</div>
					<div className="w-3/5 flex flex-col justify-between relative">
						<div className="flex-1 flex items-center">
							<p className="text-md md:text-xl text-white mt-16">
								At VANTICO, character is our foundation. We are driven by clarity of vision, operational discipline, and
								integrity in every decision. Trust is earned daily through transparent partnerships and aligned action.
								We invest with purpose, guided by data and committed to outcomes that endure. Our goal is not to be
								everywhere but to build what is essential and lasting. Excellence is not a pursuit of perfection but a
								duty to those we serve. Through precision and purpose, we create value that extends far beyond capital.
							</p>
						</div>
						<div className="flex justify-end items-end flex-col text-left text-white">
							<p className="text-xs md:text-2xl">Dr. Hesham Baky</p>
							<p className="text-smxs md:text-lg font-light">Chairman and Founder</p>
						</div>
					</div>
				</div>
			</div>
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

export default HeroVideo
