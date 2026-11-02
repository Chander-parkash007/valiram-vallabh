export default function sitemap() {
  const base = 'https://valiramvallabh.com'
  const pages = [
    { path: '',            priority: 1.0, freq: 'weekly' },
    { path: '/biography',  priority: 0.9, freq: 'monthly' },
    { path: '/books',      priority: 0.9, freq: 'monthly' },
    { path: '/awards',     priority: 0.8, freq: 'monthly' },
    { path: '/gallery',    priority: 0.8, freq: 'monthly' },
    { path: '/videos',     priority: 0.8, freq: 'monthly' },
    { path: '/press',      priority: 0.8, freq: 'monthly' },
    { path: '/tributes',   priority: 0.7, freq: 'monthly' },
    { path: '/legacy',     priority: 0.7, freq: 'monthly' },
    { path: '/contact',    priority: 0.6, freq: 'yearly' },
  ]
  return pages.map(({ path, priority, freq }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }))
}
