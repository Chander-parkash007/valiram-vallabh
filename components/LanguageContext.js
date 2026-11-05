'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext({ lang: 'en', setLang: () => {} })

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en')

  // Load from localStorage on mount
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('vvlang') : null
    if (saved === 'sd' || saved === 'en') {
      setLangState(saved)
      applyLangToDOM(saved)
    }
  }, [])

  function applyLangToDOM(l) {
    if (typeof window === 'undefined') return
    const html = document.documentElement
    html.lang = l === 'sd' ? 'sd' : 'en'
    // Full RTL for Sindhi — this is what makes all text read correctly right-to-left
    html.dir = l === 'sd' ? 'rtl' : 'ltr'
    // Apply Lateef font to body when Sindhi
    document.body.style.fontFamily = l === 'sd' ? "'Lateef', serif" : ''
  }

  const setLang = (l) => {
    setLangState(l)
    localStorage.setItem('vvlang', l)
    applyLangToDOM(l)
  }

  useEffect(() => {
    applyLangToDOM(lang)
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
