'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/LanguageContext'
import { t, tx } from '@/lib/i18n'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const { lang } = useLanguage()
  const isSd = lang === 'sd'

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:info@valiramvallabh.com?subject=${encodeURIComponent(form.subject || 'Message about Vali Ram Vallabh')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setStatus('sent')
  }

  const formFields = [
    { key: 'name',    label: tx(t.contact.nameLabel, lang),    type: 'text',  placeholder: isSd ? 'مڪمل نالو' : 'Full name', required: true },
    { key: 'email',   label: tx(t.contact.emailLabel, lang),   type: 'email', placeholder: 'your@email.com', required: true },
    { key: 'subject', label: tx(t.contact.subjectLabel, lang), type: 'text',  placeholder: isSd ? 'موضوع' : 'Subject', required: false },
  ]

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(201,148,58,0.2)', borderColor: 'rgba(201,148,58,0.4)', color: '#E8B85A' }}>
            {tx(t.contact.tag, lang)}
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#F5ECD7', marginBottom: 12, letterSpacing: '-0.03em' }}>
            {tx(t.contact.title, lang)}
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(245,236,215,0.75)', maxWidth: 520 }}>
            {tx(t.contact.desc, lang)}
          </p>
        </div>
      </section>

      {/* Memory banner */}
      <section style={{ background: 'var(--cream)', padding: '48px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: 'var(--text-primary)', marginBottom: 16 }}>
            {tx(t.contact.memoryH2, lang)}
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 640, margin: '0 auto' }}>
            {isSd
              ? 'پڙهندڙ، شاگرد، ساٿي، پاڙيسري يا دوست طور — جيڪڏهن سندس ترجمن توهان جي زندگي بدلائي، جيڪڏهن سندس تعليم توهان جي سوچ کي شڪل ڏني، جيڪڏهن توهان سندس سان گڏ هڪ لمحو گذاريو — اسان توهان کان ٻڌڻ چاهيون ٿا.'
              : 'As a reader, student, colleague, neighbour or friend — if his translations changed your life, if his teaching shaped your thinking, if you shared a moment with him — we would love to hear from you.'
            }
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 48 }}>

            {/* Form */}
            <div>
              <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.contact.sendTag, lang)}</div>
              <h2 className="section-title" style={{ marginBottom: 8, fontSize: 26 }}>{tx(t.contact.sendH2, lang)}</h2>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 28 }}>{tx(t.contact.sendDesc, lang)}</p>

              {status === 'sent' ? (
                <div style={{ background: 'rgba(45,90,61,0.08)', border: '1px solid rgba(45,90,61,0.2)', borderRadius: 16, padding: '32px', textAlign: 'center' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(45,90,61,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, color: 'var(--text-primary)', marginBottom: 8 }}>{tx(t.contact.sentTitle, lang)}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 20 }}>{tx(t.contact.sentDesc, lang)}</p>
                  <button onClick={() => setStatus('idle')} className="btn-outline" style={{ fontSize: 13 }}>{tx(t.contact.sendAnother, lang)}</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {formFields.map(f => (
                    <div key={f.key}>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        {f.label}{f.required && ' *'}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required={f.required}
                        value={form[f.key]}
                        onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        style={{ width: '100%', padding: '12px 14px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, fontSize: 14, color: 'var(--text-primary)', outline: 'none', fontFamily: 'Inter, sans-serif' }}
                        onFocus={e => e.target.style.borderColor = 'var(--terracotta)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {tx(t.contact.msgLabel, lang)} *
                    </label>
                    <textarea
                      placeholder={isSd ? 'پنهنجي يادگيري يا پيغام ونڊيو...' : 'Share your memory, tribute, or message...'}
                      required rows={5}
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      style={{ width: '100%', padding: '12px 14px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, fontSize: 14, color: 'var(--text-primary)', outline: 'none', fontFamily: 'Inter, sans-serif', resize: 'vertical', minHeight: 120 }}
                      onFocus={e => e.target.style.borderColor = 'var(--terracotta)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    {tx(t.contact.sendBtn, lang)}
                  </button>
                </form>
              )}
            </div>

            {/* Right column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

              {/* Contact methods */}
              <div>
                <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.contact.directTag, lang)}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    {
                      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
                      label: isSd ? 'عام استفسار' : 'General Inquiries',
                      value: 'info@valiramvallabh.com',
                      href: 'mailto:info@valiramvallabh.com',
                      color: 'var(--terracotta)',
                    },
                    {
                      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 4.18 2 2 0 0 1 5.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 5.82 5.82l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
                      label: 'WhatsApp',
                      value: '+92 336 826 4688',
                      href: 'https://wa.me/923368264688',
                      color: '#25d366',
                    },
                    {
                      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
                      label: isSd ? 'ايميل' : 'Email',
                      value: 'info@valiramvallabh.com',
                      href: 'mailto:info@valiramvallabh.com',
                      color: 'var(--green)',
                    },
                  ].map((c, i) => (
                    <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, textDecoration: 'none', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = c.color; e.currentTarget.style.transform = 'translateY(-1px)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}
                    >
                      <div style={{ width: 38, height: 38, borderRadius: 10, background: `${c.color}15`, border: `1px solid ${c.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.color, flexShrink: 0 }}>
                        {c.icon}
                      </div>
                      <div>
                        <p style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>{c.label}</p>
                        <p style={{ fontSize: 13, color: 'var(--text-primary)', fontWeight: 600 }}>{c.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Family */}
              <div>
                <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>{tx(t.contact.familyTag, lang)}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { name: 'Dr. Kamleshwer Lohana', role: isSd ? 'پٽ' : 'Son', note: isSd ? 'ايسوسيئيٽ پروفيسر، مهران يونيورسٽي' : 'Associate Professor, Mehran University' },
                    { name: 'Dr. Pushpa Vallabh',    role: isSd ? 'ڌيءَ' : 'Daughter', note: isSd ? 'ايسوسيئيٽ پروفيسر، ڊائو ميڊيڪل يونيورسٽي' : 'Associate Professor, Dow Medical University' },
                    { name: 'Gauri Vallabh',         role: isSd ? 'ڌيءَ' : 'Daughter', note: isSd ? 'اسسٽنٽ پروفيسر، گورنمينٽ ويمنس ڪاليج' : "Asst. Professor, Govt Women's College, Karachi" },
                  ].map((f, i) => (
                    <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 4 }}>
                        <div>
                          <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)', marginBottom: 2 }}>{f.name}</p>
                          <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>{f.note}</p>
                        </div>
                        <span className="tag" style={{ fontSize: 9 }}>{f.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div style={{ background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: 12, padding: '20px' }}>
                <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: 12 }}>{tx(t.contact.locationTag, lang)}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { label: tx(t.contact.birthplace, lang), value: isSd ? 'مٺي، ٿرپارڪر، سنڌ، پاڪستان' : 'Mithi, Tharparkar, Sindh, Pakistan' },
                    { label: tx(t.contact.residence, lang),  value: isSd ? 'شريف اسڪوائر، حسين آباد، حيدرآباد' : 'Sharif Square, Hussainabad, Hyderabad, Sindh' },
                    { label: tx(t.contact.museum, lang),     value: isSd ? 'سنڌ ميوزيم، حيدرآباد، سنڌ' : 'Sindh Museum, Hyderabad, Sindh' },
                  ].map(l => (
                    <div key={l.label} style={{ display: 'flex', gap: 8 }}>
                      <span style={{ fontSize: 11, color: 'var(--terracotta)', fontWeight: 700, minWidth: 100, flexShrink: 0 }}>{l.label}</span>
                      <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{l.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
