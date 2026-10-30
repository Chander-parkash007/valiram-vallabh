import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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

export const metadata = {
  metadataBase: new URL('https://valiramvallabh.com'),
  title: {
    default: 'Vali Ram Vallabh — Sindhi Writer, Translator & Literary Scholar (1941–2023)',
    template: '%s | Vali Ram Vallabh',
  },
  description:
    'Official tribute website of Dewan Vali Ram Vallabh — recipient of Pride of Performance Award 2003, translator of Anna Karenina, The Outsider (Camus), and works of Amrita Pritam, Krishan Chander into Sindhi. Born Mithi, Tharparkar 1941.',
  keywords: [
    'Vali Ram Vallabh',
    'ولي رام ولڀ',
    'Wali Ram Vallabh',
    'Sindhi writer',
    'Sindhi literature',
    'Sindhi translator',
    'Pride of Performance',
    'Tharparkar',
    'Mithi',
    'Sindhi books',
    'Pakistani writer',
    'Sindhi language',
  ],
  authors: [{ name: 'Vali Ram Vallabh Literary Society' }],
  creator: 'Vali Ram Vallabh Literary Society',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://valiramvallabh.com',
    siteName: 'Vali Ram Vallabh',
    title: 'Vali Ram Vallabh — Sindhi Literary Legend (1941–2023)',
    description:
      'Complete tribute archive — biography, 90+ books, 35 awards, gallery, videos and tributes for Dewan Vali Ram Vallabh.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Vali Ram Vallabh' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vali Ram Vallabh — Sindhi Literary Legend (1941–2023)',
    description: 'Complete tribute archive for Dewan Vali Ram Vallabh — writer, translator, scholar.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Vali Ram Vallabh',
              alternateName: ['ولي رام ولڀ', 'Wali Ram Vallabh', 'Dewan Vali Ram Vallabh'],
              birthDate: '1941-08-18',
              deathDate: '2023-10-29',
              birthPlace: { '@type': 'Place', name: 'Mithi, Tharparkar, Sindh, Pakistan' },
              deathPlace: { '@type': 'Place', name: 'Karachi, Pakistan' },
              nationality: 'Pakistani',
              description:
                'Dewan Vali Ram Vallabh was a renowned Sindhi writer, translator, and literary scholar from Mithi, Tharparkar. He translated over 90 works from world literature into Sindhi including novels by Leo Tolstoy, Albert Camus, Amrita Pritam, and Krishan Chander.',
              award: 'Pride of Performance Award 2003, Government of Pakistan',
              occupation: ['Writer', 'Translator', 'Literary Scholar', 'Editor'],
              url: 'https://valiramvallabh.com',
              sameAs: ['https://www.dawn.com/news/1784850'],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
