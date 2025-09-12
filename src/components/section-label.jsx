import { cn } from "@/utils"
import React from "react"

const defaultClasses = {
	light: "bg-[#FAF6F2] text-[#AB804A]",
	dark: "bg-[#1E1E1E] text-[#AB804A]"
}
export default function SectionLabel({ className = "", variant = "light", label }) {
	return (
		<span className={cn("rounded-xs font-semibold text-lg md:text-xl px-4 py-2 uppercase", defaultClasses[variant], className)}>
			{label}
		</span>
	)
}
