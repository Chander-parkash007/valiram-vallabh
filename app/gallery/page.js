'use client'

import { useState } from 'react'

const galleryItems = [
  {
    id: 1, type: 'photo',
    src: '/gallery/valiramvallabh.jpg',
    captionEn: 'Vali Ram Vallabh — Portrait',
    category: 'Portraits',
  },
  {
    id: 2, type: 'photo',
    src: '/gallery/valiramvallabh1.jpg',
    captionEn: 'Vali Ram Vallabh — Portrait',
    category: 'Portraits',
  },
  {
    id: 3, type: 'photo',
    src: '/gallery/park.jpg',
    captionEn: 'Vali Ram Vallabh Park — Named in his honour by Sindhi Adabi Board and Government of Sindh',
    category: 'Legacy',
  },
  {
    id: 4, type: 'award',
    src: '/gallery/award-sla-2011.jpg',
    captionEn: 'Sindhi Language Authority Literary Award 2011 — For Translation',
    category: 'Awards',
  },
  {
    id: 5, type: 'award',
    src: '/gallery/award-sojhro.jpg',
    captionEn: 'Sojhro Award 1999–2000 — Handcrafted terracotta figurine trophy',
    category: 'Awards',
  },
  {
    id: 6, type: 'award',
    src: '/gallery/award-fazil-rahu.jpg',
    captionEn: 'Shaheed Muhammad Fazil Rahu Award 1997 — Yaran Soormin Sath',
    category: 'Awards',
  },
  {
    id: 7, type: 'award',
    src: '/gallery/award-josh.jpg',
    captionEn: 'Josh Malihabadi Award 2008 — Department of Culture & Tourism, Government of Sindh',
    category: 'Awards',
  },
  {
    id: 8, type: 'award',
    src: '/gallery/award-india-2021.jpg',
    captionEn: 'Appreciation Memento — National Council for Promotion of Sindhi Language, Government of India, New Delhi, April 2021',
    category: 'Awards',
  },
  {
    id: 9, type: 'award',
    src: '/gallery/award-sindhadeed.jpg',
    captionEn: 'Sindh Adeed Award 2009 — Sponsored by Shri Nanik Sambtani in memory of his father Shri Metharam Lalchand',
    category: 'Awards',
  },
  {
    id: 10, type: 'award',
    src: '/gallery/award-sla-2016.jpg',
    captionEn: 'Sindhi Language Authority Adabi Award 2016 — Open book shaped blue acrylic trophy',
    category: 'Awards',
  },
  {
    id: 11, type: 'book',
    src: '/gallery/book-ghadar.jpg',
    captionEn: 'Ghadar (The Traitor) — Krishan Chander — Multiple editions 1968–1990',
    category: 'Books',
  },
  {
    id: 12, type: 'book',
    src: '/gallery/book-dhariyo.jpg',
    captionEn: 'Dhariyo (The Outsider) — Albert Camus — Published by Roshni — Won Mirza Qalich Baig Award',
    category: 'Books',
  },
  {
    id: 13, type: 'book',
    src: '/gallery/book-kotaphulwari.jpg',
    captionEn: 'Kota Phulwari — 112 poets, 26 languages, 19 countries',
    category: 'Books',
  },
  {
    id: 14, type: 'book',
    src: '/gallery/book-morchal.jpg',
    captionEn: 'Morchal (Peacock Feather) — Selected Indian poetry anthology — MY Publication 2016',
    category: 'Books',
  },
  {
    id: 15, type: 'newspaper',
    src: '/gallery/dawn-obit.jpg',
    captionEn: 'Dawn newspaper obituary — October 30, 2023 — "Noted literary figure Vali Ram Vallabh passes away"',
    category: 'Press',
  },
  {
    id: 16, type: 'newspaper',
    src: '/gallery/dawn-anniversary.jpg',
    captionEn: 'Dawn newspaper — 2nd Death Anniversary notice — October 29, 2025',
    category: 'Press',
  },
  {
    id: 17, type: 'newspaper',
    src: '/gallery/kawish-2025.jpg',
    captionEn: 'Rozana Kawish tribute — Written by Dr. Kamleshwar Lohana (son) — October 29, 2025',
    category: 'Press',
  },
  {
    id: 18, type: 'newspaper',
    src: '/gallery/affair-magazine.jpg',
    captionEn: 'Affair Magazine — Jan–Feb 2026 — Feature article on Vali Ram Vallabh',
    category: 'Press',
  },
  {
    id: 19, type: 'event',
    src: '/gallery/event-khanabadosh.jpg',
    captionEn: 'Condolence Reference at Khanabadosh Writers Cafe — November 11 — "Shining Star of Sindhi Literature"',
    category: 'Events',
  },
  {
    id: 20, type: 'event',
    src: '/gallery/event-mithi.jpg',
    captionEn: 'Tribute event at Government High School Mithi — his alma mater',
    category: 'Events',
  },
]

