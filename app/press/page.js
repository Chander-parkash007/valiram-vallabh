import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Press & Articles — Vali Ram Vallabh',
  description: 'News coverage, newspaper articles and magazine features about Dewan Vali Ram Vallabh — from Dawn, Kawish, Affair magazine and more.',
}

const articles = [
  {
    id: 1,
    titleEn: 'Noted Literary Figure Vali Ram Vallabh Passes Away',
    publication: 'Dawn',
    publicationUrl: 'https://www.dawn.com/news/1784850',
    date: 'October 30, 2023',
    language: 'English',
    excerpt: 'Noted intellectual, translator and writer Vali Ram Vallabh died in a Karachi hospital on Sunday. He was 82. He was a diabetic and suffering from kidney and cardiac complications. He was given the Pride of Performance Award in 2003. He had command on Sanskrit, English, Sindhi, Urdu, Dhatki, Gurjati, Siraiki and Punjabi languages.',
    image: '/gallery/WhatsApp Image 2026-10-27 at 10.43.59 PM.jpeg',
    type: 'Obituary',
    featured: true,
  },
  {
    id: 2,
    titleEn: '2nd Death Anniversary — In Loving Memory',
    titleSd: 'ولي رام ولڀ — ٻي ورسي',
    publication: 'Dawn',
    publicationUrl: 'https://www.dawn.com',
    date: 'October 29, 2025',
    language: 'English',
    excerpt: '"As long as stories are told and thoughts take flight, your legacy will live on in every heart you touched." The second Vali Ram Vallabh Memorial Lecture — Sindhi Language and the Art of Translation — was held on 15 November 2025 at Press Club Mithi, Tharparkar, arranged by the Vali Ram Vallabh Literary Society.',
    image: '/gallery/WhatsApp Image 2026-10-27 at 10.44.07 PM.jpeg',
    type: 'Anniversary',
    featured: true,
  },
  {
    id: 3,
    titleEn: 'Vali Ram Vallabh — A Personality Devoted to Sindhi Language and Literature',
    titleSd: 'ولي رام ولڀ سنڌي ٻوليءَ ادب لاءِ وقف ٿيل شخصيت',
    publication: 'Rozana Kawish, Hyderabad',
    publicationUrl: null,
    date: 'October 29, 2025',
    language: 'Sindhi',
    author: 'Dr. Kamleshwar Lohana (Son)',
    excerpt: 'Written by his son Dr. Kamleshwar Lohana on the 2nd death anniversary. Describes how Vali Ram Vallabh made Sindhi language, literature, and translation his life\'s mission. His most famous translation "Dhariyo" (The Outsider by Albert Camus) is cited as a landmark in Sindhi translation literature.',
    image: '/gallery/WhatsApp Image 2026-10-27 at 10.43.42 PM.jpeg',
    type: 'Tribute Article',
    featured: false,
  },
  {
    id: 4,
    titleEn: 'A Personality of Courage and Determination',
    titleSd: 'همت ۽ حوصلي واري شخصيت',
    publication: 'Imrata Magazine, Issue 134',
    publicationUrl: null,
    date: 'November 2023',
    language: 'Sindhi',
    author: 'Dr. Chandi Ram Shahani',
    excerpt: '"Saeen Vali Ram Vallabh spent his 82 years of life in literary and social service in a most glorious and dignified manner. He enriched Sindhi language by translating works from various languages of the world. The people of the literary world will not be able to forget his literary endeavors for centuries to come." — Dr. Chandi Ram Shahani, a 30-year friend of the family.',
    image: '/gallery/WhatsApp Image 2026-10-27 at 10.43.43 PM.jpeg',
    type: 'Literary Tribute',
    featured: false,
  },
  {
    id: 5,
    titleEn: 'A Unique and Exemplary Writer of Sindhi Literature',
    titleSd: 'سنڌي ادب جو منفرد ۽ مثالي ليکڪ',
    publication: 'Imrata Magazine, Issue 134',
    publicationUrl: null,
    date: 'November 2023',
    language: 'Sindhi',
    author: 'Saeed Mangi (Colleague, Institute of Sindhology)',
    excerpt: '"Vali Ram Vallabh is that unique figure of Sindhi literature who did his exceptional share of work in complete silence and left indelible marks of his name." Saeed Mangi recalls working alongside him at the Institute of Sindhology from 1995, describing his meticulous editing work, his deep knowledge of world literature, and his role as Deputy Director of the Sindhology Museum.',
    image: null,
    type: 'Personal Memoir',
    featured: false,
  },
  {
    id: 6,
    titleEn: 'A Journey of Conversation — Affair Magazine Feature',
    titleSd: 'ٽرين سان گالهه ٻولهه ۽ مني جو سفر',
    publication: 'Affair Magazine',
    publicationUrl: null,
    date: 'January 31 – February 14, 2026',
    language: 'Sindhi',
    excerpt: 'A feature article in Affair magazine (Pages 28–29) covering a literary gathering held in honour of Vali Ram Vallabh in Karachi. Dilip Kothari presented a scholarly paper covering more than 40 books of Vali Ram Vallabh. Speakers included Dr. Manoj Kumar, Shankar Sagar, Dr. Anton Raaz, and Hamesh Kemani (Secretary, Sindhi Adabi).',
    image: '/gallery/WhatsApp Image 2026-10-27 at 10.43.49 PM.jpeg',
    type: 'Magazine Feature',
    featured: false,
  },
  {
    id: 7,
    titleEn: 'Translation Contributions of Vali Ram Vallabh',
    titleSd: 'وليرام ولڀ جون ترجمانگاريءَ ۾ خدمتون',
    publication: 'Humsari.com',
    publicationUrl: 'https://humsari.com/blog/valiram-vallabh-jon-tarjumy-nigari-main-khidmaton-by-dr-parveen-moosa-memon',
    date: '',
    language: 'Sindhi',
    author: 'Dr. Parveen Moosa Memon',
    excerpt: 'A detailed academic article by Dr. Parveen Moosa Memon analyzing the translation contributions of Vali Ram Vallabh to Sindhi literature. Covers his method of translation, the literary quality of his translated works, and his unique ability to make translations feel like original works in Sindhi.',
    image: null,
    type: 'Academic Article',
    featured: false,
  },
]

