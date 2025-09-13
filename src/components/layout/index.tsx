import Header from "./header"
import Footer from "./footer"

export { default as Container } from "./container"

export default function Layout({ children, options }: { children: React.ReactNode; options?: any }) {
	return (
		<main className="min-h-screen flex flex-col overflow-x-hidden">
			<Header />
			<div className="flex-1">{children}</div>
			<Footer options={options} />
		</main>
	)
}
