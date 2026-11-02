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
  // Sort: awards with photos first in the list
  const sortedFiltered = [...filtered].sort((a, b) => (b.awardPhoto ? 1 : 0) - (a.awardPhoto ? 1 : 0))
  // Featured: only awards that have both featured:true AND a photo
  const featured = awards.filter(a => a.featured && a.awardPhoto)

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(201,148,58,0.2)', borderColor: 'rgba(201,148,58,0.4)', color: '#E8B85A' }}>{tx(t.awards.tag, lang)}</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#F5ECD7', marginBottom: 12, letterSpacing: '-0.03em' }}>
            {tx(t.awards.title, lang)}
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(245,236,215,0.75)', maxWidth: 560 }}>
            {tx(t.awards.desc, lang)}
          </p>
        </div>
      </section>

      {/* Featured Awards */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.awards.featuredTag, lang)}</div>
          <h2 className="section-title" style={{ marginBottom: 32 }}>
            {tx(t.awards.featuredH2, lang)}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16, marginBottom: 64 }}>
            {featured.map((a, i) => (
              <div key={i} className="card" style={{ borderTop: '3px solid var(--gold)', background: 'linear-gradient(135deg, var(--bg-card), var(--cream))', padding: 0, overflow: 'hidden' }}>
                {/* Trophy photo if available */}
                {a.awardPhoto && (
                  <div style={{ position: 'relative', width: '100%', height: 200, overflow: 'hidden', background: 'var(--bg-elevated)' }}>
                    <Image src={a.awardPhoto} alt={a.nameEn} fill sizes="320px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,24,16,0.4), transparent 60%)' }} />
                    <span className="tag-gold" style={{ position: 'absolute', top: 10, right: 10, backdropFilter: 'blur(4px)', background: 'rgba(201,148,58,0.85)' }}>{a.year}</span>
                  </div>
                )}
                <div style={{ padding: '20px 22px' }}>
                  {!a.awardPhoto && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                      </svg>
                      <span className="tag-gold">{a.year}</span>
                    </div>
                  )}
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8, lineHeight: 1.3 }}>
                    {a.nameEn}
                  </h3>
                  <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 8 }}>{a.organisation}</p>
                  {a.noteEn && (
                    <p style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 600, padding: '6px 10px', background: 'rgba(201,148,58,0.08)', borderRadius: 6 }}>
                      {a.noteEn}
                    </p>
                  )}
                  {a.nameAward && (
                    <p className="font-sindhi" style={{ fontSize: 14, color: 'var(--terracotta)', marginTop: 8 }}>{a.nameAward}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Filter */}
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.awards.allTag, lang)}</div>
          <h2 className="section-title" style={{ marginBottom: 24 }}>{tx(t.awards.allH2, lang)}</h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 32 }}>
            {awardCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '6px 14px', borderRadius: 8, border: 'none', cursor: 'pointer',
                  fontSize: 12, fontWeight: 600, fontFamily: 'Inter, sans-serif',
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

          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 20 }}>
            {tx(t.awards.showing, lang)} {filtered.length} {tx(t.awards.awardsLabel, lang)}
          </p>

          {/* Awards list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {sortedFiltered.map((a, i) => {
              return (
                <div key={i} style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12,
                  padding: '16px 20px', display: 'flex', gap: 16, alignItems: 'flex-start',
                  flexWrap: 'wrap', transition: 'all 0.15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.boxShadow = '0 4px 16px var(--shadow)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div style={{ minWidth: 52, textAlign: 'center', flexShrink: 0 }}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 800, color: 'var(--terracotta)', lineHeight: 1 }}>{a.year}</div>
                  </div>
                  {a.awardPhoto && (
                    <div style={{ width: 52, height: 52, borderRadius: 8, overflow: 'hidden', flexShrink: 0, border: '1px solid var(--border)' }}>
                      <Image src={a.awardPhoto} alt={a.nameEn} width={52} height={52} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                  )}
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
                      {a.nameEn}
                    </h3>
                    <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>{a.organisation}</p>
                    {a.noteEn && <p style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 500, marginTop: 4 }}>{a.noteEn}</p>}
                    {a.nameAward && <p className="font-sindhi" style={{ fontSize: 14, color: 'var(--terracotta)', marginTop: 4 }}>{a.nameAward}</p>}
                  </div>
                  <span style={{ fontSize: 10, padding: '3px 10px', borderRadius: 100, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', flexShrink: 0, background: 'var(--bg-elevated)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                    {isSd ? (catSd[a.category] || a.category) : a.category}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
