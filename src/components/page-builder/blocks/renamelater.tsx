import { Button } from "@/components/ui"
import { ChevronRight } from "lucide-react"
import Image from "@/components/ui/image"
import React from "react"

export default function Renamelater() {
	return (
		<section className="relative w-full min-h-[400px] flex items-center justify-start py-40 overflow-hidden">
			{/* Background image on the right */}
			<div className="absolute inset-0 pointer-events-none select-none">
				<div className="hidden md:block absolute right-0 top-0 h-full w-1/2 z-0">
					<Image
						src="/bg-logo.png"
						alt="Background logo"
						isFill
						styles={{}}
						quality={80}
						sizes="50vw"
						fetchPriority="auto"
						className="object-contain object-right h-full w-full opacity-80"
					/>
				</div>
			</div>

			<div className="relative z-10 flex flex-col items-start max-w-7xl mx-auto  ">
				<h2 className="text-4xl md:text-6xl font-secondary tracking-tighter mb-12 uppercase text-black text-left">
					Ready to transform
					<br className="hidden md:block" />
					your digital experience?
				</h2>

				<Button variant="dark">
					Schedule a free consultation <ChevronRight className="ml-2" size={24} />
				</Button>
			</div>
		</section>
	)
}
