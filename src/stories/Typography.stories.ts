import type { Meta, StoryObj } from "@storybook/react"

import Typography from "../components/ui/typography"

const meta = {
  title: "UI/Typography",
  component: Typography,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    children: "Example text",
    className: "",
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    variant: "h1",
  },
}

export const H2: Story = {
  args: {
    variant: "h2",
  },
}

export const H3: Story = {
  args: {
    variant: "h3",
  },
}

export const H4: Story = {
  args: {
    variant: "h4",
  },
}

export const H5: Story = {
  args: {
    variant: "h5",
  },
}

export const H6: Story = {
  args: {
    variant: "h6",
  },
}

export const Body: Story = {
  args: {
    variant: "body",
  },
}
