import type { Metadata } from "next"
// import { Geist, Geist_Mono, Gantari, Montserrat, Cairo } from "next/font/google"
import "../globals.css"
import { Header, Footer } from "@/components/layout"
// import { NextIntlClientProvider } from "next-intl"
import { ModalProvider } from "@/hooks/use-model"
import { ToastContainer } from "react-toastify"
// import SmoothScrollProvider from "@/context/smooth-scroll-srovider"
import fetchData from "@/utils/api"
import { AppProvider } from "@/hooks/use-app"

export const metadata: Metadata = {
	title: "Vantico",
	description: "Build wealth with Vantico"
}

// const montserrat = Montserrat({
// 	variable: "--font-montserrat",
// 	subsets: ["latin"]
// })

// const cairo = Cairo({
// 	variable: "--font-cairo",
// 	subsets: ["latin"]
// })

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"]
// })

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"]
// })

// const gantari = Gantari({
// 	variable: "--font-gantari",
// 	subsets: ["latin"]
// })
// const sanomat = localFont({
//   src: [
//     {
//       path: '../../../../public/fonts/sanomat-light.woff2',
//       weight: '300',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-sanomat',
//   display: 'swap',
// })



export default async function RootLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode
	params: {
		locale: string
	}
}>) {
	const { locale } = await params
	const options = await fetchData({
		route: "option"
	})

	return (
		<html lang={locale}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			{/* commented out because it leads to DYNAMIC_SERVER_USAGE error with dynamic page such /en/news page */}
			{/* <NextIntlClientProvider locale={locale}> */}
			{/* <SmoothScrollProvider> */}
			<body
				// ${cairo.variable} ${geistSans.variable} ${geistMono.variable} ${gantari.variable}
				// className={`${montserrat.variable}`}
			>
				<div className="">
					<AppProvider defaultValue={{ options: options?.data }}>
						<ModalProvider>
							<Header />

							{children}

							<Footer />
						</ModalProvider>
					</AppProvider>
				</div>
				<ToastContainer />
			</body>
			{/* </SmoothScrollProvider> */}
			{/* </NextIntlClientProvider> */}
		</html>
	)
}
