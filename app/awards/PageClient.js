'use client'

import { useState } from 'react'
import Image from 'next/image'
import { awards, awardCategories } from '@/lib/data'
import { useLanguage } from '@/components/LanguageContext'
import { t, tx } from '@/lib/i18n'

const catColors = {
  Literature:    { bg: 'rgba(139,58,42,0.08)',  color: 'var(--terracotta)' },
  Translation:   { bg: 'rgba(45,90,61,0.08)',   color: 'var(--green)' },
  Lifetime:      { bg: 'rgba(201,148,58,0.1)',  color: 'var(--gold)' },
  International: { bg: 'rgba(99,102,241,0.08)', color: '#6366f1' },
  Community:     { bg: 'rgba(236,72,153,0.08)', color: '#db2777' },
  Academic:      { bg: 'rgba(16,185,129,0.08)', color: '#059669' },
  Service:       { bg: 'rgba(59,130,246,0.08)', color: '#2563eb' },
  Honour:        { bg: 'rgba(234,179,8,0.08)',  color: '#b45309' },
  Institutional: { bg: 'rgba(107,114,128,0.08)',color: '#6b7280' },
  Achievement:   { bg: 'rgba(245,158,11,0.08)', color: '#d97706' },
}

const catSd = {
  All:           'سڀ',
  Literature:    'ادب',
  Translation:   'ترجمو',
  Lifetime:      'عمر ڀر',
  International: 'بين الاقوامي',
  Community:     'برادري',
  Academic:      'علمي',
  Service:       'خدمت',
  Honour:        'اعزاز',
  Institutional: 'ادارو',
  Achievement:   'حاصلات',
}

