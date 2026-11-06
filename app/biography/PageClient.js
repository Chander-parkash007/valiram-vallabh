'use client'

import Link from 'next/link'
import { person, timeline, family } from '@/lib/data'
import { useLanguage } from '@/components/LanguageContext'
import { t, tx } from '@/lib/i18n'

const typeColors = {
  life:        { bg: 'rgba(139,58,42,0.06)', border: 'rgba(139,58,42,0.2)', dot: 'var(--terracotta)' },
  education:   { bg: 'rgba(139,58,42,0.06)', border: 'rgba(139,58,42,0.2)', dot: 'var(--gold)' },
  career:      { bg: 'rgba(139,58,42,0.06)', border: 'rgba(139,58,42,0.2)', dot: 'var(--terracotta)' },
  literary:    { bg: 'rgba(139,58,42,0.06)', border: 'rgba(139,58,42,0.2)', dot: 'var(--gold)' },
  achievement: { bg: 'rgba(201,148,58,0.08)', border: 'rgba(201,148,58,0.25)', dot: 'var(--gold)' },
}

export default function BiographyPage() {
  const { lang } = useLanguage()
  const isSd = lang === 'sd'
  const typeLabels = {
    life:        tx(t.bio.typeLife, lang),
    education:   tx(t.bio.typeEdu, lang),
    career:      tx(t.bio.typeCareer, lang),
    literary:    tx(t.bio.typeLit, lang),
    achievement: tx(t.bio.typeAchieve, lang),
  }

  const eduCards = [
    { year: '1947', title: isSd ? 'پهرين ڪلاس ۾ داخلا' : 'Admitted Class 1', place: isSd ? 'گورنمينٽ پرائمري اسڪول، مٺي' : 'Government Primary School, Mithi' },
    { year: '1957', title: isSd ? 'پرائمري اسڪول سرٽيفڪيٽ (سنڌي ورنيڪيولر فائنل)' : 'Primary School Certificate (Sindhi Vernacular Final)', place: isSd ? 'پشڪارڻا برهمڻ پاٺشالا، مٺي' : 'Pushkarana Brahman Pathshala, Mithi' },
    { year: '1959', title: isSd ? 'ميٽرڪ' : 'Matriculation', place: isSd ? 'لوڪل بورڊ هاءِ اسڪول، مٺي' : 'Local Board High School, Mithi' },
    { year: '1961', title: isSd ? 'انٽر گريڊ ڊرائنگ امتحان' : 'Inter-grade Drawing Examination', place: '' },
    { year: '1964', title: isSd ? 'بي اي (گريجوئيشن)' : 'B.A. (Graduation)', place: isSd ? 'سچل سرمست ڪاليج، حيدرآباد' : 'Sachal Sarmast College, Hyderabad' },
    { year: '1967', title: isSd ? 'ايم اي اردو ادب — فرسٽ ڪلاس فرسٽ' : 'M.A. Urdu Literature — First Class First', place: isSd ? 'سنڌ يونيورسٽي، جامشورو' : 'Sindh University, Jamshoro' },
    { year: '1969', title: isSd ? 'قانون جي ڊگري (ايل ايل بي)' : 'Law Degree (LLB)', place: isSd ? 'جناح لا ڪاليج، حيدرآباد' : 'Jinnah Law College, Hyderabad' },
    { year: '1971', title: isSd ? 'ايم اي سوشيالاجي — فرسٽ ڪلاس فرسٽ' : 'M.A. Sociology — First Class First', place: isSd ? 'سنڌ يونيورسٽي، جامشورو' : 'Sindh University, Jamshoro' },
    { year: '1991', title: isSd ? 'ايم اي ماس ڪميونيڪيشن — فرسٽ ڪلاس فرسٽ' : 'M.A. Mass Communication — First Class First', place: isSd ? 'سنڌ يونيورسٽي، جامشورو' : 'Sindh University, Jamshoro' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(201,148,58,0.2)', borderColor: 'rgba(201,148,58,0.4)', color: '#E8B85A' }}>{tx(t.bio.pageTag, lang)}</div>
          <h1 style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#F5ECD7', marginBottom: 12, letterSpacing: isSd ? 0 : '-0.03em' }}>
            {tx(t.bio.heroTitle, lang)}
          </h1>
          <p style={{ fontSize: isSd ? 20 : 16, color: 'rgba(245,236,215,0.75)', maxWidth: 560, fontFamily: isSd ? 'Lateef, serif' : 'inherit', lineHeight: isSd ? 2.1 : 1.6 }}>
            {tx(t.bio.heroDesc, lang)}
          </p>
        </div>
      </section>

      {/* Early Life */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.bio.earlyTag, lang)}</div>
          <h2 className="section-title" style={{ marginBottom: 20 }}>
            {isSd
              ? <span style={{ direction: 'rtl', display: 'block' }}>ٿرپارڪر جي سرزمين تي جنم</span>
              : <span>Born in the Heart of <span className="gradient-gold">Tharparkar</span></span>
            }
          </h2>
          <div className="divider-gold" />
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              {isSd
                ? 'ولي رام ولڀ 18 آگسٽ 1941ع (سرڪاري رڪارڊ موجب: 16 مارچ 1941ع) تي مٺي، ضلعي ٿرپارڪر، سنڌ، پاڪستان ۾ ڪيول رام لوهاڻو جي گهر ۾ جنم ورتو.'
                : <>Vali Ram Vallabh was born on <strong>18 August 1941</strong> (official records: 16 March 1941) in <strong>Mithi, Tharparkar District, Sindh, Pakistan</strong> — a city that would later be known as a centre of learning and literature — at the home of <strong>Kewal Ram Lohana</strong>.</>
              }
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              {isSd
                ? '6 مئي 1947ع تي کيس گورنمينٽ پرائمري اسڪول مٺيءَ ۾ پهرين درجي ۾ داخل ڪرايو ويو. اسڪول جي زماني کان ئي کيس ڪتابن ۽ مطالعي سان گهري دلچسپي پيدا ٿي.'
                : <>He was admitted to Government Primary School Mithi in Class 1 on 6 May 1947. During his school years, he developed a deep interest in books — the school reading room and library were under his care. Headmaster <strong>Lachman Das Parwani</strong> taught him English grammar and composition.</>
              }
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              {isSd
                ? 'هن پشڪارڻا برهمڻ پاٺشالا ۾ ديوناگري رسم الخط ذريعي هندي ٻوليءَ جي تعليم حاصل ڪئي ۽ پنڊت سرنگرام شرما کان سنسڪرت سکي. کيس ڪرڪيٽ ۽ فٽبال سان پڻ دلچسپي هئي. 1956ع ۾ تقريرن جي مقابلي ۾ پهريون انعام حاصل ڪيائين.'
                : <>Beyond academics, he studied <strong>Hindi in Devanagari script</strong> from Pandit Punam Chand Sarmadi Brahman at the Pushkarana Brahman Pathshala, and learned <strong>Sanskrit</strong> from Pandit Sarngram Sharma. He also played cricket and football — winning first prize in the 1956 speech competition on "Duties of Students."</>
              }
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              {isSd
                ? 'ساڳئي سال سندس ملاقات مٺيءَ جي سماجي مصلح ڀڳت کيم چند اسنانيءَ سان ٿي. کيس شيوا منڊلي ۽ ان جي لائبريريءَ جو چيئرمين چونڊيو ويو. اها نوجوانن جي هڪ تنظيم هئي، جنهن جا 80 ميمبر ۽ 350 ڪتابن تي مشتمل لائبريري هئي. 1957ع ۾ هن اسرداس ليکراج پرڌواناڻيءَ جي ڌيءَ هريءَ سان شادي ڪئي.'
                : <>Around 1956 he came into contact with <strong>Bhagat Khem Chand Asnani</strong>, a social reformer of Mithi. Vali Ram was elected Chairman of the Shiva Mandali and Library — a youth organization with 80 members and 350 books. He married <strong>Hari</strong>, daughter of Isardas Lekhraj Pardhwanani, in Mithi in 1957.</>
              }
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-sm" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="tag-green" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.bio.eduTag, lang)}</div>
          <h2 className="section-title" style={{ marginBottom: 32 }}>
            {isSd ? 'تعليمي ميدان ۾ نمايان ڪاميابي — ' : 'Academic Excellence — '}<span className="gradient-green">{isSd ? 'هر امتحان ۾ پهريون درجو' : 'First Class, Every Time'}</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
            {eduCards.map((e, i) => (
              <div key={i} className="card" style={{ borderLeft: '3px solid var(--green)', padding: '14px 18px' }}>
                <span className="tag-green" style={{ fontSize: 10, marginBottom: 8, display: 'inline-flex' }}>{e.year}</span>
                <p style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)', marginBottom: 4 }}>{e.title}</p>
                {e.place && <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{e.place}</p>}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, padding: '20px 24px', background: 'var(--bg-card)', borderRadius: 12, border: '1px solid var(--border)' }}>
            <p style={{ fontWeight: 700, fontSize: 13, color: 'var(--text-primary)', marginBottom: 8 }}>
              {isSd ? 'مهارت حاصل ڪيل ٻوليون (11)' : 'Languages Mastered (11)'}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {person.languages.map(l => (
                <span key={l} className="tag-gold" style={{ fontSize: 11 }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.bio.careerTag, lang)}</div>
          <h2 className="section-title" style={{ marginBottom: 20 }}>
            {isSd ? 'ڇهن ڏهاڪن تي پکڙيل ' : 'Six Decades of '}<span className="gradient-gold">{isSd ? 'پيشوراڻو سفر' : 'Dedicated Service'}</span>
          </h2>
          <div className="divider-gold" />
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              {isSd
                ? <>ولي رام ولڀ 1959ع کان 1968ع تائين <strong>جهنگلات کاتي</strong> ۾ خدمتون سرانجام ڏنيون. ان کانپوءِ 1969ع کان 1988ع تائين ڪراچيءَ جي هڪ اشتهاري ڪمپنيءَ جي حيدرآباد شاخ ۾ <strong>برانچ مئنيجر</strong> طور ڪم ڪيائين.</>
                : <>Vali Ram Vallabh worked in the <strong>Forest Department</strong> from 1959 to 1968. For about twenty years (1969–1988) he served as <strong>Branch Manager</strong> of the Hyderabad branch of a Karachi advertising company.</>
              }
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              {isSd
                ? <>1 اپريل 1988ع تي هن حيدرآباد ۾ <strong>بلو اينجلز ايڊن اسڪول</strong> قائم ڪيو، جتي ڪنڊرگارٽن کان اٺين درجي تائين تعليم جو بندوبست ڪيو ويو.</>
                : <>On 1 April 1988, he founded <strong>Blue Angels Eden School</strong> in Hussainabad, Hyderabad — providing quality education from Kindergarten to Class 8.</>
              }
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              {isSd
                ? <>اپريل 1988ع ۾ هن سنڌ يونيورسٽي، ڄامشوري جي <strong>انسٽيٽيوٽ آف سنڌالاجي</strong> ۾ خدمتون شروع ڪيون. اڳتي هلي کيس <strong>ڊپٽي ڊائريڪٽر، اينٿروپالاجيڪل سينٽر (ميوزيم)</strong> جي عهدي تي ترقي ملي. هن 15 مارچ 2001ع تي ملازمت تان رٽائرمينٽ ورتي.</>
                : <>In April 1988 he joined the <strong>Institute of Sindhology</strong> at Sindh University, Jamshoro. He was promoted to <strong>Deputy Director, Anthropological Centre (Museum)</strong> and retired on 15 March 2001.</>
              }
            </p>
          </div>
        </div>
      </section>

      {/* Literary Life */}
      <section className="section-sm" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.bio.litTag, lang)}</div>
          <h2 className="section-title" style={{ marginBottom: 20 }}>
            {isSd ? 'دنيا جي ادب کي ' : 'Bridging the World to '}<span className="gradient-gold">{isSd ? 'سنڌي پڙهندڙن تائين پهچائڻ' : 'Sindhi Readers'}</span>
          </h2>
          <div className="divider-gold" />
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              {isSd
                ? <>سندس پهريون ترجمو، گجراتي ٻوليءَ جي ڪتاب <strong>"بهشت ائين دوزخ"</strong> جو سنڌي ترجمو، 1960ع ۾ <em>مهراڻ</em> رسالي ۾ شايع ٿيو. اهو سندس ادبي سفر جي شروعات هئي، جيڪو 60 سالن کان وڌيڪ عرصي تائين جاري رهيو.</>
                : <>His first translation — "Behisht Aeen Dozakh" from Gujarati — was published in the quarterly <em>Mehran</em> magazine in 1960. This began a literary journey spanning over 60 years.</>
              }
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              {isSd
                ? <>سندس اهم ترجمن ۾ ڪرشن چندر جو ناول <strong>"غدار"</strong> (4 ڇاپا)، البرٽ ڪاميو جو ناول <strong>"ڌاريو"</strong> (1993ع)، جنهن تي کيس مرزا قليچ بيگ ايوارڊ مليو، ۽ <strong>امرتا پريتم، قرۃالعين حيدر، ليو ٽالسٽاءِ</strong> سميت ٻين نامور ليکڪن جون تحريرون شامل آهن.</>
                : <>Among his most celebrated translations: <strong>Ghadar</strong> by Krishan Chander (4 editions), <strong>Dhariyo</strong> — Sindhi translation of Albert Camus' "The Outsider" (1993, won the Mirza Qalich Baig Award), and works of <strong>Amrita Pritam, Qurratulain Hyder, Leo Tolstoy</strong> and many others.</>
              }
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              {isSd
                ? <>هن ادبي چونڊن ۽ مجموعن جي ترتيب ۽ تدوين ۾ پڻ اهم ڪردار ادا ڪيو. انهن ۾ <strong>"ڪوٽا ڦلواري"</strong> (19 ملڪن جي 26 ٻولين جي 112 شاعرن جو ڪلام)، <strong>"مورچل"</strong> (هندستاني شاعريءَ جو مجموعو) ۽ <strong>"آرسي پبليڪيشن"</strong> جا پنج جلد (1983ع–1986ع) شامل آهن، جن جي ترتيب ۽ تدوين ۾ هن ظفر حسن واٽس سان گڏ ڪم ڪيو.</>
                : <>He also compiled landmark anthologies: <strong>Kota Phulwari</strong> (112 poets from 26 languages of 19 countries), <strong>Morchal</strong> (Indian poetry collection), and the five-volume <strong>Arsi Publication</strong> (1983–1986) co-edited with Zafar Hassan Wats.</>
              }
            </p>
          </div>
        </div>
      </section>

      {/* Full Timeline */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.bio.timelineTag, lang)}</div>
          <h2 className="section-title" style={{ marginBottom: 12, fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', direction: isSd ? 'rtl' : 'ltr', textAlign: isSd ? 'right' : 'left' }}>{tx(t.bio.timelineH2, lang)}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40, justifyContent: 'flex-start' }}>
            {Object.entries(typeLabels).map(([type, label]) => (
              <span key={type} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: isSd ? 14 : 11, fontWeight: 600, color: typeColors[type].dot, fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: typeColors[type].dot, flexShrink: 0 }} />
                {label}
              </span>
            ))}
          </div>
          <div style={{ position: 'relative' }}>
            {/* Vertical line — always left at 40px */}
            <div style={{ position: 'absolute', left: 40, top: 0, bottom: 0, width: 2, background: 'var(--border)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {timeline.map((item, i) => {
                const c = typeColors[item.type]
                return (
                  <div key={i} style={{ display: 'flex', flexDirection: 'row', gap: 20, paddingBottom: 28, position: 'relative' }}>
                    {/* Dot column — always left, aligned with the vertical line */}
                    <div style={{ position: 'relative', zIndex: 1, flexShrink: 0, width: 80, display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
                      <div style={{ width: 12, height: 12, borderRadius: '50%', background: c.dot, border: '2px solid var(--bg)', boxShadow: `0 0 0 2px ${c.dot}` }} />
                    </div>
                    {/* Content box */}
                    <div style={{
                      flex: 1,
                      background: c.bg,
                      border: `1px solid ${c.dot}20`,
                      borderRadius: 10,
                      padding: '12px 16px',
                    }}>
                      {/* Year + type — right-aligned in Sindhi, left in English */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        marginBottom: 6,
                        flexWrap: 'wrap',
                        justifyContent: isSd ? 'flex-end' : 'flex-start',
                        direction: 'ltr',
                      }}>
                        {!isSd && (
                          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 800, color: c.dot, unicodeBidi: 'isolate' }}>{item.year}</span>
                        )}
                        <span style={{
                          fontSize: isSd ? 13 : 10, padding: '2px 8px', borderRadius: 100,
                          background: 'rgba(255,255,255,0.6)', color: c.dot,
                          fontWeight: 700, textTransform: isSd ? 'none' : 'uppercase',
                          letterSpacing: isSd ? 0 : '0.06em',
                          border: `1px solid ${c.dot}40`,
                          fontFamily: isSd ? 'Lateef, serif' : 'inherit',
                        }}>
                          {typeLabels[item.type]}
                        </span>
                        {isSd && (
                          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 800, color: c.dot, direction: 'ltr', unicodeBidi: 'isolate' }}>{item.year}</span>
                        )}
                      </div>
                      {/* Event text */}
                      <p style={{
                        fontSize: isSd ? 16 : 14,
                        color: 'var(--text-secondary)',
                        lineHeight: isSd ? 2 : 1.7,
                        fontFamily: isSd ? 'Lateef, serif' : 'inherit',
                        direction: isSd ? 'rtl' : 'ltr',
                        textAlign: isSd ? 'right' : 'left',
                      }}>
                        {isSd && item.eventSd ? item.eventSd : item.event}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Family */}
      <section className="section-sm" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.bio.familyTag, lang)}</div>
          <h2 className="section-title" style={{ marginBottom: 32, fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', direction: isSd ? 'rtl' : 'ltr', textAlign: isSd ? 'right' : 'left' }}>{tx(t.bio.familyH2, lang)}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
            {family.map((m, i) => (
              <div key={i} className="card" style={{ padding: '16px 18px', direction: isSd ? 'rtl' : 'ltr' }}>
                <p style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)', marginBottom: 2, fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', lineHeight: isSd ? 1.8 : 1.3, textAlign: isSd ? 'right' : 'left' }}>
                  {isSd && m.nameSd ? m.nameSd : m.nameEn}
                </p>
                <p style={{ fontSize: isSd ? 14 : 11, color: 'var(--terracotta)', fontWeight: 600, textTransform: isSd ? 'none' : 'uppercase', letterSpacing: isSd ? 0 : '0.05em', marginBottom: 6, fontFamily: isSd ? 'Lateef, serif' : 'inherit', textAlign: isSd ? 'right' : 'left' }}>
                  {isSd && m.roleSd ? m.roleSd : m.relation}
                </p>
                {(m.noteEn || m.noteSd) && (
                  <p style={{ fontSize: isSd ? 14 : 12, color: 'var(--text-muted)', lineHeight: isSd ? 1.9 : 1.5, fontFamily: isSd ? 'Lateef, serif' : 'inherit', textAlign: isSd ? 'right' : 'left' }}>
                    {isSd && m.noteSd ? m.noteSd : m.noteEn}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passing */}
      <section className="section" style={{ background: '#2C1810' }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <h2 style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: 'clamp(1.6rem,4vw,2.5rem)', color: '#F5ECD7', marginBottom: 16, direction: isSd ? 'rtl' : 'ltr' }}>
            {isSd ? '29 آڪٽوبر 2023ع' : '29 October 2023'}
          </h2>
          <p style={{ fontSize: isSd ? 18 : 16, color: 'rgba(245,236,215,0.75)', lineHeight: isSd ? 2.2 : 1.8, marginBottom: 24, fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}>
            {isSd
              ? 'ولي رام ولڀ 29 آڪٽوبر 2023ع تي ذيابيطس، گردن جي ناڪامي، ۽ دل جي پيچيدگين سبب ڪراچي جي هڪ اسپتال ۾ 82 سالن جي عمر ۾ وفات ڪئي. سندس آخري رسمون حيدرآباد ۾ جيٺانيان شمشان گهاٽ تي ادا ڪيون ويون.'
              : 'Vali Ram Vallabh passed away in a Karachi hospital on 29 October 2023, aged 82, after suffering from diabetes, kidney failure, and cardiac complications. His last rites were performed at Jethaniyan Shamshan Ghat, Hussainabad, Hyderabad.'
            }
          </p>
          <p style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontStyle: 'italic', fontSize: 18, color: '#C9943A', lineHeight: 1.7, direction: isSd ? 'rtl' : 'ltr' }}>
            {isSd
              ? '"جيستائين ڪهاڻيون ٻڌايون وڃن ۽ خيال اڏامن، توهان جو ورثو هر انهي دل ۾ زنده رهندو جنهن کي توهان ڇهيو."'
              : '"As long as stories are told and thoughts take flight, your legacy will live on in every heart you touched."'
            }
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <Link href="/tributes" className="btn-gold">{tx(t.bio.readTributes, lang)}</Link>
            <Link href="/books" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, color: '#F5ECD7', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
              {tx(t.bio.readBooks, lang)}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
