"use client"
import { cn } from "@/utils"
import { useEffect, useRef } from "react"

interface IVideoSection {
	video_url?: string
	subtitle?: string
	id?: string
	className?: string
	children?: React.ReactNode
	showVideoOverlay?: boolean
}

export default function VideoSection({ id, video_url, className, children, showVideoOverlay = true }: IVideoSection) {
	const videoRef = useRef<HTMLVideoElement | null>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const videoPath = video_url || "/hero-video-1-min.mp4"
	const isYouTube = videoPath.includes("youtube.com") || videoPath.includes("youtu.be")
	const isVimeo = videoPath.includes("vimeo.com")
	const isDirectVideo = !isYouTube && !isVimeo

	// Get YouTube embed URL
	const getYouTubeEmbedUrl = (url: string) => {
		const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
		const match = url.match(regExp)
		const videoId = match && match[2].length === 11 ? match[2] : null
		return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&enablejsapi=1&autohide=1&wmode=opaque&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1&mute=1&playlist=${videoId}`
	}

	// Get Vimeo embed URL
	const getVimeoEmbedUrl = (url: string) => {
		const regExp = /vimeo\.com\/(?:video\/)?(\d+)/
		const match = url.match(regExp)
		const videoId = match ? match[1] : null
		return `https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1&background=1&transparent=0&autopause=0&controls=0&title=0&byline=0&portrait=0&background=1&muted=1`
	}

	useEffect(() => {
		// Force iframe to fill container completely
		const updateIframeSize = () => {
			if (containerRef.current) {
				const container = containerRef.current
				const iframe = container.querySelector("iframe")
				if (iframe) {
					iframe.style.position = "absolute"
					iframe.style.width = "100%"
					iframe.style.height = "100%"
					iframe.style.top = "0"
					iframe.style.left = "0"
					iframe.style.objectFit = "cover"
				}
			}
		}

		updateIframeSize()
		window.addEventListener("resize", updateIframeSize)
		return () => window.removeEventListener("resize", updateIframeSize)
	}, [isYouTube, isVimeo])

	return (
		<section
			{...(id ? { id } : {})}
			className={cn(
				"relative w-full h-screen min-h-[820px] flex justify-center items-center overflow-hidden bg-black",
				className
			)}
		>
			<div ref={containerRef} className="absolute inset-0 flex items-center justify-center bg-gray-900">
				{isDirectVideo ? (
					<video
						ref={videoRef}
						autoPlay
						muted
						loop
						playsInline
						className="absolute inset-0 w-full h-full object-cover"
						style={{ objectFit: "cover" }}
					>
						<source src={videoPath} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				) : isYouTube ? (
					<div className="absolute inset-0 w-full h-full overflow-hidden">
						<iframe
							src={getYouTubeEmbedUrl(videoPath)}
							className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover"
							}}
						/>
					</div>
				) : isVimeo ? (
					<div className="absolute inset-0 w-full h-full overflow-hidden">
						<iframe
							src={getVimeoEmbedUrl(videoPath)}
							// -translate-x-1/2 -translate-y-1/2
							className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full"
							frameBorder="0"
							allow="autoplay; fullscreen; picture-in-picture"
							allowFullScreen
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover"
							}}
						/>
					</div>
				) : null}
				{showVideoOverlay && <div className="absolute inset-0 bg-black/60"></div>}
			</div>
			<div className="z-10 w-full">{children}</div>
		</section>
	)
}

// "use client"
// "use client"
// import { cn } from "@/utils"
// import { useEffect, useRef } from "react"

// interface IVideoSection {
// 	video_url?: string
// 	subtitle?: string
// 	id?: string
// 	className?: string
// 	children?: React.ReactNode
// }

// export default function VideoSection({ id, video_url, className, children }: IVideoSection) {
// 	const videoRef = useRef<HTMLVideoElement | null>(null)
// 	const containerRef = useRef<HTMLDivElement>(null)
// 	// Process video URL
// 	const getGoogleDriveFileId = (url: string): string | null => {
// 		try {
// 			// Handle Google Drive preview links
// 			if (url.includes('drive.google.com/file/d/')) {
// 				return url.split('/d/')[1].split('/')[0];
// 			}
// 			// Handle Google Drive share links
// 			const driveRegex = /drive\.google\.com\/file\/d\/([^/]+)/;
// 			const match = url.match(driveRegex);
// 			if (match?.[1]) return match[1];

// 			// Handle direct Google Drive video ID
// 			const idMatch = url.match(/[\w-]{25,}/);
// 			return idMatch ? idMatch[0].replace(/["?]$/, '') : null;
// 		} catch (error) {
// 			console.error('Error extracting Google Drive file ID:', error);
// 			return null;
// 		}
// 	};

// 	const googleDriveFileId = video_url ? getGoogleDriveFileId(video_url) : null;
//   const processedUrl = video_url || "/hero-video-1-min.mp4";

//   const isYouTube = video_url?.includes("youtube.com") || video_url?.includes("youtu.be");
//   const isVimeo = video_url?.includes("vimeo.com");
//   const isGoogleDrive = !!googleDriveFileId;
//   const isDirectVideo = !isYouTube && !isVimeo && !isGoogleDrive;

// 	// Get YouTube embed URL
// 	const getYouTubeEmbedUrl = (url: string) => {
// 		const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
// 		const match = url.match(regExp)
// 		const videoId = match && match[2].length === 11 ? match[2] : null
// 		return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&enablejsapi=1&autohide=1&wmode=opaque&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1&mute=1&playlist=${videoId}`
// 	}

// 	// Get Vimeo embed URL
// 	const getVimeoEmbedUrl = (url: string) => {
// 		const regExp = /vimeo\.com\/(?:video\/)?(\d+)/
// 		const match = url.match(regExp)
// 		const videoId = match ? match[1] : null
// 		return `https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1&background=1&transparent=0&autopause=0&controls=0&title=0&byline=0&portrait=0&background=1&muted=1`
// 	}

// 	useEffect(() => {
// 		// Force iframe to fill container completely
// 		const updateIframeSize = () => {
// 			if (containerRef.current) {
// 				const container = containerRef.current
// 				const iframe = container.querySelector("iframe")
// 				if (iframe) {
// 					iframe.style.position = "absolute"
// 					iframe.style.width = "100%"
// 					iframe.style.height = "100%"
// 					iframe.style.top = "0"
// 					iframe.style.left = "0"
// 					iframe.style.objectFit = "cover"
// 				}
// 			}
// 		}

// 		updateIframeSize()
// 		window.addEventListener("resize", updateIframeSize)
// 		return () => window.removeEventListener("resize", updateIframeSize)
// 	}, [isYouTube, isVimeo])

// 	return (
// 		<section
// 			{...(id ? { id } : {})}
// 			className={cn(
// 				"relative w-full h-screen min-h-[820px] flex justify-center items-center overflow-hidden bg-black",
// 				className
// 			)}
// 		>
// 			<div ref={containerRef} className="absolute inset-0 flex items-center justify-center bg-gray-900">
// 				{isGoogleDrive && googleDriveFileId && (
//           <div className="absolute inset-0 w-full h-full">
//             <iframe
//               src={`https://drive.google.com/file/d/${googleDriveFileId}/preview?autoplay=1&mute=1`}
//               className="absolute top-0 left-0 w-full h-full"
//               frameBorder="0"
//               allow="autoplay; fullscreen; picture-in-picture; accelerometer; gyroscope"
//               allowFullScreen
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover"
//               }}
//             />
//           </div>
//         )}
//         {isDirectVideo && (
//           <div className="absolute inset-0 w-full h-full">
//             <video
//               ref={videoRef}
//               autoPlay
//               muted
//               loop
//               playsInline
//               controls
//               className="absolute inset-0 w-full h-full object-cover"
//               style={{ objectFit: 'cover' }}
//             >
//               <source src={processedUrl} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         )}
// 				{isYouTube ? (
// 					<div className="absolute inset-0 w-full h-full overflow-hidden">
// 						<iframe
// 							src={getYouTubeEmbedUrl(processedUrl)}
// 							className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
// 							frameBorder="0"
// 							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// 							allowFullScreen
// 							style={{
// 								width: "100%",
// 								height: "100%",
// 								objectFit: "cover"
// 							}}
// 						/>
// 					</div>
// 				) : isVimeo ? (
// 					<div className="absolute inset-0 w-full h-full overflow-hidden">
// 						<iframe
// 							src={getVimeoEmbedUrl(processedUrl)}
// 							className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
// 							frameBorder="0"
// 							allow="autoplay; fullscreen; picture-in-picture"
// 							allowFullScreen
// 							style={{
// 								width: "100%",
// 								height: "100%",
// 								objectFit: "cover"
// 							}}
// 						/>
// 					</div>
// 				) : null}
// 				<div className="absolute inset-0 bg-black/60"></div>
// 			</div>
// 			<div className="z-10 w-full">{children}</div>
// 		</section>
// 	)
// }
