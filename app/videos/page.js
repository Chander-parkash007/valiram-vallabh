import VideosClient from './PageClient'

const SITE_URL = 'https://valiramvallabh.com'

export const metadata = {
  title: 'Videos — Lectures, Tributes & Recordings',
  description:
    'Video archive of Vali Ram Vallabh — memorial lectures, literary gatherings, tributes by scholars and family, and recordings from the annual Vali Ram Vallabh Memorial Lecture on Sindhi Language and the Art of Translation.',
  keywords: [
    'Vali Ram Vallabh video',
    'Valiram Vallabh lecture',
    'Sindhi writer tribute video',
    'Vali Ram Vallabh memorial lecture',
    'Sindhi literature video',
    'ولي رام ولڀ وڊيو',
  ],
  alternates: {
    canonical: `${SITE_URL}/videos`,
    languages: {
      'en': `${SITE_URL}/videos`,
      'sd': `${SITE_URL}/videos`,
      'x-default': `${SITE_URL}/videos`,
    },
  },
  openGraph: {
    title: 'Videos — Vali Ram Vallabh | Lectures & Tributes',
    description:
      'Memorial lectures, literary tributes, and rare video recordings celebrating the life and legacy of Vali Ram Vallabh.',
    url: `${SITE_URL}/videos`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Vali Ram Vallabh — Videos',
      },
    ],
  },
}

export default function VideosPage() {
  return <VideosClient />
}
