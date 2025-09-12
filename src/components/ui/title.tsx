import { cn } from "@/utils"
import React from "react"

interface ITitle {
	text?: string
	children?: React.ReactNode
	className?: string
}
export default function Title({ text = "", children, className = "" }: ITitle) {
	return (
		<h2
			className={cn("text-4xl md:text-[56px] font-secondary text-[#151515]", className)}
		>
			{text ? text : children ? children : ""}
		</h2>
	)
}
