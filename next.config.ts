import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"
const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		domains: [
			"localhost",
			"127.0.0.1",
			"via.placeholder.com",
			"brcfund.com",
			"images.unsplash.com",
			"vantico-backend.webotak.com"
		]
	},
	typescript: {
		// !! WARN !!
		// allow production builds to successfully complete even if
		// your project has type errors.
		ignoreBuildErrors: true
	}
}

export default withNextIntl(nextConfig)
