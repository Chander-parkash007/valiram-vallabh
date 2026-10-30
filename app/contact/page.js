'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:info@valiramvallabh.com?subject=${encodeURIComponent(form.subject || 'Message from website')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setStatus('sent')
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(201,148,58,0.2)', borderColor: 'rgba(201,148,58,0.4)', color: '#E8B85A' }}>
            Get in Touch
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#F5ECD7', marginBottom: 12, letterSpacing: '-0.03em' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(245,236,215,0.75)', maxWidth: 520 }}>
            Share a memory, send a tribute, ask a research question, or reach out to the family. Every message is welcomed.
          </p>
        </div>
      </section>

      {/* Share a memory banner */}
      <section style={{ background: 'var(--cream)', padding: '48px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: 'var(--text-primary)', marginBottom: 16 }}>
            Did you know Vali Ram Vallabh?
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 640, margin: '0 auto' }}>
            As a reader, student, colleague, neighbour or friend — if his translations changed your life, if his teaching shaped your thinking, if you shared a moment with him — we would love to hear from you. Your memory will be added to this permanent archive and shared with his family.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 48 }}>

            {/* Contact form */}
            <div>
              <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Send a Message</div>
              <h2 className="section-title" style={{ marginBottom: 8, fontSize: 26 }}>Write to Us</h2>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 28 }}>
                Your message will open in your email client, pre-filled and ready to send.
              </p>

              {status === 'sent' ? (
                <div style={{ background: 'rgba(45,90,61,0.08)', border: '1px solid rgba(45,90,61,0.2)', borderRadius: 16, padding: '32px', textAlign: 'center' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(45,90,61,0.1)', border: '1px solid rgba(45,90,61,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, color: 'var(--text-primary)', marginBottom: 8 }}>Email client opened</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 20 }}>Complete and send the email from your mail app.</p>
                  <button onClick={() => setStatus('idle')} className="btn-outline" style={{ fontSize: 13 }}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    { key: 'name', label: 'Your Name', type: 'text', placeholder: 'Full name', required: true },
                    { key: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com', required: true },
                    { key: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. A memory of Vali Ram Vallabh', required: false },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        {f.label} {f.required && '*'}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required={f.required}
                        value={form[f.key]}
                        onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        style={{ width: '100%', padding: '12px 14px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, fontSize: 14, color: 'var(--text-primary)', outline: 'none', fontFamily: 'Inter, sans-serif', transition: 'border-color 0.2s' }}
                        onFocus={e => e.target.style.borderColor = 'var(--terracotta)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Your Message *
                    </label>
                    <textarea
                      placeholder="Share your memory, tribute, research question, or message..."
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      style={{ width: '100%', padding: '12px 14px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, fontSize: 14, color: 'var(--text-primary)', outline: 'none', fontFamily: 'Inter, sans-serif', resize: 'vertical', minHeight: 120, transition: 'border-color 0.2s' }}
                      onFocus={e => e.target.style.borderColor = 'var(--terracotta)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

              {/* Contact methods */}
              <div>
                <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Direct Contact</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    {
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                      ),
                      label: 'General Inquiries',
                      value: 'info@valiramvallabh.com',
                      href: 'mailto:info@valiramvallabh.com',
                      color: 'var(--terracotta)',
                    },
                    {
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 4.18 2 2 0 0 1 5.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 5.82 5.82l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      ),
                      label: 'WhatsApp',
                      value: '+92 319 037 5751',
                      href: 'https://wa.me/923190375751',
                      color: '#25d366',
                    },
                    {
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                      ),
                      label: 'Library & Books',
                      value: 'library@valiramvallabh.com',
                      href: 'mailto:library@valiramvallabh.com',
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
                <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Family</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { name: 'Dr. Kamleshwar Lohana', role: 'Son', email: 'kamleshwar@valiramvallabh.com', note: 'Asst. Professor, Mehran University' },
                    { name: 'Dr. Pushpa Vallabh', role: 'Daughter', email: 'pushpa@valiramvallabh.com', note: 'Associate Professor, Dow Medical University' },
                    { name: 'Gauri Vallabh', role: 'Daughter', email: 'gauri@valiramvallabh.com', note: 'Asst. Professor, Govt Women\'s College, Karachi' },
                  ].map((f, i) => (
                    <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 4 }}>
                        <div>
                          <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)', marginBottom: 2 }}>{f.name}</p>
                          <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>{f.note}</p>
                        </div>
                        <span className="tag" style={{ fontSize: 9 }}>{f.role}</span>
                      </div>
                      <a href={`mailto:${f.email}`} style={{ fontSize: 12, color: 'var(--terracotta)', fontWeight: 600, textDecoration: 'none', marginTop: 6, display: 'block' }}>{f.email}</a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div style={{ background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: 12, padding: '20px' }}>
                <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: 12 }}>Location</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { label: 'Birthplace', value: 'Mithi, Tharparkar, Sindh, Pakistan' },
                    { label: 'Residence', value: 'Sharif Square, Hussainabad, Hyderabad, Sindh' },
                    { label: 'Museum Corner', value: 'Sindh Museum, Hyderabad, Sindh' },
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

      {/* Developer credit */}
      <section style={{ background: '#2C1810', padding: '48px 0' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
            <div>
              <p style={{ fontSize: 11, color: 'rgba(245,236,215,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: 8 }}>
                Website Designed & Developed by
              </p>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, color: '#F5ECD7', marginBottom: 4 }}>
                Chander Parkash
              </h3>
              <p style={{ fontSize: 13, color: 'rgba(245,236,215,0.55)' }}>
                Software Engineering Student, MUET Nawabshah · Intern, ORBIT-I Private Limited
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {[
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/chander-parkash',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  ),
                  label: 'Email',
                  href: 'mailto:chanderparkash@gmail.com',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                  ),
                  label: 'WhatsApp',
                  href: 'https://wa.me/923153551234',
                },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: 'rgba(245,236,215,0.7)', textDecoration: 'none', fontSize: 13, fontWeight: 500, transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,148,58,0.15)'; e.currentTarget.style.color = '#C9943A'; e.currentTarget.style.borderColor = 'rgba(201,148,58,0.3)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(245,236,215,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
