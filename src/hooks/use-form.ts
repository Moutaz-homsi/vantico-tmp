import { useState } from "react"

interface UseFormProps<T extends Record<string, unknown>> {
	initialValues: T
	validate: (values: T) => { isValid: boolean; errors: Partial<Record<keyof T, string>> }
	onSubmit: () => Promise<void>
}

export default function useForm<T extends Record<string, unknown>>({
	initialValues,
	validate,
	onSubmit
}: UseFormProps<T>) {
	const [formData, setFormData] = useState<T>(initialValues)
	const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [formStatus, setFormStatus] = useState<null | "success" | "error">(null)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value
		}))

		if (errors[name as keyof T]) {
			setErrors((prev) => ({
				...prev,
				[name]: ""
			}))
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		const { isValid, errors: validationErrors } = validate(formData)
		if (!isValid) {
			setErrors(validationErrors)
			return
		}

		setIsSubmitting(true)
		setFormStatus(null)

		try {
			await onSubmit()
			setFormStatus("success")
			setFormData(initialValues)
		} catch {
			setFormStatus("error")
		} finally {
			setIsSubmitting(false)
		}
	}

	const getInputProps = (name: string) => {
		return {
			name,
			value: formData[name],
			onChange: handleChange
		}
	}

	return { formData, errors, isSubmitting, formStatus, handleChange, handleSubmit, getInputProps }
}
