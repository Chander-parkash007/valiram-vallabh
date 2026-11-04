import BiographyClient from './PageClient'

const SITE_URL = 'https://valiramvallabh.com'

export const metadata = {
  title: 'Biography — Life, Career & Literary Journey',
  description:
    'Complete biography of Vali Ram Vallabh (1941–2023) — born in Mithi, Tharparkar, educated at University of Sindh, career at Institute of Sindhology. Discover his early life, literary milestones, family, and 82-year journey through Sindhi letters.',
  keywords: [
    'Vali Ram Vallabh biography',
    'Valiram Vallabh life story',
    'Sindhi writer biography',
    'Mithi Tharparkar writer',
    'Institute of Sindhology scholar',
    'Vali Ram Vallabh family',
    'ولي رام ولڀ سوانح',
  ],
  alternates: {
    canonical: `${SITE_URL}/biography`,
    languages: {
      'en': `${SITE_URL}/biography`,
      'sd': `${SITE_URL}/biography`,
      'x-default': `${SITE_URL}/biography`,
    },
  },
  openGraph: {
    title: 'Biography of Vali Ram Vallabh | Sindhi Writer (1941–2023)',
    description:
      'From Mithi, Tharparkar to Hyderabad — the complete life and literary journey of Vali Ram Vallabh, one of Sindhi literature\'s most prolific translators.',
    url: `${SITE_URL}/biography`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Vali Ram Vallabh — Biography',
      },
    ],
  },
}

export default function BiographyPage() {
  return <BiographyClient />
}
