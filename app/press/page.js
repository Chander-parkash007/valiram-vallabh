import PressClient from './PageClient'

const SITE_URL = 'https://valiramvallabh.com'

export const metadata = {
  title: 'Press & Publications — Newspaper & Magazine Coverage',
  description:
    'Press coverage of Vali Ram Vallabh in Dawn, Rozana Kawish, Kawish Dunya, Rozana Saat, Affair Magazine, and Express.pk. Includes Imrata Magazine Issue 134 tribute issue, Arts Council of Pakistan condolence reference, and articles by Mumtaz Meher, Saeed Mangi, Zubaida Mustafa, and Zulfiqar Halepoto.',
  keywords: [
    'Vali Ram Vallabh press',
    'Valiram Vallabh newspaper',
    'Sindhi writer Dawn article',
    'Kawish Dunya Vali Ram Vallabh',
    'Imrata magazine tribute',
    'Rozana Kawish Sindhi writer',
    'Arts Council Karachi condolence',
    'ولي رام ولڀ اخبار',
    'ولي رام ولڀ رسالو',
  ],
  alternates: {
    canonical: `${SITE_URL}/press`,
    languages: {
      'en': `${SITE_URL}/press`,
      'sd': `${SITE_URL}/press`,
      'x-default': `${SITE_URL}/press`,
    },
  },
  openGraph: {
    title: 'Press Coverage — Vali Ram Vallabh | Newspapers & Magazines',
    description:
      'News articles, tributes, and magazine features about Vali Ram Vallabh from Dawn, Kawish, Imrata Magazine, Arts Council of Pakistan, and more.',
    url: `${SITE_URL}/press`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Vali Ram Vallabh — Press Coverage',
      },
    ],
  },
}

export default function PressPage() {
  return <PressClient />
}
