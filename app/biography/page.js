import Link from 'next/link'
import { person, timeline, family } from '@/lib/data'

export const metadata = {
  title: 'Biography — Vali Ram Vallabh',
  description: 'Complete biography of Dewan Vali Ram Vallabh — from birth in Mithi, Tharparkar 1941 to his passing in 2023. Education, career, literary contributions and legacy.',
}

const typeColors = {
  life:        { bg: 'rgba(139,58,42,0.08)',  border: 'var(--terracotta)', dot: 'var(--terracotta)' },
  education:   { bg: 'rgba(45,90,61,0.08)',   border: 'var(--green)',      dot: 'var(--green)' },
  career:      { bg: 'rgba(201,148,58,0.08)', border: 'var(--gold)',       dot: 'var(--gold)' },
  literary:    { bg: 'rgba(99,102,241,0.08)', border: '#6366f1',           dot: '#6366f1' },
  achievement: { bg: 'rgba(234,179,8,0.08)',  border: '#ca8a04',           dot: '#ca8a04' },
}
const typeLabels = { life: 'Life', education: 'Education', career: 'Career', literary: 'Literary', achievement: 'Achievement' }

export default function BiographyPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(201,148,58,0.2)', borderColor: 'rgba(201,148,58,0.4)', color: '#E8B85A' }}>Biography</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#F5ECD7', marginBottom: 12, letterSpacing: '-0.03em' }}>
            A Life in Letters
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(245,236,215,0.75)', maxWidth: 560 }}>
            The complete story of Dewan Vali Ram Vallabh — from a small town in Thar to becoming one of Sindhi literature's greatest translators and scholars.
          </p>
        </div>
      </section>

      {/* Early Life */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Birth & Early Life</div>
          <h2 className="section-title" style={{ marginBottom: 20 }}>
            Born in the Heart of <span className="gradient-gold">Tharparkar</span>
          </h2>
          <div className="divider-gold" />

          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              Dewan Vali Ram Vallabh was born on <strong>18 August 1941</strong> (official records: 16 March 1941) in <strong>Mithi, Tharparkar District, Sindh, Pakistan</strong> — a city that would later be known as a centre of learning and literature — at the home of <strong>Kewal Ram Lohana</strong>.
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              He was admitted to Government Primary School Mithi in Class 1 on 6 May 1947. During his school years, he developed a deep interest in books — the school reading room and library were under his care. Headmaster <strong>Lachman Das Parwani</strong> taught him English grammar and composition, while <strong>Chaudhry Zia-ul-Haq</strong> taught English, Urdu and Persian.
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              Beyond academics, he studied <strong>Hindi in Devanagari script</strong> from Pandit Punam Chand Sarmadi Brahman at the Pushkarana Brahman Pathshala, and learned <strong>Sanskrit</strong> from Pandit Sarngram Sharma. He also played cricket and football and participated enthusiastically in school dramas and speech competitions — winning first prize in 1956 on "Duties of Students."
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              Around 1956 he came into contact with <strong>Bhagat Khem Chand Asnani</strong>, a social reformer of Mithi, who gave morning and evening guidance to students. Vali Ram was elected Chairman of the Shiva Mandali and Library — a youth organization with 80 members and 350 books — that Bhagat Sahib founded. In that same year, the play "Chandar Haas" was staged, whose ticket proceeds founded a Kanya Pathshala where 30 girls were taught Hindi. He married <strong>Hari</strong>, daughter of Isardas Lekhraj Pardhwanani, in Mithi in 1957.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-sm" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="tag-green" style={{ marginBottom: 16, display: 'inline-flex' }}>Education</div>
          <h2 className="section-title" style={{ marginBottom: 32 }}>
            Academic Excellence — <span className="gradient-green">First Class, Every Time</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
            {[
              { year: '1947', title: 'Admitted Class 1', place: 'Government Primary School, Mithi' },
              { year: '1957', title: 'Primary School Certificate (Sindhi Vernacular Final)', place: 'Pushkarana Brahman Pathshala, Mithi' },
              { year: '1959', title: 'Matriculation', place: 'Local Board High School, Mithi' },
              { year: '1961', title: 'Inter-grade Drawing Examination', place: '' },
              { year: '1964', title: 'B.A. (Graduation)', place: 'Sachal Sarmast College, Hyderabad' },
              { year: '1967', title: 'M.A. Urdu Literature — First Class First', place: 'Sindh University, Jamshoro' },
              { year: '1969', title: 'Law Degree (LLB)', place: 'Jinnah Law College, Hyderabad' },
              { year: '1971', title: 'M.A. Sociology — First Class First', place: 'Sindh University, Jamshoro' },
              { year: '1991', title: 'M.A. Mass Communication — First Class First', place: 'Sindh University, Jamshoro' },
            ].map((e, i) => (
              <div key={i} className="card" style={{ borderLeft: '3px solid var(--green)', padding: '14px 18px' }}>
                <span className="tag-green" style={{ fontSize: 10, marginBottom: 8, display: 'inline-flex' }}>{e.year}</span>
                <p style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)', marginBottom: 4 }}>{e.title}</p>
                {e.place && <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{e.place}</p>}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, padding: '20px 24px', background: 'var(--bg-card)', borderRadius: 12, border: '1px solid var(--border)' }}>
            <p style={{ fontWeight: 700, fontSize: 13, color: 'var(--text-primary)', marginBottom: 8 }}>Languages Mastered (11)</p>
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
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Career</div>
          <h2 className="section-title" style={{ marginBottom: 20 }}>
            Six Decades of <span className="gradient-gold">Dedicated Service</span>
          </h2>
          <div className="divider-gold" />
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              Vali Ram Vallabh worked in the <strong>Forest Department</strong> from 1959 to 1968. Following that, for about twenty years (1969–1988) he served first as Business Executive and later as <strong>Branch Manager</strong> of the Hyderabad branch of a Karachi advertising company.
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              On 1 April 1988, he founded <strong>Blue Angels Eden School</strong> in Hussainabad, Hyderabad — providing quality education from Kindergarten to Class 8 for children in his residential area. His daughter-in-law <strong>Anita Kamleshwar</strong> (Masters in Pharmacy, Business Administration, and Rural Development) serves as Principal of the school.
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              In April 1988 he joined the <strong>Institute of Sindhology</strong> at Sindh University, Jamshoro — serving in the Anthropological Research Centre, Photography, Micro-filming, Paintings, Audio-Visual, and Music sections. He was also Editor of the bi-annual research journal <em>Sindhi Adab</em> and in-charge of the Photographic and Microfilm Section. He was promoted to <strong>Deputy Director, Anthropological Centre (Museum)</strong> and retired on 15 March 2001.
            </p>
          </div>
        </div>
      </section>

      {/* Literary Life */}
      <section className="section-sm" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Literary Life</div>
          <h2 className="section-title" style={{ marginBottom: 20 }}>
            Bridging the World to <span className="gradient-gold">Sindhi Readers</span>
          </h2>
          <div className="divider-gold" />
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              His first translation — "Behisht Aeen Dozakh" from Gujarati — was published in the quarterly <em>Mehran</em> magazine in 1960. This began a literary journey spanning over 60 years. He translated novels, stories, poetry, history, philosophy and religion from <strong>Urdu, Hindi, Punjabi, French, Russian, Italian, English and other languages</strong> into Sindhi.
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              Among his most celebrated translations: <strong>Ghadar</strong> by Krishan Chander (4 editions, 1968–1990), <strong>Dhariyo</strong> — Sindhi translation of Albert Camus' "The Outsider" (1993, 2021) which won the Mirza Qalich Baig Award, <strong>Anna Karenina</strong> by Leo Tolstoy, and works of <strong>Amrita Pritam, Qurratulain Hyder, Alberto Moravia, Sarveshwar Dayal Saxena</strong> and many others.
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              He also compiled landmark anthologies: <strong>Kota Phulwari</strong> (112 poets from 26 languages of 19 countries), <strong>Morchal</strong> (Indian poetry collection), and the five-volume <strong>Arsi Publication</strong> (1983–1986) co-edited with Zafar Hassan Wats. He edited the research journals <em>Sindhi Adab</em> and <em>Sindhological Studies</em> at the Institute of Sindhology.
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.85 }}>
              In his own words: <em>"Whenever I read good literature in another language, I wanted it published in Sindhi. I wanted to share my study."</em>
            </p>
          </div>
        </div>
      </section>

      {/* Full Timeline */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Timeline</div>
          <h2 className="section-title" style={{ marginBottom: 12 }}>Life at a Glance</h2>

          {/* Legend */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
            {Object.entries(typeLabels).map(([type, label]) => (
              <span key={type} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: typeColors[type].dot }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: typeColors[type].dot, flexShrink: 0 }} />
                {label}
              </span>
            ))}
          </div>

          <div style={{ position: 'relative' }}>
            {/* vertical line */}
            <div style={{ position: 'absolute', left: 40, top: 0, bottom: 0, width: 2, background: 'var(--border)' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {timeline.map((item, i) => {
                const c = typeColors[item.type]
                return (
                  <div key={i} style={{ display: 'flex', gap: 20, paddingBottom: 28, position: 'relative' }}>
                    {/* Dot */}
                    <div style={{ position: 'relative', zIndex: 1, flexShrink: 0, width: 80, display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
                      <div style={{ width: 12, height: 12, borderRadius: '50%', background: c.dot, border: '2px solid var(--bg)', boxShadow: `0 0 0 2px ${c.dot}`, marginTop: 4 }} />
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, paddingTop: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 800, color: c.dot }}>{item.year}</span>
                        <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 100, background: c.bg, color: c.dot, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', border: `1px solid ${c.dot}30` }}>{typeLabels[item.type]}</span>
                      </div>
                      <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.event}</p>
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
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Family</div>
          <h2 className="section-title" style={{ marginBottom: 32 }}>His Family</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
            {family.map((m, i) => (
              <div key={i} className="card" style={{ padding: '14px 18px' }}>
                <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)', marginBottom: 2 }}>{m.nameEn}</p>
                <p style={{ fontSize: 11, color: 'var(--terracotta)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>{m.relation}</p>
                {m.noteEn && <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>{m.noteEn}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passing */}
      <section className="section" style={{ background: '#2C1810' }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 20 }}></div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.6rem,4vw,2.5rem)', color: '#F5ECD7', marginBottom: 16 }}>
            29 October 2023
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(245,236,215,0.75)', lineHeight: 1.8, marginBottom: 24 }}>
            Dewan Vali Ram Vallabh passed away in a Karachi hospital on 29 October 2023, aged 82, after suffering from diabetes, kidney failure, and cardiac complications. His last rites were performed at Jethaniyan Shamshan Ghat, Hussainabad, Hyderabad.
          </p>
          <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 18, color: '#C9943A', lineHeight: 1.7 }}>
            "As long as stories are told and thoughts take flight, your legacy will live on in every heart you touched."
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <Link href="/tributes" className="btn-gold">Read Tributes →</Link>
            <Link href="/books" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, color: '#F5ECD7', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
              Read His Books
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

