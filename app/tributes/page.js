import TributesClient from './PageClient'

const SITE_URL = 'https://valiramvallabh.com'

export const metadata = {
  title: 'Tributes — Words from Family, Scholars & Colleagues',
  description:
    'Tributes to Vali Ram Vallabh from his son Dr. Kamleshwer Lohana, grandchildren Rahul Chhabria and Sameer Rai Chhabria, literary scholars Dr. Chandi Ram Shahani and Saeed Mangi, and colleagues at the Institute of Sindhology. Published in Imrata Magazine, Issue 134, November 2023.',
  keywords: [
    'Vali Ram Vallabh tribute',
    'Valiram Vallabh memory',
    'Sindhi writer memorial',
    'Imrata magazine tribute Vali Ram',
    'Dr Kamleshwer Lohana tribute',
    'Saeed Mangi tribute',
    'ولي رام ولڀ خراجِ عقيدت',
  ],
  alternates: {
    canonical: `${SITE_URL}/tributes`,
    languages: {
      'en': `${SITE_URL}/tributes`,
      'sd': `${SITE_URL}/tributes`,
      'x-default': `${SITE_URL}/tributes`,
    },
  },
  openGraph: {
    title: 'Tributes to Vali Ram Vallabh — Family, Scholars & Colleagues',
    description:
      'Personal tributes and literary remembrances from family, grandchildren, literary scholars and long-time colleagues of Vali Ram Vallabh.',
    url: `${SITE_URL}/tributes`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Tributes to Vali Ram Vallabh',
      },
    ],
  },
}

export default function TributesPage() {
  return <TributesClient />
}
