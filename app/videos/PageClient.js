'use client'

import { videos } from '@/lib/data'
import { useLanguage } from '@/components/LanguageContext'
import { t, tx } from '@/lib/i18n'

function YouTubeEmbed({ video, isSd }) {
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        <iframe
          src={`https://www.youtube.com/embed/${video.embedId}?rel=0`}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen title={video.titleEn} loading="lazy"
        />
      </div>
      <div style={{ padding: '16px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          {video.featured && <span className="tag" style={{ fontSize: 9 }}>{isSd ? 'نمايان' : 'Featured'}</span>}
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            YouTube
          </span>
        </div>
        <h3 style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: isSd ? 20 : 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8, lineHeight: isSd ? 2 : 1.4, direction: isSd ? 'rtl' : 'ltr' }}>
          {isSd && video.titleSd ? video.titleSd : video.titleEn}
        </h3>
        <p style={{ fontSize: isSd ? 16 : 13, color: 'var(--text-secondary)', lineHeight: isSd ? 2 : 1.6, fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr' }}>
          {isSd && video.descriptionSd ? video.descriptionSd : video.descriptionEn}
        </p>
      </div>
    </div>
  )
}

function FacebookEmbed({ video }) {
  const { lang } = useLanguage()
  const isSd = lang === 'sd'
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ padding: '24px', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          {video.featured && <span className="tag" style={{ fontSize: 9 }}>{isSd ? 'نمايان' : 'Featured'}</span>}
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Facebook
          </span>
        </div>
        <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: 10, overflow: 'hidden', background: 'linear-gradient(135deg, var(--terracotta), #6B2A1C)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#F5ECD7"><polygon points="5,3 19,12 5,21"/></svg>
            </div>
            <p style={{ fontSize: 12, color: 'rgba(245,236,215,0.7)', fontWeight: 500 }}>{isSd ? 'فيسبڪ تي ڏسو' : 'Watch on Facebook'}</p>
          </div>
        </div>
        <h3 style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: isSd ? 19 : 15, fontWeight: 700, color: 'var(--text-primary)', lineHeight: isSd ? 2 : 1.4, direction: isSd ? 'rtl' : 'ltr' }}>
          {isSd && video.titleSd ? video.titleSd : video.titleEn}
        </h3>
        <p style={{ fontSize: isSd ? 15 : 13, color: 'var(--text-secondary)', lineHeight: isSd ? 2 : 1.6, fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr' }}>
          {isSd && video.descriptionSd ? video.descriptionSd : video.descriptionEn}
        </p>
        <a href={video.url} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
          {tx(t.videos.watchFb, lang)}
        </a>
      </div>
    </div>
  )
}

export default function VideosPage() {
  const { lang } = useLanguage()
  const isSd = lang === 'sd'
  const youtubeVideos = videos.filter(v => v.platform === 'youtube')
  const facebookVideos = videos.filter(v => v.platform === 'facebook')
  const featuredYT = youtubeVideos.find(v => v.featured)

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(201,148,58,0.2)', borderColor: 'rgba(201,148,58,0.4)', color: '#E8B85A' }}>{tx(t.videos.tag, lang)}</div>
          <h1 style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#F5ECD7', marginBottom: 12, letterSpacing: isSd ? 0 : '-0.03em' }}>
            {tx(t.videos.title, lang)}
          </h1>
          <p style={{ fontSize: isSd ? 20 : 16, color: 'rgba(245,236,215,0.75)', maxWidth: 560, fontFamily: isSd ? 'Lateef, serif' : 'inherit', lineHeight: isSd ? 2.1 : 1.6 }}>{tx(t.videos.desc, lang)}</p>
        </div>
      </section>

      {/* Featured */}
      {featuredYT && (
        <section className="section" style={{ background: '#1a1a1a' }}>
          <div className="container">
            <div className="tag-gold" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.videos.mustWatch, lang)}</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: '#F5ECD7', marginBottom: 32 }}>
              {tx(t.videos.mustTitle, lang)}
            </h2>
            <div style={{ maxWidth: 860, margin: '0 auto' }}>
              <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe src={`https://www.youtube.com/embed/${featuredYT.embedId}?rel=0`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={featuredYT.titleEn} />
                </div>
              </div>
              <div style={{ marginTop: 20, padding: '20px 0' }}>
                <h3 style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: isSd ? 24 : 20, color: '#F5ECD7', marginBottom: 10, lineHeight: isSd ? 2 : 1.4 }}>
                  {isSd && featuredYT.titleSd ? featuredYT.titleSd : featuredYT.titleEn}
                </h3>
                <p style={{ fontSize: isSd ? 17 : 14, color: 'rgba(245,236,215,0.7)', lineHeight: isSd ? 2.1 : 1.7, fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}>
                  {isSd && featuredYT.descriptionSd ? featuredYT.descriptionSd : featuredYT.descriptionEn}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* YouTube */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.videos.ytTag, lang)}</div>
          <h2 className="section-title" style={{ marginBottom: 32 }}>{tx(t.videos.ytTitle, lang)}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
            {youtubeVideos.map(v => <YouTubeEmbed key={v.id} video={v} isSd={isSd} />)}
          </div>
        </div>
      </section>

      {/* Facebook */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.videos.fbTag, lang)}</div>
          <h2 className="section-title" style={{ marginBottom: 12 }}>{tx(t.videos.fbTitle, lang)}</h2>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 32 }}>{tx(t.videos.fbNote, lang)}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
            {facebookVideos.map(v => <FacebookEmbed key={v.id} video={v} />)}
          </div>
        </div>
      </section>
    </>
  )
}
