import ContactClient from './PageClient'

const SITE_URL = 'https://valiramvallabh.com'

export const metadata = {
  title: 'Contact — Vali Ram Vallabh Literary Society',
  description:
    'Contact the Vali Ram Vallabh Literary Society — for tributes, research inquiries, press information, or to share your memories of Vali Ram Vallabh. Based in Hyderabad, Sindh, Pakistan.',
  keywords: [
    'Vali Ram Vallabh contact',
    'Vali Ram Vallabh Literary Society contact',
    'Sindhi literary society Hyderabad',
    'ولي رام ولڀ رابطو',
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
    languages: {
      'en': `${SITE_URL}/contact`,
      'sd': `${SITE_URL}/contact`,
      'x-default': `${SITE_URL}/contact`,
    },
  },
  openGraph: {
    title: 'Contact — Vali Ram Vallabh Literary Society',
    description:
      'Get in touch with the Vali Ram Vallabh Literary Society for tributes, research, or press inquiries.',
    url: `${SITE_URL}/contact`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Contact — Vali Ram Vallabh Literary Society',
      },
    ],
  },
  robots: {
    index: true,
    follow: false, // contact pages shouldn't pass link equity
  },
}

export default function ContactPage() {
  return <ContactClient />
}
