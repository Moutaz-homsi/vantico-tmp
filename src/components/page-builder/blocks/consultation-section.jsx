"use client"

import React, { useEffect } from "react"
import Image from "@/components/ui/image"
import { Container } from "@/components/layout"
import Title from "@/components/ui/title"
import Calendly from "@/components/calendly"

const backgroundImage = {
	url: "https://vantico-backend.webotak.com/uploads/DJI_20250520134827_0065_D_ed6af30e6d.jpg",
	width: 1920,
	height: 1080
}
const calendlyUrl = "https://calendly.com/hatem-a-abushaala/15min"
export default function ConsultationSection({ calendlyUrl }) {
	useEffect(() => {
		// Load Calendly widget script
		const script = document.createElement("script")
		script.src = "https://assets.calendly.com/assets/external/widget.js"
		script.async = true
		document.body.appendChild(script)

		return () => {
			document.body.removeChild(script)
		}
	}, [])

	return (
		<div className="relative bg-white py-10 md:py-0">
			<div
				className="w-full min-h-80 mx-auto p-4 md:p-32 bg-no-repeat bg-cover bg-center bg-fixed relative"
				style={{
					backgroundImage: `url(${backgroundImage?.url})`,
				}}
			>
				{/* <div className="absolute inset-0 bg-black/50 z-[1]"></div> */}
				{/* <div className="bg-white rounded-xl p-4 md:p-11 max-w-5xl mx-auto z-10 relative"> */}
					{/* <Title className="text-2xl color-white text-center">
						Contact Us
					</Title> */}
					<Calendly calendlyUrl={calendlyUrl} />
				{/* </div> */}
			</div>
		</div>
	)
}
