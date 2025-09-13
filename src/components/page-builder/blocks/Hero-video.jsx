import VideoBackground from "./VideoBackground"

const HeroVideo = ({ hero_video_url, videoId, subtitle }) => {
	return (
		<section
			id="hero"
			className="relative w-full h-[calc(100vh-100px)]" // Screen height - reveal(100px)
		>
			<VideoBackground
				videoSrc={hero_video_url}
				className="h-full bg-black"
				childrenContainerClassName="h-full flex flex-col lg:justify-center pt-16 lg:pt-0 w-full max-w-7xl mx-auto px-4 lg:px-24"
			>
				<div className="relative z-10 pt-0 pb-0 flex flex-col gap-y-10 justify-baseline lg:justify-center items-center lg:items-start">
					<h1 className="text-4xl md:text-[4rem] font-medium font-secondary leading-[100%] text-white [text-shadow:1px_2px_5px_rgba(0,0,0,0.5)]">
						Precision <br />
						<span className="cd-words-wrapper">Partnership</span> <br />
						<span className="cd-words-wrapper">Conviction</span>
					</h1>
				</div>
			</VideoBackground>
		</section>
	)
}

export default HeroVideo