const categories = ['All', 'Portraits', 'Awards', 'Books', 'Press', 'Events', 'Legacy']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxItem, setLightboxItem] = useState(null)

  const filtered = activeCategory === 'All' ? galleryItems : galleryItems.filter(g => g.category === activeCategory)

  const currentIndex = lightboxItem ? filtered.findIndex(g => g.id === lightboxItem.id) : -1
  const prev = () => { if (currentIndex > 0) setLightboxItem(filtered[currentIndex - 1]) }
  const next = () => { if (currentIndex < filtered.length - 1) setLightboxItem(filtered[currentIndex + 1]) }

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(201,148,58,0.2)', borderColor: 'rgba(201,148,58,0.4)', color: '#E8B85A' }}>Photo Archive</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#F5ECD7', marginBottom: 12, letterSpacing: '-0.03em' }}>
            Gallery
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(245,236,215,0.75)', maxWidth: 500 }}>
            Portraits, award trophies, book covers, newspaper clippings and event photos — a visual archive of his life and legacy.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section style={{ background: 'var(--cream)', padding: '20px 0', borderBottom: '1px solid var(--border)', position: 'sticky', top: 68, zIndex: 100 }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {categories.map(cat => (
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
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 12,
          }}>
            {filtered.map(item => (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                style={{
                  cursor: 'pointer', borderRadius: 12, overflow: 'hidden',
                  background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                  transition: 'all 0.2s', position: 'relative',
                  aspectRatio: '4/3',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 8px 32px var(--shadow-md)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                {/* Placeholder with category color */}
                <div style={{
                  width: '100%', height: '100%',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  background: item.type === 'portrait' ? 'linear-gradient(135deg, #8B3A2A20, #C9943A20)' :
                               item.type === 'award' ? 'linear-gradient(135deg, #C9943A15, #F5ECD7)' :
                               item.type === 'book' ? 'linear-gradient(135deg, #2D5A3D15, #F5ECD7)' :
                               item.type === 'newspaper' ? 'linear-gradient(135deg, #6366f115, #F5ECD7)' :
                               'linear-gradient(135deg, #8B3A2A10, #F5ECD7)',
                  padding: 20,
                }}>
                  <span style={{ fontSize: 40, marginBottom: 12 }}>
                    {item.type === 'photo' ? '' : item.type === 'award' ? '' : item.type === 'book' ? '' : item.type === 'newspaper' ? '' : ''}
                  </span>
                  <span className="tag" style={{ fontSize: 9, marginBottom: 8 }}>{item.category}</span>
                  <p style={{ fontSize: 12, color: 'var(--text-secondary)', textAlign: 'center', lineHeight: 1.5 }}>
                    {item.captionEn.slice(0, 60)}{item.captionEn.length > 60 ? '...' : ''}
                  </p>
                </div>

                {/* Hover overlay */}
                <div style={{
                  position: 'absolute', inset: 0, background: 'rgba(44,24,16,0.6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: 0, transition: 'opacity 0.2s', borderRadius: 12,
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                >
                  <span style={{ color: '#F5ECD7', fontSize: 13, fontWeight: 600 }}>Click to enlarge</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload notice */}
      <section style={{ background: 'var(--cream)', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>
             This gallery will be fully populated with actual photographs once images are uploaded to the <code style={{ background: 'rgba(0,0,0,0.05)', padding: '2px 6px', borderRadius: 4, fontSize: 12 }}>/public/gallery/</code> folder. All captions and metadata are ready.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          onClick={() => setLightboxItem(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 3000,
            background: 'rgba(44,24,16,0.95)', backdropFilter: 'blur(8px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20,
          }}
        >
          <button
            onClick={() => setLightboxItem(null)}
            style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.1)', border: 'none', color: '#F5ECD7', fontSize: 20, cursor: 'pointer', width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >✕</button>

          <div onClick={e => e.stopPropagation()} style={{ maxWidth: 700, width: '100%', textAlign: 'center' }}>
            <div style={{ background: 'var(--bg-elevated)', borderRadius: 16, padding: 40, marginBottom: 16, minHeight: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 60, marginBottom: 16 }}>
                {lightboxItem.type === 'photo' ? '' : lightboxItem.type === 'award' ? '' : lightboxItem.type === 'book' ? '' : lightboxItem.type === 'newspaper' ? '' : ''}
              </span>
              <span className="tag">{lightboxItem.category}</span>
            </div>
            <p style={{ color: '#F5ECD7', fontSize: 15, lineHeight: 1.6 }}>{lightboxItem.captionEn}</p>

            {/* Prev / Next */}
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 20 }}>
              <button onClick={e => { e.stopPropagation(); prev() }} disabled={currentIndex === 0}
                style={{ padding: '8px 20px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, color: '#F5ECD7', cursor: currentIndex === 0 ? 'not-allowed' : 'pointer', opacity: currentIndex === 0 ? 0.4 : 1, fontSize: 13 }}>
                ← Previous
              </button>
              <span style={{ color: 'rgba(245,236,215,0.5)', fontSize: 13, alignSelf: 'center' }}>
                {currentIndex + 1} / {filtered.length}
              </span>
              <button onClick={e => { e.stopPropagation(); next() }} disabled={currentIndex === filtered.length - 1}
                style={{ padding: '8px 20px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, color: '#F5ECD7', cursor: currentIndex === filtered.length - 1 ? 'not-allowed' : 'pointer', opacity: currentIndex === filtered.length - 1 ? 0.4 : 1, fontSize: 13 }}>
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

