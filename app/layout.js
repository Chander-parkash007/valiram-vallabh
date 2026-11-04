import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/components/LanguageContext'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

// ─── Canonical domain ─────────────────────────────────────────────────────────
const SITE_URL = 'https://valiramvallabh.com'

// ─── Global / fallback metadata ───────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Vali Ram Vallabh — Sindhi Writer, Translator & Scholar (1941–2023)',
    template: '%s | Vali Ram Vallabh',
  },

  description:
    'Official tribute website of Vali Ram Vallabh (1941–2023) — Pride of Performance Award laureate, Sindhi literary scholar, and translator of over 90 works from world literature into Sindhi. Born Mithi, Tharparkar.',

  keywords: [
    // Primary name variants (how people actually search)
    'Vali Ram Vallabh',
    'Valiram Vallabh',
    'Wali Ram Vallabh',
    'Waliram Vallabh',
    'ولي رام ولڀ',
    'ولي رام ولپ',
    'Vali Ram',
    'Valiram',
    // Role-based searches
    'Sindhi writer',
    'Sindhi author',
    'Sindhi translator',
    'Sindhi literary scholar',
    'Sindhi poet',
    'Sindhi literature',
    // Awards — high-authority signals
    'Pride of Performance Award Pakistan',
    'Mirza Qalich Baig Award',
    'Sadairati Award',
    // Works — book searches
    'Dhariyo Sindhi novel',
    'The Outsider Sindhi translation',
    'Albert Camus Sindhi',
    'Krishan Chander Sindhi',
    'Amrita Pritam Sindhi',
    'Kota Phulwari',
    'Pardhihi Kahanioon',
    // Geographic identifiers
    'Mithi Tharparkar writer',
    'Sindhi writer Hyderabad',
    'Pakistani Sindhi writer',
    // Institutional
    'Institute of Sindhology',
    'Sindhi Adabi Board',
    'Sindhi Language Authority',
    // Sindhi script searches
    'سنڌي ادب',
    'سنڌي ليکڪ',
    'سنڌي ترجمو',
    'ٿرپارڪر اديب',
  ],

  authors: [{ name: 'Vali Ram Vallabh Literary Society' }],
  creator: 'Vali Ram Vallabh Literary Society',
  publisher: 'Vali Ram Vallabh Literary Society',

  // ── Canonical ──────────────────────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en': SITE_URL,
      'sd': SITE_URL,
      'x-default': SITE_URL,
    },
  },

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['sd_PK'],
    url: SITE_URL,
    siteName: 'Vali Ram Vallabh',
    title: 'Vali Ram Vallabh — Sindhi Literary Legend (1941–2023)',
    description:
      'Complete tribute archive for Vali Ram Vallabh — biography, 27 books, 35 awards, 100+ photos, press coverage, and personal tributes.',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Vali Ram Vallabh — Sindhi Writer and Translator (1941–2023)',
        type: 'image/jpeg',
      },
    ],
  },

  // ── Twitter / X ────────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@valiramvallabh',
    title: 'Vali Ram Vallabh — Sindhi Literary Legend (1941–2023)',
    description:
      'Official tribute archive — biography, 27 books, 35 awards, gallery, videos and tributes.',
    images: [`${SITE_URL}/og-image.jpg`],
  },

  // ── Crawling ───────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Verification (add Search Console code here) ────────────────────────────
  // verification: {
  //   google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  // },

  // ── Misc ───────────────────────────────────────────────────────────────────
  category: 'literature',
}

// ─── Root JSON-LD schemas ─────────────────────────────────────────────────────
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Vali Ram Vallabh',
  alternateName: [
    'ولي رام ولڀ',
    'Wali Ram Vallabh',
    'Valiram Vallabh',
    'Waliram Vallabh',
  ],
  birthDate: '1941-08-18',
  deathDate: '2023-10-29',
  birthPlace: {
    '@type': 'Place',
    name: 'Mithi, Tharparkar District, Sindh, Pakistan',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mithi',
      addressRegion: 'Tharparkar',
      addressCountry: 'PK',
    },
  },
  deathPlace: {
    '@type': 'Place',
    name: 'Karachi, Sindh, Pakistan',
  },
  nationality: {
    '@type': 'Country',
    name: 'Pakistan',
  },
  description:
    'Vali Ram Vallabh (1941–2023) was a renowned Sindhi writer, translator, and literary scholar from Mithi, Tharparkar. He translated over 90 works from world literature into Sindhi — including works by Albert Camus, Leo Tolstoy, Amrita Pritam, Krishan Chander, and Mahmoud Darwish. He received the Pride of Performance Award from the President of Pakistan in 2003.',
  jobTitle: ['Writer', 'Translator', 'Literary Scholar', 'Editor'],
  knowsLanguage: [
    'Sindhi', 'English', 'Urdu', 'Sanskrit', 'Hindi', 'Dhatki', 'Parkari',
    'Gujarati', 'Saraiki', 'Punjabi',
  ],
  award: [
    'Pride of Performance Award, President of Pakistan, 2003',
    'Sadairati Award, President of Pakistan, 2014',
    'Mirza Qalich Baig Award (Translation), 1993',
    'Mirza Qalich Baig Award (Translation), 2011',
    'National Cultural Award for Minorities in Literature, Government of Pakistan',
    'Josh Malihabadi Award, Government of Sindh, 2009',
    'Sindhi Language Authority Adabi Award First Prize (Rs. 75,000), 2011',
    'Appreciation Memento, National Council for Promotion of Sindhi Language, Government of India, 2021',
  ],
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Institute of Sindhology, University of Sindh, Jamshoro',
    },
  ],
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'University of Sindh, Jamshoro',
    },
  ],
  spouse: {
    '@type': 'Person',
    name: 'Hari Vallabh',
  },
  children: [
    { '@type': 'Person', name: 'Dr. Kamleshwer Lohana' },
    { '@type': 'Person', name: 'Dr. Pushpa Vallabh' },
    { '@type': 'Person', name: 'Gauri Vallabh' },
  ],
  url: SITE_URL,
  sameAs: [
    'https://www.dawn.com/news/1784850',
    'https://www.express.pk/story/2742353/walii-raam-walibh-ehad-saaz-adeeb-2742353',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Vali Ram Vallabh',
  description:
    'Official tribute website and digital archive of Sindhi writer and translator Vali Ram Vallabh (1941–2023).',
  publisher: {
    '@type': 'Organization',
    name: 'Vali Ram Vallabh Literary Society',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/books?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: ['en', 'sd'],
}

// ─── Layout ───────────────────────────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Lateef — Sindhi Naskh font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lateef:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Person schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* WebSite schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
