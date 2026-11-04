import LegacyClient from './PageClient'

const SITE_URL = 'https://valiramvallabh.com'

export const metadata = {
  title: 'Living Legacy — Park, Literary Society & Memorial Lectures',
  description:
    'The living legacy of Vali Ram Vallabh — the Vali Ram Vallabh Park named by Sindhi Adabi Board and Government of Sindh, the annual Memorial Lecture on Sindhi Language and the Art of Translation, and the Vali Ram Vallabh Literary Society continuing his work.',
  keywords: [
    'Vali Ram Vallabh legacy',
    'Vali Ram Vallabh park',
    'Vali Ram Vallabh Literary Society',
    'Sindhi memorial lecture',
    'Vali Ram Vallabh memorial',
    'Sindhi Adabi Board park',
    'ولي رام ولڀ پارڪ',
    'ولي رام ولڀ ادبي سوسائٽي',
  ],
  alternates: {
    canonical: `${SITE_URL}/legacy`,
    languages: {
      'en': `${SITE_URL}/legacy`,
      'sd': `${SITE_URL}/legacy`,
      'x-default': `${SITE_URL}/legacy`,
    },
  },
  openGraph: {
    title: 'Living Legacy of Vali Ram Vallabh — Park, Society & Lectures',
    description:
      'A public park bears his name, a literary society carries his mission, and annual memorial lectures honour his contribution to Sindhi translation.',
    url: `${SITE_URL}/legacy`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Legacy of Vali Ram Vallabh',
      },
    ],
  },
}

export default function LegacyPage() {
  return <LegacyClient />
}
