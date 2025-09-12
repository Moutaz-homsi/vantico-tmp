import { Image } from "@/components/ui"
import VideoSection from "@/components/ui/video-section"

export default function GlobeSection() {
	return (
		<VideoSection video_url={"/globe-video-min.mp4"} id="globe-video">
			<div className="w-full max-w-7xl flex flex-col gap-6 mx-auto">
				<div className="flex gap-8 mb-16">
					<div className="w-2/5">
						<div className="relative w-[300px] h-[400px] aspect-[3/4] mx-auto">
							<Image src="/images/dr-anas-bakour.png" alt="CEO Image" className="rounded-lg" isFill />
						</div>
					</div>
				</div>
				<div className="flex flex-col">
					<div className="flex-1 flex items-center mb-10">
						<p className="text-lg md:text-2xl text-gray-300 font-normal leading-relaxed tracking-wider">
							Strategic partnerships are not formed in boardrooms. They are built through trust, shared conviction, and
							long-term alignment. At VANTICO, we invest deeply in relationships because we believe real partnership
							goes beyond capital. Our mission is to connect intelligent capital with transformative opportunities. This
							takes clarity of purpose, consistency in values, and the discipline to stay focused when others are
							distracted. When the right people unite around a shared vision, exceptional outcomes follow naturally.
							That is the standard we live by every day at VANTICO.
						</p>
					</div>
					<div className="flex justify-end items-end flex-col text-left text-gray-300">
						<p className="text-lg md:text-2xl">Dr. Anas Albakour</p>
						<p className="text-md md:text-xl font-light">Co-Founder and Head of Strategic Partnerships</p>
					</div>
				</div>
			</div>
		</VideoSection>
	)
}
