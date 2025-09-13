interface VideoBackgroundProps {
	videoSrc: string
	children: React.ReactNode
	className?: string
	childrenContainerClassName?: string
	opacityPercentage?: number
}

export default function VideoBackground({
	videoSrc,
	children,
	className = "",
	childrenContainerClassName = "",
	opacityPercentage = 0
}: VideoBackgroundProps) {
	return (
		<div className={`relative w-full overflow-hidden ${className}`}>
			<video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata">
				<source src={videoSrc} type="video/mp4" />
			</video>

			<div className={`absolute inset-0 bg-black opacity-${opacityPercentage}`} />

			{/* Content overlay */}
			<div className={`relative z-10 ${childrenContainerClassName}`}>{children}</div>
		</div>
	)
}
