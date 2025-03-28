"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import useForm from "@/hooks/use-form"

export default function ContactForm() {
	const { formData, errors, isSubmitting, formStatus, handleChange, handleSubmit } = useForm({
		initialValues: { name: "", email: "", message: "" },
		validate: (values) => {
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
		},
		onSubmit: async () => {
			// Simulate form submission - replace with your actual API call
			await new Promise((resolve) => setTimeout(resolve, 1000))
		}
	})

	return (
		<div className="">
			<div className="grid gap-8 md:grid-cols-2">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
					<p className="mt-4 text-muted-foreground">
						We'd love to hear from you. Please fill out the form and we'll get back to you as soon as possible.
					</p>

					<div className="mt-8 space-y-6">
						<div className="flex items-start gap-4">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
								<Phone className="h-5 w-5 text-primary" />
							</div>
							<div>
								<h3 className="font-semibold">Phone</h3>
								<p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
								<Mail className="h-5 w-5 text-primary" />
							</div>
							<div>
								<h3 className="font-semibold">Email</h3>
								<p className="text-sm text-muted-foreground">contact@example.com</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
								<MapPin className="h-5 w-5 text-primary" />
							</div>
							<div>
								<h3 className="font-semibold">Address</h3>
								<p className="text-sm text-muted-foreground">123 Main St, San Francisco, CA 94105</p>
							</div>
						</div>
					</div>
				</div>

				<div className="rounded-lg border bg-card p-6 shadow-sm">
					{formStatus === "success" && (
						<div className="mb-4 rounded-md bg-green-50 p-4 text-green-700 dark:bg-green-900/20 dark:text-green-300">
							<p className="font-medium">Message sent successfully!</p>
							<p className="text-sm">We'll get back to you as soon as possible.</p>
						</div>
					)}

					{formStatus === "error" && (
						<div className="mb-4 rounded-md bg-red-50 p-4 text-red-700 dark:bg-red-900/20 dark:text-red-300">
							<p className="font-medium">Something went wrong</p>
							<p className="text-sm">Your message couldn't be sent. Please try again.</p>
						</div>
					)}

					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="name">Name</Label>
							<Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
							{errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
						</div>

						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="your.email@example.com"
								value={formData.email}
								onChange={handleChange}
							/>
							{errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
						</div>

						<div className="space-y-2">
							<Label htmlFor="message">Message</Label>
							<Textarea
								id="message"
								name="message"
								placeholder="How can we help you?"
								className="min-h-32 resize-none"
								value={formData.message}
								onChange={handleChange}
							/>
							{errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
							<p className="text-xs text-muted-foreground">Please provide as much detail as possible.</p>
						</div>

						<Button type="submit" className="w-full" disabled={isSubmitting}>
							{isSubmitting ? "Sending..." : "Send Message"}
						</Button>
					</form>
				</div>
			</div>
		</div>
	)
}
