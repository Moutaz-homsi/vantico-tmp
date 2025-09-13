"use client"
import VideoBackground from "./VideoBackground"
import React from "react"

const HeroVideo = ({
	videoSrc,
	videoId,
	subtitle = "Prime investments in the Mid-Atlantic in high-end dental and underutilized commercial properties"
}) => {
	return (
		<section
			id="hero"
			className="relative w-full h-[calc(100vh-100px)]" // Screen height - reveal(100px)
		>
			<VideoBackground
				videoSrc={videoSrc}
				className="h-full bg-black"
				childrenContainerClassName="h-full flex flex-col lg:justify-center pt-16 lg:pt-0 w-full max-w-7xl mx-auto px-4 lg:px-24"
			>
				<div className="relative z-10 pt-0 pb-0 flex flex-col gap-y-10 justify-baseline lg:justify-center items-center lg:items-start">
					<h1 className="text-4xl md:text-[4rem] font-medium font-secondary leading-[100%] text-white">Precision</h1>
					<h1 className="text-4xl md:text-[4rem] font-medium font-secondary leading-[100%] text-white">
						<span className="cd-words-wrapper">Partnership</span>
					</h1>
					<h1 className="text-4xl md:text-[4rem] font-medium font-secondary leading-[100%] text-white">
						<span className="cd-words-wrapper">Conviction</span>
					</h1>
					{/* <p className="text-lg md:text-2xl text-[#ABABAB] mt-6 mb-10 max-w-3xl mx-auto">{subtitle}</p> */}
				</div>
			</VideoBackground>
		</section>
	)
}

export default HeroVideo
