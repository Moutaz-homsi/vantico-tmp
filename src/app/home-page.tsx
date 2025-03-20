import JsonPreview from "@/components/JsonPreview"
import Container from "@/components/layout/container"
import Typography from "@/components/ui/typography"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Container className="py-8">
        <Typography variant="h1">Home page</Typography>
        <Link href="/products">
          <Typography variant="h3">View products</Typography>
        </Link>
        <JsonPreview title={"json data example"} object={{ example: "data" }} />
      </Container>
    </div>
  )
}
