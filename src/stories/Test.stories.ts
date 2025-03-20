import type { Meta, StoryObj } from "@storybook/react"

import Test from "../components/Test"

const meta = {
  title: "Example/Test",
  component: Test,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    title: "Test",
  },
} satisfies Meta<typeof Test>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: "new Test",
  },
}
