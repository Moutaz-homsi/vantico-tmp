"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AspectRatio } from "./ui/aspect-ratio"

export default function VideoBanner({ videoId }) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	// Vimeo video ID

	return (
		<div className="relative w-full  overflow-hidden">
			<AspectRatio ratio={16 / 9}>
				{/* Background video - Vimeo iframe with autoplay, loop, muted */}
				<iframe
					src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1&background=1`}
					className="w-full h-full absolute top-0 left-0 object-cover"
					frameBorder="0"
					allow="autoplay; fullscreen; picture-in-picture"
					title="Background video"
				></iframe>
			</AspectRatio>

			{/* Overlay with play button */}
			<div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">EXCLUSIVE Co-Investment OPPORTUNITY</h1>
					<p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
						Watch our video to learn more about what we offer
					</p>
					<Button onClick={() => setIsModalOpen(true)} size="lg" className=" bg-white text-black hover:bg-white/90">
						<Play className="h-6 w-6" />
						Watch Video
					</Button>
				</div>
			</div>

			{/* Video Modal */}
			<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
				<DialogContent className="max-w-5xl p-0 overflow-hidden bg-black border-none">
					{/* <DialogHeader className="px-6 pt-6 pb-2">
						<DialogTitle className="text-white text-xl">Our Product Video</DialogTitle>
					</DialogHeader> */}
					<div className="aspect-video w-full">
						<iframe
							src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
							className="w-full h-full"
							frameBorder="0"
							allow="autoplay; fullscreen; picture-in-picture"
							allowFullScreen
							title="Featured video"
						></iframe>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	)
}
