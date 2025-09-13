import React from "react"

interface VideoBackgroundProps {
	videoSrc: string
	children: React.ReactNode
	className?: string
	childrenContainerClassName?: string
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
	videoSrc,
	children,
	className = "",
	childrenContainerClassName = ""
}) => {
	return (
		<div className={`relative w-full overflow-hidden ${className}`}>
			<video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata">
				<source src={videoSrc} type="video/mp4" />
			</video>

			{/* Content overlay */}
			<div className={`relative z-10 ${childrenContainerClassName}`}>{children}</div>
		</div>
	)
}

export default VideoBackground
