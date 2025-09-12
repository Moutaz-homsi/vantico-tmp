import { Image } from "@/components/ui"
import VideoSection from "@/components/ui/video-section"

export default function GlobeSection() {
	return (
		<VideoSection
			video_url={"https://vimeo.com/1118114913"}
			id="globe-video"
			className="px-6 md:px-8 lg:px-16"
			showVideoOverlay={false}
		>
			<div className="w-full max-w-7xl mx-auto h-full flex items-center justify-start">
				<div className="relative z-10 pt-0 pb-0 flex flex-col gap-y-10">
					<h1 className="text-4xl md:text-[4rem] font-medium font-secondary leading-[100%] text-white text-start">
						Trust
					</h1>
					<h1 className="text-4xl md:text-[4rem] font-medium font-secondary leading-[100%] text-white text-start">
						<span className="cd-words-wrapper">Alignment</span>
					</h1>
					<h1 className="text-4xl md:text-[4rem] font-medium font-secondary leading-[100%] text-white text-start">
						<span className="cd-words-wrapper">Reach</span>
					</h1>
					{/* <p className="text-lg md:text-2xl text-[#ABABAB] mt-6 mb-10 max-w-3xl mx-auto">{subtitle}</p> */}
				</div>
			</div>
		</VideoSection>
	)
}
