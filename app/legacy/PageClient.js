'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageContext'
import { t, tx } from '@/lib/i18n'

export default function LegacyPage() {
  const { lang } = useLanguage()
  const isSd = lang === 'sd'
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(201,148,58,0.2)', borderColor: 'rgba(201,148,58,0.4)', color: '#E8B85A' }}>{tx(t.legacy.tag, lang)}</div>
          <h1 style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#F5ECD7', marginBottom: 12, letterSpacing: isSd ? 0 : '-0.03em' }}>
            {tx(t.legacy.title, lang)}
          </h1>
          <p style={{ fontSize: isSd ? 20 : 16, color: 'rgba(245,236,215,0.75)', maxWidth: 560, fontFamily: isSd ? 'Lateef, serif' : 'inherit', lineHeight: isSd ? 2.1 : 1.6 }}>
            {tx(t.legacy.desc, lang)}
          </p>
        </div>
      </section>

      {/* Quote */}
      <section style={{ background: '#2C1810', padding: '48px 0' }}>
        <div className="container" style={{ maxWidth: 680, textAlign: 'center' }}>
          <blockquote style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontStyle: 'italic', fontSize: 'clamp(17px,2.5vw,22px)', color: '#F5ECD7', lineHeight: 1.75, marginBottom: 20, direction: isSd ? 'rtl' : 'ltr' }}>
            {isSd
              ? '"مون کي اهو محسوس ٿئي ٿو ڄڻ مون کي هڪ روشن مشعل ڏني وئي آهي جيڪا مون تي آهي ته اڳتي وٺي وڃان ۽ پنهنجي وقت تي اڳتي ڏيان. گڏجي اسان سندس روشني پاڻ سان کڻي هلنداسين."'
              : '"I feel as though I have been passed a bright torch that it is up to me to carry through the next phase and pass on in my own time. Together we will carry his light with us."'
            }
          </blockquote>
          <p style={{ fontSize: 13, color: '#C9943A', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
            {isSd ? '— سمير رائي چهابريا، پوٽو' : '— Sameer Rai Chhabria, Grandson'}
          </p>
        </div>
      </section>

      {/* Literary Society */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 }}>
            <div>
              <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>
                {isSd ? 'ادبي سوسائٽي' : 'Literary Society'}
              </div>
              <h2 className="section-title" style={{ marginBottom: 16 }}>
                {isSd ? 'ولي رام ولڀ' : 'Vali Ram Vallabh'}<br /><span className="gradient-gold">{isSd ? 'ادبي سوسائٽي' : 'Literary Society'}</span>
              </h2>
              <div className="divider-gold" />
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  {isSd
                    ? <><strong>ولي رام ولڀ ادبي سوسائٽي</strong> سندس ادبي شراڪتن کي محفوظ ۽ فروغ ڏيڻ ۽ سنڌي پڙهندڙن لاءِ عالمي ادب آڻڻ جي روايت جاري رکڻ لاءِ قائم ڪئي وئي.</>
                    : <>The <strong>Vali Ram Vallabh Literary Society</strong> was established to preserve and promote his literary contributions and to continue the tradition of bringing world literature to Sindhi readers.</>
                  }
                </p>
                <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  {isSd
                    ? <>سوسائٽي هر سال سندس وفات جي سالگره (29 آڪٽوبر) تي يا ان جي قريب <strong>سالياني يادگاري خطبي</strong> جو اهتمام ڪري ٿي.</>
                    : <>The Society organises an <strong>Annual Memorial Lecture</strong> on or near the anniversary of his passing (29 October) each year.</>
                  }
                </p>
              </div>
            </div>

            {/* Memorial lectures */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                {
                  n: isSd ? 'پهريون' : '1st',
                  year: '2024',
                  title: isSd ? 'پهريون ولي رام ولڀ يادگاري خطبو' : '1st Vali Ram Vallabh Memorial Lecture',
                  detail: isSd ? 'آڪٽوبر 2024ع — سندس وفات جي پهرين سالگره جي موقعي تي.' : 'October 2024 — marking the first anniversary of his passing.',
                  venue: '',
                  source: '',
                },
                {
                  n: isSd ? 'ٻيو' : '2nd',
                  year: '2025',
                  title: isSd ? 'سنڌي ٻولي ۽ ترجمي جو فن: ولي رام ولڀ جي شراڪتن جو جائزو' : 'Sindhi Language and the Art of Translation: Exploring the Contributions of Vali Ram Vallabh',
                  detail: isSd ? 'ڇنڇر، 15 نومبر 2025ع — بعد ازظهر 4:00 وڳي' : 'Saturday, 15 November 2025 — 4:00 PM',
                  venue: isSd ? 'پريس ڪلب مٺي، ٿرپارڪر، سنڌ' : 'Press Club Mithi, Tharparkar, Sindh',
                  source: isSd ? 'ڊان اخبار، 29 آڪٽوبر 2025ع' : 'Dawn newspaper, 29 October 2025',
                },
              ].map((l, i) => (
                <div key={i} className="card" style={{ borderTop: `3px solid ${i === 1 ? 'var(--gold)' : 'var(--terracotta)'}` }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ minWidth: 44, height: 44, borderRadius: 12, background: i === 1 ? 'rgba(201,148,58,0.1)' : 'rgba(139,58,42,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 13, color: i === 1 ? 'var(--gold)' : 'var(--terracotta)', flexShrink: 0 }}>
                      {l.n}
                    </div>
                    <div>
                      <p style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontStyle: 'italic', fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6, lineHeight: 1.4, direction: isSd ? 'rtl' : 'ltr' }}>"{l.title}"</p>
                      <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 2 }}>{l.detail}</p>
                      {l.venue && <p style={{ fontSize: 12, color: 'var(--terracotta)', fontWeight: 600 }}>{l.venue}</p>}
                      {l.source && <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>{isSd ? 'ذريعو: ' : 'Source: '}{l.source}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sindh Museum Corner */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, alignItems: 'center' }}>
            <div>
              <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>
                {isSd ? 'ميوزيم' : 'Museum'}
              </div>
              <h2 className="section-title" style={{ marginBottom: 16 }}>
                {isSd ? 'سنڌ ميوزيم ڪارنر' : 'Sindh Museum Corner'}<br /><span className="gradient-gold">{isSd ? 'حيدرآباد' : 'Hyderabad'}</span>
              </h2>
              <div className="divider-gold" />
              <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: 20, marginBottom: 16 }}>
                {isSd
                  ? <><strong>سنڌ ميوزيم، حيدرآباد</strong> ۾ ولي رام ولڀ جي نالي سان هڪ مخصوص ڪارنر ٺهي رهيو آهي — سندس مسودا، ڪتاب، ايوارڊ، تصويرون، ۽ ذاتي سامان آئندہ نسلن لاءِ محفوظ ڪيا وڃي رهيا آهن.</>
                  : <>A dedicated corner named after Vali Ram Vallabh is being constructed at the <strong>Sindh Museum, Hyderabad</strong> — preserving his manuscripts, books, awards, photographs, and personal belongings for future generations.</>
                }
              </p>
              <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                {isSd
                  ? <><strong>13 نومبر</strong> تي نمائش جو افتتاح ڪيو ويو — سندس زندگيءَ جي ڪم کي هڪ مستقل عوامي آرڪائيو ۾ آندو.</>
                  : <>The exhibition was inaugurated on <strong>13 November</strong> — bringing his life's work into a permanent public archive.</>
                }
              </p>
            </div>
            <div className="card" style={{ borderLeft: '4px solid var(--gold)', padding: '28px 24px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>
                {isSd ? 'ولي رام ولڀ ڪارنر' : 'Vali Ram Vallabh Corner'}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { text: isSd ? 'سنڌ ميوزيم، حيدرآباد، سنڌ، پاڪستان' : 'Sindh Museum, Hyderabad, Sindh, Pakistan' },
                  { text: isSd ? 'افتتاح: 13 نومبر' : 'Inaugurated: 13 November' },
                  { text: isSd ? 'مقصد: سندس مسودا، ايوارڊ، ۽ ذاتي مجموعو محفوظ ڪرڻ' : 'Purpose: Preserving his manuscripts, awards, and personal collection' },
                  { text: isSd ? 'منظم ڪيو: ڊاڪٽر ڪملشور لوهاڻو ۽ خاندان' : 'Organized by: Dr. Kamleshwer Lohana and family' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Park & School */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>

            {/* Park */}
            <div className="card" style={{ borderTop: '3px solid var(--green)', padding: '28px' }}>
              <h3 className="section-title" style={{ fontSize: 22, marginBottom: 12 }}>
                {isSd ? 'ولي رام ولڀ ' : 'Vali Ram Vallabh '}<span className="gradient-green">{isSd ? 'پارڪ' : 'Park'}</span>
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>
                {isSd
                  ? <><strong>سنڌي ادبي بورڊ</strong> ۽ <strong>حڪومت سنڌ</strong> هڪ عوامي پارڪ کي <strong>"ولي رام ولڀ پارڪ"</strong> جو نالو ڏنو آهي — سندس نالي سان هڪ مستقل عوامي اعزاز. هو پارڪ جي بورڊ جي اڳيان بيهي تصوير ڪڍرائي ويو ان کان اڳ جو هن وفات ڪئي.</>
                  : <>A public park has been named <strong>"Vali Ram Vallabh Park"</strong> by the <strong>Sindhi Adabi Board</strong> and the <strong>Government of Sindh</strong> — a permanent public honour bearing his name. He was photographed standing beside the park's signboard before his passing.</>
                }
              </p>
              <div style={{ padding: '12px 16px', background: 'rgba(45,90,61,0.08)', borderRadius: 10, border: '1px solid rgba(45,90,61,0.2)' }}>
                <p style={{ fontSize: 12, color: 'var(--green)', fontWeight: 700 }}>{isSd ? 'ڏنو' : 'Awarded by'}</p>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{isSd ? 'سنڌي ادبي بورڊ + حڪومت سنڌ' : 'Sindhi Adabi Board + Government of Sindh'}</p>
              </div>
            </div>

            {/* School */}
            <div className="card" style={{ borderTop: '3px solid var(--terracotta)', padding: '28px' }}>
              <h3 className="section-title" style={{ fontSize: 22, marginBottom: 12 }}>
                {isSd ? 'بلو اينجلز ' : 'Blue Angels '}<span className="gradient-gold">{isSd ? 'ايڊن اسڪول' : 'Eden School'}</span>
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>
                {isSd
                  ? <><strong>1 اپريل 1988ع</strong> تي ولي رام ولڀ حيدرآباد جي حسين آباد ۾ بلو اينجلز ايڊن اسڪول قائم ڪيو — ڪنڊرگارٽن کان ڪلاس 8 تائين معياري تعليم فراهم ڪئي. اسڪول سندس ننگهه <strong>انيتا ڪملشور</strong> جي اڳواڻي ۾ جاري آهي.</>
                  : <>On <strong>1 April 1988</strong>, Vali Ram Vallabh founded Blue Angels Eden School in Hussainabad, Hyderabad — providing quality education from Kindergarten to Class 8. The school continues to operate, led by his daughter-in-law <strong>Anita Kamleshwer</strong> as Principal.</>
                }
              </p>
              <div style={{ padding: '12px 16px', background: 'rgba(139,58,42,0.06)', borderRadius: 10, border: '1px solid rgba(139,58,42,0.15)' }}>
                <p style={{ fontSize: 12, color: 'var(--terracotta)', fontWeight: 700 }}>{isSd ? 'مقام' : 'Location'}</p>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{isSd ? 'حسين آباد، حيدرآباد، سنڌ' : 'Hussainabad, Hyderabad, Sindh'}</p>
              </div>
            </div>

            {/* Digital Archive */}
            <div className="card" style={{ borderTop: '3px solid var(--gold)', padding: '28px' }}>
              <h3 className="section-title" style={{ fontSize: 22, marginBottom: 12 }}>
                {isSd ? 'ڊجيٽل ' : 'Digital '}<span className="gradient-gold">{isSd ? 'آرڪائيو' : 'Archive'}</span>
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>
                {isSd
                  ? <>هي ويب سائيٽ — <strong>valiramvallabh.com</strong> — سندس زندگي ۽ ڪم جو دنيا جو سڀ کان مڪمل ڊجيٽل آرڪائيو آهي. 25 ڪتاب مفت دستياب، 35 کان وڌيڪ ايوارڊ دستاويز ٿيل، مڪمل سوانح، وڊيو آرڪائيو، ۽ خاندان ۽ علماء جا خراج.</>
                  : <>This website — <strong>valiramvallabh.com</strong> — is the world's most complete digital archive of his life and work. 25 books freely available, 35+ awards documented, complete biography, video archive, and tributes from family and scholars.</>
                }
              </p>
              <div style={{ display: 'flex', gap: 8 }}>
                <Link href="/books" className="btn-gold" style={{ padding: '8px 16px', fontSize: 12 }}>{isSd ? 'ڪتاب ڏسو' : 'Browse Books'}</Link>
                <Link href="/biography" className="btn-outline" style={{ padding: '8px 16px', fontSize: 12 }}>{isSd ? 'سوانح' : 'Biography'}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section" style={{ background: '#2C1810' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#F5ECD7', marginBottom: 12 }}>
              {isSd ? 'سندس دائمي اثر' : 'His Enduring Impact'}
            </h2>
            <p style={{ color: 'rgba(245,236,215,0.65)', fontSize: 15, maxWidth: 560, margin: '0 auto' }}>
              {isSd
                ? 'سنڌي ٻوليءَ ۽ ادب لاءِ زندگي ڀر جي لگن جا انگ اکر.'
                : 'The numbers behind a lifetime of dedication to Sindhi language and literature.'
              }
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 20 }}>
            {[
              { n: '90+', l: isSd ? 'ترجمو ۽ گڏ ڪيل ڪم' : 'Translated & Compiled Works' },
              { n: '35+', l: isSd ? 'قومي ۽ بين الاقوامي ايوارڊ' : 'National & International Awards' },
              { n: '11',  l: isSd ? 'مهارت ٿيل ٻوليون' : 'Languages Mastered' },
              { n: '26',  l: isSd ? 'ڪوٽا ڦلواري ۾ ٻوليون' : 'Languages in Kota Phulwari' },
              { n: '19',  l: isSd ? 'ڪوٽا ڦلواري ۾ ملڪ' : 'Countries in Kota Phulwari' },
              { n: '60+', l: isSd ? 'ادبي خدمت جا سال' : 'Years of Literary Service' },
              { n: '4',   l: isSd ? 'غدار جا ايڊيشن' : 'Editions of Ghadar' },
              { n: '5',   l: isSd ? 'آرسي رسالي جا جلد' : 'Volumes of Arsi Magazine' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center', padding: '20px 12px', background: 'rgba(255,255,255,0.04)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 36, fontWeight: 800, color: '#C9943A', lineHeight: 1, marginBottom: 8, direction: 'ltr', unicodeBidi: 'isolate' }}>{s.n}</div>
                <div style={{ fontSize: isSd ? 14 : 12, color: 'rgba(245,236,215,0.55)', lineHeight: isSd ? 1.8 : 1.4, fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
