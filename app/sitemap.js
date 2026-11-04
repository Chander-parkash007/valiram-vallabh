const SITE_URL = 'https://valiramvallabh.com'

// Last time each section was meaningfully updated
const DATES = {
  home:      '2026-10-30',
  biography: '2026-10-29',
  books:     '2026-10-30',
  awards:    '2026-10-30',
  gallery:   '2026-11-04',
  videos:    '2026-10-30',
  press:     '2026-11-04',
  tributes:  '2026-10-29',
  legacy:    '2026-10-29',
  contact:   '2026-10-01',
}

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: DATES.home,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/biography`,
      lastModified: DATES.biography,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/books`,
      lastModified: DATES.books,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/awards`,
      lastModified: DATES.awards,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: DATES.gallery,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/videos`,
      lastModified: DATES.videos,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/press`,
      lastModified: DATES.press,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/tributes`,
      lastModified: DATES.tributes,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/legacy`,
      lastModified: DATES.legacy,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: DATES.contact,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
