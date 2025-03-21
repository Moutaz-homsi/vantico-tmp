import {
	isNumericString,
	getNumber,
	isNumber,
	calcPriceAfterDiscount,
	calculateDiscountPercent,
	incrementString
} from "../src/utils/numberUtils"

describe("isNumericString", () => {
	test("returns true for numeric strings", () => {
		expect(isNumericString("123")).toBe(true)
	})

	test("returns false for non-numeric strings", () => {
		expect(isNumericString("abc")).toBe(false)
	})

	test("returns false for empty strings", () => {
		expect(isNumericString("")).toBe(false)
	})

	test("returns false for string with spaces", () => {
		expect(isNumericString(" ")).toBe(false)
	})
})

describe("getNumber", () => {
	test("returns number for numeric input", () => {
		expect(getNumber("42")).toBe(42)
	})
	test("returns number for numeric input", () => {
		expect(getNumber(NaN)).toBe(0)
	})

	test("returns fallback for non-numeric input", () => {
		expect(getNumber("notANumber", 10)).toBe(10)
	})
})

describe("isNumber", () => {
	test("returns true for number type", () => {
		expect(isNumber(123)).toBe(true)
	})

	test("returns true for numeric string", () => {
		expect(isNumber("123")).toBe(true)
	})

	test("returns false for non-numeric string", () => {
		expect(isNumber("abc")).toBe(false)
	})
})

describe("calcPriceAfterDiscount", () => {
	test("calculates correct price after discount", () => {
		expect(calcPriceAfterDiscount(100, 20)).toBe(80)
	})
})

describe("calculateDiscountPercent", () => {
	test("calculates correct discount percent", () => {
		expect(calculateDiscountPercent(100, 25)).toBe(25)
	})
	test("calculates correct discount percent", () => {
		expect(calculateDiscountPercent(0, 0)).toBe(0)
	})
})

describe("incrementString", () => {
	test("increments string correctly", () => {
		expect(incrementString("foo009")).toBe("foo010")
	})
})
