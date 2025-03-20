import PageBuilder from "@/components/page-builder"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Builder/home",
  component: PageBuilder,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    // add default props here
    data: {
      blocks: [
        {
          __typename: "cta",
          title: "Hello, World!",
          description: "This is a description",
          alignment: "center",
          image: {
            url: "https://via.placeholder.com/800x800",
          },
        },
      ],
    },
  },
  // replace it with your component
} satisfies Meta<typeof PageBuilder>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {},
}
