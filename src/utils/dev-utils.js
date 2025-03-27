// log only in the development
export const inDevelopment = process.env.NODE_ENV === "development"
export const devLog = (...args) => {
	if (process.env.NODE_ENV !== "development") return
	console.log(...args)
}
export const watchCalls = (fn, fnName) => {
	if (process.env.NODE_ENV !== "development") return fn

	return (...args) => {
		console.debug(`👓 ${fnName} ~ called with the following args`, args)
		return fn(...args)
	}
}
