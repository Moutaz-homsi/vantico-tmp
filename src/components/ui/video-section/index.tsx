import { cn } from "@/utils"

interface IVideoSection {
	hero_video_url?: string
	subtitle?: string
	id?: string
	className?: string
	children?: React.ReactNode
	hideBackgroundOverlay?: boolean
	childrenContainerClassName?: string
}
export default function VideoSection({
	id,
	hero_video_url,
	className,
	children,
	hideBackgroundOverlay = false,
	childrenContainerClassName
}: IVideoSection) {
	return (
		<section
			{...(id ? { id: id } : {})}
			className={cn(
				"relative w-full h-screen min-h-[820px] flex justify-center items-center overflow-hidden bg-black",
				className
			)}
		>
			<video
				className="absolute top-0 left-0 w-full h-full object-cover"
				src={hero_video_url || "hero-video-1-min.mp4"}
				autoPlay
				loop
				muted
				playsInline
			/>
			{!hideBackgroundOverlay && <div className="absolute inset-0 bg-black/60"></div>}
			<div className={cn("z-10", childrenContainerClassName)}>{children}</div>
		</section>
	)
}
