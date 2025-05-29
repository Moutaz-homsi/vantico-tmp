import AboutUs from "@/components/page-builder/blocks/AboutUs"
import ConsultationSection from "@/components/page-builder/blocks/consultation-section"
import FAQ from "@/components/page-builder/blocks/FAQ"
import Hero from "@/components/page-builder/blocks/Hero"
import InvestmentApproach from "@/components/page-builder/blocks/InvestmentApproach"
import InvestorsSection from "@/components/page-builder/blocks/InvestorsSection"
import MeetTheTeam from "@/components/page-builder/blocks/MeetTheTeam"
import NewsSection from "@/components/page-builder/blocks/news-section"
import OurHistory from "@/components/page-builder/blocks/OurHistory"
import PropertyTour from "@/components/page-builder/blocks/PropertyTour"
import Ready from "@/components/page-builder/blocks/Ready"
import ROICalculator from "@/components/page-builder/blocks/ROICalculator"
import StrategyAccordion from "@/components/page-builder/blocks/StrategyAccordion"
import TenantsSection from "@/components/page-builder/blocks/TenantsSection"
import Testimonials from "@/components/page-builder/blocks/Testimonials"
import { faq, mockHomePageData } from "@/data/home-page-data"
import { investmentSteps } from "@/data/investmentData"
import { fundingProgress, investmentDetails, investorStats } from "@/data/investorData"
import { teamMembers } from "@/data/teamData"
import { tenants } from "@/data/tenantData"
import fetchData, { getHomepage } from "@/utils/api"
import { stringify } from "qs"

const strategyItems = [
	{
		icon: "target",
		title: "Target Market and Strategy",
		content:
			"Focused on acquiring high-growth, dental-anchored properties across the Mid-Atlantic, our strategy capitalizes on stable, long-term leases that drive consistent returns."
	},
	{
		icon: "trendingUp",
		title: "Opportunistic Growth",
		content:
			"We identify and capitalize on emerging market opportunities, allowing us to achieve above-market returns through strategic timing and disciplined execution."
	},
	{
		icon: "users",
		title: "Proven Leadership Team",
		content:
			"Our executive team brings decades of combined experience in real estate investment, property management, and financial optimization across multiple market cycles."
	},
	{
		icon: "chartBar",
		title: "Compelling Financial Returns",
		content:
			"Our investment approach has consistently delivered strong risk-adjusted returns, with a focus on both current income and long-term capital appreciation."
	},
	{
		icon: "handshake",
		title: "Strategic Partnerships",
		content:
			"We leverage our extensive network of industry relationships to source exclusive deals and create value-added opportunities for our investment portfolio."
	},
	{
		icon: "fileText",
		title: "Risk Mitigation and Alignment",
		content:
			"Our rigorous due diligence process and conservative underwriting standards help protect investor capital while ensuring our interests remain aligned with our partners."
	}
]

export const historyItems = [
	{
		year: "2000",
		description:
			"Launched Triangle Family Dentistry and Carolina Orthodontics & Children's Dentistry in North Carolina with a vision to redefine patient care.",
		imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
		imageAlt: "Exterior of Triangle Family Dentistry building"
	},
	{
		year: "2010",
		description:
			"Expanded to 20 thriving locations, fueled by relentless dedication, data-driven strategy and operational excellence.",
		imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
		imageAlt: "Interior reception area of dental clinic"
	},
	{
		year: "2020",
		description:
			"Established as the premier dental healthcare provider in the Mid-Atlantic region with innovative treatment protocols and patient-first approach.",
		imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
		imageAlt: "Modern Triangle Family Dentistry facility"
	}
]

export default async function HomePage() {
	const homePageData = await getHomePageData()
	console.log(require("util").inspect(homePageData.testimonials, true, 10, true))

	return (
		<main>
			<Hero videoId={homePageData.video_id} calendlyUrl={homePageData.calendly_url} />
			<AboutUs />

			<OurHistory items={historyItems} />
			<StrategyAccordion
				heading="WHY VANTICO?"
				subheading="PRECISION-DRIVEN"
				title="INVESTMENT STRATEGY"
				items={strategyItems}
			/>

			<InvestorsSection stats={investorStats} fundingProgress={fundingProgress} investmentDetails={investmentDetails} />

			<PropertyTour
				images={[
					{
						id: 1,
						url: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
						alt: "Triangle Family Dentistry building with courtyard view"
					},
					{
						id: 2,
						url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
						alt: "Modern dental clinic building facade"
					},
					{
						id: 3,
						url: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
						alt: "Prime commercial real estate property"
					},
					{
						id: 4,
						url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
						alt: "Modern dental clinic building facade"
					}
				]}
			/>

			<TenantsSection tenants={tenants} />

			<ROICalculator />

			<Ready />
			<MeetTheTeam members={homePageData.team} />

			<InvestmentApproach steps={investmentSteps} />

			<ConsultationSection calendlyUrl={homePageData.calendly_url} />
			<Testimonials testimonials={homePageData.testimonials} />

			<NewsSection items={homePageData.news} />
			<FAQ items={homePageData.faq} />
		</main>
	)
}

async function getHomePageData() {
	const isDev = process.env.NODE_ENV === "development"

	let homePageData = isDev ? mockHomePageData : {}
	const query = stringify({
		populate: ["testimonials.avatar", "faq"]
	})
	try {
		const responseBody = await fetchData({
			route: "homepage?" + query,
			debug: true
		})

		if (responseBody.data) {
			homePageData = responseBody.data
		}
	} catch (error) {}

	const news = await fetchData({
		route: "news?[populate]=*"
	})
	const team = await fetchData({
		route: "teams?[populate]=*"
	})

	return { ...homePageData, news: news.data, team: team.data }
}
