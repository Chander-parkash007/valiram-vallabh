import { tributes } from '@/lib/data'

export const metadata = {
  title: 'Tributes — Vali Ram Vallabh',
  description: 'Tributes to Dewan Vali Ram Vallabh from his family, colleagues, scholars and grandchildren.',
}

export default function TributesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(201,148,58,0.2)', borderColor: 'rgba(201,148,58,0.4)', color: '#E8B85A' }}>In Memoriam</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#F5ECD7', marginBottom: 12, letterSpacing: '-0.03em' }}>
            Tributes
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(245,236,215,0.75)', maxWidth: 560 }}>
            Words from those who knew him best — family, colleagues, scholars and grandchildren who carry his torch forward.
          </p>
        </div>
      </section>

      {/* Opening quote */}
      <section style={{ background: '#2C1810', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: 700, textAlign: 'center' }}>
          <div style={{ fontSize: 56, color: 'rgba(201,148,58,0.3)', fontFamily: 'Playfair Display, serif', lineHeight: 1, marginBottom: 20 }}>"</div>
          <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 'clamp(17px,2.5vw,22px)', color: '#F5ECD7', lineHeight: 1.75, marginBottom: 24 }}>
            Vali Ram Vallabh is that unique figure of Sindhi literature who did his exceptional share of work in complete silence and left indelible marks of his name in Sindhi literature.
          </p>
          <p style={{ fontSize: 13, color: '#C9943A', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
            — Saeed Mangi, Colleague at Institute of Sindhology
          </p>
        </div>
      </section>

      {/* Tributes */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {tributes.map((t, i) => (
              <div key={t.id} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 20,
                padding: '32px', boxShadow: '0 2px 8px var(--shadow)',
                borderLeft: `4px solid ${i % 3 === 0 ? 'var(--terracotta)' : i % 3 === 1 ? 'var(--gold)' : 'var(--green)'}`,
              }}>
                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
                    background: i % 3 === 0 ? 'rgba(139,58,42,0.1)' : i % 3 === 1 ? 'rgba(201,148,58,0.1)' : 'rgba(45,90,61,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20,
                  }}>
                    {t.relationEn === 'Son' ? '' : t.relationEn === 'Daughter' ? '' : t.relationEn.includes('Grandson') ? '' : ''}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 2 }}>
                      {t.authorEn}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                      <span className="tag" style={{ fontSize: 9 }}>{t.relationEn}</span>
                      <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{t.languageEn}</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h4 style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 16, color: 'var(--terracotta)', marginBottom: 16 }}>
                  "{t.titleEn}"
                </h4>

                {/* Quote */}
                <blockquote style={{
                  borderLeft: '3px solid var(--border)', paddingLeft: 20,
                  fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
                  fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8,
                  marginBottom: 16,
                }}>
                  "{t.textEn}"
                </blockquote>

                {/* Source */}
                <p style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  — {t.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sindhi tributes note */}
      <section style={{ background: 'var(--cream)', padding: '48px 0' }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>سنڌي خراجِ عقيدت</div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Tributes in <span className="gradient-gold">Sindhi</span>
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
            Tributes by Dr. Chandi Ram Shahani and Saeed Mangi were originally written in Sindhi and published in Imrata Magazine, Issue 134, November 2023 — a special tribute issue dedicated to Vali Ram Vallabh.
          </p>
          <p className="font-sindhi" style={{ fontSize: 18, color: 'var(--terracotta)', lineHeight: 2, padding: '20px', background: 'var(--bg-card)', borderRadius: 12, border: '1px solid var(--border)' }}>
            ادب جي دنيا جا ماڻهو، خاص ڪري سنڌي پڙهندڙ، سائين ولي رام ولڀ جي انهيءَ ادبي پورهئي کي صدين تائين وساري نه سگهندا.
          </p>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 12, fontStyle: 'italic' }}>
            "The people of the literary world, especially Sindhi readers, will not be able to forget Saeen Vali Ram Vallabh's literary endeavors for centuries to come."
            — Dr. Chandi Ram Shahani
          </p>
        </div>
      </section>

      {/* Share a memory CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--terracotta), #6B2A1C)', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, color: '#F5ECD7', marginBottom: 16 }}>
            Share a Memory
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(245,236,215,0.75)', lineHeight: 1.7, marginBottom: 28 }}>
            Did you know Vali Ram Vallabh? Did his translations change your life? Did his teaching shape your thinking? We would love to hear from you and add your tribute to this archive.
          </p>
          <a
            href="mailto:info@valiramvallabh.com?subject=Tribute for Vali Ram Vallabh"
            className="btn-gold"
          >
            Send Your Tribute →
          </a>
        </div>
      </section>
    </>
  )
}