export default function AwardsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { lang } = useLanguage()
  const isSd = lang === 'sd'

  const filtered = activeCategory === 'All' ? awards : awards.filter(a => a.category === activeCategory)
  const sortedFiltered = [...filtered].sort((a, b) => {
    if (b.awardPhoto && !a.awardPhoto) return 1
    if (a.awardPhoto && !b.awardPhoto) return -1
    const ya = parseInt(a.year) || 0
    const yb = parseInt(b.year) || 0
    return yb - ya
  })
  const featured = awards.filter(a => a.featured)

  const getName = (a) => (isSd && a.nameAward) ? a.nameAward : a.nameEn
  const getOrg  = (a) => (isSd && a.organisationSd) ? a.organisationSd : a.organisation
  const getNote = (a) => (isSd && a.noteSd) ? a.noteSd : a.noteEn

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(201,148,58,0.2)', borderColor: 'rgba(201,148,58,0.4)', color: '#E8B85A' }}>
            {tx(t.awards.tag, lang)}
          </div>
          <h1 style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#F5ECD7', marginBottom: 12, letterSpacing: isSd ? 0 : '-0.03em' }}>
            {tx(t.awards.title, lang)}
          </h1>
          <p style={{ fontSize: isSd ? 20 : 16, color: 'rgba(245,236,215,0.75)', maxWidth: 560, fontFamily: isSd ? 'Lateef, serif' : 'inherit', lineHeight: isSd ? 2.2 : 1.6 }}>
            {tx(t.awards.desc, lang)}
          </p>
        </div>
      </section>

      {/* Featured Awards */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.awards.featuredTag, lang)}</div>
          <h2 className="section-title" style={{ marginBottom: 32, fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif' }}>
            {tx(t.awards.featuredH2, lang)}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16, marginBottom: 64 }}>
            {featured.map((a, i) => (
              <div key={i} className="card" style={{ borderTop: '3px solid var(--gold)', background: 'linear-gradient(135deg, var(--bg-card), var(--cream))', padding: 0, overflow: 'hidden' }}>
                {/* Trophy photo */}
                {a.awardPhoto && (
                  <div style={{ position: 'relative', width: '100%', height: 240, overflow: 'hidden', background: 'var(--bg-elevated)', flexShrink: 0 }}>
                    <Image
                      src={a.awardPhoto}
                      alt={a.nameEn}
                      fill
                      sizes="320px"
                      style={{ objectFit: 'contain', objectPosition: 'center', background: 'var(--cream)' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,24,16,0.3), transparent 60%)', pointerEvents: 'none' }} />
                  </div>
                )}
                <div style={{ padding: '20px 22px' }}>
                  {!a.awardPhoto && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                      </svg>
                    </div>
                  )}
                  <h3 style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: isSd ? 20 : 17, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8, lineHeight: isSd ? 2 : 1.3 }}>
                    {getName(a)}
                  </h3>
                  <p style={{ fontSize: isSd ? 16 : 13, color: 'var(--text-muted)', lineHeight: isSd ? 1.9 : 1.6, marginBottom: 8, fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}>
                    {getOrg(a)}
                  </p>
                  {a.noteEn && (
                    <p style={{ fontSize: isSd ? 15 : 12, color: 'var(--gold)', fontWeight: 600, padding: '6px 10px', background: 'rgba(201,148,58,0.08)', borderRadius: 6, fontFamily: isSd ? 'Lateef, serif' : 'inherit', lineHeight: isSd ? 1.8 : 1.5 }}>
                      {getNote(a)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Filter */}
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.awards.allTag, lang)}</div>
          <h2 className="section-title" style={{ marginBottom: 24, fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif' }}>
            {tx(t.awards.allH2, lang)}
          </h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 32 }}>
            {awardCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '6px 14px', borderRadius: 8, cursor: 'pointer',
                  fontSize: isSd ? 14 : 12, fontWeight: 600,
                  fontFamily: isSd ? 'Lateef, serif' : 'Inter, sans-serif',
                  background: activeCategory === cat ? 'var(--terracotta)' : 'var(--bg-card)',
                  color: activeCategory === cat ? '#fff' : 'var(--text-muted)',
                  border: activeCategory === cat ? '1px solid var(--terracotta)' : '1px solid var(--border)',
                  transition: 'all 0.15s',
                }}
              >
                {isSd ? (catSd[cat] || cat) : cat}
              </button>
            ))}
          </div>

          <p style={{ fontSize: isSd ? 16 : 13, color: 'var(--text-muted)', marginBottom: 20, fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}>
            {isSd
              ? `${filtered.length} اعزاز ڏيکاريا پيا وڃن`
              : `${tx(t.awards.showing, lang)} ${filtered.length} ${tx(t.awards.awardsLabel, lang)}`
            }
          </p>

          {/* Awards list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {sortedFiltered.map((a, i) => (
              <div key={i} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12,
                padding: '16px 20px', display: 'flex', gap: 16, alignItems: 'flex-start',
                flexWrap: 'wrap', transition: 'all 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.boxShadow = '0 4px 16px var(--shadow)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ minWidth: 52, textAlign: 'center', flexShrink: 0 }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 800, color: 'var(--terracotta)', lineHeight: 1, direction: 'ltr', unicodeBidi: 'isolate' }}>
                    {a.year}
                  </div>
                </div>
                {a.awardPhoto && (
                  <div style={{ width: 64, height: 64, borderRadius: 8, overflow: 'hidden', flexShrink: 0, border: '1px solid var(--border)', background: 'var(--cream)' }}>
                    <Image src={a.awardPhoto} alt={a.nameEn} width={64} height={64} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                  </div>
                )}
                <div style={{ flex: 1, minWidth: 200 }}>
                  <h3 style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: isSd ? 18 : 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4, lineHeight: isSd ? 1.9 : 1.4 }}>
                    {getName(a)}
                  </h3>
                  <p style={{ fontSize: isSd ? 15 : 12, color: 'var(--text-muted)', lineHeight: isSd ? 1.8 : 1.5, fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}>
                    {getOrg(a)}
                  </p>
                  {a.noteEn && (
                    <p style={{ fontSize: isSd ? 14 : 12, color: 'var(--text-secondary)', fontWeight: 500, marginTop: 4, fontFamily: isSd ? 'Lateef, serif' : 'inherit', lineHeight: isSd ? 1.8 : 1.5 }}>
                      {getNote(a)}
                    </p>
                  )}
                </div>
                <span style={{
                  fontSize: isSd ? 13 : 10, padding: '3px 10px', borderRadius: 100, fontWeight: 600,
                  textTransform: isSd ? 'none' : 'uppercase', letterSpacing: isSd ? 0 : '0.05em',
                  flexShrink: 0, background: 'var(--bg-elevated)', color: 'var(--text-muted)',
                  border: '1px solid var(--border)', fontFamily: isSd ? 'Lateef, serif' : 'inherit',
                }}>
                  {isSd ? (catSd[a.category] || a.category) : a.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
