import { Image } from "@/components/ui"
import VideoSection from "@/components/ui/video-section"

export default function GlobeSection() {
	return (
		<VideoSection
			video_url={"/globe-video-min.mp4"}
			id="globe-video"
			className="h-[550px] min-h-[550px] lg:h-[600px] lg:min-h-[600px]"
			showVideoOverlay={false}
		>
			<div className="w-full max-w-7xl h-full flex items-center justify-start ps-4 lg:ps-8">
				<div className="relative z-10 pt-0 pb-0 flex flex-col gap-y-10 px-4 lg:px-24">
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
