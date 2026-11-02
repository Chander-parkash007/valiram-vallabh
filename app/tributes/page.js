'use client'

import { tributes } from '@/lib/data'
import { useLanguage } from '@/components/LanguageContext'
import { t, tx } from '@/lib/i18n'

export default function TributesPage() {
  const { lang } = useLanguage()
  const isSd = lang === 'sd'
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(201,148,58,0.2)', borderColor: 'rgba(201,148,58,0.4)', color: '#E8B85A' }}>{tx(t.tributes.tag, lang)}</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#F5ECD7', marginBottom: 12, letterSpacing: '-0.03em' }}>
            {tx(t.tributes.title, lang)}
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(245,236,215,0.75)', maxWidth: 560 }}>
            {tx(t.tributes.desc, lang)}
          </p>
        </div>
      </section>

      {/* Opening quote */}
      <section style={{ background: '#2C1810', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: 700, textAlign: 'center' }}>
          <div style={{ fontSize: 56, color: 'rgba(201,148,58,0.3)', fontFamily: 'Playfair Display, serif', lineHeight: 1, marginBottom: 20 }}>"</div>
          <p style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontStyle: 'italic', fontSize: 'clamp(17px,2.5vw,22px)', color: '#F5ECD7', lineHeight: 1.75, marginBottom: 24, direction: isSd ? 'rtl' : 'ltr' }}>
            {isSd
              ? 'ولي رام ولڀ سنڌي ادب جو اهو منفرد شخص آهي جنهن پنهنجو غير معمولي حصو مڪمل خاموشيءَ سان ادا ڪيو ۽ سنڌي ادب ۾ پنهنجي نالي جا اَمٽ نقش ڇڏيا.'
              : 'Vali Ram Vallabh is that unique figure of Sindhi literature who did his exceptional share of work in complete silence and left indelible marks of his name in Sindhi literature.'
            }
          </p>
          <p style={{ fontSize: 13, color: '#C9943A', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
            {isSd ? '— سعيد منگي، ساٿي، انسٽيٽيوٽ آف سنڌالاجي' : '— Saeed Mangi, Colleague at Institute of Sindhology'}
          </p>
        </div>
      </section>

      {/* Tributes */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {tributes.map((tribute, i) => (
              <div key={tribute.id} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 20,
                padding: '32px', boxShadow: '0 2px 8px var(--shadow)',
                borderLeft: `4px solid ${i % 2 === 0 ? 'var(--terracotta)' : 'var(--gold)'}`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                  {tribute.relationEn === 'Son' ? (
                    <div style={{ width: 52, height: 52, borderRadius: '50%', flexShrink: 0, overflow: 'hidden', border: '2px solid var(--gold)' }}>
                      <img src="/gallery/kamleshwar standing beside valiram park board.jpg" alt="Dr. Kamleshwar Lohana" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                    </div>
                  ) : (
                    <div style={{ width: 52, height: 52, borderRadius: '50%', flexShrink: 0, background: i % 2 === 0 ? 'rgba(139,58,42,0.08)' : 'rgba(201,148,58,0.08)', border: `1px solid ${i % 2 === 0 ? 'rgba(139,58,42,0.2)' : 'rgba(201,148,58,0.2)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                  )}
                  <div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 2 }}>
                      {tribute.authorEn}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                      <span className="tag" style={{ fontSize: 9 }}>{tribute.relationEn}</span>
                      <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{tribute.languageEn}</span>
                    </div>
                  </div>
                </div>
                <h4 style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 16, color: 'var(--terracotta)', marginBottom: 16 }}>
                  "{tribute.titleEn}"
                </h4>
                <blockquote style={{ borderLeft: '3px solid var(--border)', paddingLeft: 20, fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>
                  "{tribute.textEn}"
                </blockquote>
                <p style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  — {tribute.source}
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
            {isSd
              ? <>{tx(t.tributes.sindhiH2a, lang)} <span className="gradient-gold">{tx(t.tributes.sindhiH2b, lang)}</span></>
              : <>Tributes in <span className="gradient-gold">Sindhi</span></>
            }
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
            {isSd
              ? 'ڊاڪٽر چندي رام شاهاڻي ۽ سعيد منگي جا خراج اصل ۾ سنڌيءَ ۾ لکيل هئا ۽ امراتا رسالي، شمارو 134، نومبر 2023ع ۾ شايع ٿيا — جيڪو ولي رام ولڀ لاءِ وقف خاص خراجي شمارو هو.'
              : 'Tributes by Dr. Chandi Ram Shahani and Saeed Mangi were originally written in Sindhi and published in Imrata Magazine, Issue 134, November 2023 — a special tribute issue dedicated to Vali Ram Vallabh.'
            }
          </p>
          <p className="font-sindhi" style={{ fontSize: 18, color: 'var(--terracotta)', lineHeight: 2, padding: '20px', background: 'var(--bg-card)', borderRadius: 12, border: '1px solid var(--border)' }}>
            ادب جي دنيا جا ماڻهو، خاص ڪري سنڌي پڙهندڙ، سائين ولي رام ولڀ جي انهيءَ ادبي پورهئي کي صدين تائين وساري نه سگهندا.
          </p>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 12, fontStyle: 'italic' }}>
            {isSd
              ? '"ادب جي دنيا جا ماڻهو، خاص ڪري سنڌي پڙهندڙ، سائين ولي رام ولڀ جي ادبي پورهئي کي صدين تائين وساري نه سگهندا." — ڊاڪٽر چندي رام شاهاڻي'
              : '"The people of the literary world, especially Sindhi readers, will not be able to forget Saeen Vali Ram Vallabh\'s literary endeavors for centuries to come." — Dr. Chandi Ram Shahani'
            }
          </p>
        </div>
      </section>

      {/* Share a memory CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--terracotta), #6B2A1C)', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, color: '#F5ECD7', marginBottom: 16 }}>
            {tx(t.tributes.shareH2, lang)}
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(245,236,215,0.75)', lineHeight: 1.7, marginBottom: 28 }}>
            {isSd
              ? 'ڇا توهان ولي رام ولڀ کي سڃاڻندا هئا؟ ڇا سندس ترجمن توهان جي زندگي بدلائي؟ ڇا سندس تعليم توهان جي سوچ کي شڪل ڏني؟ اسان توهان کان ٻڌڻ ۽ توهان جو خراج هن آرڪائيو ۾ شامل ڪرڻ چاهيون ٿا.'
              : 'Did you know Vali Ram Vallabh? Did his translations change your life? Did his teaching shape your thinking? We would love to hear from you and add your tribute to this archive.'
            }
          </p>
          <a href="mailto:info@valiramvallabh.com?subject=Tribute for Vali Ram Vallabh" className="btn-gold">
            {tx(t.tributes.shareBtn, lang)}
          </a>
        </div>
      </section>
    </>
  )
}
