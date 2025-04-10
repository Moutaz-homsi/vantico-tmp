import Container from "@/components/layout/container"
import PageBuilder from "@/components/page-builder"
import CtaBlock from "@/components/page-builder/blocks/cta-block"
import Typography from "@/components/ui/typography"
import React from "react"

export default function Page() {
	return (
		<Container className="p-4">
			<PageBuilder data={data} />
		</Container>
	)
}

const data = {
	id: 22,
	title: "brcfund",
	slug: "brcfund",
	blocks: [
		{
			__component: "pages.lists",
			id: 24,
			title: "OVERVIEW",
			description:
				"Blue Ridge Capital Fund specializes in high-end dental and underutilized commercial property investments in the thriving Mid-Atlantic market. With a 12-year track record, our principals manage Triangle Family Dentistry and Carolina Orthodontics & Children’s Dentistry, now oversee $250M in real estate assets across 20+ properties.\n\n",
			items: [
				{
					id: 62,
					title: "Target Market and Strategy",
					description:
						"Focused on acquiring high-growth, dental-anchored properties across the Mid-Atlantic, our strategy capitalizes on stable, long-term leases that drive consistent returns.",
					image: null
				},
				{
					id: 63,
					title: "Proven Leadership Team",
					description:
						"Backed by decades of industry experience, our leadership team has a track record of building and exiting multi-million-dollar ventures, positioning us to deliver superior results.",
					image: null
				},
				{
					id: 64,
					title: "Compelling Financial Returns",
					description:
						"We target 14-20% annual returns and aim to triple your investment within five years, offering a preferred 8% return before profits are shared.",
					image: null
				}
			]
		},
		{
			__component: "pages.query",
			id: 50,
			title: "our projects",
			description:
				"Explore our impactful ventures. From cutting-edge dental properties to revitalized commercial spaces, our projects embody innovation and strategic investment. Discover the success stories that define Blue Ridge Capital Fund.",
			type: "project",
			limit: 6,
			query: null,
			results: [
				{
					id: 7,
					name: "project 1",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					roi: 35,
					image: {
						id: 4,
						documentId: "yiqbl7og4i4j3w0czqs0dcdp",
						name: "triland.png",
						alternativeText: null,
						caption: null,
						width: 200,
						height: 200,
						formats: {
							thumbnail: {
								name: "thumbnail_triland.png",
								hash: "thumbnail_triland_7314fadbec",
								ext: ".png",
								mime: "image/png",
								path: null,
								width: 156,
								height: 156,
								size: 17.4,
								sizeInBytes: 17398,
								url: "/uploads/thumbnail_triland_7314fadbec.png"
							}
						},
						hash: "triland_7314fadbec",
						ext: ".png",
						mime: "image/png",
						size: 6.89,
						url: "/uploads/triland_7314fadbec.png",
						previewUrl: null,
						provider: "local",
						provider_metadata: null,
						folderPath: "/",
						createdAt: "2025-03-25T06:57:28.277Z",
						updatedAt: "2025-03-25T06:57:28.277Z",
						publishedAt: "2025-03-25T06:57:28.277Z",
						locale: null
					},
					createdBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					updatedBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					localizations: []
				},
				{
					id: 8,
					name: "project 2",
					description: "some description",
					roi: 10,
					image: {
						id: 1,
						documentId: "wq8srx5x3urq8sv3l7oe0veq",
						name: "abbcre.png",
						alternativeText: null,
						caption: null,
						width: 200,
						height: 200,
						formats: {
							thumbnail: {
								name: "thumbnail_abbcre.png",
								hash: "thumbnail_abbcre_67311bc2fc",
								ext: ".png",
								mime: "image/png",
								path: null,
								width: 156,
								height: 156,
								size: 7.55,
								sizeInBytes: 7554,
								url: "/uploads/thumbnail_abbcre_67311bc2fc.png"
							}
						},
						hash: "abbcre_67311bc2fc",
						ext: ".png",
						mime: "image/png",
						size: 2.02,
						url: "/uploads/abbcre_67311bc2fc.png",
						previewUrl: null,
						provider: "local",
						provider_metadata: null,
						folderPath: "/",
						createdAt: "2025-03-25T06:57:28.261Z",
						updatedAt: "2025-03-25T06:57:28.261Z",
						publishedAt: "2025-03-25T06:57:28.262Z",
						locale: null
					},
					createdBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					updatedBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					localizations: []
				},
				{
					id: 9,
					name: "project 3",
					description: "project description",
					roi: 5,
					image: {
						id: 3,
						documentId: "be5ggy64t6w9l3rqa6r85nul",
						name: "cohn.png",
						alternativeText: null,
						caption: null,
						width: 200,
						height: 200,
						formats: {
							thumbnail: {
								name: "thumbnail_cohn.png",
								hash: "thumbnail_cohn_4e5d105ebf",
								ext: ".png",
								mime: "image/png",
								path: null,
								width: 156,
								height: 156,
								size: 10.75,
								sizeInBytes: 10747,
								url: "/uploads/thumbnail_cohn_4e5d105ebf.png"
							}
						},
						hash: "cohn_4e5d105ebf",
						ext: ".png",
						mime: "image/png",
						size: 4.55,
						url: "/uploads/cohn_4e5d105ebf.png",
						previewUrl: null,
						provider: "local",
						provider_metadata: null,
						folderPath: "/",
						createdAt: "2025-03-25T06:57:28.274Z",
						updatedAt: "2025-03-25T06:57:28.274Z",
						publishedAt: "2025-03-25T06:57:28.274Z",
						locale: null
					},
					createdBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					updatedBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					localizations: []
				}
			]
		},
		{
			__component: "pages.lists",
			id: 25,
			title: "Investment Approach",
			description:
				"We specialize in De Novo Development, constructing dental properties tailored to market needs, as well as opportunistically identifying under valued commercial/retail opportunities. Utilizing data-driven insights, we identify optimal locations for new practices. Our dental partners secure long-term leases, offering participating dentists ownership splits in the operations.",
			items: [
				{
					id: 65,
					title: "Prime Locations",
					description:
						"We prioritize selecting prime locations across various sectors, ensuring each site has significant growth potential and meets market demands. Strategic positioning is key to maximizing accessibility and market impact.",
					image: null
				},
				{
					id: 66,
					title: "Investment Friendly Vehicle",
					description:
						"Our operational model is designed for adaptability and support across different sectors, facilitating seamless integration and operational success. This framework is conducive to the growth and development of varied enterprises.",
					image: null
				}
			]
		},
		{
			__component: "pages.lists",
			id: 26,
			title: "OUR PARTNERS",
			description:
				"Discover the collaborative power shaping our success. Our partners play a crucial role in fueling innovation and driving growth. Explore the strong alliances that propel Blue Ridge Capital Fund forward in the realms of high-end dental and commercial investments.",
			items: [
				{
					id: 67,
					title: null,
					description: null,
					image: {
						id: 1,
						documentId: "wq8srx5x3urq8sv3l7oe0veq",
						name: "abbcre.png",
						alternativeText: null,
						caption: null,
						width: 200,
						height: 200,
						formats: {
							thumbnail: {
								name: "thumbnail_abbcre.png",
								hash: "thumbnail_abbcre_67311bc2fc",
								ext: ".png",
								mime: "image/png",
								path: null,
								width: 156,
								height: 156,
								size: 7.55,
								sizeInBytes: 7554,
								url: "/uploads/thumbnail_abbcre_67311bc2fc.png"
							}
						},
						hash: "abbcre_67311bc2fc",
						ext: ".png",
						mime: "image/png",
						size: 2.02,
						url: "/uploads/abbcre_67311bc2fc.png",
						previewUrl: null,
						provider: "local",
						provider_metadata: null,
						folderPath: "/",
						createdAt: "2025-03-25T06:57:28.261Z",
						updatedAt: "2025-03-25T06:57:28.261Z",
						publishedAt: "2025-03-25T06:57:28.262Z",
						locale: null
					}
				},
				{
					id: 68,
					title: null,
					description: null,
					image: {
						id: 4,
						documentId: "yiqbl7og4i4j3w0czqs0dcdp",
						name: "triland.png",
						alternativeText: null,
						caption: null,
						width: 200,
						height: 200,
						formats: {
							thumbnail: {
								name: "thumbnail_triland.png",
								hash: "thumbnail_triland_7314fadbec",
								ext: ".png",
								mime: "image/png",
								path: null,
								width: 156,
								height: 156,
								size: 17.4,
								sizeInBytes: 17398,
								url: "/uploads/thumbnail_triland_7314fadbec.png"
							}
						},
						hash: "triland_7314fadbec",
						ext: ".png",
						mime: "image/png",
						size: 6.89,
						url: "/uploads/triland_7314fadbec.png",
						previewUrl: null,
						provider: "local",
						provider_metadata: null,
						folderPath: "/",
						createdAt: "2025-03-25T06:57:28.277Z",
						updatedAt: "2025-03-25T06:57:28.277Z",
						publishedAt: "2025-03-25T06:57:28.277Z",
						locale: null
					}
				},
				{
					id: 69,
					title: null,
					description: null,
					image: {
						id: 3,
						documentId: "be5ggy64t6w9l3rqa6r85nul",
						name: "cohn.png",
						alternativeText: null,
						caption: null,
						width: 200,
						height: 200,
						formats: {
							thumbnail: {
								name: "thumbnail_cohn.png",
								hash: "thumbnail_cohn_4e5d105ebf",
								ext: ".png",
								mime: "image/png",
								path: null,
								width: 156,
								height: 156,
								size: 10.75,
								sizeInBytes: 10747,
								url: "/uploads/thumbnail_cohn_4e5d105ebf.png"
							}
						},
						hash: "cohn_4e5d105ebf",
						ext: ".png",
						mime: "image/png",
						size: 4.55,
						url: "/uploads/cohn_4e5d105ebf.png",
						previewUrl: null,
						provider: "local",
						provider_metadata: null,
						folderPath: "/",
						createdAt: "2025-03-25T06:57:28.274Z",
						updatedAt: "2025-03-25T06:57:28.274Z",
						publishedAt: "2025-03-25T06:57:28.274Z",
						locale: null
					}
				},
				{
					id: 70,
					title: null,
					description: null,
					image: {
						id: 2,
						documentId: "xz701lzaa8i7itx7m3q5xxb5",
						name: "brown.png",
						alternativeText: null,
						caption: null,
						width: 200,
						height: 200,
						formats: {
							thumbnail: {
								name: "thumbnail_brown.png",
								hash: "thumbnail_brown_dff4e1a698",
								ext: ".png",
								mime: "image/png",
								path: null,
								width: 156,
								height: 156,
								size: 4.79,
								sizeInBytes: 4790,
								url: "/uploads/thumbnail_brown_dff4e1a698.png"
							}
						},
						hash: "brown_dff4e1a698",
						ext: ".png",
						mime: "image/png",
						size: 1.96,
						url: "/uploads/brown_dff4e1a698.png",
						previewUrl: null,
						provider: "local",
						provider_metadata: null,
						folderPath: "/",
						createdAt: "2025-03-25T06:57:28.270Z",
						updatedAt: "2025-03-25T06:57:28.270Z",
						publishedAt: "2025-03-25T06:57:28.271Z",
						locale: null
					}
				}
			]
		},
		{
			__component: "pages.query",
			id: 51,
			title: "OUR TEAM",
			description:
				"The team's expertise spans across finance, real estate, and entrepreneurship, managing transactions exceeding $1 billion. Their proficiencies include strategic financial services, leadership in significant equity and debt investments, and overseeing ventures from inception to high-revenue stages with successful exits. Additionally, they excel in areas like value-add real estate investments, equity firm management, and the development of medical and dental enterprises, with a strong emphasis on creative structuring, negotiations, and data-driven growth strategies. Their commitment extends to social causes and mentoring, underlining their diverse skills and impactful leadership.",
			type: "team",
			limit: null,
			query: null,
			results: [
				{
					id: 2,
					first_name: "hatem",
					last_name: "ahmed",
					role: "cto",
					email: "hatem.a.abushaala@gmail.com",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					image: null,
					createdBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					updatedBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					localizations: []
				},
				{
					id: 4,
					first_name: "ali",
					last_name: "ahmed",
					role: "cto",
					email: "hatem.a.abushaala@gmail.com",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					image: null,
					createdBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					updatedBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					localizations: []
				},
				{
					id: 6,
					first_name: "omar",
					last_name: "ahmed",
					role: "cto",
					email: "hatem.a.abushaala@gmail.com",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					image: null,
					createdBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					updatedBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					localizations: []
				}
			]
		},
		{
			__component: "pages.query",
			id: 52,
			title: "reviews",
			description: "what customers say about us",
			type: "review",
			limit: null,
			query: "",
			results: [
				{
					id: 2,
					source: "manual",
					review_id: null,
					rating: 4,
					user_name: "hatem",
					comment: "good service",
					user_thumbnail: null,
					date: null,
					createdBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					updatedBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					localizations: []
				},
				{
					id: 4,
					source: "google",
					review_id: null,
					rating: 4,
					user_name: "hatem",
					comment: "good service",
					user_thumbnail: null,
					date: null,
					createdBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					updatedBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					localizations: []
				},
				{
					id: 6,
					source: "google",
					review_id: null,
					rating: 4,
					user_name: "hatem",
					comment: "good service",
					user_thumbnail: null,
					date: null,
					createdBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					updatedBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					localizations: []
				},
				{
					id: 8,
					source: "google",
					review_id: null,
					rating: 4,
					user_name: "hatem",
					comment: "good service",
					user_thumbnail: null,
					date: null,
					createdBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					updatedBy: {
						id: 2,
						documentId: "r7vvde4ewpl5n91m2jb3ilta",
						firstname: "admin",
						lastname: "admin",
						username: null,
						email: "admin@admin.com",
						password: "$2a$10$/pFimo2w9ArEMbYyZqNAJuwWfpADva5nRpqZQZGCWRM/qHi4T7lMa",
						resetPasswordToken: null,
						registrationToken: null,
						isActive: true,
						blocked: false,
						preferedLanguage: null,
						createdAt: "2025-03-25T04:17:10.489Z",
						updatedAt: "2025-03-25T04:17:10.489Z",
						publishedAt: "2025-03-25T04:17:10.490Z",
						locale: null
					},
					localizations: []
				}
			]
		}
	]
}
