import { cn } from "@/utils/style-utils"
import React from "react"

export default function Container({ children, className = "" }) {
  return <div className={cn("container mx-auto md:max-w-5xl", className)}>{children}</div>
}
