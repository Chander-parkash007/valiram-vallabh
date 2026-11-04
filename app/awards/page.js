import AwardsClient from './PageClient'

const SITE_URL = 'https://valiramvallabh.com'

export const metadata = {
  title: 'Awards & Honours — 35 Recognitions',
  description:
    'Vali Ram Vallabh received 35 national and international awards including the Pride of Performance Award (2003) and Sadairati Award (2014) from the President of Pakistan, Mirza Qalich Baig Award, Josh Malihabadi Award, and recognition from the Government of India.',
  keywords: [
    'Vali Ram Vallabh awards',
    'Pride of Performance Award Sindhi writer',
    'Sadairati Award Pakistan',
    'Mirza Qalich Baig Award',
    'Josh Malihabadi Award',
    'Sindhi writer honours',
    'Valiram Vallabh awards list',
    'ولي رام ولڀ ايوارڊ',
    'صدارتي ايوارڊ',
  ],
  alternates: {
    canonical: `${SITE_URL}/awards`,
    languages: {
      'en': `${SITE_URL}/awards`,
      'sd': `${SITE_URL}/awards`,
      'x-default': `${SITE_URL}/awards`,
    },
  },
  openGraph: {
    title: 'Awards & Honours — Vali Ram Vallabh | 35 Recognitions',
    description:
      '35 awards spanning 1989–2021 including two Presidential awards — Pride of Performance (2003) and Sadairati Award (2014) from the President of Pakistan.',
    url: `${SITE_URL}/awards`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Vali Ram Vallabh — Awards and Honours',
      },
    ],
  },
}

export default function AwardsPage() {
  return <AwardsClient />
}
