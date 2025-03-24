export default function calculateROI({ initialInvestment, annualReturn = 0, rate = 0, years, compound = false }) {
	let totalGain

	if (compound) {
		// Compound Interest Formula: A = P (1 + r)^t
		let finalAmount = initialInvestment * Math.pow(1 + rate, years)
		totalGain = finalAmount - initialInvestment
	} else {
		// Simple ROI without compounding
		totalGain = initialInvestment * rate * years + annualReturn * years
	}

	let roi = (totalGain / initialInvestment) * 100

	return {
		totalGain: totalGain.toFixed(2),
		roi: roi.toFixed(2) + "%"
	}
}

// Example Usage
// console.log('100$ no compound',calculateROI({ initialInvestment: 100, rate: 0.1, years: 5, compound: false })); // No compounding, 10% rate
// console.log('100$ with compound',calculateROI({ initialInvestment: 100, rate: 0.1, years: 5, compound: true }));  // With compounding
// console.log('100$ with 20$ annual return',calculateROI({ initialInvestment: 100, annualReturn: 20, years: 5, compound: false })); // Annual return, no rate
