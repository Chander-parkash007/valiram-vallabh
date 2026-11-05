'use client'

import Link from 'next/link'
import Image from 'next/image'
import { person, books, awards, videos } from '@/lib/data'
import { useLanguage } from '@/components/LanguageContext'
import { t, tx } from '@/lib/i18n'

export default function HomePage() {
  const { lang } = useLanguage()
  const isSd = lang === 'sd'
  const featuredAwards = awards.filter(a => a.featured)
  const recentBooks = books.slice(0, 6)

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(160deg, #FAF6F0 0%, #F0E6D3 50%, #E8D5B7 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="container hero-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-grid">

            {/* Portrait */}
            <div className="hero-portrait-col">
              <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 420, background: '#EAD8BC' }}>
                <Image
                  src="/gallery/valiram_potrait_1_1_cropped.jpg"
                  alt="Vali Ram Vallabh — Watercolour Portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div className="hero-text-col">
              <div className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--terracotta)', animation: 'pulse 2s infinite', flexShrink: 0 }} />
                {tx(t.home.tag, lang)}
              </div>

              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.4rem,5vw,5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: 'var(--text-primary)', marginBottom: 14 }}>
                <span style={{ background: 'linear-gradient(135deg, var(--terracotta), var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {tx(t.home.title1, lang)}<br />{tx(t.home.title2, lang)}
                </span>
              </h1>

              <p style={{ fontFamily: 'Lateef, serif', fontSize: 24, color: 'var(--terracotta)', marginBottom: 16, lineHeight: 1.8, direction: 'rtl', textAlign: 'left' }}>
                ولي رام ولڀ
              </p>

              <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 4, fontWeight: 500 }}>
                {tx(t.home.bornDied, lang)}
              </p>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 28, letterSpacing: '0.02em' }}>
                {tx(t.home.birthplace, lang)}
              </p>

              <blockquote style={{
                borderLeft: '3px solid var(--gold)', paddingLeft: 16, marginBottom: 32,
                fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
                fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75,
              }}>
                "{person.quoteEn}"
              </blockquote>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 24px', marginBottom: 32 }}>
                {[
                  { number: '90+', label: tx(t.home.statWorks, lang) },
                  { number: '35+', label: tx(t.home.statAwards, lang) },
                  { number: '11',  label: tx(t.home.statLangs, lang) },
                  { number: '60+', label: tx(t.home.statYears, lang) },
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 30, fontWeight: 800, color: 'var(--terracotta)', lineHeight: 1 }}>
                      {s.number}
                    </div>
                    <div style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 10, flexDirection: 'column' }} className="hero-btns">
                <Link href="/biography" className="btn-primary" style={{ justifyContent: 'center', textAlign: 'center' }}>{tx(t.home.btnBio, lang)}</Link>
                <Link href="/books" className="btn-outline" style={{ justifyContent: 'center', textAlign: 'center' }}>{tx(t.home.btnBooks, lang)}</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ABOUT BRIEF ──────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'start' }}>
            <div>
              <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.home.hisStoryTag, lang)}</div>
              <h2 className="section-title" style={{ marginBottom: 20 }}>
                {tx(t.home.hisStoryH2, lang)}<br />
                <span style={{ background: 'linear-gradient(135deg, var(--terracotta), var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {tx(t.home.hisStoryH2b, lang)}
                </span>
              </h2>
              <div className="divider-gold" />
              <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.85, marginTop: 20, marginBottom: 16 }}>
                {tx(t.home.para1, lang)}
              </p>
              <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: 28 }}>
                {tx(t.home.para2, lang)}
              </p>
              <Link href="/biography" className="btn-primary">{tx(t.home.btnFullBio, lang)}</Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: tx(t.home.factsEdu, lang),
                  value: isSd ? 'ايم اي اردو ادب، سوشيالاجي، ماس ڪميونيڪيشن، ايل ايل بي — سڀ فرسٽ ڪلاس فرسٽ — سنڌ يونيورسٽي، جامشورو'
                              : 'M.A. Urdu Literature, Sociology, Mass Communication, LLB — all First Class First — Sindh University, Jamshoro' },
                { label: tx(t.home.factsCareer, lang),
                  value: isSd ? 'ٻيلي کاتو (1959-68) → ايڊورٽائيزنگ (1969-88) → ڊپٽي ڊائريڪٽر، سنڌالاجي عجائب گهر، سنڌ يونيورسٽي (1988-2001)'
                              : 'Forest Department (1959–68) → Advertising (1969–88) → Deputy Director, Sindhology Museum, Sindh University (1988–2001)' },
                { label: tx(t.home.factsLangs, lang),
                  value: isSd ? '11 ٻوليون — سنڌي، انگريزي، اردو، سنسڪرت، هندي، ڌاٽڪي، پارڪاري، گجراتي، سرائيڪي، پنجابي، فرانسيسي'
                              : '11 languages — Sindhi, English, Urdu, Sanskrit, Hindi, Dhatki, Parkari, Gujarati, Saraiki, Punjabi, French' },
                { label: tx(t.home.factsAward, lang),
                  value: isSd ? 'پرائيڊ آف پرفارمنس 2003 — حڪومت پاڪستان. ٻيو ڀيرو 2014ع ۾ (50 لک رپيا).'
                              : 'Pride of Performance 2003 — Government of Pakistan. Second time in 2014 (Rs. 5,000,000).' },
                { label: tx(t.home.factsLegacy, lang),
                  value: isSd ? 'ولي رام ولڀ ادبي سوسائٽي سالانه يادگار ليڪچر ڏئي ٿي. حڪومت سنڌ ۽ سنڌي ادبي بورڊ کيس پارڪ وقف ڪيو.'
                              : 'Vali Ram Vallabh Literary Society holds Annual Memorial Lectures. A public park is named in his honour by the Government of Sindh and Sindhi Adabi Board.' },
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
            <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.home.honoursTag, lang)}</div>
            <h2 className="section-title">
              {tx(t.home.honoursH2a, lang)}<br />
              <span style={{ background: 'linear-gradient(135deg, var(--terracotta), var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {tx(t.home.honoursH2b, lang)}
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
            <Link href="/awards" className="btn-primary">{tx(t.home.viewAllAwards, lang)}</Link>
          </div>
        </div>
      </section>

      {/* ── BOOKS PREVIEW ────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.home.worksTag, lang)}</div>
              <h2 className="section-title">
                {tx(t.home.worksH2a, lang)}<br />
                <span style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {tx(t.home.worksH2b, lang)}
                </span>
              </h2>
            </div>
            <Link href="/books" style={{ fontSize: 14, fontWeight: 600, color: 'var(--terracotta)', textDecoration: 'none' }}>
              {tx(t.home.viewAllBooks, lang)}
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
                <p style={{ fontFamily: 'Lateef, serif', fontSize: 18, color: 'var(--terracotta)', direction: 'rtl', textAlign: 'right', lineHeight: 1.8 }}>
                  {book.titleSd}
                </p>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {book.titleEn}
                </h3>
                {book.originalAuthor && book.originalAuthor !== 'Vali Ram Vallabh' && (
                  <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{isSd ? 'اصل:' : 'Original:'} {book.originalAuthor}</p>
                )}
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1 }}>
                  {book.description.slice(0, 100)}...
                </p>
                <Link href="/books" className="btn-green" style={{ padding: '8px 16px', fontSize: 12, justifyContent: 'center', marginTop: 4 }}>
                  {isSd ? 'آنلائن پڙهو' : 'Read Online'}
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
          <blockquote style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontStyle: 'italic', fontSize: 'clamp(18px, 3vw, 24px)', color: '#F5ECD7', lineHeight: 1.75, marginBottom: 32, direction: isSd ? 'rtl' : 'ltr' }}>
            {isSd
              ? 'جيستائين ڪهاڻيون ٻڌايون وينديون ۽ خيال اڏامندا رهندا، توهان جو ورثو هر انهي دل ۾ زنده رهندو جنهن کي توهان ڇُهيو.'
              : 'As long as stories are told and thoughts take flight, your legacy will live on in every heart you touched.'}
          </blockquote>
          <p style={{ fontSize: 12, color: 'rgba(245,236,215,0.55)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 40 }}>
            Dawn Newspaper — 2nd Death Anniversary, October 2025
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tributes" style={{ padding: '12px 24px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, color: '#F5ECD7', textDecoration: 'none', fontSize: 14, fontWeight: 600, fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}>
              {isSd ? 'سڀ خراج پڙهو' : 'Read All Tributes'}
            </Link>
            <Link href="/legacy" style={{ padding: '12px 24px', background: 'rgba(201,148,58,0.2)', border: '1px solid rgba(201,148,58,0.4)', borderRadius: 8, color: '#C9943A', textDecoration: 'none', fontSize: 14, fontWeight: 600, fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}>
              {isSd ? 'سندس جيئري وراثت' : 'His Living Legacy'}
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIGITAL LIBRARY CTA ──────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <div className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>{tx(t.home.digitalTag, lang)}</div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            {tx(t.home.digitalH2a, lang)}<br />
            <span style={{ background: 'linear-gradient(135deg, var(--terracotta), var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {tx(t.home.digitalH2b, lang)}
            </span>
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 32 }}>
            {tx(t.home.digitalDesc, lang)}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/books" className="btn-primary">{tx(t.common.browseBooks, lang)}</Link>
            <a href="https://tinyurl.com/2p8bx2rn" target="_blank" rel="noopener noreferrer" className="btn-outline">
              {tx(t.common.sindhLibrary, lang)}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
