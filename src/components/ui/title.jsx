import { cn } from "@/utils"
import React from "react"

export default function Title({ text = null, children, className = "" }) {
	return (
		<h2
		// leading-[100%]
			className={cn("text-4xl md:text-[56px] font-secondary text-[#151515]", className)}
		>
			{text ?? children ?? ""}
		</h2>
	)
}
