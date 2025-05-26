import { Button } from "@/components/ui"
import { ChevronRight } from "lucide-react"
import Image from "@/components/ui/image"
import React from "react"
import Title from "@/components/ui/title"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Ready() {
	return (
		<section id="ready" className="relative w-full flex items-center justify-start overflow-hidden">
			{/* Background image on the right */}
			<div className="absolute right-0 top-0 h-full w-3/4 md:w-1/3 z-0">
				<Image
					src="/bg-logo.png"
					alt="Background logo"
					isFill
					quality={80}
					fetchPriority="auto"
					className=" object-right h-full w-full opacity-80"
				/>
			</div>

			<div className=" z-10 flex flex-col gap-14 items-start max-w-6xl mx-auto  px-8 py-16 md:p-30 ">
				<Title className="">
					Ready to transform
					<br />
					your digital experience?
				</Title>

				<Button variant="dark">
					Schedule a free consultation <ChevronRight className="ml-2" size={24} />
				</Button>
			</div>
		</section>
	)
}
