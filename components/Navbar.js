'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/components/LanguageContext'
import { t } from '@/lib/i18n'

const navKeys = [
  { href: '/',          key: 'home' },
  { href: '/biography', key: 'biography' },
  { href: '/books',     key: 'books' },
  { href: '/awards',    key: 'awards' },
  { href: '/gallery',   key: 'gallery' },
  { href: '/videos',    key: 'videos' },
  { href: '/press',     key: 'press' },
  { href: '/tributes',  key: 'tributes' },
  { href: '/legacy',    key: 'legacy' },
  { href: '/contact',   key: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { lang, setLang } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const isSindhi = lang === 'sd'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: 'rgba(250,246,240,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(139,58,42,0.1)',
        padding: '0 24px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 800, color: 'var(--terracotta)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Vali Ram Vallabh
            </span>
            <span style={{ fontFamily: 'Lateef, serif', fontSize: 13, color: 'var(--text-muted)', direction: 'rtl', lineHeight: 1.4 }}>
              ولي رام ولڀ
            </span>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="nav-desktop">
            {navKeys.map((l) => (
              <Link key={l.href} href={l.href} style={{
                padding: '6px 10px', borderRadius: 8,
                fontSize: 13, fontWeight: 500,
                fontFamily: isSindhi ? 'Lateef, serif' : 'Inter, sans-serif',
                color: pathname === l.href ? 'var(--terracotta)' : 'var(--text-secondary)',
                background: pathname === l.href ? 'rgba(139,58,42,0.08)' : 'transparent',
                textDecoration: 'none', transition: 'all 0.15s',
                whiteSpace: 'nowrap',
                direction: isSindhi ? 'rtl' : 'ltr',
              }}
                onMouseEnter={(e) => { if (pathname !== l.href) e.currentTarget.style.color = 'var(--terracotta)' }}
                onMouseLeave={(e) => { if (pathname !== l.href) e.currentTarget.style.color = 'var(--text-secondary)' }}
              >
                {t.nav[l.key][lang]}
              </Link>
            ))}

            {/* Language toggle */}
            <button
              onClick={() => setLang(isSindhi ? 'en' : 'sd')}
              title={isSindhi ? 'Switch to English' : 'سنڌيءَ ۾ بدليو'}
              style={{
                marginLeft: 8,
                padding: '5px 14px', borderRadius: 20,
                border: '1.5px solid var(--terracotta)',
                background: isSindhi ? 'var(--terracotta)' : 'transparent',
                color: isSindhi ? '#fff' : 'var(--terracotta)',
                cursor: 'pointer', fontSize: 12, fontWeight: 700,
                fontFamily: 'Inter, sans-serif',
                transition: 'all 0.2s',
                letterSpacing: '0.03em',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              onMouseEnter={e => { if (!isSindhi) e.currentTarget.style.background = 'rgba(139,58,42,0.08)' }}
              onMouseLeave={e => { if (!isSindhi) e.currentTarget.style.background = 'transparent' }}
            >
              {isSindhi ? 'EN' : 'سنڌي'}
            </button>
          </div>

          {/* Mobile hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="nav-mobile-controls">
            {/* Mobile language toggle */}
            <button
              onClick={() => setLang(isSindhi ? 'en' : 'sd')}
              className="nav-mobile-btn"
              style={{
                display: 'none', padding: '5px 10px', borderRadius: 16,
                border: '1.5px solid var(--terracotta)',
                background: isSindhi ? 'var(--terracotta)' : 'transparent',
                color: isSindhi ? '#fff' : 'var(--terracotta)',
                cursor: 'pointer', fontSize: 11, fontWeight: 700,
                whiteSpace: 'nowrap',
              }}
            >
              {isSindhi ? 'EN' : 'سنڌي'}
            </button>

            {/* Hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="nav-mobile-btn" style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: 8,
              display: 'none', flexDirection: 'column', gap: 5,
            }}>
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--terracotta)', borderRadius: 2, transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--terracotta)', borderRadius: 2, transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--terracotta)', borderRadius: 2, transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 68, left: 0, right: 0, zIndex: 999,
          background: 'rgba(250,246,240,0.98)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
          padding: '16px 24px 24px',
        }}>
          {navKeys.map((l) => (
            <Link key={l.href} href={l.href} style={{
              display: 'block', padding: '12px 0',
              fontSize: 15,
              fontFamily: isSindhi ? 'Lateef, serif' : 'Inter, sans-serif',
              fontWeight: pathname === l.href ? 600 : 400,
              color: pathname === l.href ? 'var(--terracotta)' : 'var(--text-primary)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--border)',
              direction: isSindhi ? 'rtl' : 'ltr',
              textAlign: isSindhi ? 'right' : 'left',
            }}>
              {t.nav[l.key][lang]}
            </Link>
          ))}
        </div>
      )}

      {/* Spacer */}
      <div style={{ height: 68 }} />

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
