'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#2C1810', color: '#F5ECD7', marginTop: 'auto' }}>
      <div className="container" style={{ paddingTop: 60, paddingBottom: 40 }}>

        {/* Top */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 800, color: '#F5ECD7', marginBottom: 8 }}>
              Vali Ram Vallabh
            </h3>
            <p style={{ fontFamily: 'Noto Nastaliq Urdu, serif', fontSize: 16, color: '#C9943A', direction: 'rtl', marginBottom: 12 }}>
              ولي رام ولڀ
            </p>
            <p style={{ fontSize: 13, color: 'rgba(245,236,215,0.65)', lineHeight: 1.7, maxWidth: 280 }}>
              Dewan Vali Ram Vallabh (1941–2023) — Sindhi writer, translator, and literary scholar. Recipient of Pride of Performance Award 2003.
            </p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 13, color: '#C9943A', marginTop: 16, lineHeight: 1.6, maxWidth: 280 }}>
              "The higher the moral and spiritual values of a society, the more it cherishes books."
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, color: '#C9943A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Navigate</p>
            {[
              ['/', 'Home'],
              ['/biography', 'Biography'],
              ['/books', 'Books'],
              ['/awards', 'Awards'],
              ['/gallery', 'Gallery'],
            ].map(([href, label]) => (
              <Link key={href} href={href} style={{ display: 'block', fontSize: 13, color: 'rgba(245,236,215,0.65)', textDecoration: 'none', marginBottom: 8, transition: 'color 0.15s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C9943A'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(245,236,215,0.65)'}
              >{label}</Link>
            ))}
          </div>

          {/* More */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, color: '#C9943A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>More</p>
            {[
              ['/videos', 'Videos'],
              ['/press', 'Press'],
              ['/tributes', 'Tributes'],
              ['/legacy', 'Legacy'],
              ['/contact', 'Contact'],
            ].map(([href, label]) => (
              <Link key={href} href={href} style={{ display: 'block', fontSize: 13, color: 'rgba(245,236,215,0.65)', textDecoration: 'none', marginBottom: 8, transition: 'color 0.15s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C9943A'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(245,236,215,0.65)'}
              >{label}</Link>
            ))}
          </div>

          {/* Digital Library */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, color: '#C9943A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Read His Books</p>
            <p style={{ fontSize: 13, color: 'rgba(245,236,215,0.65)', lineHeight: 1.7, marginBottom: 12 }}>
              25 books available to read online or download for free.
            </p>
            <Link href="/books" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 16px', background: 'rgba(201,148,58,0.15)',
              border: '1px solid rgba(201,148,58,0.3)', borderRadius: 8,
              fontSize: 12, fontWeight: 600, color: '#C9943A', textDecoration: 'none', transition: 'all 0.2s',
            }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(201,148,58,0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(201,148,58,0.15)'}
            >
              Browse All Books →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(245,236,215,0.1)', paddingTop: 24, display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: 12, color: 'rgba(245,236,215,0.4)' }}>
            © 2026 Vali Ram Vallabh Literary Society. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(245,236,215,0.4)' }}>
            valiramvallabh.com — Preserving his legacy, one word at a time.
          </p>
        </div>
      </div>
    </footer>
  )
}
