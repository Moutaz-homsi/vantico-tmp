import JsonPreview from "@/components/JsonPreview"
import Container from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import Typography from "@/components/ui/typography"
import Link from "next/link"
import PortfolioItem from "./(pages)/portfolios/_components/portfolio-item"
import ContactForm from "@/components/contact-form/contact-form"
import ROICalculator from "@/components/roi-calculator/roi-calculator-block"
import VideoBanner from "@/components/video-banner"
import WhyVintecoSection from "./_components/why-vinteco-section"
import TeamSection from "./_components/team-section"
import TestimonialSection from "./_components/testimonial-section"

export default function Home() {
	return (
		<div>
			<VideoBanner videoId={"1017406920"} />

			<Container className="flex flex-col gap-46 pt-32">
				<TeamSection teamMembers={data.team_members} />
				<TestimonialSection testimonials={data.reviews} />
				<WhyVintecoSection />
				<section>
					<ROICalculator />
				</section>
				<section>
					<ContactForm />
				</section>

				<div className="h-32"></div>

				{/* <Typography variant="h1">Home page</Typography>
        <Link href="/products">
          <Typography variant="h3">View products</Typography>
        </Link>
        <JsonPreview title={"json data example"} object={{ example: "data" }} /> */}
			</Container>
		</div>
	)
}

const data = {
	reviews: [
		{
			id: "1",
			comment: "This platform has completely transformed my investment journey. Highly recommended!",
			user_name: "John Doe",
			rating: 5
		},
		{
			id: "2",
			comment: "Great experience overall. The team is very supportive and professional.",
			user_name: "Jane Smith",
			rating: 4
		},
		{
			id: "3",
			comment: "I appreciate the transparency and ease of use. Would definitely invest again.",
			user_name: "Michael Brown",
			rating: 5
		},
		{
			id: "4",
			comment: "The returns have been fantastic, and the process is seamless.",
			user_name: "Emily Davis",
			rating: 4
		},
		{
			id: "5",
			comment: "A trustworthy platform with excellent customer service.",
			user_name: "Chris Wilson",
			rating: 5
		},
		{
			id: "6",
			comment: "I had some concerns initially, but they were addressed promptly. Great experience!",
			user_name: "Sarah Johnson",
			rating: 4
		}
	],
	team_members: [
		{
			id: "1",
			first_name: "John",
			last_name: "Doe",
			role: "Chief Executive Officer",
			email: "john.doe@example.com",
			image: {
				url: "/mock/team1.png"
			}
		},
		{
			id: "2",
			first_name: "Jane",
			last_name: "Smith",
			role: "Chief Financial Officer",
			email: "jane.smith@example.com",
			image: {
				url: "/mock/team2.jpg"
			}
		},
		{
			id: "3",
			first_name: "Michael",
			last_name: "Brown",
			role: "Chief Technology Officer",
			email: "michael.brown@example.com",
			image: {
				url: "/mock/team3.jpg"
			}
		},

		{
			id: "4",
			first_name: "Sarah",
			last_name: "Johnson",
			role: "Product Manager",
			email: "sarah.johnson@example.com",
			image: {
				url: "/mock/team4.jpg"
			}
		}
	]
}