// Grid positioning utility for responsive smart layout
export function get4ColPosition(index: number, totalCards: number): string {
	const remainder = totalCards % 2 // 2 cards per row in 4-column grid
	const isLastRow = index >= totalCards - remainder

	if (remainder === 1 && isLastRow) {
		// 1 card: center it (columns 2-3)
		return "2 / 4"
	}

	// Normal: span 2 columns
	return "span 2"
}

export function get6ColPosition(index: number, totalCards: number): string {
	const remainder = totalCards % 3 // 3 cards per row in 6-column grid
	const isLastRow = index >= totalCards - remainder
	const positionInLastRow = index - (totalCards - remainder)

	if (remainder > 0 && isLastRow) {
		if (remainder === 1) {
			// 1 card: center it (columns 3-4)
			return "3 / 5"
		} else if (remainder === 2) {
			// 2 cards: center them (columns 2-3 and 4-5)
			if (positionInLastRow === 0) return "2 / 4"
			if (positionInLastRow === 1) return "4 / 6"
		}
	}

	// Normal: span 2 columns
	return "span 2"
}

// Convert positions to Tailwind classes
export function getResponsiveGridClasses(index: number, totalCards: number): string {
	const col4Position = get4ColPosition(index, totalCards)
	const col6Position = get6ColPosition(index, totalCards)

	// 4-column classes (md breakpoint)
	let mdClasses = ""
	switch (col4Position) {
		case "span 2":
			mdClasses = "md:col-span-2"
			break
		case "2 / 4":
			mdClasses = "md:col-start-2 md:col-end-4"
			break
	}

	// 6-column classes (xl breakpoint)
	let xlClasses = ""
	switch (col6Position) {
		case "span 2":
			xlClasses = "xl:col-span-2"
			break
		case "3 / 5":
			xlClasses = "xl:col-start-3 xl:col-end-5"
			break
		case "2 / 4":
			xlClasses = "xl:col-start-2 xl:col-end-4"
			break
		case "4 / 6":
			xlClasses = "xl:col-start-4 xl:col-end-6"
			break
	}

	return `${mdClasses} ${xlClasses}`.trim()
}
