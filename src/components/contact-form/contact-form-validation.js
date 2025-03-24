export const validate = (values) => {
	const newErrors = { name: "", email: "", message: "" }
	let isValid = true

	if (values.name.trim().length < 2) {
		newErrors.name = "Name must be at least 2 characters"
		isValid = false
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (!emailRegex.test(values.email)) {
		newErrors.email = "Please enter a valid email address"
		isValid = false
	}

	if (values.message.trim().length < 10) {
		newErrors.message = "Message must be at least 10 characters"
		isValid = false
	}

	return { isValid, errors: newErrors }
}
