import { devLog, inDevelopment } from "./dev-utils"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export default async function fetchData({ route, method = "GET", body = null, debug = inDevelopment }) {
	const full_url = `${BASE_URL}/api/${route}`
	const response = await fetch(full_url, {
		method,
		body: body ? JSON.stringify(body) : null,
		headers: {
			// only send the token on the server side
			Authorization: typeof window === "undefined" ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` : null,
			"Content-Type": "application/json"
		}
	})
	const data = await response.json()
	// log(`${full_url} [${response.status}]`)
	if (response.status >= 400) {
		log(`error response`, data)
	}
	return data

	function log(...args) {
		if (debug) {
			devLog("🚀fetchData", ...args)
		}
	}
}

export function getHomepage() {
	return fetchData({
		route: "homepage?[populate]=*",
		debug: true
	})
}

export async function LogIn({ body, debug = inDevelopment }) {
	const full_url = `${BASE_URL}/api/auth/local`
	try {
		const response = await fetch(full_url, {
			method: "POST",
			body: body ? JSON.stringify(body) : null,
			headers: {
				// only send the token on the server side
				// Authorization: typeof window === "undefined" ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` : null,
				"Content-Type": "application/json"
			}
		})
		const data = await response.json()
		if (response.ok) {
			// log(`${full_url} [${response.status}]`)
			// if (response.status >= 400) {
			// 	log(`error response`, data)
			// }
			window.localStorage.setItem("vanti_info_user", JSON.stringify(data))
			return data
		} else {
			if (data?.error?.message) {
				throw { error: data?.error?.message }
			}
			throw { error: data }
		}
	} catch (error) {
		console.error("Error login fail: ", error)
		return error
	}
}
