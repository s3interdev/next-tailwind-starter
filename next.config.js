/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		forceSwcTransforms: true,
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = nextConfig;
