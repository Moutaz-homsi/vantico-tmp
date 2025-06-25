"use client"

import { useLenis } from "@/context/smooth-scroll-srovider"
import Link from "next/link"

export default function BookmarkLink({ href, children, ...rest }: { href: string; children: React.ReactNode }) {
  const lenis = useLenis()
  const { onClick, ...otherProps } = rest as { onClick?: React.MouseEventHandler; [key: string]: any }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!href.startsWith("#")) return
    lenis?.scrollTo(href, { duration: 1.8, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    window.history.pushState({}, "", href)
  }

  const combinedClick = (e: React.MouseEvent) => {
    handleClick(e)
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Link href={href} onClick={combinedClick} {...otherProps}>
      {children}
    </Link>
  )
}
