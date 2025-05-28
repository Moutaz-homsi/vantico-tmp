"use client"

import React, { useEffect } from "react"
import Image from "@/components/ui/image"
import { Container } from "@/components/layout"
import Title from "@/components/ui/title"

export default function ConsultationSection({ title, boldTitle, calendlyUrl, backgroundImage, minHeight = "630px" }) {
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
		<div className="relative bg-black py-10 md:py-30">
			<div
				className="max-w-7xl min-h-80 mx-auto p-4 md:p-32"
				style={{
					background: `url(${backgroundImage?.url})`
				}}
			>
				<div className="bg-white  p-4 md:p-16  ">
					<Title className="text-2xl">
						BOOK A 15-MIN <br /> INVESTOR <br /> CONSULTATION
					</Title>
					<div
						className="calendly-inline-widget"
						data-url={`${calendlyUrl}?hide_gdpr_banner=1&hide_event_type_details=1&text_color=000000&primary_color=000000`}
						data-resize="true"
						style={
							{
								// height: minHeight
							}
						}
					/>
				</div>
			</div>
		</div>
	)
}
