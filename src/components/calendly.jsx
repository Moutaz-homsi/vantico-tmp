"use client"

import { cn } from "@/utils"
import { useEffect } from "react"

const calendlyUrl = "https://calendly.com/hatem-a-abushaala/15min"
export default function Calendly({ className, style }) {
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
		<div
			className={cn("calendly-inline-widget")}
			data-url={`${calendlyUrl}?hide_gdpr_banner=1&hide_event_type_details=1&text_color=000000&primary_color=000000`}
			data-resize="true"
			style={style}
		></div>
	)
}
