import React from "react"
import { Meta, Story } from "@storybook/react"
import { Button } from "./button"

export default {
	title: "UI/Button",
	component: Button,
	args: {
		children: "Click me"
	},
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "destructive", "outline", "secondary", "ghost", "link"]
		},
		size: {
			control: { type: "select" },
			options: ["default", "sm", "lg", "icon"]
		},
		asChild: { control: "boolean" },
		disabled: { control: "boolean" }
	}
} as Meta

export const Default: Story = {
	args: {
		variant: "default",
		size: "default"
	}
}

export const Destructive: Story = {
	args: {
		variant: "destructive",
		size: "default"
	}
}

export const Outline: Story = {
	args: {
		variant: "outline",
		size: "default"
	}
}

export const Secondary: Story = {
	args: {
		variant: "secondary",
		size: "default"
	}
}

export const Ghost: Story = {
	args: {
		variant: "ghost",
		size: "default"
	}
}

export const Link: Story = {
	args: {
		variant: "link",
		size: "default"
	}
}

export const Small: Story = {
	args: {
		variant: "default",
		size: "sm"
	}
}

export const Large: Story = {
	args: {
		variant: "default",
		size: "lg"
	}
}

export const Icon: Story = {
	args: {
		variant: "default",
		size: "icon"
	}
}
