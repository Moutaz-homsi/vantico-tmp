export interface ParsedAnimatedValue {
	prefix: string
	numericValue: number
	suffix: string
	shouldAnimate: boolean
}

export const parseAnimatedValue = (value: string | number): ParsedAnimatedValue => {
	const strValue = typeof value === "number" ? value.toString() : value
	const match = strValue.match(/([^\d]*)([\d,.]+)([^\d]*)/)

	if (!match)
		return {
			prefix: "",
			numericValue: 0,
			suffix: strValue,
			shouldAnimate: false
		}

	return {
		prefix: match[1] || "",
		numericValue: parseFloat(match[2].replace(/,/g, "")),
		suffix: match[3] || "",
		shouldAnimate: true
	}
}
