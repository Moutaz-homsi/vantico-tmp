import Container from "@/components/layout/container"
import CtaBlock from "@/components/page-builder/blocks/cta-block"
import Typography from "@/components/ui/typography"
import React from "react"

export default function Page() {
  return (
    <Container className="p-4">
      <Typography variant="h1">Page Builder Example</Typography>
      <Typography>page builder example should be here</Typography>

      <CtaBlock
        data={{
          title: "Hello, World!",
          description: "This is a description",
          variation: "small",
          alignment: "center",
          image: {
            url: "https://via.placeholder.com/800x800",
          },
        }}
      />
    </Container>
  )
}
