import { cn } from "@/utils/style-utils"
import React from "react"

export default function Container({ children, className = "" }) {
  return <div className={cn("container mx-auto", className)}>{children}</div>
}
