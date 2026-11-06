'use client'

import Link from 'next/link'
import Image from 'next/image'
import { person, books, awards, videos } from '@/lib/data'
import { useLanguage } from '@/components/LanguageContext'
import { t, tx } from '@/lib/i18n'

export default function HomePage() {
  const { lang } = useLanguage()
  const isSd = lang === 'sd'
  const featuredAwards = awards.filter(a => a.featured && a.awardPhoto)
  const recentBooks = books.slice(0, 6)

  const catSd = {
    'Translated Novel':           'ترجمو ٿيل ناول',
    'Translated Novelette':       'ترجمو ٿيل ننڍو ناول',
    'Translated Plays':           'ترجمو ٿيل ڊرامو',
    'Translated Stories':         'ترجمو ٿيل ڪهاڻيون',
    'Translated Poetry':          'ترجمو ٿيل شاعري',
    'Compiled Anthology':         'گڏ ڪيل انٿالاجي',
    'Literary Journal':           'ادبي رسالو',
    'Research Journal':           'تحقيقي رسالو',
    'Autobiography / Interviews': 'سوانح / انٽرويو',
    'Philosophy / Religion':      'فلسفو / مذهب',
    'Original Work':              'اصل ڪم',
    'Educational':                'تعليمي',
    'Compiled Work':              'گڏ ڪيل ڪم',
  }

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(160deg, #FAF6F0 0%, #F0E6D3 40%, #EAD8BC 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="container hero-container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Hero always LTR so portrait stays on the right in BOTH languages */}
          <div className="hero-grid" style={{ direction: 'ltr' }}>

            {/* Text — left column */}
            <div className="hero-text-col" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="tag" style={{ marginBottom: 20, display: 'inline-flex', alignSelf: 'flex-start' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--terracotta)', animation: 'pulse 2s infinite', flexShrink: 0 }} />
                {tx(t.home.tag, lang)}
              </div>

              {/* Title — Sindhi: right-aligned RTL; English: left-aligned LTR */}
              {isSd ? (
                <h1 style={{ fontFamily: 'Lateef, serif', fontSize: 'clamp(2.8rem,5.5vw,5rem)', fontWeight: 800, letterSpacing: 0, lineHeight: 1.4, color: 'var(--text-primary)', marginBottom: 12, textAlign: 'right', direction: 'rtl' }}>
                  <span style={{ background: 'linear-gradient(135deg, var(--terracotta), var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    ولي رام ولڀ
                  </span>
                </h1>
              ) : (
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.4rem,5vw,5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: 'var(--text-primary)', marginBottom: 14, textAlign: 'left', direction: 'ltr' }}>
                  <span style={{ background: 'linear-gradient(135deg, var(--terracotta), var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Vali Ram<br />Vallabh
                  </span>
                </h1>
              )}

              {/* Sindhi subtitle (English mode only) */}
              {!isSd && (
                <p style={{ fontFamily: 'Lateef, serif', fontSize: 22, color: 'var(--terracotta)', marginBottom: 14, lineHeight: 1.8, direction: 'rtl', textAlign: 'right' }}>
                  ولي رام ولڀ
                </p>
              )}

              <p style={{
                fontSize: isSd ? 18 : 16, color: 'var(--text-secondary)', lineHeight: isSd ? 2 : 1.6,
                marginBottom: 4, fontWeight: 500,
                fontFamily: isSd ? 'Lateef, serif' : 'inherit',
                textAlign: isSd ? 'right' : 'left', direction: isSd ? 'rtl' : 'ltr',
              }}>
                {tx(t.home.bornDied, lang)}
              </p>
              <p style={{
                fontSize: isSd ? 16 : 13, color: 'var(--text-muted)', marginBottom: 24,
                fontFamily: isSd ? 'Lateef, serif' : 'inherit',
                textAlign: isSd ? 'right' : 'left', direction: isSd ? 'rtl' : 'ltr',
              }}>
                {tx(t.home.birthplace, lang)}
              </p>

              <blockquote style={{
                borderLeft: isSd ? 'none' : '3px solid var(--gold)',
                borderRight: isSd ? '3px solid var(--gold)' : 'none',
                paddingLeft: isSd ? 0 : 16, paddingRight: isSd ? 16 : 0,
                marginBottom: 28,
                fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif',
                fontStyle: isSd ? 'normal' : 'italic',
                fontSize: isSd ? 19 : 15, color: 'var(--text-secondary)',
                lineHeight: isSd ? 2.1 : 1.75,
                direction: isSd ? 'rtl' : 'ltr', textAlign: isSd ? 'right' : 'left',
              }}>
                {isSd ? `"${person.quoteSd}"` : `"${person.quoteEn}"`}
              </blockquote>

              {/* Stats — always LTR so numbers stay correct */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 24px', marginBottom: 28, direction: 'ltr' }}>
                {[
                  { number: '90+', label: tx(t.home.statWorks, lang) },
                  { number: '35+', label: tx(t.home.statAwards, lang) },
                  { number: '11',  label: tx(t.home.statLangs, lang) },
                  { number: '60+', label: tx(t.home.statYears, lang) },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: isSd ? 'right' : 'left' }}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 30, fontWeight: 800, color: 'var(--terracotta)', lineHeight: 1, direction: 'ltr', unicodeBidi: 'isolate' }}>
                      {s.number}
                    </div>
                    <div style={{ fontSize: isSd ? 14 : 10, color: 'var(--text-muted)', fontWeight: 600, textTransform: isSd ? 'none' : 'uppercase', letterSpacing: isSd ? 0 : '0.08em', marginTop: 4, fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="hero-btns" style={{ display: 'flex', gap: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
                <Link href="/biography" className="btn-primary">{tx(t.home.btnBio, lang)}</Link>
                <Link href="/books" className="btn-outline">{tx(t.home.btnBooks, lang)}</Link>
              </div>
            </div>

            {/* Portrait — always right column, never moves */}
            <div className="hero-portrait-col">
              <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 420, background: '#EAD8BC' }}>
                <Image
                  src="/valiram homepage Portrait.png"
                  alt="Vali Ram Vallabh — Portrait"
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 45vw"
                  style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                  priority
                />
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
              <h2 className="section-title" style={{ marginBottom: 20, fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', direction: isSd ? 'rtl' : 'ltr', textAlign: isSd ? 'right' : 'left' }}>
                {tx(t.home.hisStoryH2, lang)}<br />
                <span style={{ background: 'linear-gradient(135deg, var(--terracotta), var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {tx(t.home.hisStoryH2b, lang)}
                </span>
              </h2>
              <div className="divider-gold" />
              <p style={{ fontSize: isSd ? 17 : 15, color: 'var(--text-secondary)', lineHeight: isSd ? 2.1 : 1.85, marginTop: 20, marginBottom: 16, fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr', textAlign: isSd ? 'right' : 'left' }}>
                {tx(t.home.para1, lang)}
              </p>
              <p style={{ fontSize: isSd ? 17 : 15, color: 'var(--text-secondary)', lineHeight: isSd ? 2.1 : 1.85, marginBottom: 28, fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr', textAlign: isSd ? 'right' : 'left' }}>
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
                  <div style={{ width: 3, minHeight: 40, background: 'var(--gold)', borderRadius: 2, flexShrink: 0, marginTop: 2 }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: isSd ? 15 : 10, fontWeight: 700, textTransform: isSd ? 'none' : 'uppercase', letterSpacing: isSd ? 0 : '0.08em', color: 'var(--terracotta)', marginBottom: 4, fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr', textAlign: isSd ? 'right' : 'left' }}>{f.label}</p>
                    <p style={{ fontSize: isSd ? 15 : 13, color: 'var(--text-secondary)', lineHeight: isSd ? 2 : 1.65, fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr', textAlign: isSd ? 'right' : 'left' }}>{f.value}</p>
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
          <div style={{ textAlign: isSd ? 'right' : 'center', marginBottom: 48 }}>
            <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.home.honoursTag, lang)}</div>
            <h2 className="section-title" style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', direction: isSd ? 'rtl' : 'ltr' }}>
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, direction: 'ltr' }}>
                  <span className="tag-gold" style={{ direction: 'ltr', unicodeBidi: 'isolate' }}>{a.year}</span>
                  <span style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(201,148,58,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                    </svg>
                  </span>
                </div>
                <h3 style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: isSd ? 18 : 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6, lineHeight: isSd ? 1.9 : 1.3, direction: isSd ? 'rtl' : 'ltr', textAlign: isSd ? 'right' : 'left' }}>
                  {isSd && a.nameAward ? a.nameAward : a.nameEn}
                </h3>
                <p style={{ fontSize: isSd ? 15 : 12, color: 'var(--text-muted)', lineHeight: isSd ? 1.8 : 1.5, fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr', textAlign: isSd ? 'right' : 'left' }}>
                  {isSd && a.organisationSd ? a.organisationSd : a.organisation}
                </p>
                {a.noteEn && (
                  <p style={{ fontSize: isSd ? 14 : 11, color: 'var(--gold)', marginTop: 8, fontWeight: 600, fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr', textAlign: isSd ? 'right' : 'left' }}>
                    {isSd && a.noteSd ? a.noteSd : a.noteEn}
                  </p>
                )}
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
              <h2 className="section-title" style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', direction: isSd ? 'rtl' : 'ltr', textAlign: isSd ? 'right' : 'left' }}>
                {tx(t.home.worksH2a, lang)}<br />
                <span style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {tx(t.home.worksH2b, lang)}
                </span>
              </h2>
            </div>
            <Link href="/books" style={{ fontSize: isSd ? 16 : 14, fontWeight: 600, color: 'var(--terracotta)', textDecoration: 'none', fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}>
              {tx(t.home.viewAllBooks, lang)}
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 16 }}>
            {recentBooks.map(book => (
              <div key={book.id} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16,
                padding: '22px', display: 'flex', flexDirection: 'column', gap: 8,
                transition: 'all 0.2s', cursor: 'pointer',
              }}>
                <div style={{ height: 3, borderRadius: 100, background: 'linear-gradient(90deg, var(--terracotta), var(--gold))' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', direction: 'ltr' }}>
                  <span className="tag-green" style={{ fontSize: 10, fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}>
                    {isSd ? (catSd[book.category] || book.category) : book.category}
                  </span>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>{book.year || '—'}</span>
                </div>
                {/* Title — Sindhi only shows once */}
                <h3 style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: isSd ? 20 : 15, fontWeight: 700, color: isSd ? 'var(--terracotta)' : 'var(--text-primary)', lineHeight: isSd ? 1.9 : 1.3, direction: isSd ? 'rtl' : 'ltr', textAlign: isSd ? 'right' : 'left' }}>
                  {isSd ? book.titleSd : book.titleEn}
                </h3>
                {/* English: show Sindhi subtitle below */}
                {!isSd && (
                  <p style={{ fontFamily: 'Lateef, serif', fontSize: 15, color: 'var(--terracotta)', direction: 'rtl', textAlign: 'right', lineHeight: 1.8 }}>
                    {book.titleSd}
                  </p>
                )}
                {book.originalAuthor && book.originalAuthor !== 'Vali Ram Vallabh' && (
                  <p style={{ fontSize: isSd ? 14 : 12, color: 'var(--text-muted)', fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr', textAlign: isSd ? 'right' : 'left' }}>
                    {isSd ? 'اصل ليکڪ:' : 'Original:'} {book.originalAuthor}
                  </p>
                )}
                <p style={{ fontSize: isSd ? 15 : 13, color: 'var(--text-secondary)', lineHeight: isSd ? 2 : 1.6, flex: 1, fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr', textAlign: isSd ? 'right' : 'left' }}>
                  {isSd && book.descriptionSd ? book.descriptionSd.slice(0, 110) : book.description.slice(0, 100)}…
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
          <blockquote style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontStyle: isSd ? 'normal' : 'italic', fontSize: 'clamp(18px, 3vw, 24px)', color: '#F5ECD7', lineHeight: isSd ? 2.1 : 1.75, marginBottom: 32, direction: isSd ? 'rtl' : 'ltr' }}>
            {isSd
              ? 'جيستائين ڪهاڻيون ٻڌايون وينديون ۽ خيال اڏامندا رهندا، توهان جو ورثو هر انهي دل ۾ زنده رهندو جنهن کي توهان ڇُهيو.'
              : '"As long as stories are told and thoughts take flight, your legacy will live on in every heart you touched."'}
          </blockquote>
          <p style={{ fontSize: isSd ? 15 : 12, color: 'rgba(245,236,215,0.55)', fontWeight: 600, letterSpacing: isSd ? 0 : '0.08em', textTransform: isSd ? 'none' : 'uppercase', marginBottom: 40, fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr' }}>
            {isSd ? '— ڊان اخبار، ٻي ورسي، آڪٽوبر 2025ع' : '— Dawn Newspaper, 2nd Death Anniversary, October 2025'}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tributes" style={{ padding: '12px 24px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, color: '#F5ECD7', textDecoration: 'none', fontSize: isSd ? 16 : 14, fontWeight: 600, fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}>
              {isSd ? 'سڀ خراج پڙهو' : 'Read All Tributes'}
            </Link>
            <Link href="/legacy" style={{ padding: '12px 24px', background: 'rgba(201,148,58,0.2)', border: '1px solid rgba(201,148,58,0.4)', borderRadius: 8, color: '#C9943A', textDecoration: 'none', fontSize: isSd ? 16 : 14, fontWeight: 600, fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}>
              {isSd ? 'سندس جيئري وراثت' : 'His Living Legacy'}
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIGITAL LIBRARY CTA ──────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ textAlign: isSd ? 'right' : 'center', maxWidth: 700, margin: '0 auto' }}>
          <div className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>{tx(t.home.digitalTag, lang)}</div>
          <h2 className="section-title" style={{ marginBottom: 16, fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', direction: isSd ? 'rtl' : 'ltr' }}>
            {tx(t.home.digitalH2a, lang)}<br />
            <span style={{ background: 'linear-gradient(135deg, var(--terracotta), var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {tx(t.home.digitalH2b, lang)}
            </span>
          </h2>
          <p style={{ fontSize: isSd ? 17 : 15, color: 'var(--text-secondary)', lineHeight: isSd ? 2 : 1.75, marginBottom: 32, fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr' }}>
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
