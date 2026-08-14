import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"
const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		// `domains` is deprecated in Next 15; remotePatterns is the supported form.
		remotePatterns: [
			{ protocol: "http", hostname: "localhost" },
			{ protocol: "http", hostname: "127.0.0.1" },
			// local WordPress (LocalWP serves the site over both http and https)
			{ protocol: "http", hostname: "vantico.local" },
			{ protocol: "https", hostname: "vantico.local" },
			// live WordPress — set to the production CMS host
			{ protocol: "https", hostname: "**.vantico.com" },
			{ protocol: "https", hostname: "vantico.com" },
			// staging WordPress. Remove once the CMS moves to its final domain;
			// next/image refuses any host not listed here.
			{ protocol: "https", hostname: "yvyntj6jni.wpdns.site" },
			{ protocol: "https", hostname: "via.placeholder.com" },
			{ protocol: "https", hostname: "brcfund.com" },
			{ protocol: "https", hostname: "images.unsplash.com" }
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
