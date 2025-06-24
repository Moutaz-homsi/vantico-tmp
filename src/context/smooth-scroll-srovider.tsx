"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
	const lenisRef = useRef<Lenis | null>(null)

	useEffect(() => {
		if (typeof window === "undefined") {
			return
		}

		const lenis = new Lenis({
			lerp: 0.1,
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			syncTouch: true, // Replace smoothTouch
			touchMultiplier: 2,
			wheelMultiplier: 1,
			// normalizeWheel: false,
			autoResize: true

			// smoothTouch: false // disable for touch if desired
		})

		lenisRef.current = lenis

		const handleRaf = (time: number) => {
			lenis.raf(time)
			requestAnimationFrame(handleRaf)
		}
		requestAnimationFrame(handleRaf)

		return () => lenis.destroy()
	}, [])

	return <>{children}</>
}
