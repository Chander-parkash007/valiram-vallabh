import Link from 'next/link'

export const metadata = {
  title: 'Legacy — Vali Ram Vallabh',
  description: 'The living legacy of Vali Ram Vallabh — the Literary Society, Annual Memorial Lectures, Sindh Museum corner, Blue Angels Eden School, and his enduring impact on Sindhi literature.',
}

export default function LegacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(201,148,58,0.2)', borderColor: 'rgba(201,148,58,0.4)', color: '#E8B85A' }}>Continuing Story</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#F5ECD7', marginBottom: 12, letterSpacing: '-0.03em' }}>
            His Living Legacy
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(245,236,215,0.75)', maxWidth: 560 }}>
            Vali Ram Vallabh may be gone, but his work, his words, and his institutions continue to shape Sindhi literature and education.
          </p>
        </div>
      </section>

      {/* Quote */}
      <section style={{ background: '#2C1810', padding: '48px 0' }}>
        <div className="container" style={{ maxWidth: 680, textAlign: 'center' }}>
          <blockquote style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 'clamp(17px,2.5vw,22px)', color: '#F5ECD7', lineHeight: 1.75, marginBottom: 20 }}>
            "I feel as though I have been passed a bright torch that it is up to me to carry through the next phase and pass on in my own time. Together we will carry his light with us."
          </blockquote>
          <p style={{ fontSize: 13, color: '#C9943A', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
            — Sameer Rai Chhabria, Grandson
          </p>
        </div>
      </section>

      {/* Literary Society */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 }}>

            <div>
              <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Literary Society</div>
              <h2 className="section-title" style={{ marginBottom: 16 }}>
                Vali Ram Vallabh<br /><span className="gradient-gold">Literary Society</span>
              </h2>
              <div className="divider-gold" />
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  The <strong>Vali Ram Vallabh Literary Society</strong> was established to preserve and promote his literary contributions and to continue the tradition of bringing world literature to Sindhi readers.
                </p>
                <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  The Society organises an <strong>Annual Memorial Lecture</strong> on or near the anniversary of his passing (29 October) each year.
                </p>
              </div>
            </div>

            {/* Memorial lectures */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                {
                  n: '1st',
                  year: '2024',
                  title: '1st Vali Ram Vallabh Memorial Lecture',
                  detail: 'October 2024 — marking the first anniversary of his passing.',
                  venue: '',
                },
                {
                  n: '2nd',
                  year: '2025',
                  title: 'Sindhi Language and the Art of Translation: Exploring the Contributions of Vali Ram Vallabh',
                  detail: 'Saturday, 15 November 2025 — 4:00 PM',
                  venue: 'Press Club Mithi, Tharparkar, Sindh',
                  source: 'Dawn newspaper, 29 October 2025',
                },
              ].map((l, i) => (
                <div key={i} className="card" style={{ borderTop: `3px solid ${i === 1 ? 'var(--gold)' : 'var(--terracotta)'}` }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ minWidth: 44, height: 44, borderRadius: 12, background: i === 1 ? 'rgba(201,148,58,0.1)' : 'rgba(139,58,42,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 13, color: i === 1 ? 'var(--gold)' : 'var(--terracotta)', flexShrink: 0 }}>
                      {l.n}
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6, lineHeight: 1.4 }}>"{l.title}"</p>
                      <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 2 }}>{l.detail}</p>
                      {l.venue && <p style={{ fontSize: 12, color: 'var(--terracotta)', fontWeight: 600 }}>{l.venue}</p>}
                      {l.source && <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>Source: {l.source}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sindh Museum Corner */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, alignItems: 'center' }}>
            <div>
              <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Museum</div>
              <h2 className="section-title" style={{ marginBottom: 16 }}>
                Sindh Museum Corner<br /><span className="gradient-gold">Hyderabad</span>
              </h2>
              <div className="divider-gold" />
              <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: 20, marginBottom: 16 }}>
                A dedicated corner named after Vali Ram Vallabh is being constructed at the <strong>Sindh Museum, Hyderabad</strong> — preserving his manuscripts, books, awards, photographs, and personal belongings for future generations.
              </p>
              <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                The exhibition was inaugurated on <strong>13 November</strong> — bringing his life's work into a permanent public archive.
              </p>
            </div>
            <div className="card" style={{ borderLeft: '4px solid var(--gold)', padding: '28px 24px' }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}></div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>
                Vali Ram Vallabh Corner
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { icon: '', text: 'Sindh Museum, Hyderabad, Sindh, Pakistan' },
                  { icon: '', text: 'Inaugurated: 13 November' },
                  { icon: '', text: 'Purpose: Preserving his manuscripts, awards, and personal collection' },
                  { icon: '‍‍👧‍', text: 'Organized by: Dr. Kamleshwar Lohana and family' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 14, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Park & School */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>

            {/* Park */}
            <div className="card" style={{ borderTop: '3px solid var(--green)', padding: '28px' }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}></div>
              <h3 className="section-title" style={{ fontSize: 22, marginBottom: 12 }}>
                Vali Ram Vallabh <span className="gradient-green">Park</span>
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>
                A public park has been named <strong>"Vali Ram Vallabh Park"</strong> by the <strong>Sindhi Adabi Board</strong> and the <strong>Government of Sindh</strong> — a permanent public honour bearing his name. He was photographed standing beside the park's signboard before his passing.
              </p>
              <div style={{ padding: '12px 16px', background: 'rgba(45,90,61,0.08)', borderRadius: 10, border: '1px solid rgba(45,90,61,0.2)' }}>
                <p style={{ fontSize: 12, color: 'var(--green)', fontWeight: 700 }}>Awarded by</p>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Sindhi Adabi Board + Government of Sindh</p>
              </div>
            </div>

            {/* School */}
            <div className="card" style={{ borderTop: '3px solid var(--terracotta)', padding: '28px' }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}></div>
              <h3 className="section-title" style={{ fontSize: 22, marginBottom: 12 }}>
                Blue Angels <span className="gradient-gold">Eden School</span>
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>
                On <strong>1 April 1988</strong>, Vali Ram Vallabh founded Blue Angels Eden School in Hussainabad, Hyderabad — providing quality education from Kindergarten to Class 8. The school continues to operate, led by his daughter-in-law <strong>Anita Kamleshwar</strong> as Principal.
              </p>
              <div style={{ padding: '12px 16px', background: 'rgba(139,58,42,0.06)', borderRadius: 10, border: '1px solid rgba(139,58,42,0.15)' }}>
                <p style={{ fontSize: 12, color: 'var(--terracotta)', fontWeight: 700 }}>Location</p>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Hussainabad, Hyderabad, Sindh</p>
              </div>
            </div>

            {/* Digital Archive */}
            <div className="card" style={{ borderTop: '3px solid var(--gold)', padding: '28px' }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}></div>
              <h3 className="section-title" style={{ fontSize: 22, marginBottom: 12 }}>
                Digital <span className="gradient-gold">Archive</span>
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>
                This website — <strong>valiramvallabh.com</strong> — is the world's most complete digital archive of his life and work. 25 books freely available, 35+ awards documented, complete biography, video archive, and tributes from family and scholars.
              </p>
              <div style={{ display: 'flex', gap: 8 }}>
                <Link href="/books" className="btn-gold" style={{ padding: '8px 16px', fontSize: 12 }}>Browse Books</Link>
                <Link href="/biography" className="btn-outline" style={{ padding: '8px 16px', fontSize: 12 }}>Biography</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section" style={{ background: '#2C1810' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#F5ECD7', marginBottom: 12 }}>
              His Enduring Impact
            </h2>
            <p style={{ color: 'rgba(245,236,215,0.65)', fontSize: 15, maxWidth: 560, margin: '0 auto' }}>
              The numbers behind a lifetime of dedication to Sindhi language and literature.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 20 }}>
            {[
              { n: '90+', l: 'Translated & Compiled Works' },
              { n: '35+', l: 'National & International Awards' },
              { n: '11', l: 'Languages Mastered' },
              { n: '26', l: 'Languages in Kota Phulwari' },
              { n: '19', l: 'Countries in Kota Phulwari' },
              { n: '60+', l: 'Years of Literary Service' },
              { n: '4', l: 'Editions of Ghadar' },
              { n: '5', l: 'Volumes of Arsi Magazine' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center', padding: '20px 12px', background: 'rgba(255,255,255,0.04)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 36, fontWeight: 800, color: '#C9943A', lineHeight: 1, marginBottom: 8 }}>{s.n}</div>
                <div style={{ fontSize: 12, color: 'rgba(245,236,215,0.55)', lineHeight: 1.4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

