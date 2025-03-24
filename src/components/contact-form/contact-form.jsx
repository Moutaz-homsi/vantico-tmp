"use client"
import { Button, Input, Label, Textarea } from "@/components/ui"
import { Mail, Phone, MapPin } from "lucide-react"
import useForm from "@/hooks/use-form"
import { validate } from "./contact-form-validation"

const initialValues = { name: "", email: "", message: "" }
export default function ContactForm() {
	const { formData, errors, isSubmitting, formStatus, getInputProps, handleChange, handleSubmit } = useForm({
		initialValues,
		validate,
		onSubmit: async () => {
			// Simulate form submission - replace with your actual API call
			await new Promise((resolve) => setTimeout(resolve, 1000))
		}
	})

	return (
		<div className="mx-auto max-w-4xl py-12 px-4">
			<div className="grid gap-8 md:grid-cols-2">
				{/* Details Grid Column */}
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
				{/* Form Grid Column */}
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
							<Input id="name" {...getInputProps("name")} placeholder="Your name" />
							{errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
						</div>

						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input id="email" type="email" placeholder="your.email@example.com" {...getInputProps("email")} />
							{errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
						</div>

						<div className="space-y-2">
							<Label htmlFor="message">Message</Label>
							<Textarea
								id="message"
								placeholder="How can we help you?"
								className="min-h-32 resize-none"
								{...getInputProps("message")}
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
