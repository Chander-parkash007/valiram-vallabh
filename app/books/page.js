import BooksClient from './PageClient'

const SITE_URL = 'https://valiramvallabh.com'

export const metadata = {
  title: 'Books — 27 Works | Digital Library',
  description:
    'Complete digital library of Vali Ram Vallabh — 27 books including Dhariyo (The Outsider by Albert Camus), Ghadar (Krishan Chander), Kota Phulwari (112 poets, 26 languages), and translations of Tolstoy, Amrita Pritam, Tagore, and more. Free to read online.',
  keywords: [
    'Vali Ram Vallabh books',
    'Valiram Vallabh kitab',
    'Dhariyo Sindhi novel',
    'Sindhi translated books free',
    'Albert Camus Sindhi Dhariyo',
    'Kota Phulwari Sindhi poetry',
    'Krishan Chander Sindhi Ghadar',
    'Amrita Pritam Sindhi translation',
    'Pardhihi Kahanioon',
    'Sindhi digital library',
    'ولي رام ولڀ ڪتاب',
    'سنڌي ڪتاب',
  ],
  alternates: {
    canonical: `${SITE_URL}/books`,
    languages: {
      'en': `${SITE_URL}/books`,
      'sd': `${SITE_URL}/books`,
      'x-default': `${SITE_URL}/books`,
    },
  },
  openGraph: {
    title: 'Books by Vali Ram Vallabh — 27 Works | Free Digital Library',
    description:
      '27 books including novels, poetry, stories, and literary journals. Translations from French, Urdu, Hindi, Punjabi into Sindhi — free to read online.',
    url: `${SITE_URL}/books`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Books by Vali Ram Vallabh — Digital Library',
      },
    ],
  },
}

export default function BooksPage() {
  return <BooksClient />
}
