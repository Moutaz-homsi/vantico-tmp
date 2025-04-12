import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"
const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		domains: ["localhost", "127.0.0.1", "via.placeholder.com", "brcfund.com"]
	}
}

export default withNextIntl(nextConfig)
