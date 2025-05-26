import { Button } from "@/components/ui"
import { ChevronRight } from "lucide-react"
import Image from "@/components/ui/image"
import React from "react"

export default function Ready() {
	return (
		<section id="ready" className="relative w-full flex items-center justify-start p-30 overflow-hidden">
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

			<div className="relative z-10 flex flex-col gap-14 items-start max-w-6xl mx-auto  ">
				<h2 className="text-[56px] leading-[100%] font-secondary tracking-[-4%]  text-black text-left">
					Ready to transform
					<br />
					your digital experience?
				</h2>

				<Button variant="dark">
					Schedule a free consultation <ChevronRight className="ml-2" size={24} />
				</Button>
			</div>
		</section>
	)
}
