import HeroSection from "./blocks/hero-section"
import AboutUsSection from "./blocks/about-us-section"

export default function PageBuilder({ data }) {
	return (
		<div>
			<div className="flex flex-col">
				{data?.sections?.length > 0 &&
					data.sections.map((section, index) => {
						const componentType = section.__component.split(".")[1]
						switch (componentType) {
							case "hero":
								return <HeroSection key={index} {...section} />
							case "about-us":
								return <AboutUsSection key={index} {...section} />
							default:
								return <p key={index}>Unrecognized component: {componentType}</p>
						}
					})}
			</div>
		</div>
	)
}
