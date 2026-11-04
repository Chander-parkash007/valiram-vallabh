const SITE_URL = 'https://valiramvallabh.com'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
        ],
      },
      // Allow Googlebot full access
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      // Allow image crawling
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
