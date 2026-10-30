import Link from 'next/link'
import Image from 'next/image'
import { person, timeline, books, awards, videos } from '@/lib/data'

export const metadata = {
  title: 'Vali Ram Vallabh — Sindhi Writer, Translator & Literary Scholar (1941–2023)',
  description: 'Official tribute website of Dewan Vali Ram Vallabh. 90+ translated works, 35 awards including Pride of Performance 2003. Born Mithi, Tharparkar 1941.',
}

export default function HomePage() {
  const featuredAwards = awards.filter(a => a.featured)
  const featuredVideo = videos.find(v => v.featured && v.platform === 'youtube')
  const recentBooks = books.slice(0, 6)

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{
        minHeight: '94vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(160deg, #FAF6F0 0%, #F0E6D3 50%, #E8D5B7 100%)',
        position: 'relative', overflow: 'hidden', padding: '60px 0',
      }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '45%', height: '100%', pointerEvents: 'none', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #FAF6F0, transparent 40%)', zIndex: 1 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 40%, rgba(139,58,42,0.06), transparent 70%)' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 60, alignItems: 'center' }}>

            {/* Text */}
            <div style={{ maxWidth: 680 }}>
              <div className="tag" style={{ marginBottom: 28, display: 'inline-flex' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--terracotta)', animation: 'pulse 2s infinite', flexShrink: 0 }} />
                Official Tribute Archive
              </div>

              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.8rem,6vw,5.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: 'var(--text-primary)', marginBottom: 16 }}>
                Dewan<br />
                <span style={{ background: 'linear-gradient(135deg, var(--terracotta), var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Vali Ram<br />Vallabh
                </span>
              </h1>

              <p style={{ fontFamily: 'Noto Nastaliq Urdu, serif', fontSize: 26, color: 'var(--terracotta)', marginBottom: 20, lineHeight: 1.8, direction: 'rtl', textAlign: 'left' }}>
                ديوان ولي رام ولڀ
              </p>

              <p style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 6, fontWeight: 500 }}>
                {person.bornEn} — {person.diedEn}
              </p>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 36, letterSpacing: '0.02em' }}>
                Mithi, Tharparkar, Sindh, Pakistan
              </p>

              <blockquote style={{
                borderLeft: '3px solid var(--gold)', paddingLeft: 20, marginBottom: 44,
                fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
                fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 540,
              }}>
                "{person.quoteEn}"
              </blockquote>

              {/* Stats row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, marginBottom: 44 }}>
                {[
                  { number: '90+', label: 'Translated Works' },
                  { number: '35+', label: 'Awards' },
                  { number: '11', label: 'Languages' },
                  { number: '60+', label: 'Years of Service' },
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 34, fontWeight: 800, color: 'var(--terracotta)', lineHeight: 1 }}>
                      {s.number}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 5 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/biography" className="btn-primary">Read His Biography</Link>
                <Link href="/books" className="btn-outline">Browse His Books</Link>
              </div>
            </div>

            {/* Portrait */}
            <div style={{ flexShrink: 0 }} className="hero-portrait">
              <div style={{
                width: 320, height: 400, borderRadius: 24,
                overflow: 'hidden', position: 'relative',
                boxShadow: '0 32px 80px rgba(139,58,42,0.2)',
                border: '1px solid rgba(139,58,42,0.15)',
              }}>
                <Image
                  src="/portrait.jpg"
                  alt="Dewan Vali Ram Vallabh — Sindhi Writer and Translator"
                  fill
                  sizes="320px"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  priority
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,24,16,0.5) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 16px' }}>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 15, fontWeight: 700, color: '#F5ECD7' }}>Vali Ram Vallabh</p>
                  <p style={{ fontSize: 11, color: 'rgba(245,236,215,0.7)' }}>1941 — 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED VIDEO ────────────────────────────────────── */}
      {featuredVideo && (
        <section className="section" style={{ background: '#2C1810' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div className="tag-gold" style={{ marginBottom: 16, display: 'inline-flex' }}>Featured Video</div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,4vw,2.6rem)', color: '#F5ECD7', marginBottom: 12 }}>
                In His Own Words
              </h2>
              <p style={{ color: 'rgba(245,236,215,0.6)', fontSize: 15, maxWidth: 580, margin: '0 auto' }}>
                {featuredVideo.titleEn}
              </p>
            </div>
            <div style={{ maxWidth: 820, margin: '0 auto', borderRadius: 16, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src={`https://www.youtube.com/embed/${featuredVideo.embedId}?rel=0`}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen title={featuredVideo.titleEn}
                />
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 32 }}>
              <Link href="/videos" style={{ color: '#C9943A', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                Watch all videos →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── ABOUT BRIEF ──────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'start' }}>
            <div>
              <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>His Story</div>
              <h2 className="section-title" style={{ marginBottom: 20 }}>
                A Life Devoted to<br />
                <span style={{ background: 'linear-gradient(135deg, var(--terracotta), var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Sindhi Literature
                </span>
              </h2>
              <div className="divider-gold" />
              <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.85, marginTop: 20, marginBottom: 16 }}>
                Born in Mithi, Tharparkar on 18 August 1941, Dewan Vali Ram Vallabh dedicated over 60 years of his life to enriching Sindhi language and literature. He translated masterpieces by Leo Tolstoy, Albert Camus, Amrita Pritam, Krishan Chander, and Qurratulain Hyder into Sindhi — bringing world literature to Sindhi readers for the first time.
              </p>
              <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: 28 }}>
                He served as Deputy Director of the Sindhology Museum, Jamshoro, edited the bi-annual journal Sindhi Adab, co-edited the celebrated Arsi literary magazine, and founded Blue Angels Eden School in Hyderabad. His work earned him 35+ national and international awards including Pakistan's Pride of Performance in 2003.
              </p>
              <Link href="/biography" className="btn-primary">Read Full Biography</Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: 'Education', value: 'M.A. Urdu Literature, Sociology, Mass Communication, LLB — all First Class First — Sindh University, Jamshoro' },
                { label: 'Career', value: 'Forest Department (1959–68) → Advertising (1969–88) → Deputy Director, Sindhology Museum, Sindh University (1988–2001)' },
                { label: 'Languages', value: '11 languages — Sindhi, English, Urdu, Sanskrit, Hindi, Dhatki, Parkari, Gujarati, Saraiki, Punjabi, French' },
                { label: 'Highest Award', value: 'Pride of Performance 2003 — Government of Pakistan. Second time in 2014 (Rs. 5,000,000).' },
                { label: 'Legacy', value: 'Vali Ram Vallabh Literary Society holds Annual Memorial Lectures. A public park is named in his honour by the Government of Sindh and Sindhi Adabi Board.' },
              ].map(f => (
                <div key={f.label} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 18px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 3, height: '100%', minHeight: 40, background: 'var(--gold)', borderRadius: 2, flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--terracotta)', marginBottom: 4 }}>{f.label}</p>
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED AWARDS ──────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Honours</div>
            <h2 className="section-title">
              35+ Awards &<br />
              <span style={{ background: 'linear-gradient(135deg, var(--terracotta), var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                International Recognition
              </span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 40 }}>
            {featuredAwards.map((a, i) => (
              <div key={i} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderTop: '3px solid var(--gold)',
                borderRadius: 16, padding: '22px 24px',
                boxShadow: '0 2px 8px rgba(44,24,16,0.06)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <span className="tag-gold">{a.year}</span>
                  <span style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(201,148,58,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                    </svg>
                  </span>
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6, lineHeight: 1.3 }}>
                  {a.nameEn}
                </h3>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>{a.organisation}</p>
                {a.noteEn && <p style={{ fontSize: 11, color: 'var(--gold)', marginTop: 8, fontWeight: 600 }}>{a.noteEn}</p>}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/awards" className="btn-primary">View All 35+ Awards</Link>
          </div>
        </div>
      </section>

      {/* ── BOOKS PREVIEW ────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>His Works</div>
              <h2 className="section-title">
                Read His Books<br />
                <span style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Free Online
                </span>
              </h2>
            </div>
            <Link href="/books" style={{ fontSize: 14, fontWeight: 600, color: 'var(--terracotta)', textDecoration: 'none' }}>
              View all 25 books →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 16 }}>
            {recentBooks.map(book => (
              <div key={book.id} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16,
                padding: '22px', display: 'flex', flexDirection: 'column', gap: 10,
                transition: 'all 0.2s', cursor: 'pointer',
              }}>
                <div style={{ height: 3, borderRadius: 100, background: 'linear-gradient(90deg, var(--terracotta), var(--gold))' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span className="tag-green" style={{ fontSize: 10 }}>{book.category}</span>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>{book.year}</span>
                </div>
                <p style={{ fontFamily: 'Noto Nastaliq Urdu, serif', fontSize: 18, color: 'var(--terracotta)', direction: 'rtl', textAlign: 'right', lineHeight: 1.8 }}>
                  {book.titleSd}
                </p>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {book.titleEn}
                </h3>
                {book.originalAuthor && book.originalAuthor !== 'Vali Ram Vallabh' && (
                  <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>Original: {book.originalAuthor}</p>
                )}
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1 }}>
                  {book.description.slice(0, 100)}...
                </p>
                <Link href="/books" className="btn-green" style={{ padding: '8px 16px', fontSize: 12, justifyContent: 'center', marginTop: 4 }}>
                  Read Online
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRIBUTE QUOTE ─────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, var(--terracotta), #6B2A1C)', padding: '88px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 720 }}>
          <div style={{ width: 48, height: 2, background: 'rgba(245,236,215,0.3)', margin: '0 auto 32px' }} />
          <blockquote style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 'clamp(18px, 3vw, 24px)', color: '#F5ECD7', lineHeight: 1.75, marginBottom: 32 }}>
            As long as stories are told and thoughts take flight, your legacy will live on in every heart you touched.
          </blockquote>
          <p style={{ fontSize: 12, color: 'rgba(245,236,215,0.55)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 40 }}>
            Dawn Newspaper — 2nd Death Anniversary, October 2025
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tributes" style={{ padding: '12px 24px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, color: '#F5ECD7', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
              Read All Tributes
            </Link>
            <Link href="/legacy" style={{ padding: '12px 24px', background: 'rgba(201,148,58,0.2)', border: '1px solid rgba(201,148,58,0.4)', borderRadius: 8, color: '#C9943A', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
              His Living Legacy
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIGITAL LIBRARY CTA ──────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <div className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>Digital Library</div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            25 Books Available<br />
            <span style={{ background: 'linear-gradient(135deg, var(--terracotta), var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Free to Read & Download
            </span>
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 32 }}>
            All 25 available books are free to read online or download. His life's work is preserved digitally so future generations can access it forever.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/books" className="btn-primary">Browse All Books</Link>
            <a href="https://tinyurl.com/2p8bx2rn" target="_blank" rel="noopener noreferrer" className="btn-outline">
              Sindh Digital Library
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-portrait { display: none; }
        }
      `}</style>
    </>
  )
}
