import type { Metadata } from "next"
import { Geist, Geist_Mono, Gantari } from "next/font/google"
import "../globals.css"
import { Header, Footer } from "@/components/layout"
import { NextIntlClientProvider } from "next-intl"
import { ModalProvider } from "@/hooks/use-model"
import { ToastContainer } from "react-toastify"
import SmoothScrollProvider from "@/context/smooth-scroll-srovider"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "Vantico",
	description: "Build wealth with Vantico"
}

const gantari = Gantari({
	variable: "--font-gantari",
	subsets: ["latin"]
})

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

	return (
		<html lang={locale}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			{/* commented out because it leads to DYNAMIC_SERVER_USAGE error with dynamic page such /en/news page */}
			{/* <NextIntlClientProvider locale={locale}> */}
			<SmoothScrollProvider>
				<body className={`${geistSans.variable} ${geistMono.variable} ${gantari.variable} antialiased`}>
					<div className="">
						<ModalProvider>
							<Header />

							{children}

							<Footer />
						</ModalProvider>
					</div>
					<ToastContainer />
				</body>
			</SmoothScrollProvider>
			{/* </NextIntlClientProvider> */}
		</html>
	)
}
