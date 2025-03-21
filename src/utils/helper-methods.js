export const isNullOrEmpty = (param) => {
	// null check will work the same way for different types
	if (param == null) return true

	if (typeof param === "string" || Array.isArray(param)) {
		return param.length === 0
	}

	if (typeof param === "number" || typeof param === "bigint") return false

	return Object.keys(param).length === 0
}
