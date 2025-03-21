export function isNumericString(value) {
  if (typeof value !== "string" || !value) return false

  return (
    !isNaN(value) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(value))
  ) // ...and ensure strings of whitespace fail
}

/* 
      this function is useful when you want to get number from anything with fullback for NaN
      so that we don't have to do type check and fallback
  */
export function getNumber(number, fullback = 0) {
  if (Number.isNaN(number)) return fullback
  return isNumber(number) ? Number(number) : fullback
}

export function isNumber(value) {
  if (typeof value === "string") return isNumericString(value)
  else return typeof value === "number"
}

export const calcPriceAfterDiscount = (price, discount) => {
  return getNumber(price) * (1 - getNumber(discount) / 100)
}

export function calculateDiscountPercent(price, discountAmount) {
  if (!price) return 0
  // Calculate the discount percentage
  var discountPercent = (discountAmount / price) * 100

  // Optionally, round the result to 2 decimal places or as needed
  discountPercent = Math.round(discountPercent * 100) / 100

  return getNumber(discountPercent, 0)
}

// input: 0001 => Output 0002
/**
 *
 * @param {string} inputString
 * @returns {string}
 */
export function incrementString(inputString) {
  if (!inputString) return
  // Extract the numeric part from the input string
  var numericPart = inputString.match(/\d+$/)[0]

  // Convert the numeric part to a number, increment it, and convert it back to a string
  var newNumericPart = (parseInt(numericPart) + 1).toString()

  // Calculate the number of zeros needed for padding
  var zeroPadding = Math.max(0, numericPart.length - newNumericPart.length)

  // Pad the new numeric part with zeros
  var paddedNumericPart = "0".repeat(zeroPadding) + newNumericPart

  // Replace the old numeric part with the new padded numeric part in the input string
  var resultString = inputString.replace(/\d+$/, paddedNumericPart)

  return resultString
}

export function addCommas(text) {
  if (!text) return ""
  if (typeof text != "string") text = `${text}`
  if (!text.includes(".")) return text.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  let parts = text.split(".")
  return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + `.${parts[1] ?? ""}`
}

export function truncate(number, decimalPlaces = 2) {
  if (typeof number == "string" && number.endsWith(".")) return number

  const factor = Math.pow(10, decimalPlaces)
  return Math.floor(number * factor) / factor
}
