"use client"
import { Image } from "@/components/ui"
import { cn } from "@/utils"
import React, { useEffect, useRef, useState } from "react"

const HeroVideo = ({
	videoId, // Vimeo video ID from Strapi
	hero_video_url, // Fallback video URL from Strapi
	subtitle = "Prime investments in the Mid-Atlantic in high-end dental and underutilized commercial properties"
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

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
		<section id="hero" className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-black">
			{/* Vimeo Background Video - Free Account Version */}
			{videoId ? (
				<iframe
					className="absolute top-0 left-0 w-full h-full pointer-events-none"
					src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1&controls=0&byline=0&title=0&portrait=0`}
					style={{
						width: "100vw",
						height: "56.25vw",
						minHeight: "100vh",
						minWidth: "177.78vh",
						transform: "translate(-50%, -50%)",
						left: "50%",
						top: "50%"
					}}
					frameBorder="0"
					allow="autoplay; fullscreen; picture-in-picture"
					title="Hero Background Video"
				/>
			) : (
				<video
					className="absolute top-0 left-0 w-full h-full object-cover"
					src={hero_video_url || "hero-video-1-min.mp4"}
					autoPlay
					loop
					muted
					playsInline
				/>
			)}

			<div className="w-full max-w-7xl h-full flex flex-col lg:justify-center pt-16 lg:pt-0">
				<div className="relative z-10 pt-0 pb-0 flex flex-col gap-y-10 justify-baseline lg:justify-center items-center lg:items-start px-4 lg:px-24">
					<h1 className="text-4xl md:text-[4rem] font-medium font-secondary leading-[100%] text-white">Precision</h1>
					<h1 className="text-4xl md:text-[4rem] font-medium font-secondary leading-[100%] text-white">
						<span className="cd-words-wrapper">Partnership</span>
					</h1>
					<h1 className="text-4xl md:text-[4rem] font-medium font-secondary leading-[100%] text-white">
						<span className="cd-words-wrapper">Conviction</span>
					</h1>
					{/* <p className="text-lg md:text-2xl text-[#ABABAB] mt-6 mb-10 max-w-3xl mx-auto">{subtitle}</p> */}
				</div>
			</div>

			{videoId && (
				<CustomDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
					<div className="max-w-5xl p-0 overflow-hidden bg-black border-none">
						<div className="aspect-video w-full">
							<iframe
								src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
								ref={videoRef}
								id="vidFrame"
								className="w-full h-full"
								frameBorder="0"
								allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
								webkitallowfullscreen="true"
								mozallowfullscreen="true"
								allowFullScreen
								title="Featured video"
							></iframe>
						</div>
					</div>
				</CustomDialog>
			)}
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
