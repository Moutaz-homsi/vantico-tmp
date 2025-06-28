"use client"
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/style-utils"
import { useModal } from "@/hooks/use-model"
import Calendly from "../calendly"

const buttonVariants = cva(
	"inline-flex items-center py-3 px-8 justify-center gap-2 whitespace-nowrap  text-md rounded-sm font-bold transition-all hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive select-none",
	{
		variants: {
			variant: {
				default: "bg-white text-black  hover:opacity-80 ",
				dark: "bg-black text-white  hover:opacity-80 ",
				text: "bg-transparent text-white  hover:opacity-80 ",
				destructive:
					"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
				outline: "border  bg-transparent    hover:bg-primary hover:text-accent-foreground    dark:border-input ",
				secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
				link: "text-primary underline-offset-4 hover:underline"
			}
		},
		defaultVariants: {
			variant: "default"
		}
	}
)

function Button({
	className,
	variant,
	asChild = false,
	onClick,
	type,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}) {
	const { open, close } = useModal()

	const Comp = asChild ? Slot : "button"

	return (
		<Comp
			type={type}
			onClick={(e) => {
				if (type === "submit") return
				// currently will only open the consultation modal if no onClick is provided
				if (!onClick) {
					open({
						title: "BOOK A 15-MIN INVESTOR CONSULTATION",
						children: <Calendly />,
						wideContent: true
					})
					return
				}

				return onClick(e)
			}}
			data-slot="button"
			className={cn(buttonVariants({ variant, className }))}
			{...props}
		/>
	)
}

export { Button, buttonVariants }
