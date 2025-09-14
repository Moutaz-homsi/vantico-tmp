"use client"

import React, { useEffect } from "react"
import { Container } from "@/components/layout"
import Calendly from "@/components/calendly"

const backgroundImage = {
	url: "https://vantico-backend.webotak.com/uploads/DJI_20250520134827_0065_D_ed6af30e6d.jpg",
	width: 1920,
	height: 1080
}
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
		<div className="relative bg-white">
			<div
				className="
					w-full min-h-80 mx-auto md:py-20 lg:py-[7.5rem]
					bg-none md:bg-[url('https://vantico-backend.webotak.com/uploads/DJI_20250520134827_0065_D_ed6af30e6d.jpg')]
					bg-no-repeat bg-cover bg-center bg-fixed relative
				"
			>
				<Calendly calendlyUrl={calendlyUrl} />
			</div>
		</div>
	)
}
