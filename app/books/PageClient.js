'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { books, bookCategories, DRIVE_FOLDER_ID, getBookUrl } from '@/lib/data'
import { useLanguage } from '@/components/LanguageContext'
import { t, tx } from '@/lib/i18n'

const catSd = {
  All:                       'سڀ',
  'Translated Novel':        'ترجمو ٿيل ناول',
  'Translated Novelette':    'ترجمو ٿيل ننڍو ناول',
  'Translated Plays':        'ترجمو ٿيل ڊرامو',
  'Translated Stories':      'ترجمو ٿيل ڪهاڻيون',
  'Translated Poetry':       'ترجمو ٿيل شاعري',
  'Compiled Anthology':      'گڏ ڪيل انٿولاجي',
  'Literary Journal':        'ادبي رسالو',
  'Research Journal':        'تحقيقي رسالو',
  'Autobiography / Interviews': 'سوانح / انٽرويو',
  'Autobiography':           'سوانح',
  'Philosophy / Religion':   'فلسفو / مذهب',
  'Original Work':           'اصل ڪم',
  'Educational':             'تعليمي',
  'Compiled Work':           'گڏ ڪيل ڪم',
}

function BookModal({ book, onClose, isSd, lang }) {
  const viewUrl = getBookUrl(book.driveFilename)
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(44,24,16,0.85)',
      backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'var(--bg-card)', borderRadius: 20, padding: '32px',
        maxWidth: 680, width: '100%', maxHeight: '90vh', overflowY: 'auto',
        border: '1px solid var(--border)', boxShadow: '0 32px 80px rgba(44,24,16,0.4)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div>
            <p className="font-sindhi" style={{ fontSize: 22, color: 'var(--terracotta)', fontWeight: 700, marginBottom: 4 }}>{book.titleSd}</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 700, color: 'var(--text-primary)' }}>{book.titleEn}</h2>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, color: 'var(--text-muted)', padding: 4, flexShrink: 0 }}>✕</button>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          <span className="tag-green">{isSd ? (catSd[book.category] || book.category) : book.category}</span>
          <span className="tag-gold">{book.year}</span>
          {book.originalLanguage && <span className="tag" style={{ fontSize: 10 }}>{book.originalLanguage}</span>}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
          {[
            { label: tx(t.books.modalAuthor, lang), value: book.originalAuthor && book.originalAuthor !== 'Vali Ram Vallabh' ? `${book.originalAuthor} → ${isSd ? 'ترجمو: ولي رام ولڀ' : 'Translated by Vali Ram Vallabh'}` : 'Vali Ram Vallabh' },
            { label: tx(t.books.modalPub, lang), value: book.publisher },
            { label: tx(t.books.modalYear, lang), value: String(book.year) },
            { label: tx(t.books.modalLang, lang), value: book.originalLanguage || 'Sindhi' },
          ].map(f => (
            <div key={f.label} style={{ background: 'var(--cream)', borderRadius: 10, padding: '12px 14px' }}>
              <p style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{f.label}</p>
              <p style={{ fontSize: 13, color: 'var(--text-primary)', fontWeight: 500 }}>{f.value}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>{book.description}</p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a href={viewUrl} target="_blank" rel="noopener noreferrer" className="btn-green" style={{ flex: 1, justifyContent: 'center' }}>
            {isSd ? 'آنلائن پڙهو' : 'Read Online'}
          </a>
        </div>
        <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 12, textAlign: 'center' }}>
          {isSd ? 'مفت پڙهو — ڪو اڪائونٽ ضروري ناهي.' : 'Free to read online. No account required.'}
        </p>
      </div>
    </div>
  )
}

