import { cn } from "@/utils"
import Header from "./header"
import Footer from "./footer"

export { default as Container } from "./container"
// export { default as Header } from "./header"
// export { default as Footer } from "./footer"

export default function Layout({ children, options }: { children: React.ReactNode; options?: any }) {
	return (
		<main className="min-h-screen flex flex-col">
			<Header />
			<div className="flex-1">{children}</div>
			<Footer options={options} />
		</main>
	)
}
