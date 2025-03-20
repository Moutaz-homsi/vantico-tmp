import CtaBlock from "@/components/page-builder/blocks/cta-block"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Blocks/cta",
  component: CtaBlock,
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
} satisfies Meta<typeof CtaBlock>

export default meta
type Story = StoryObj<typeof meta>

const baseData = {
  title: "Hello, World!",
  description: "This is a description",
  alignment: "center",
  image: {
    url: "https://via.placeholder.com/800x800",
  },
}

// set variations of your component
export const Small: Story = {
  args: {
    ...baseData,
    variation: "small",
  },
}
export const Medium: Story = {
  args: {
    ...baseData,
    variation: "medium",
  },
}
export const TwoColumns: Story = {
  args: {
    ...baseData,
    variation: "two_columns",
  },
}
