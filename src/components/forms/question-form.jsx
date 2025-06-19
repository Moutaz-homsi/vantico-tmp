"use client"
import React from "react"
import { Button, Input } from "../ui"
import fetchData from "@/utils/api"
import useForm from "@/hooks/use-form"
import { toast } from "react-toastify"
import { useModal } from "@/hooks/use-model"

const initialValues = {
	question: "",
	name: "",
	email: ""
}
export default function QuestionForm() {
	const { open, close } = useModal()

	const { formData, errors, isSubmitting, formStatus, handleChange, handleSubmit, getInputProps } = useForm({
		initialValues,
		onSubmit: async () => {
			try {
				await fetchData({
					route: "questions",
					method: "POST",
					body: {
						data: { ...formData }
					}
				})
				toast.success("Your question has been submitted successfully!")
				close()
			} catch (err) {
				toast.error("Failed to submit your question. Please try again later.")
			} finally {
			}
		},
		validate: (values) => {
			const newErrors = {}
			if (!values.question.trim()) {
				newErrors.question = "Question is required."
			}
			if (!values.name.trim()) {
				newErrors.name = "Name is required."
			}
			if (!values.email.trim()) {
				newErrors.email = "Email is required."
			} else {
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
				if (!emailRegex.test(values.email)) {
					newErrors.email = "Please enter a valid email address."
				}
			}

			return { isValid: Object.keys(newErrors).length === 0, errors: newErrors }
		}
	})
	// ErrorText component for reuse
	const ErrorText = ({ children }) => (children ? <p className="text-sm text-red-500 mt-1">{children}</p> : null)

	return (
		<form className="m-4" onSubmit={handleSubmit}>
			<div className=" flex flex-col gap-4">
				<div>
					<Input name="question" placeholder="Your question*" className="w-full" {...getInputProps("question")} />
					<ErrorText>{errors.question}</ErrorText>
				</div>
				<div>
					<Input name="name" placeholder="Your name*" className="w-full" {...getInputProps("name")} />
					<ErrorText>{errors.name}</ErrorText>
				</div>
				<div>
					<Input name="email" type="email" placeholder="Your email*" className="w-full" {...getInputProps("email")} />
					<ErrorText>{errors.email}</ErrorText>
				</div>
			</div>
			<Button disabled={isSubmitting} variant="secondary" type="submit" className="mt-4">
				Submit Question
			</Button>
		</form>
	)
}
