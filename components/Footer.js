'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageContext'
import { t, tx } from '@/lib/i18n'

// Vali Ram Vallabh quote in Sindhi
const quoteSd = '"سماج جون اخلاقي ۽ روحاني قدرون جيتريون بلند هونديون آهن، ايتري ئي وڌيڪ اهو سماج ڪتابن کي پيار ڪندو آهي."'
const quoteEn = '"The higher the moral and spiritual values of a society, the more it cherishes books."'

export default function Footer() {
  const { lang } = useLanguage()
  const isSd = lang === 'sd'

  return (
    <footer style={{ background: '#2C1810', color: '#F5ECD7', marginTop: 'auto' }}>
      <div className="container" style={{ paddingTop: 60, paddingBottom: 40 }}>

        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 800, color: '#F5ECD7', marginBottom: 8 }}>
              Vali Ram Vallabh
            </h3>
            <p style={{ fontFamily: 'Lateef, serif', fontSize: 16, color: '#C9943A', direction: 'rtl', marginBottom: 12 }}>
              ولي رام ولڀ
            </p>
            <p style={{ fontSize: 13, color: 'rgba(245,236,215,0.65)', lineHeight: 1.7, maxWidth: 280 }}>
              {tx(t.footer.desc, lang)}
            </p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 13, color: '#C9943A', marginTop: 16, lineHeight: 1.6, maxWidth: 280 }}>
              {isSd ? quoteSd : quoteEn}
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, color: '#C9943A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
              {tx(t.footer.navigate, lang)}
            </p>
            {[['/', 'home'], ['/biography', 'biography'], ['/books', 'books'], ['/awards', 'awards'], ['/gallery', 'gallery']].map(([href, key]) => (
              <Link key={href} href={href} style={{ display: 'block', fontSize: 13, color: 'rgba(245,236,215,0.65)', textDecoration: 'none', marginBottom: 8, fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C9943A'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,236,215,0.65)'}
              >{t.nav[key][lang]}</Link>
            ))}
          </div>

          {/* More */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, color: '#C9943A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
              {tx(t.footer.more, lang)}
            </p>
            {[['/videos', 'videos'], ['/press', 'press'], ['/tributes', 'tributes'], ['/legacy', 'legacy'], ['/contact', 'contact']].map(([href, key]) => (
              <Link key={href} href={href} style={{ display: 'block', fontSize: 13, color: 'rgba(245,236,215,0.65)', textDecoration: 'none', marginBottom: 8, fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C9943A'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,236,215,0.65)'}
              >{t.nav[key][lang]}</Link>
            ))}
          </div>

          {/* Digital Library */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, color: '#C9943A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
              {tx(t.footer.readBooks, lang)}
            </p>
            <p style={{ fontSize: 13, color: 'rgba(245,236,215,0.65)', lineHeight: 1.7, marginBottom: 12 }}>
              {tx(t.footer.booksDesc, lang)}
            </p>
            <Link href="/books" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: 'rgba(201,148,58,0.15)', border: '1px solid rgba(201,148,58,0.3)', borderRadius: 8, fontSize: 12, fontWeight: 600, color: '#C9943A', textDecoration: 'none', fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,148,58,0.25)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(201,148,58,0.15)'}
            >
              {tx(t.footer.browseBooks, lang)}
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ borderTop: '1px solid rgba(245,236,215,0.1)', paddingTop: 24, display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: 12, color: 'rgba(245,236,215,0.4)' }}>{tx(t.footer.copyright, lang)}</p>
          <p style={{ fontSize: 12, color: 'rgba(245,236,215,0.4)' }}>{tx(t.footer.tagline, lang)}</p>
        </div>

        {/* Developer credit */}
        <div style={{ borderTop: '1px solid rgba(245,236,215,0.06)', paddingTop: 20, marginTop: 16 }}>
          <p style={{ fontSize: 11, color: 'rgba(245,236,215,0.35)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
            {tx(t.footer.devBy, lang)}
          </p>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: 'rgba(245,236,215,0.75)', fontWeight: 700, marginBottom: 8 }}>
            Chander Parkash
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            <a href="https://www.linkedin.com/in/chander-parkash" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, color: 'rgba(201,148,58,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}
              onMouseEnter={e => e.currentTarget.style.color = '#C9943A'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(201,148,58,0.7)'}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="mailto:info@valiramvallabh.com"
              style={{ fontSize: 13, color: 'rgba(201,148,58,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}
              onMouseEnter={e => e.currentTarget.style.color = '#C9943A'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(201,148,58,0.7)'}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              info@valiramvallabh.com
            </a>
            <a href="https://wa.me/923368264688" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, color: 'rgba(201,148,58,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}
              onMouseEnter={e => e.currentTarget.style.color = '#C9943A'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(201,148,58,0.7)'}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              +92 336 826 4688
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
