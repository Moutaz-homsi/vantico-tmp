import { cn } from "@/utils"
import React from "react"

export default function Title({ text = null, children, className = "" }) {
	return (
		<h2 className={cn("text-[56px] font-secondary tracking-[-4%] leading-[100%] text-[#151515]", className)}>
			{text ?? children ?? ""}
		</h2>
	)
}
