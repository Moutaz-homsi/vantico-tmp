"use client"

import React, { useEffect } from "react"
import Image from "@/components/ui/image"
import { Container } from "@/components/layout"
import Title from "@/components/ui/title"
import Calendly from "@/components/calendly"

const backgroundImage = {
	url: "/images/calendly-background.png",
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
				className="w-full min-h-80 mx-auto p-4 md:p-32"
				style={{
					background: `url(${backgroundImage?.url})`
				}}
			>
				<div className="bg-white p-4 md:p-16 max-w-7xl mx-auto">
					<Title className="text-2xl">
						BOOK A CALL
					</Title>
					<Calendly calendlyUrl={calendlyUrl} />
				</div>
			</div>
		</div>
	)
}
