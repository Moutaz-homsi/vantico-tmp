import fetchData from "@/utils/api"
import type { Metadata } from "next"
import { AppProvider } from "@/hooks/use-app"
import { ToastContainer } from "react-toastify"
import { ModalProvider } from "@/hooks/use-model"
import "../globals.css"
import "../wysiwyg.css"

export const metadata: Metadata = {
	title: "Vantico",
	description: "Build wealth with Vantico"
}

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
			<body>
				<AppProvider defaultValue={{ options: options?.data }}>
					<ModalProvider>{children}</ModalProvider>
				</AppProvider>
				<ToastContainer />
			</body>
		</html>
	)
}
