"use client"
import { cn } from "@/utils/style-utils"

interface SpiralMenuIconProps {
  isOpen: boolean
  onClick: () => void
}

export default function SpiralMenuIcon({ isOpen, onClick }: SpiralMenuIconProps) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="relative w-10 h-10 flex items-center justify-center group cursor-pointer"
    >
      <div
        className={cn(
          "relative w-6 h-[2px] bg-white transition-all duration-500 ease-in-out",
          isOpen ? "rotate-45" : "rotate-0"
        )}
      />
      <div
        className={cn(
          "absolute w-6 h-[2px] bg-white transition-all duration-500 ease-in-out",
          isOpen
            ? "opacity-0"
            : "translate-y-[8px] group-hover:translate-y-[10px]"
        )}
      />
      <div
        className={cn(
          "absolute w-6 h-[2px] bg-white transition-all duration-500 ease-in-out",
          isOpen
            ? "-rotate-45"
            : "-translate-y-[8px] group-hover:-translate-y-[10px]"
        )}
      />
    </button>
  )
}