const typeColors = {
  'Obituary':       'var(--terracotta)',
  'Anniversary':    'var(--gold)',
  'Tribute Article':'var(--green)',
  'Literary Tribute':'#6366f1',
  'Personal Memoir':'#0891b2',
  'Magazine Feature':'#db2777',
  'Academic Article':'#d97706',
}

export default function PressPage() {
  const featured = articles.filter(a => a.featured)
  const rest = articles.filter(a => !a.featured)

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(201,148,58,0.2)', borderColor: 'rgba(201,148,58,0.4)', color: '#E8B85A' }}>
            Press Coverage
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#F5ECD7', marginBottom: 12, letterSpacing: '-0.03em' }}>
            Press & Articles
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(245,236,215,0.75)', maxWidth: 560 }}>
            Newspaper coverage, tribute articles, academic papers and magazine features about Dewan Vali Ram Vallabh — from Dawn to Kawish to Affair magazine.
          </p>
        </div>
      </section>

      {/* Featured articles */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Featured Coverage</div>
          <h2 className="section-title" style={{ marginBottom: 36 }}>
            Major <span style={{ background: 'linear-gradient(135deg,var(--terracotta),var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Publications</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24, marginBottom: 64 }}>
            {featured.map(article => (
              <div key={article.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 16px var(--shadow)' }}>
                {article.image && (
                  <div style={{ height: 220, position: 'relative', background: 'var(--bg-elevated)', overflow: 'hidden' }}>
                    <Image src={article.image} alt={article.titleEn} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,24,16,0.6), transparent)' }} />
                    <div style={{ position: 'absolute', top: 14, left: 14 }}>
                      <span style={{ fontSize: 10, padding: '3px 10px', borderRadius: 100, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', background: 'rgba(44,24,16,0.7)', color: '#F5ECD7', backdropFilter: 'blur(4px)' }}>
                        {article.type}
                      </span>
                    </div>
                  </div>
                )}
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: typeColors[article.type] || 'var(--terracotta)' }}>{article.publication}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{article.date}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 19, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10, lineHeight: 1.35 }}>
                    {article.titleEn}
                  </h3>
                  {article.titleSd && (
                    <p style={{ fontFamily: 'Noto Nastaliq Urdu, serif', fontSize: 15, color: 'var(--terracotta)', direction: 'rtl', textAlign: 'right', marginBottom: 12, lineHeight: 1.8 }}>
                      {article.titleSd}
                    </p>
                  )}
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>{article.excerpt}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <span className="tag" style={{ fontSize: 10 }}>{article.language}</span>
                    {article.publicationUrl && (
                      <a href={article.publicationUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '6px 14px', fontSize: 12 }}>
                        Read Original
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All articles */}
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>All Coverage</div>
          <h2 className="section-title" style={{ marginBottom: 32 }}>More Articles</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {rest.map(article => (
              <div key={article.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, padding: '22px 24px', display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap', transition: 'all 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.boxShadow = '0 4px 16px var(--shadow)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                {/* Left color bar */}
                <div style={{ width: 3, minHeight: 80, background: typeColors[article.type] || 'var(--terracotta)', borderRadius: 2, flexShrink: 0, alignSelf: 'stretch' }} />

                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: typeColors[article.type] || 'var(--terracotta)' }}>{article.publication}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{article.date}</span>
                    <span className="tag" style={{ fontSize: 9 }}>{article.language}</span>
                    <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 100, background: 'var(--bg-elevated)', color: 'var(--text-muted)', fontWeight: 600 }}>{article.type}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6, lineHeight: 1.3 }}>
                    {article.titleEn}
                  </h3>
                  {article.titleSd && (
                    <p style={{ fontFamily: 'Noto Nastaliq Urdu, serif', fontSize: 14, color: 'var(--terracotta)', direction: 'rtl', textAlign: 'right', marginBottom: 8, lineHeight: 1.8 }}>
                      {article.titleSd}
                    </p>
                  )}
                  {article.author && (
                    <p style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 600, marginBottom: 8 }}>By {article.author}</p>
                  )}
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{article.excerpt}</p>
                  {article.publicationUrl && (
                    <a href={article.publicationUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--terracotta)', fontWeight: 600, textDecoration: 'none', marginTop: 10 }}>
                      Read original article →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit news */}
      <section style={{ background: 'var(--cream)', padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 640, textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: 16 }}>Know of an Article We Missed?</h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 28 }}>
            If you have found a newspaper article, magazine feature, academic paper, or any other published coverage of Vali Ram Vallabh that is not listed here, please send it to us.
          </p>
          <a href="mailto:info@valiramvallabh.com?subject=Article about Vali Ram Vallabh" className="btn-primary">
            Submit an Article
          </a>
        </div>
      </section>
    </>
  )
}
