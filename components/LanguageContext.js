'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext({ lang: 'en', setLang: () => {} })

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en')

  // Load from localStorage on mount
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('vvlang') : null
    if (saved === 'sd' || saved === 'en') setLangState(saved)
  }, [])

  // Persist + flip HTML dir on change
  const setLang = (l) => {
    setLangState(l)
    if (typeof window !== 'undefined') {
      localStorage.setItem('vvlang', l)
      document.documentElement.lang = l === 'sd' ? 'sd' : 'en'
    }
  }

  // Apply dir on first render too
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Don't flip whole page dir — Sindhi text handles its own RTL inline
      // Only set lang attribute for accessibility
      document.documentElement.lang = lang === 'sd' ? 'sd' : 'en'
    }
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
