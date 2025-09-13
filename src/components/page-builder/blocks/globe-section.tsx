import VideoBackground from "./VideoBackground"

export default function GlobeSection() {
	return (
		<VideoBackground
			videoSrc={
				"https://cdn.jsdelivr.net/gh/moutazdev/my-website-videos@main/366591_Sun_Light_24_Hours_Circling_Stars_By_Frame_Stock_Footage_Artlist_HD_2.mp4"
			}
			className="h-[450px] lg:h-[600px] xl:h-[750px] 2xl:h-[900px] px-6 md:px-8 lg:px-16"
			childrenContainerClassName="h-full flex items-center justify-start max-w-7xl mx-auto"
		>
			<div className="flex items-center justify-start">
				<div className="relative z-10 pt-0 pb-0 flex flex-col gap-y-8 text-4xl md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-medium font-secondary text-white text-start">
					<h2>Trust</h2>
					<h2>Alignment</h2>
					<h2>Reach</h2>
				</div>
			</div>
		</VideoBackground>
	)
}
