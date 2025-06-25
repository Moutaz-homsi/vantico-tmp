import CountUp from "react-countup"
import { parseAnimatedValue } from "@/utils/valueParser"

interface AnimatedValueProps {
	value: string | number
	duration?: number
}

export default function AnimatedValue({ value, duration = 2 }: AnimatedValueProps) {
	const { prefix, numericValue, suffix, shouldAnimate } = parseAnimatedValue(value)

	// If window is not available (e.g., SSR), just return the value as is
	if (typeof window === "undefined") {
		return <span>{value}</span>
	}

	return (
		<span>
			{prefix}
			{shouldAnimate ? (
				<CountUp
					end={numericValue}
					duration={duration}
					separator=","
					decimals={typeof value === "string" && value.includes(".") ? 2 : 0}
					enableScrollSpy
					scrollSpyOnce
				/>
			) : (
				numericValue.toLocaleString()
			)}
			{suffix}
		</span>
	)
}
