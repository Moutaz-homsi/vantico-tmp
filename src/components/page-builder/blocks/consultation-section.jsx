"use client"

import React, { useEffect } from "react"
import Image from "@/components/ui/image"
import { Container } from "@/components/layout"

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
		<div className="relative bg-black py-30">
			<div
				className="max-w-7xl min-h-80 mx-auto p-32"
				style={{
					background: `url(${backgroundImage?.url})`
				}}
			>
				<div className="bg-white  p-16  ">
					<h2 className="text-5xl font-secondary leading-tight mb-6">
						BOOK A 15-MIN <br /> INVESTOR <br /> CONSULTATION
					</h2>
					<div
						className="calendly-inline-widget"
						data-url={`${calendlyUrl}?hide_gdpr_banner=1&hide_event_type_details=1&text_color=000000&primary_color=000000`}
						data-resize="true"
						style={{
							minWidth: "320px",
							height: minHeight
						}}
					/>
				</div>
			</div>
			{/* {backgroundImage && (
				<div className="absolute inset-0 w-full h-full">
					<Image
						src={backgroundImage.url}
						strapiImage={backgroundImage}
						isFill
						sizes="100vw"
						className="object-cover"
						alt="Consultation background"
					/>
				</div>
			)} */}
		</div>
	)
}
