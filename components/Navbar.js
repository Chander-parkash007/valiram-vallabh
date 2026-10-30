'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/biography', label: 'Biography' },
  { href: '/books', label: 'Books' },
  { href: '/awards', label: 'Awards' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/videos', label: 'Videos' },
  { href: '/press', label: 'Press' },
  { href: '/tributes', label: 'Tributes' },
  { href: '/legacy', label: 'Legacy' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(250,246,240,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(139,58,42,0.1)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '0 24px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 800, color: 'var(--terracotta)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Vali Ram Vallabh
            </span>
            <span style={{ fontFamily: 'Noto Nastaliq Urdu, serif', fontSize: 13, color: 'var(--text-muted)', direction: 'rtl', lineHeight: 1.4 }}>
              ولي رام ولڀ
            </span>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="nav-desktop">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} style={{
                padding: '6px 12px', borderRadius: 8,
                fontSize: 13, fontWeight: 500,
                color: pathname === l.href ? 'var(--terracotta)' : 'var(--text-secondary)',
                background: pathname === l.href ? 'rgba(139,58,42,0.08)' : 'transparent',
                textDecoration: 'none', transition: 'all 0.15s',
                whiteSpace: 'nowrap',
              }}
                onMouseEnter={(e) => { if (pathname !== l.href) e.currentTarget.style.color = 'var(--terracotta)' }}
                onMouseLeave={(e) => { if (pathname !== l.href) e.currentTarget.style.color = 'var(--text-secondary)' }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="nav-mobile-btn" style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 8,
            display: 'none', flexDirection: 'column', gap: 5,
          }}>
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--terracotta)', borderRadius: 2, transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--terracotta)', borderRadius: 2, transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--terracotta)', borderRadius: 2, transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>
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
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{
              display: 'block', padding: '12px 0',
              fontSize: 15, fontWeight: pathname === l.href ? 600 : 400,
              color: pathname === l.href ? 'var(--terracotta)' : 'var(--text-primary)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--border)',
            }}>
              {l.label}
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
