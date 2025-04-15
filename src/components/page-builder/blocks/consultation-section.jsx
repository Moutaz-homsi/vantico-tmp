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
		<div className="relative">
			{backgroundImage && (
				<div className="absolute inset-0 w-full h-full">
					<Image
						src={backgroundImage.url}
						strapiImage={backgroundImage}
						isFill
						sizes="100vw"
						className="object-cover"
						alt="Consultation background"
					/>
					<div className="absolute inset-0 bg-black/30" />
				</div>
			)}

			<Container className="relative z-20 py-44">
				<div className="bg-white size-fit mx-auto p-20 max-w-[800px] ">
					{title && (
						<h2 className="text-[4rem] font-extralight leading-[110%] mb-6">
							{title} <span className="font-normal">{boldTitle}</span>
						</h2>
					)}
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
			</Container>
		</div>
	)
}
