import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Example/example",
  component: () => "replace it with your component",
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    // add default props here
  },
  // replace it with your component
} satisfies Meta<typeof meta>

export default meta
type Story = StoryObj<typeof meta>

// set variations of your component
export const Variation: Story = {
  args: {},
}