export default function BooksPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [selectedBook, setSelectedBook] = useState(null)
  const { lang } = useLanguage()
  const isSd = lang === 'sd'

  const filtered = books.filter(b => {
    const matchCat = activeCategory === 'All' || b.category === activeCategory
    const q = search.toLowerCase()
    const matchSearch = !q || b.titleEn.toLowerCase().includes(q) || b.titleSd.includes(q) || (b.originalAuthor || '').toLowerCase().includes(q)
    return matchCat && matchSearch
  })

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(201,148,58,0.2)', borderColor: 'rgba(201,148,58,0.4)', color: '#E8B85A' }}>{tx(t.books.tag, lang)}</div>
          <h1 style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#F5ECD7', marginBottom: 12, letterSpacing: isSd ? 0 : '-0.03em', direction: isSd ? 'rtl' : 'ltr' }}>
            {tx(t.books.title, lang)}
          </h1>
          <p style={{ fontSize: isSd ? 20 : 16, color: 'rgba(245,236,215,0.75)', maxWidth: 560, marginBottom: 20, fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr', lineHeight: isSd ? 2.2 : 1.6 }}>
            {tx(t.books.desc, lang)}
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {[
              { n: '25', l: tx(t.books.statBooks, lang) },
              { n: '90+', l: tx(t.books.statWorks, lang) },
              { n: '10+', l: tx(t.books.statLangs, lang) },
              { n: '60+', l: tx(t.books.statYears, lang) },
            ].map(s => (
              <div key={s.l} style={{ textAlign: isSd ? 'right' : 'center', direction: isSd ? 'rtl' : 'ltr' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, fontWeight: 800, color: '#C9943A', direction: 'ltr', unicodeBidi: 'isolate' }}>{s.n}</div>
                <div style={{ fontSize: isSd ? 14 : 11, color: 'rgba(245,236,215,0.6)', fontWeight: 600, fontFamily: isSd ? 'Lateef, serif' : 'inherit', textTransform: isSd ? 'none' : 'uppercase', letterSpacing: isSd ? 0 : '0.05em', lineHeight: isSd ? 1.8 : 1.4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Search */}
      <section style={{ background: 'var(--cream)', padding: '24px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', flex: '1', minWidth: 200, maxWidth: 340 }}>
              <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </span>
              <input
                type="text"
                placeholder={tx(t.books.searchPlaceholder, lang)}
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ width: '100%', padding: '10px 12px 10px 36px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, fontSize: 13, color: 'var(--text-primary)', outline: 'none', fontFamily: 'Inter, sans-serif' }}
                onFocus={e => e.target.style.borderColor = 'var(--terracotta)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {bookCategories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                  padding: '6px 12px', borderRadius: 8, border: 'none', cursor: 'pointer',
                  fontSize: 12, fontWeight: 600, fontFamily: 'Inter, sans-serif',
                  background: activeCategory === cat ? 'var(--terracotta)' : 'var(--bg-card)',
                  color: activeCategory === cat ? '#fff' : 'var(--text-muted)',
                  transition: 'all 0.15s',
                  border: activeCategory === cat ? '1px solid var(--terracotta)' : '1px solid var(--border)',
                }}>
                  {isSd ? (catSd[cat] || cat) : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 24, direction: isSd ? 'rtl' : 'ltr', fontFamily: isSd ? 'Lateef, serif' : 'inherit', fontSize: isSd ? 16 : 13 }}>
            {isSd
              ? `${filtered.length} مان ${books.length} ڪتاب ڏيکاريا پيا وڃن`
              : `${tx(t.books.showing, lang)} ${filtered.length} ${tx(t.books.of, lang)} ${books.length} ${tx(t.books.books, lang)}`
            }
          </p>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ fontSize: 16, color: 'var(--text-muted)' }}>{tx(t.books.noResults, lang)}</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
              {filtered.map(book => (
                <div key={book.id} className="card" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 0, padding: 0, overflow: 'hidden' }} onClick={() => setSelectedBook(book)}>
                  {/* Full book cover — proper aspect ratio for book covers (3:4) */}
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', background: 'var(--cream)', flexShrink: 0, overflow: 'hidden' }}>
                    {book.coverImage ? (
                      <Image src={book.coverImage} alt={book.titleEn} fill sizes="(max-width: 768px) 100vw, 320px" style={{ objectFit: 'fill' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, var(--terracotta), var(--gold))', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                        <p style={{ fontFamily: 'Lateef, serif', fontSize: 26, color: '#fff', textAlign: 'center', direction: 'rtl', lineHeight: 1.8 }}>{book.titleSd}</p>
                      </div>
                    )}
                    <div style={{ position: 'absolute', top: 10, left: 10 }}>
                      <span className="tag-green" style={{ fontSize: 10, background: 'rgba(45,90,61,0.88)', backdropFilter: 'blur(4px)' }}>
                        {isSd ? (catSd[book.category] || book.category) : book.category}
                      </span>
                    </div>
                    <div style={{ position: 'absolute', top: 10, right: 10 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', background: 'rgba(44,24,16,0.65)', backdropFilter: 'blur(4px)', padding: '3px 8px', borderRadius: 6 }}>{book.year}</span>
                    </div>
                  </div>
                  <div style={{ padding: '16px 20px 20px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                    <p className="font-sindhi" style={{ fontSize: 18, color: 'var(--terracotta)', fontWeight: 700, lineHeight: 1.6 }}>{book.titleSd}</p>
                    {!isSd && <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>{book.titleEn}</h3>}
                    {book.originalAuthor && book.originalAuthor !== 'Vali Ram Vallabh' && (
                      <p style={{ fontSize: 12, color: 'var(--text-muted)', direction: isSd ? 'rtl' : 'ltr', fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}>
                        {isSd ? 'اصل ليکڪ: ' : 'Original: '}<span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{book.originalAuthor}</span>
                      </p>
                    )}
                    <p style={{ fontSize: isSd ? 15 : 13, color: 'var(--text-secondary)', lineHeight: isSd ? 2 : 1.6, flex: 1, fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr' }}>
                      {isSd && book.descriptionSd ? book.descriptionSd.slice(0, 120) : book.description.slice(0, 110)}...
                    </p>
                    <div className="btn-green" style={{ padding: '8px 16px', fontSize: 12, justifyContent: 'center', marginTop: 4, textAlign: 'center', borderRadius: 8 }}>
                      {tx(t.books.readOnline, lang)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* More Books */}
      <section style={{ background: 'var(--cream)', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 700 }}>
          <h3 style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: isSd ? 26 : 22, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12, direction: isSd ? 'rtl' : 'ltr' }}>
            {tx(t.books.moreTitle, lang)}
          </h3>
          <p style={{ fontSize: isSd ? 17 : 14, color: 'var(--text-secondary)', lineHeight: isSd ? 2 : 1.7, marginBottom: 24, fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}>
            {tx(t.books.moreDesc, lang)}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://tinyurl.com/2p8bx2rn" target="_blank" rel="noopener noreferrer" className="btn-primary">
              {isSd ? 'سنڌ ڊجيٽل لائبريري →' : 'Sindh Digital Library →'}
            </a>
          </div>
        </div>
      </section>

      {selectedBook && <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} isSd={isSd} lang={lang} />}
    </>
  )
}
