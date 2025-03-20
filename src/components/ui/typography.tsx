import { cn } from "@/utils/style-utils"
import React from "react"

export default function Typography({ variant = "body", className = "", children }: TypographyProps) {
  const Component: React.ElementType = variant === "body" ? "p" : variant // TODO modify this to handle body and <p> tags
  return <Component className={cn(baseStyles[variant], className)}>{children}</Component>
}

export interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "body"
  className?: string
  children: React.ReactNode
}

// ref: https://ui.shadcn.com/docs/components/typography#h3
const baseStyles = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  body: "leading-7 [&:not(:first-child)]:mt-6",
}
