"use client"

import React from "react"
import { cn } from "@/utils/style-utils"

export default function Container({
	children,
	className = "",
	as: Component = "div",
	fluid = false,
	noGutters = false,
	...props
}) {
	return (
		<Component
			className={cn("mx-auto", !fluid && "max-w-7xl", !noGutters && "px-4 md:px-6 lg:px-[7.5rem]", className)}
			{...props}
		>
			{children}
		</Component>
	)
}
