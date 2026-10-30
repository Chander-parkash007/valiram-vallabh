'use client'

import { useState } from 'react'
import Link from 'next/link'
import { books, bookCategories, DRIVE_FOLDER_ID } from '@/lib/data'

function getDriveViewUrl(filename) {
  // Search in folder — opens folder filtered view
  return `https://drive.google.com/drive/folders/${DRIVE_FOLDER_ID}`
}

function BookModal({ book, onClose }) {
  const viewUrl = `https://drive.google.com/drive/folders/${DRIVE_FOLDER_ID}`

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
          <span className="tag-green">{book.category}</span>
          <span className="tag-gold">{book.year}</span>
          {book.originalLanguage && <span className="tag" style={{ fontSize: 10 }}>{book.originalLanguage}</span>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
          {[
            { label: 'Author / Translator', value: book.originalAuthor && book.originalAuthor !== 'Vali Ram Vallabh' ? `${book.originalAuthor} → Translated by Vali Ram Vallabh` : 'Vali Ram Vallabh' },
            { label: 'Publisher', value: book.publisher },
            { label: 'Year', value: String(book.year) },
            { label: 'Language', value: book.originalLanguage || 'Sindhi' },
          ].map(f => (
            <div key={f.label} style={{ background: 'var(--cream)', borderRadius: 10, padding: '12px 14px' }}>
              <p style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{f.label}</p>
              <p style={{ fontSize: 13, color: 'var(--text-primary)', fontWeight: 500 }}>{f.value}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>{book.description}</p>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            Read Online (Google Drive)
          </a>
          <a
            href={`https://tinyurl.com/2p8bx2rn`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            Sindh Library
          </a>
        </div>
        <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 12, textAlign: 'center' }}>
          Free to read online. No account required.
        </p>
      </div>
    </div>
  )
}

export default function BooksPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [selectedBook, setSelectedBook] = useState(null)

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
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(201,148,58,0.2)', borderColor: 'rgba(201,148,58,0.4)', color: '#E8B85A' }}>Digital Library</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#F5ECD7', marginBottom: 12, letterSpacing: '-0.03em' }}>
            His Books
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(245,236,215,0.75)', maxWidth: 560, marginBottom: 20 }}>
            25 books available to read online or access through the Sindh Digital Library — completely free.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {[
              { n: '25', l: 'Books Available' },
              { n: '90+', l: 'Total Works' },
              { n: '10+', l: 'Languages Translated' },
              { n: '60+', l: 'Years of Writing' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, fontWeight: 800, color: '#C9943A' }}>{s.n}</div>
                <div style={{ fontSize: 11, color: 'rgba(245,236,215,0.6)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Search */}
      <section style={{ background: 'var(--cream)', padding: '24px 0', position: 'sticky', top: 68, zIndex: 100, borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Search */}
            <div style={{ position: 'relative', flex: '1', minWidth: 200, maxWidth: 340 }}>
              <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: 14 }}>🔍</span>
              <input
                type="text"
                placeholder="Search books, authors..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%', padding: '10px 12px 10px 36px',
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: 10, fontSize: 13, color: 'var(--text-primary)',
                  outline: 'none', fontFamily: 'Inter, sans-serif',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--terracotta)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            {/* Categories */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {bookCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '6px 12px', borderRadius: 8, border: 'none', cursor: 'pointer',
                    fontSize: 12, fontWeight: 600, fontFamily: 'Inter, sans-serif',
                    background: activeCategory === cat ? 'var(--terracotta)' : 'var(--bg-card)',
                    color: activeCategory === cat ? '#fff' : 'var(--text-muted)',
                    transition: 'all 0.15s',
                    border: activeCategory === cat ? '1px solid var(--terracotta)' : '1px solid var(--border)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 24 }}>
            Showing {filtered.length} of {books.length} books
          </p>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ fontSize: 48, marginBottom: 16 }}></p>
              <p style={{ fontSize: 16, color: 'var(--text-muted)' }}>No books found. Try a different search.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
              {filtered.map(book => (
                <div
                  key={book.id}
                  className="card"
                  style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 12 }}
                  onClick={() => setSelectedBook(book)}
                >
                  {/* Book spine decoration */}
                  <div style={{ height: 6, borderRadius: 100, background: 'linear-gradient(90deg, var(--terracotta), var(--gold))', marginBottom: 4 }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span className="tag-green" style={{ fontSize: 10 }}>{book.category}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 700 }}>{book.year}</span>
                  </div>

                  <div>
                    <p className="font-sindhi" style={{ fontSize: 20, color: 'var(--terracotta)', fontWeight: 700, marginBottom: 4, lineHeight: 1.5 }}>
                      {book.titleSd}
                    </p>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6, lineHeight: 1.3 }}>
                      {book.titleEn}
                    </h3>
                    {book.originalAuthor && book.originalAuthor !== 'Vali Ram Vallabh' && (
                      <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                        Original: <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{book.originalAuthor}</span>
                      </p>
                    )}
                  </div>

                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1 }}>
                    {book.description.slice(0, 120)}...
                  </p>

                  <div style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
                    <div className="btn-green" style={{ padding: '8px 16px', fontSize: 12, flex: 1, justifyContent: 'center', textAlign: 'center', borderRadius: 8 }}>
                      Read Online
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* More Books Banner */}
      <section style={{ background: 'var(--cream)', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 700 }}>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>
            More Books Available Online
          </h3>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
            Additional books by Vali Ram Vallabh are available on the Sindh Digital Library maintained by M.H. Panhwar Institute of Research, Jamshoro.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://tinyurl.com/2p8bx2rn" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Sindh Digital Library →
            </a>
            <a href={`https://drive.google.com/drive/folders/${DRIVE_FOLDER_ID}`} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Google Drive Folder
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedBook && <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />}
    </>
  )
}

