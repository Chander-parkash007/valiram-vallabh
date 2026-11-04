import GalleryClient from './PageClient'

const SITE_URL = 'https://valiramvallabh.com'

export const metadata = {
  title: 'Photo Gallery — 100+ Photographs',
  description:
    'Photo gallery of Vali Ram Vallabh — over 100 photographs spanning his literary career, events at Institute of Sindhology, award ceremonies, family gatherings, first and second death anniversaries, and the Vali Ram Vallabh Park named in his honour.',
  keywords: [
    'Vali Ram Vallabh photos',
    'Valiram Vallabh pictures',
    'Sindhi writer photos',
    'Vali Ram Vallabh gallery',
    'Vali Ram Vallabh death anniversary',
    'ولي رام ولڀ تصويرون',
  ],
  alternates: {
    canonical: `${SITE_URL}/gallery`,
    languages: {
      'en': `${SITE_URL}/gallery`,
      'sd': `${SITE_URL}/gallery`,
      'x-default': `${SITE_URL}/gallery`,
    },
  },
  openGraph: {
    title: 'Photo Gallery — Vali Ram Vallabh | 100+ Photographs',
    description:
      'Rare archive of over 100 photographs — portraits, literary events, award ceremonies, family memories, and the park named in his honour.',
    url: `${SITE_URL}/gallery`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Vali Ram Vallabh — Photo Gallery',
      },
    ],
  },
}

export default function GalleryPage() {
  return <GalleryClient />
}
