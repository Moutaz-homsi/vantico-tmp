import JsonPreview from "@/components/JsonPreview"
import Container from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import Typography from "@/components/ui/typography"
import Link from "next/link"
import PortfolioItem from "./(pages)/portfolios/_components/portfolio-item"
import ContactForm from "@/components/contact-form/contact-form"

export default function Home() {
	return (
		<div>
			<Container className="flex flex-col gap-8 py-8">
				<section>
					<ContactForm />
				</section>
				<section>
					<Typography variant="h2">What distinguishes Vantico / Why Vantico</Typography>
				</section>
				<section>
					<Typography variant="h2">Our Achievements / Previous Records</Typography>
					<Typography variant="body">
						interactive infographics showing investments performance, investor growth, and historical returns.
					</Typography>
				</section>
				<section>
					<Typography variant="h2">Our Projects</Typography>
					<Typography variant="body">
						List 3 previous projects with see more button that goes to the portfolios page ( Explore Opportunities )
						Each project box will also have a See More button to open the project page. Add percentage values if
						relevant.
					</Typography>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<PortfolioItem />
						<PortfolioItem />
						<PortfolioItem />
					</div>
					<Link href="/portfolios">
						<Button>See More</Button>
					</Link>
				</section>
				<section>
					<Typography variant="h2">ROI Calculator </Typography>
					<Typography variant="body">
						Use a default values based on medium profit estimations Note to discuss : The required parameter
					</Typography>
				</section>
				<section>
					<Typography variant="h2">CTA </Typography>
					<Typography variant="body">
						Ready to transform your digital experience? BTN : Schedule a Free Consultation / Contact Us{" "}
					</Typography>
				</section>
				<section>
					<Typography variant="h2">Founder & Team</Typography>
					<Typography variant="body">
						Display team members in boxes with brief descriptions and positions. Each box will have a "See More" button
						that triggers a popup with detailed bios and achievements.
					</Typography>
				</section>
				<section>
					<Typography variant="h2">Our Investment Approach</Typography>
					<Typography variant="body">
						On the homepage, provide a summary with a See More button linking to the detailed ( Our Investment Approach
						) page . Content from https://brcfund.com/ , for the approach page each section could be a full width
						section with an image , with some empty spaces to let the user focus on each message and spent a little more
						time ( which increase the session time ) Notes For UI/UX : Show the process of the investment as timeline
						view ( link sections with swaying arrow ) The arrow can be animated while scrolling ( more to discuss later
						) Keep the empty spaces logical as you see
					</Typography>
				</section>
				<section>
					<Typography variant="h2">Our Partners</Typography>
				</section>

				<section>
					<Typography variant="h2">CTA </Typography>
					<Typography variant="body">Book a 15-min investor consultation Calendly / Google Meet integartion</Typography>
				</section>
				<section>
					<Typography variant="h2">Testimonials </Typography>
				</section>
				<section>
					<Typography variant="h2">News & Events </Typography>
				</section>
				<section>
					<Typography variant="h2">QAs</Typography>
				</section>

				{/* <Typography variant="h1">Home page</Typography>
        <Link href="/products">
          <Typography variant="h3">View products</Typography>
        </Link>
        <JsonPreview title={"json data example"} object={{ example: "data" }} /> */}
			</Container>
		</div>
	)
}
