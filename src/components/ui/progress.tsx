"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/utils"

const Progress = React.forwardRef<
	React.ElementRef<typeof ProgressPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
	<ProgressPrimitive.Root
		ref={ref}
		className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
		{...props}
	>
		<ProgressPrimitive.Indicator
			className="h-full w-full flex-1 bg-primary transition-all"
			style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
		/>
	</ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }

interface Segment {
	value: number // percentage (0–100)
	colorClass?: string // tailwind class like "bg-primary"
	label?: string | React.ReactNode // optional label for this segment
	bgColor: string
}

interface MultiProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
	segments: Segment[]
	duration?: number
	showLabels?: boolean
}

const MultiProgress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, MultiProgressProps>(
	({ className, segments, duration = 1.5, showLabels = false, ...props }, ref) => {
		const containerRef = React.useRef<HTMLDivElement>(null)
		const [animatedWidths, setAnimatedWidths] = React.useState<number[]>(segments.map(() => 0))
		const hasAnimated = React.useRef(false)

		const total = React.useMemo(() => segments.reduce((sum, seg) => sum + seg.value, 0), [segments])
		const normalizedSegments = React.useMemo(() => {
			return segments.map((seg) => ({
				...seg,
				normalizedValue: total > 0 ? (seg.value / total) * 100 : 0
			}))
		}, [segments, total])

		React.useEffect(() => {
			if (!containerRef.current || hasAnimated.current) return

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						hasAnimated.current = true
						animate()
						observer.disconnect()
					}
				},
				{ threshold: 0.4 }
			)

			observer.observe(containerRef.current)

			return () => observer.disconnect()
		}, [normalizedSegments])

		const animate = () => {
			const startTime = performance.now()
			const durationMs = duration * 1000

			const update = (now: number) => {
				const elapsed = now - startTime
				const progress = Math.min(elapsed / durationMs, 1)

				const currentWidths = normalizedSegments.map((seg) => seg.normalizedValue * progress)
				setAnimatedWidths(currentWidths)

				if (progress < 1) requestAnimationFrame(update)
			}

			requestAnimationFrame(update)
		}

		return (
			<div className="w-full" ref={containerRef}>
				<ProgressPrimitive.Root
					ref={ref}
					className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary flex", className)}
					{...props}
				>
					{normalizedSegments.map((seg, i) => (
						<div
							key={i}
							className="h-full origin-left transition-transform"
							style={{
								transform: `scaleX(${animatedWidths[i] / seg.normalizedValue})`,
								backgroundColor: seg.bgColor,
								width: `${seg.normalizedValue}%`,
								flex: "0 0 auto"
							}}
						/>
					))}
				</ProgressPrimitive.Root>

				{showLabels && (
					<div className="mt-2 flex justify-between text-sm text-white">
						{normalizedSegments.map((seg, i) => (
							<span
								key={i}
								className="text-end w-full"
								style={{
									width: `${seg.normalizedValue}%`,
									minWidth: "fit-content"
								}}
							>
								{seg.label || ""}
							</span>
						))}
					</div>
				)}
			</div>
		)
	}
)

MultiProgress.displayName = "MultiProgress"

export { MultiProgress }
