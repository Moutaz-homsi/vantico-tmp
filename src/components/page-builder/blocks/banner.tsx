import { Image } from "@/components/ui"
import Title from "@/components/ui/title"
import { Container } from "@/components/layout"
import { IImage } from "@/types/image.interface"
import VideoSection from "@/components/ui/video-section"
import { cn } from "@/utils"

interface IBanner {
	image: IImage
	title?: string
	video_url?: string
	h2_class?: string
}
export default function Banner({ image, title, video_url, h2_class }: IBanner) {
	if (video_url) {
		return (
			<VideoSection
				video_url={video_url}
				className="min-h-[calc(100vh-164px)] h-[calc(100vh-164px)] relative p-16 flex items-center justify-center "
			>
				<Container className="z-10 relative text-center w-full h-full">
					<Title text={title} className={cn("text-white font-semibold leading-[1.5]", h2_class)} />
				</Container>
			</VideoSection>
		)
	}

	return (
		<div className="relative p-16 min-h-[calc(100vh-164px)] flex items-center justify-center">
			{!video_url && image?.url ? <Image src={image?.url} isFill className="object-cover" alt="hero_image" /> : null}

			<div className="bg-black/60 absolute inset-0" />
			<Container className="z-10 relative text-center w-full h-full">
				<Title text={title} className={cn("text-white font-semibold leading-[1.5]", h2_class)} />
			</Container>
		</div>
	)
}
