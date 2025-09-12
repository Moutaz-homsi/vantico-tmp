import React from "react"
import { cn } from "@/utils"

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
			{text ? <div dangerouslySetInnerHTML={{ __html: text }} /> : children ? children : ""}
		</h2>
	)
}
