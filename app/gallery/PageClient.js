'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/components/LanguageContext'
import { t, tx } from '@/lib/i18n'

const galleryItems = [
  // Portraits — shown first
  { id: 1,  src: '/gallery/valiram_potrait_1_1_cropped.jpg', captionEn: 'Vali Ram Vallabh — Watercolour Portrait by Manzar-26', category: 'Portraits' },
  { id: 2,  src: '/gallery/valiram potrait 2.jpeg', captionEn: 'Vali Ram Vallabh — Sketch Portrait by Manzar-26', category: 'Portraits' },
  { id: 3,  src: '/gallery/valiram picture.jpg',    captionEn: 'Vali Ram Vallabh', category: 'Portraits' },
  { id: 4,  src: '/gallery/valiram potrait.jpg',    captionEn: 'Vali Ram Vallabh — Portrait', category: 'Portraits' },
  // Personal & Events
  { id: 5,  src: '/gallery/with collegue.jpg',      captionEn: 'Vali Ram Vallabh with colleagues', category: 'Personal' },
  { id: 6,  src: '/gallery/withfriends.jpg',        captionEn: 'Vali Ram Vallabh with friends', category: 'Personal' },
  { id: 7,  src: '/gallery/planting.jpg',           captionEn: 'Tree planting ceremony', category: 'Events' },
  { id: 8,  src: '/gallery/valiramtribute.jpg',     captionEn: 'Tribute gathering for Vali Ram Vallabh', category: 'Events' },
  // Legacy
  { id: 9,  src: '/gallery/kamleshwar standing beside valiram park board.jpg', captionEn: 'Dr. Kamleshwer Lohana beside the Vali Ram Vallabh Park board — named in his honour', category: 'Legacy' },
  { id: 59, src: '/gallery/road name after him.jpeg', captionEn: 'Road named after Vali Ram Vallabh — a permanent honour', category: 'Legacy' },
  // First Death Anniversary — Oct 2024
  { id: 60, src: '/gallery/first death anniversary/kamleshwer pciture.jpeg', captionEn: 'Dr. Kamleshwer Lohana — First Death Anniversary gathering', category: 'Events' },
  { id: 61, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.56.26 AM.jpeg', captionEn: 'First Death Anniversary — tribute gathering', category: 'Events' },
  { id: 62, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.56.26 AM (1).jpeg', captionEn: 'First Death Anniversary — scholars and writers', category: 'Events' },
  { id: 63, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.56.27 AM.jpeg', captionEn: 'First Death Anniversary ceremony', category: 'Events' },
  { id: 64, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.56.27 AM (1).jpeg', captionEn: 'First Death Anniversary — family and community', category: 'Events' },
  { id: 65, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.56.28 AM.jpeg', captionEn: 'First Death Anniversary — October 2024', category: 'Events' },
  { id: 66, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.56.28 AM (1).jpeg', captionEn: 'First Death Anniversary gathering', category: 'Events' },
  { id: 67, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.56.28 AM (2).jpeg', captionEn: 'First Death Anniversary tribute ceremony', category: 'Events' },
  { id: 68, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.56.28 AM (3).jpeg', captionEn: 'First Death Anniversary — literary community', category: 'Events' },
  { id: 69, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.56.29 AM.jpeg', captionEn: 'First Death Anniversary event', category: 'Events' },
  { id: 70, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.56.31 AM.jpeg', captionEn: 'First Death Anniversary — scholars in attendance', category: 'Events' },
  { id: 71, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.56.31 AM (1).jpeg', captionEn: 'First Death Anniversary gathering — Hyderabad', category: 'Events' },
  { id: 72, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.56.32 AM.jpeg', captionEn: 'First Death Anniversary ceremony', category: 'Events' },
  { id: 73, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.56.32 AM (1).jpeg', captionEn: 'First Death Anniversary — literary tribute', category: 'Events' },
  { id: 74, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.56.33 AM.jpeg', captionEn: 'First Death Anniversary gathering', category: 'Events' },
  { id: 75, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.56.34 AM.jpeg', captionEn: 'First Death Anniversary', category: 'Events' },
  { id: 76, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.56.37 AM.jpeg', captionEn: 'First Death Anniversary event', category: 'Events' },
  { id: 77, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.57.28 AM.jpeg', captionEn: 'First Death Anniversary — community tribute', category: 'Events' },
  { id: 78, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.57.30 AM.jpeg', captionEn: 'First Death Anniversary gathering', category: 'Events' },
  { id: 79, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.57.32 AM.jpeg', captionEn: 'First Death Anniversary ceremony', category: 'Events' },
  { id: 80, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.57.32 AM (1).jpeg', captionEn: 'First Death Anniversary tribute', category: 'Events' },
  { id: 81, src: '/gallery/first death anniversary/WhatsApp Image 2026-11-04 at 8.57.33 AM.jpeg', captionEn: 'First Death Anniversary — Sindhi literary community', category: 'Events' },
  // Second Death Anniversary — Nov 2025
  { id: 82, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.36 AM.jpeg', captionEn: 'Second Death Anniversary — Memorial Lecture, Press Club Mithi, 15 November 2025', category: 'Events' },
  { id: 83, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.36 AM (1).jpeg', captionEn: 'Second Death Anniversary — scholars and family', category: 'Events' },
  { id: 84, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.37 AM.jpeg', captionEn: 'Second Death Anniversary literary tribute', category: 'Events' },
  { id: 85, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.37 AM (1).jpeg', captionEn: 'Second Death Anniversary ceremony', category: 'Events' },
  { id: 86, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.37 AM (2).jpeg', captionEn: 'Second Vali Ram Vallabh Memorial Lecture — Mithi 2025', category: 'Events' },
  { id: 87, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.38 AM.jpeg', captionEn: 'Second Death Anniversary event', category: 'Events' },
  { id: 88, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.38 AM (1).jpeg', captionEn: 'Second Death Anniversary tribute gathering', category: 'Events' },
  { id: 89, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.38 AM (2).jpeg', captionEn: 'Second Death Anniversary ceremony', category: 'Events' },
  { id: 90, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.39 AM.jpeg', captionEn: 'Second Death Anniversary', category: 'Events' },
  { id: 91, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.39 AM (1).jpeg', captionEn: 'Second Death Anniversary gathering', category: 'Events' },
  { id: 92, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.39 AM (2).jpeg', captionEn: 'Second Death Anniversary — literary community', category: 'Events' },
  { id: 93, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.40 AM.jpeg', captionEn: 'Second Death Anniversary event', category: 'Events' },
  { id: 94, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.40 AM (1).jpeg', captionEn: 'Second Death Anniversary gathering', category: 'Events' },
  { id: 95, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.40 AM (2).jpeg', captionEn: 'Second Death Anniversary ceremony', category: 'Events' },
  { id: 96, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.41 AM.jpeg', captionEn: 'Second Death Anniversary', category: 'Events' },
  { id: 97, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.41 AM (1).jpeg', captionEn: 'Second Death Anniversary tribute', category: 'Events' },
  { id: 98, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.42 AM.jpeg', captionEn: 'Second Death Anniversary — scholars and family', category: 'Events' },
  { id: 99, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.42 AM (1).jpeg', captionEn: 'Second Death Anniversary ceremony', category: 'Events' },
  { id: 100, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.42 AM (2).jpeg', captionEn: 'Second Death Anniversary gathering', category: 'Events' },
  { id: 101, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.42 AM (3).jpeg', captionEn: 'Second Death Anniversary tribute event', category: 'Events' },
  { id: 102, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.43 AM.jpeg', captionEn: 'Second Death Anniversary', category: 'Events' },
  { id: 103, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.43 AM (1).jpeg', captionEn: 'Second Death Anniversary gathering', category: 'Events' },
  { id: 104, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.44 AM.jpeg', captionEn: 'Second Death Anniversary ceremony', category: 'Events' },
  { id: 105, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.44 AM (1).jpeg', captionEn: 'Second Death Anniversary — literary tribute', category: 'Events' },
  { id: 106, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.45 AM.jpeg', captionEn: 'Second Death Anniversary event', category: 'Events' },
  { id: 107, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.50 AM.jpeg', captionEn: 'Second Death Anniversary gathering', category: 'Events' },
  { id: 108, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.50 AM (1).jpeg', captionEn: 'Second Death Anniversary', category: 'Events' },
  { id: 109, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.51 AM.jpeg', captionEn: 'Second Death Anniversary ceremony', category: 'Events' },
  { id: 110, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.51 AM (1).jpeg', captionEn: 'Second Death Anniversary tribute', category: 'Events' },
  { id: 111, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.52 AM.jpeg', captionEn: 'Second Death Anniversary gathering', category: 'Events' },
  { id: 112, src: '/gallery/second death anniversary/WhatsApp Image 2026-11-04 at 8.57.53 AM.jpeg', captionEn: 'Second Death Anniversary — final gathering photo', category: 'Events' },
  { id: 10, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.44 PM.jpeg',     captionEn: 'Archive photograph', category: 'Archive' },
  { id: 11, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.44 PM (1).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 12, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.45 PM.jpeg',     captionEn: 'Archive photograph', category: 'Archive' },
  { id: 13, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.45 PM (1).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 14, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.45 PM (2).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 15, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.46 PM.jpeg',     captionEn: 'Archive photograph', category: 'Archive' },
  { id: 16, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.46 PM (1).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 17, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.46 PM (2).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 18, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.47 PM.jpeg',     captionEn: 'Archive photograph', category: 'Archive' },
  { id: 19, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.47 PM (1).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 20, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.47 PM (2).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 21, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.47 PM (3).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 22, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.48 PM.jpeg',     captionEn: 'Archive photograph', category: 'Archive' },
  { id: 23, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.48 PM (1).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 24, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.48 PM (2).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 25, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.49 PM.jpeg',     captionEn: 'Archive photograph', category: 'Archive' },
  { id: 26, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.49 PM (1).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 27, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.49 PM (2).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 28, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.50 PM.jpeg',     captionEn: 'Archive photograph', category: 'Archive' },
  { id: 29, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.50 PM (1).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 30, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.50 PM (2).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 31, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.50 PM (3).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 32, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.51 PM.jpeg',     captionEn: 'Archive photograph', category: 'Archive' },
  { id: 33, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.51 PM (1).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 34, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.51 PM (2).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 35, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.52 PM.jpeg',     captionEn: 'Archive photograph', category: 'Archive' },
  { id: 36, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.52 PM (1).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 37, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.52 PM (2).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 38, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.52 PM (3).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 39, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.53 PM.jpeg',     captionEn: 'Archive photograph', category: 'Archive' },
  { id: 40, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.53 PM (1).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 41, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.53 PM (2).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 42, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.54 PM.jpeg',     captionEn: 'Archive photograph', category: 'Archive' },
  { id: 43, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.54 PM (1).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 44, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.54 PM (2).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 45, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.55 PM.jpeg',     captionEn: 'Archive photograph', category: 'Archive' },
  { id: 46, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.55 PM (1).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 47, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.55 PM (2).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 48, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.56 PM.jpeg',     captionEn: 'Archive photograph', category: 'Archive' },
  { id: 49, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.56 PM (1).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 50, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.56 PM (2).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 51, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.56 PM (3).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 52, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.57 PM.jpeg',     captionEn: 'Archive photograph', category: 'Archive' },
  { id: 53, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.57 PM (1).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 54, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.57 PM (2).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 55, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.58 PM.jpeg',     captionEn: 'Archive photograph', category: 'Archive' },
  { id: 56, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.58 PM (1).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 57, src: '/gallery/WhatsApp Image 2026-10-27 at 10.43.58 PM (2).jpeg', captionEn: 'Archive photograph', category: 'Archive' },
  { id: 58, src: '/gallery/WhatsApp Image 2026-10-27 at 10.44.07 PM.jpeg',     captionEn: 'Archive photograph', category: 'Archive' },
  // Award trophies
  { id: 'a1',  src: '/awards/WhatsApp Image 2026-11-01 at 11.36.03 PM.jpeg',      captionEn: 'Adabi Award 2011 — Sindhi Language Authority, Hyderabad (Translation)', category: 'Awards' },
  { id: 'a2',  src: '/awards/WhatsApp Image 2026-11-01 at 11.36.04 PM.jpeg',      captionEn: 'Shaheed Muhammad Fazil Rahu Award 1997 — Yaran Soormin Sath', category: 'Awards' },
  { id: 'a3',  src: '/awards/WhatsApp Image 2026-11-01 at 11.36.05 PM.jpeg',      captionEn: 'Adabi Award 2016 — Sindhi Language Authority (open book shaped)', category: 'Awards' },
  { id: 'a4',  src: '/awards/WhatsApp Image 2026-11-01 at 11.36.05 PM (2).jpeg',  captionEn: 'Mirza Qalich Baig Translation Award — Sindhi Adabi Sangat (glass pen trophy)', category: 'Awards' },
  { id: 'a5',  src: '/awards/WhatsApp Image 2026-11-01 at 11.36.06 PM.jpeg',      captionEn: 'Dr. Muhabbat Barraro Award 2006 — Sindh map shaped acrylic trophy', category: 'Awards' },
  { id: 'a6',  src: '/awards/WhatsApp Image 2026-11-01 at 11.36.06 PM (1).jpeg',  captionEn: 'Sojhro Award 1999–2000 — terracotta figurine trophy', category: 'Awards' },
  { id: 'a7',  src: '/awards/WhatsApp Image 2026-11-01 at 11.36.06 PM (2).jpeg',  captionEn: 'National Institute of Management Award — NIM Karachi', category: 'Awards' },
  { id: 'a8',  src: '/awards/WhatsApp Image 2026-11-01 at 11.36.06 PM (3).jpeg',  captionEn: 'Sindhi Adabi Sangat Award — pen nib glass trophy', category: 'Awards' },
  { id: 'a9',  src: '/awards/WhatsApp Image 2026-11-01 at 11.36.07 PM.jpeg',      captionEn: 'Alhando Shah Yadgar Shield 1999 — Golden Jubilee Seminar, Government of Pakistan', category: 'Awards' },
  { id: 'a10', src: '/awards/WhatsApp Image 2026-11-01 at 11.36.07 PM (1).jpeg',  captionEn: 'Been-Kahani Conference Trophy — Anis Ansari Academy, 25 July 2009, Hyderabad', category: 'Awards' },
  { id: 'a11', src: '/awards/WhatsApp Image 2026-11-01 at 11.36.07 PM (2).jpeg',  captionEn: 'Token of Honour — Diwali Celebrations 2016, Hyderabad Hindu Panchayat', category: 'Awards' },
  { id: 'a12', src: '/awards/WhatsApp Image 2026-11-01 at 11.36.08 PM.jpeg',      captionEn: 'Shrimati Pushpa Devi Rijhwani Award 2009 — Suhina Sindhi, Jaipur (clock trophy)', category: 'Awards' },
  { id: 'a13', src: '/awards/WhatsApp Image 2026-11-01 at 11.36.08 PM (1).jpeg',  captionEn: 'Appreciation Memento — National Council for Promotion of Sindhi Language, New Delhi 2009', category: 'Awards' },
  { id: 'a14', src: '/awards/WhatsApp Image 2026-11-01 at 11.36.08 PM (2).jpeg',  captionEn: 'Farewell Shield — Institute of Sindhology, Jamshoro, 19 March 2001', category: 'Awards' },
  { id: 'a15', src: '/awards/WhatsApp Image 2026-10-27 at 10.43.59 PM.jpeg',      captionEn: 'Josh Malihabadi Award 2008 — Dept. of Culture & Tourism, Government of Sindh', category: 'Awards' },
  { id: 'a16', src: '/awards/WhatsApp Image 2026-10-27 at 10.44.02 PM.jpeg',      captionEn: 'Sindh Adeed Award 2009 — Sponsored by Shri Nanik Sambtani', category: 'Awards' },
  { id: 'a17', src: '/awards/kamleshwar standing beside valiram park board.jpg',   captionEn: 'Vali Ram Vallabh Park — Named in his honour by Sindhi Adabi Board & Government of Sindh', category: 'Awards' },
]

const categories = ['All', 'Portraits', 'Personal', 'Events', 'Legacy', 'Awards', 'Archive']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxItem, setLightboxItem] = useState(null)
  const { lang } = useLanguage()
  const isSd = lang === 'sd'

  const catLabels = {
    'All':       tx(t.gallery.catAll, lang),
    'Portraits': tx(t.gallery.catPortraits, lang),
    'Personal':  tx(t.gallery.catPersonal, lang),
    'Events':    tx(t.gallery.catEvents, lang),
    'Legacy':    tx(t.gallery.catLegacy, lang),
    'Awards':    tx(t.gallery.catAwards, lang),
    'Archive':   tx(t.gallery.catArchive, lang),
  }

  const filtered = activeCategory === 'All' ? galleryItems : galleryItems.filter(g => g.category === activeCategory)
  const currentIndex = lightboxItem ? filtered.findIndex(g => g.id === lightboxItem.id) : -1
  const prev = () => { if (currentIndex > 0) setLightboxItem(filtered[currentIndex - 1]) }
  const next = () => { if (currentIndex < filtered.length - 1) setLightboxItem(filtered[currentIndex + 1]) }

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(201,148,58,0.2)', borderColor: 'rgba(201,148,58,0.4)', color: '#E8B85A' }}>{tx(t.gallery.tag, lang)}</div>
          <h1 style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#F5ECD7', marginBottom: 12, letterSpacing: isSd ? 0 : '-0.03em' }}>
            {tx(t.gallery.title, lang)}
          </h1>
          <p style={{ fontSize: isSd ? 20 : 16, color: 'rgba(245,236,215,0.75)', maxWidth: 500, fontFamily: isSd ? 'Lateef, serif' : 'inherit', lineHeight: isSd ? 2.1 : 1.6 }}>{tx(t.gallery.desc, lang)}</p>
        </div>
      </section>

      {/* Filter */}
      <section style={{ background: 'var(--cream)', padding: '20px 0', borderBottom: '1px solid var(--border)', position: 'sticky', top: 68, zIndex: 100 }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: '6px 14px', borderRadius: 8, border: 'none', cursor: 'pointer',
                fontSize: 12, fontWeight: 600, fontFamily: 'Inter, sans-serif',
                background: activeCategory === cat ? 'var(--terracotta)' : 'var(--bg-card)',
                color: activeCategory === cat ? '#fff' : 'var(--text-muted)',
                border: activeCategory === cat ? '1px solid var(--terracotta)' : '1px solid var(--border)',
                transition: 'all 0.15s',
              }}>
                {catLabels[cat] || cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 24 }}>
            {filtered.length} {tx(t.gallery.photos, lang)}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 10 }}>
            {filtered.map(item => (
              <div key={item.id} onClick={() => setLightboxItem(item)} style={{
                cursor: 'pointer', borderRadius: 10, overflow: 'hidden',
                background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                transition: 'transform 0.2s, box-shadow 0.2s', position: 'relative', aspectRatio: '4/3',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 8px 32px var(--shadow-md)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <Image src={item.src} alt={item.captionEn} fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,24,16,0.75) 0%, transparent 50%)', opacity: 0, transition: 'opacity 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                >
                  <div style={{ position: 'absolute', bottom: 10, left: 10, right: 10 }}>
                    <p style={{ fontSize: 11, color: '#F5ECD7', lineHeight: 1.4 }}>{item.captionEn.slice(0, 55)}{item.captionEn.length > 55 ? '...' : ''}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div onClick={() => setLightboxItem(null)} style={{ position: 'fixed', inset: 0, zIndex: 3000, background: 'rgba(44,24,16,0.95)', backdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <button onClick={() => setLightboxItem(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.1)', border: 'none', color: '#F5ECD7', fontSize: 20, cursor: 'pointer', width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: 820, width: '100%', textAlign: 'center' }}>
            <div style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', aspectRatio: '4/3', marginBottom: 16, maxHeight: '70vh' }}>
              <Image src={lightboxItem.src} alt={lightboxItem.captionEn} fill sizes="820px" style={{ objectFit: 'contain' }} />
            </div>
            <p style={{ color: '#F5ECD7', fontSize: 15, lineHeight: 1.6, marginBottom: 4 }}>{lightboxItem.captionEn}</p>
            <span style={{ fontSize: 11, color: 'rgba(245,236,215,0.45)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{catLabels[lightboxItem.category] || lightboxItem.category}</span>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 20 }}>
              <button onClick={e => { e.stopPropagation(); prev() }} disabled={currentIndex === 0} style={{ padding: '8px 20px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, color: '#F5ECD7', cursor: currentIndex === 0 ? 'not-allowed' : 'pointer', opacity: currentIndex === 0 ? 0.4 : 1, fontSize: 13 }}>
                {tx(t.gallery.prev, lang)}
              </button>
              <span style={{ color: 'rgba(245,236,215,0.5)', fontSize: 13, alignSelf: 'center' }}>{currentIndex + 1} / {filtered.length}</span>
              <button onClick={e => { e.stopPropagation(); next() }} disabled={currentIndex === filtered.length - 1} style={{ padding: '8px 20px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, color: '#F5ECD7', cursor: currentIndex === filtered.length - 1 ? 'not-allowed' : 'pointer', opacity: currentIndex === filtered.length - 1 ? 0.4 : 1, fontSize: 13 }}>
                {tx(t.gallery.next, lang)}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
