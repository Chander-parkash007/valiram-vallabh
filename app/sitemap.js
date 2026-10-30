export default function sitemap() {
  const base = 'https://valiramvallabh.com'
  const pages = ['', '/biography', '/books', '/awards', '/gallery', '/videos', '/tributes', '/legacy', '/contact']
  return pages.map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/biography' ? 0.9 : 0.8,
  }))
}
