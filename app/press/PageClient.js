'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/components/LanguageContext'
import { t, tx } from '@/lib/i18n'
// ─── All press items — each has a full image that is clickable/zoomable ────────
const pressItems = [
  {
    id: 1,
    image: '/press/WhatsApp Image 2026-10-27 at 10.43.43 PM.jpeg',
    titleEn: 'In Loving Memory of Legend — 2nd Death Anniversary',
    titleSd: 'ولي رام ولڀ — ٻي ورسي',
    publication: 'Dawn',
    date: 'Wednesday, October 29, 2025',
    language: 'English',
    type: 'Anniversary Notice',
    publicationUrl: 'https://www.dawn.com/news/1784850',
    description: 'Death anniversary notice published in Dawn newspaper. "As long as stories are told and thoughts take flight, your legacy will live on in every heart you touched." Announced the second Vali Ram Vallabh Memorial Lecture — Sindhi Language and the Art of Translation — on 15 November 2025 at Press Club Mithi, Tharparkar. Signed by Mrs. Hari Vallabh (Wife), Dr. Kamleshwer Lohana (Son), Dr. Pushpa Vallabh (Daughter), Gauri Vallabh (Daughter), grandchildren and family.',
    descriptionSd: 'ڊان اخبار ۾ ٻي ورسي جو تعزيتي نوٽس. "جيستائين ڪهاڻيون ٻڌايون وينديون، توهان جو ورثو هر دل ۾ زنده رهندو." ٻيو ولي رام ولڀ يادگاري خطبو — سنڌي ٻولي ۽ ترجمي جو فن — 15 نومبر 2025ع، پريس ڪلب مٺي، ٿرپارڪر. دستخط: مسز هاري ولڀ (زوجه)، ڊاڪٽر ڪملشور لوهاڻو (پٽ)، ڊاڪٽر پشپا ولڀ (ڌيءَ)، گوري ولڀ (ڌيءَ)، پوٽا-پوٽيون ۽ خاندان.',
    featured: true,
  },
  {
    id: 2,
    image: '/press/WhatsApp Image 2026-10-27 at 10.43.42 PM.jpeg',
    titleEn: 'A Personality Devoted to Sindhi Language and Literature',
    titleSd: 'ولي رام ولپ: سنڌي ٻوليءَ ادب لاءِ وقف ٿيل شخصيت',
    publication: 'Rozana Kawish, Hyderabad',
    date: 'Wednesday, October 29, 2025',
    language: 'Sindhi',
    type: 'Tribute Article',
    publicationUrl: null,
    author: 'Dr. Kamleshwer Lohana',
    description: 'Written by his son Dr. Kamleshwer Lohana on the 2nd death anniversary. Describes Vali Ram Vallabh\'s lifelong devotion to Sindhi language and literature — his translations, his role at Sindhology, his founding of Blue Angels Eden School, and the personal memories of a son who grew up surrounded by books. His translation "Dhariyo" (The Outsider by Albert Camus) is cited as a landmark work.',
    descriptionSd: 'سندس پٽ ڊاڪٽر ڪملشور لوهاڻو پاران ٻي ورسي تي لکيو ويو. سنڌي ٻوليءَ ۽ ادب لاءِ ولي رام ولڀ جي عمر ڀر جي لگن — سندس ترجما، سنڌالاجي ۾ ڪردار، بلو اينجلز ايڊن اسڪول جي بنياد، ۽ ڪتابن جي ماحول ۾ پليل پٽ جون ذاتي يادون. سندس ترجمو "ڌاريو" (البرٽ ڪاميو جو ناول) هڪ تاريخي ڪارنامي طور ذڪر ڪيو ويو.',
    featured: true,
  },
  {
    id: 3,
    image: '/press/29 Oct article Daily Kawish 2026.jpg.jpeg',
    titleEn: 'Vali Ram Vallabh — Yaden Jo Safar (Journey of Memories)',
    titleSd: 'ولي رام ولپ: يادن جو سفر',
    publication: 'Rozana Kawish, Hyderabad',
    date: 'Thursday, October 29, 2026',
    language: 'Sindhi',
    type: 'Tribute Article',
    publicationUrl: null,
    author: 'Dr. Kamleshwer Lohana',
    description: 'Published on the 3rd death anniversary. Dr. Kamleshwer Lohana writes a deeply personal tribute — describing the journey of memories, the annual memorial lecture series, the Vali Ram Vallabh Literary Society\'s work, and the ongoing effort to preserve his father\'s legacy through publications, conferences, and the Memorial Corner at Sindh Central Auditorium. Mentions his translations of Mahmoud Darwish, Albert Camus, Krishan Chander, and others.',
    descriptionSd: 'ٽين ورسي تي شايع ٿيو. ڊاڪٽر ڪملشور لوهاڻو هڪ گہرو ذاتي خراج لکيو — يادن جو سفر، سالياني يادگاري خطبي، ولي رام ولڀ ادبي سوسائٽيءَ جو ڪم، ۽ سنڌ سينٽرل آڊيٽوريم ۾ ميموريل ڪارنر ذريعي پيءُ جي ورثي کي محفوظ ڪرڻ جون ڪوششون. محمود درويش، البرٽ ڪاميو، ڪرشن چندر ۽ ٻين جا ترجما ذڪر ڪيا.',
    featured: true,
  },
  {
    id: 4,
    image: '/press/515756365_10163833919979974_2860420980106858141_n.jpg',
    titleEn: 'Vali Ram Vallabh — Jita Shamshan Ghaat Hawali (Near the Cremation Ground)',
    titleSd: 'ولي رام ولپ: جيتا شمشان گهاٽ حوالي',
    publication: 'Sindhi Literary Publication',
    date: '2023–2024',
    language: 'Sindhi',
    type: 'Literary Tribute',
    publicationUrl: null,
    author: 'Zulfiqar Halepoto (ذوالفقار هاليپوتو)',
    description: 'A long-form literary tribute by journalist and writer Zulfiqar Halepoto. Traces the complete literary journey of Vali Ram Vallabh — his childhood in Mithi, his education, his career at Forest Department, advertising, and Sindhology. Discusses his friendships with major Sindhi literary figures in Hyderabad including Amar Jalil, Siraj-ul-Haq, Hameed Sindhi, and others. Ends with song lyrics translated by Vali Ram Vallabh — Wanderer Chilga Dhinjo, Nandjo Restora, Harry Seng Pully, and Sindhi Aawaz Pattan.',
    descriptionSd: 'صحافي ۽ اديب ذوالفقار هاليپوتو جو ڊگهو ادبي خراجِ عقيدت. ولي رام ولڀ جي مڪمل ادبي سفر جو جائزو — مٺيءَ ۾ ٻالپڻ، تعليم، جنگلات کاتو، اشتهاري ڪاروبار، ۽ سنڌالاجي. حيدرآباد جي نامور سنڌي ادبي شخصيتن سان دوستيون — امر جليل، سراج الحق، حميد سنڌي ۽ ٻين سان. ولي رام ولڀ پاران ترجمو ٿيل ڳيتن جي سٽن سان اختتام.',
    featured: true,
  },
  {
    id: 5,
    image: '/press/484032059_1206245564364351_4811558656286801401_n.jpg',
    titleEn: 'Vali Ram Vallabh Park — Named in His Honour',
    titleSd: 'ولي رام ولپ پارڪ',
    publication: 'Sindhi Adabi Board + Government of Sindh',
    date: '2024',
    language: 'Sindhi',
    type: 'Legacy',
    publicationUrl: null,
    description: 'Dr. Kamleshwer Lohana (son) standing beside the Vali Ram Vallabh Park board — a public park named in honour of Vali Ram Vallabh by the Sindhi Adabi Board and the Government of Sindh. The board displays the Sindhi Adabi Board flag, the map of Sindh, and the Government of Sindh seal.',
    descriptionSd: 'ڊاڪٽر ڪملشور لوهاڻو (پٽ) ولي رام ولڀ پارڪ جي بورڊ جي اڳيان بيٺل — سنڌي ادبي بورڊ ۽ حڪومت سنڌ پاران ولي رام ولڀ جي اعزاز ۾ نالو ڏنل عوامي پارڪ. بورڊ تي سنڌي ادبي بورڊ جو پرچم، سنڌ جو نقشو، ۽ حڪومت سنڌ جي مهر.',
    featured: true,
  },
  {
    id: 6,
    image: '/press/WhatsApp Image 2026-10-27 at 10.44.06 PM.jpeg',
    titleEn: 'Vali Ram Vallabh Jo Wachoro — Memorial Book Contents',
    titleSd: 'ولي رام ولپ جو وڇوڙو — ياداشتن جو ڪتاب',
    publication: 'Vali Ram Vallabh Literary Society',
    date: '2024',
    language: 'Sindhi',
    type: 'Memorial Book',
    publicationUrl: null,
    description: 'Table of contents from the memorial book "Vali Ram Vallabh Jo Wachoro" — compiled after his passing. Contributors include Dr. Chandi Ram Shahani (p.241), Saeed Mangi (p.242), Rahul Chhabria (grandson — English), Kumal, Sameer Rai Chhabria (grandson — English), Dr. Ratomal Paryani, and Amrita Seth. Also features a photo album "Di Memories" by family members.',
    featured: false,
  },
  {
    id: 7,
    image: '/press/valiramvallabh.jpg',
    titleEn: 'Affair Magazine — Literary Gathering, Pages 28–29',
    titleSd: 'افئير رسالو — ادبي محفل',
    publication: 'Affair Magazine',
    date: 'January 31 – February 14, 2026',
    language: 'Sindhi',
    type: 'Magazine Feature',
    publicationUrl: null,
    description: 'Two-page feature (pp. 28–29) in Affair magazine on a literary gathering held in honour of Vali Ram Vallabh. Scholar Dilip Kothari presented a paper covering more than 40 books. Speakers included Dr. Manoj Kumar, Shankar Sagar, Dr. Anton Raaz, and Hamesh Kemani (Secretary, Sindhi Adabi). The gathering featured readings from his translations and discussions of his contribution to world literature in Sindhi.',
    descriptionSd: 'افئير رسالي ۾ ولي رام ولڀ جي اعزاز ۾ ٿيل ادبي محفل تي ٻه صفحن جو فيچر (صفحا 28-29). عالم ديليپ ڪوٺاري 40 کان وڌيڪ ڪتابن تي مقالو پيش ڪيو. مقرر: ڊاڪٽر منوج ڪمار، شنڪر ساگر، ڊاڪٽر انٽون رازا، ۽ هاميش ڪيماڻي (سيڪريٽري، سنڌي ادبي). سندس ترجمن مان پڙهائپ ۽ عالمي ادب ۾ سندس حصي تي بحث.',
    featured: false,
  },
  {
    id: 8,
    image: '/press/Daily Dawn, a profile article on my father\'s (Vali Ram Vallabh) literary work by Zubaida Mustafa.jpeg',
    titleEn: 'Daily Dawn — Profile by Zubaida Mustafa',
    titleSd: 'ڊيلي ڊان — ادبي پروفائيل',
    publication: 'Dawn',
    date: '2023',
    language: 'English',
    type: 'Profile Article',
    publicationUrl: null,
    author: 'Zubaida Mustafa',
    description: 'A profile article in Daily Dawn on the literary work of Vali Ram Vallabh, written by renowned journalist Zubaida Mustafa. Covers his translations, his role in bringing world literature to Sindhi readers, and his lasting contribution to Sindhi literary culture.',
    descriptionSd: 'ڊيلي ڊان ۾ ولي رام ولڀ جي ادبي ڪم تي پروفائيل آرٽيڪل، مشهور صحافي زبيدا مصطفيٰ پاران لکيو. سندس ترجما، سنڌي پڙهندڙن کي عالمي ادب سان روشناس ڪرائڻ جو ڪردار، ۽ سنڌي ادبي ثقافت ۾ دائمي خدمتون.',
    featured: true,
  },
  {
    id: 9,
    image: '/press/Dawn article.jpeg',
    titleEn: 'Dawn — Literary Coverage',
    titleSd: 'ڊان اخبار — ادبي ڪوريج',
    publication: 'Dawn',
    date: '2023',
    language: 'English',
    type: 'Literary Coverage',
    publicationUrl: null,
    description: 'Dawn newspaper coverage of Vali Ram Vallabh and his literary contributions to Sindhi language and literature.',
    descriptionSd: 'ڊان اخبار ۾ ولي رام ولڀ ۽ سنڌي ٻوليءَ ۽ ادب ۾ سندس ادبي خدمتن جي ڪوريج.',
    featured: false,
  },
  {
    id: 10,
    image: '/press/WhatsApp Image 2026-11-04 at 8.56.29 AM.jpeg',
    titleEn: 'Press Coverage — Literary Gathering',
    titleSd: 'پريس ڪوريج — ادبي محفل',
    publication: 'Sindhi Press',
    date: 'November 2026',
    language: 'Sindhi',
    type: 'Event Coverage',
    publicationUrl: null,
    description: 'Press coverage of a literary gathering held in memory of Vali Ram Vallabh.',
    descriptionSd: 'ولي رام ولڀ جي ياد ۾ ٿيل ادبي گڏجاڻيءَ جي پريس ڪوريج.',
    featured: false,
  },
  {
    id: 12,
    image: '/press/WhatsApp Image 2026-11-04 at 8.57.27 AM.jpeg',
    titleEn: 'Rozana Saat — 1st Death Anniversary Lecture Programme',
    titleSd: 'روزانه ساٽ — پهرين ورسي ليڪچر پروگرام',
    publication: 'Rozana Saat, Hyderabad',
    date: '5 November 2024',
    language: 'Sindhi',
    type: 'Event Coverage',
    publicationUrl: null,
    description: 'Coverage of the 1st death anniversary lecture programme "ترجمي جي اهميت" (The Importance of Translation) — a tribute event organized by the Vali Ram Vallabh Literary Society. The programme featured prominent Sindhi scholars and writers discussing Vali Ram Vallabh\'s monumental contribution to translation and Sindhi literature.',
    descriptionSd: 'پهريون يادگاري خطبي "ترجمي جي اهميت" جي ڪوريج — ولي رام ولڀ ادبي سوسائٽي پاران منظم ڪيل خراجِ عقيدت تقريب. نامور سنڌي عالمن ۽ ليکڪن ترجمي ۽ سنڌي ادب ۾ ولي رام ولڀ جي تاريخي خدمتن تي بحث ڪيو.',
    featured: true,
  },
  {
    id: 13,
    image: '/press/WhatsApp Image 2026-11-04 at 8.57.29 AM.jpeg',
    titleEn: 'Arts Council of Pakistan — Condolence Reference',
    titleSd: 'آرٽس ڪائونسل آف پاڪستان ڪراچي — تعزيتي ريفرنس',
    publication: 'Arts Council of Pakistan, Karachi',
    date: '29 December 2023',
    language: 'English / Sindhi',
    type: 'Condolence Reference',
    publicationUrl: null,
    description: 'Condolence Reference organized by the Arts Council of Pakistan, Karachi — "In Recognition of the literary services of Author & Translator Vali Ram Vallabh (1941–2023)." Held on 29 December 2023 at the Arts Council, Karachi.',
    descriptionSd: 'آرٽس ڪائونسل آف پاڪستان، ڪراچي پاران تعزيتي ريفرنس — "ليکڪ ۽ مترجم ولي رام ولڀ (1941-2023) جي ادبي خدمتن جي اعتراف ۾." 29 ڊسمبر 2023ع تي آرٽس ڪائونسل ڪراچي ۾ منظم ڪيو ويو.',
    featured: true,
  },
  {
    id: 14,
    image: '/press/WhatsApp Image 2026-11-04 at 8.57.31 AM.jpeg',
    titleEn: 'Dr. Murli Dhar Book Launch — Organized by Vali Ram Vallabh Literary Society',
    titleSd: 'ڊاڪٽر مرلي ڌر جي ڪتاب جي مهورت — پاران ولي رام ولپ ادبي سوسائٽي',
    publication: 'Vali Ram Vallabh Literary Society',
    date: '24 May',
    language: 'Sindhi',
    type: 'Literary Event',
    publicationUrl: null,
    description: 'Book launch poster for "مهورت جذبن جي تمورتي" (Broken Emotions) by Dr. Murli Dhar — organized by the Vali Ram Vallabh Literary Society. Speakers included Amarsandho, Anita Kamleshwer, Pushpa Vallabh, Dr. Pushpa Ochani, Dr. Jameel Jotiyo, Dr. Hameed Somro, Zeb Sindi, Shabnam Gul, Dr. Irfan Mallah, Dr. Ali Murtaza Darijo, Dr. Kamleshwer, Medam Mehtab Akbar Rashdi, Prof. Muhammad Hashim Solangi, and Dr. Nazir Mahmood.',
    descriptionSd: 'ڊاڪٽر مرلي ڌر جي ڪتاب "جذبن جي تمورتي" جي مهوت پوسٽر — ولي رام ولڀ ادبي سوسائٽي پاران منظم ڪيو ويو. مقرر: امرسنڌو، انيتا ڪملشور، پشپا ولڀ، ڊاڪٽر پشپا اوچاڻي، ڊاڪٽر جميل جوتيو، ڊاڪٽر حميد سومرو، زيب سنڌي، شبنم گل، ڊاڪٽر عرفان ملاح، ڊاڪٽر ڪملشور، ميڊم مهتاب اڪبر رشدي، پروفيسر محمد هاشم سولنگي، ڊاڪٽر نذير محمود.',
    featured: false,
  },
  {
    id: 15,
    image: '/press/WhatsApp Image 2026-11-04 at 8.56.37 AM.jpeg',
    titleEn: 'Rozana Saat — Dr. Murli Dhar Book Launch News Coverage',
    titleSd: 'روزانه ساٽ — ڊاڪٽر مرلي ڌر ڪتاب مهورت جي خبر',
    publication: 'Rozana Saat, Hyderabad',
    date: '25 May 2025',
    language: 'Sindhi',
    type: 'Event Coverage',
    publicationUrl: null,
    description: 'News report of the book launch of Dr. Murli Dhar\'s Sindhi, Urdu and English books — a joint launch event organized by the Vali Ram Vallabh Literary Society at the Sindhi Autonomous Institute, Hyderabad. The event was chaired by Dr. Baloch and highlighted Vali Ram Vallabh\'s enduring legacy through the literary society that continues his work.',
    descriptionSd: 'ڊاڪٽر مرلي ڌر جي سنڌي، اردو ۽ انگريزيءَ ۾ ڪتابن جي گڏيل مهوت جي خبر — ولي رام ولڀ ادبي سوسائٽي پاران سنڌي خودمختيار انسٽيٽيوٽ، حيدرآباد ۾ منظم ڪيو ويو. تقريب جي صدارت ڊاڪٽر بلوچ ڪئي، ۽ ولي رام ولڀ جي دائمي ورثي تي روشني وڌي.',
    featured: false,
  },
  {
    id: 16,
    image: '/kawish dunya news paper about gaza palistine/Screenshot 2026-11-04 101247.png',
    images: [
      '/kawish dunya news paper about gaza palistine/Screenshot 2026-11-04 101247.png',
      '/kawish dunya news paper about gaza palistine/Screenshot 2026-11-04 101255.png',
      '/kawish dunya news paper about gaza palistine/Screenshot 2026-11-04 101302.png',
      '/kawish dunya news paper about gaza palistine/Screenshot 2026-11-04 101311.png',
      '/kawish dunya news paper about gaza palistine/Screenshot 2026-11-04 101320.png',
      '/kawish dunya news paper about gaza palistine/Screenshot 2026-11-04 101328.png',
      '/kawish dunya news paper about gaza palistine/Screenshot 2026-11-04 101334.png',
      '/kawish dunya news paper about gaza palistine/Screenshot 2026-11-04 101344.png',
      '/kawish dunya news paper about gaza palistine/Screenshot 2026-11-04 101351.png',
      '/kawish dunya news paper about gaza palistine/Screenshot 2026-11-04 101357.png',
      '/kawish dunya news paper about gaza palistine/Screenshot 2026-11-04 101404.png',
      '/kawish dunya news paper about gaza palistine/Screenshot 2026-11-04 101411.png',
      '/kawish dunya news paper about gaza palistine/Screenshot 2026-11-04 101420.png',
      '/kawish dunya news paper about gaza palistine/Screenshot 2026-11-04 101427.png',
      '/kawish dunya news paper about gaza palistine/Screenshot 2026-11-04 101434.png',
      '/kawish dunya news paper about gaza palistine/Screenshot 2026-11-04 101441.png',
    ],
    titleEn: 'Kawish Dunya — Special Issue: Gaza & Vali Ram Vallabh Tribute',
    titleSd: 'ڪاوش دنيا — خاص شمارو: غزه ۽ ولي رام ولپ',
    publication: 'Kawish Dunya, 5 November 2023',
    date: '5 November 2023',
    language: 'Sindhi',
    type: 'Special Issue',
    publicationUrl: null,
    description: 'Kawish Dunya special issue (5 Nov 2023) featuring Vali Ram Vallabh on the front cover alongside Gaza coverage. The issue includes: "غزه جو درد ۽ دنيا" (Gaza\'s Pain and the World) — full article by Vali Ram Vallabh. Literary tributes: "جن حيدرآباد ٿي ويو" (When Hyderabad Became) by Naseer Mirza; "ولي رام ولپ: نفيس ماٿو، مانائتو ليکڪ" (A Refined Mind, A Worthy Writer) by Mumtaz Meher (with photo by Abro Khuda Bux); "سنڌلاجي، ولي رام ولپ ۽ مان" (Sindhology, Vali Ram Vallabh and I) by Saeed Mangi.',
    descriptionSd: 'ڪاوش دنيا خاص شمارو (5 نومبر 2023ع) — ولي رام ولڀ سرورق تي غزه ڪوريج سان. مضمون: "غزه جو درد ۽ دنيا" (ولي رام ولڀ). خراج: "جن حيدرآباد ٿي ويو" (نصير مرزا)، "نفيس ماٿو، مانائتو ليکڪ" (ممتاز مهر)، "سنڌالاجي، ولي رام ولڀ ۽ مان" (سعيد منگي).',
    featured: true,
  },
  {
    id: 17,
    image: '/Valiram Vallabh memory/Screenshot 2026-11-04 101026.png',
    images: [
      '/Valiram Vallabh memory/Screenshot 2026-11-04 101026.png',
      '/Valiram Vallabh memory/Screenshot 2026-11-04 101033.png',
      '/Valiram Vallabh memory/Screenshot 2026-11-04 101043.png',
      '/Valiram Vallabh memory/Screenshot 2026-11-04 101051.png',
      '/Valiram Vallabh memory/Screenshot 2026-11-04 101100.png',
      '/Valiram Vallabh memory/Screenshot 2026-11-04 101108.png',
    ],
    titleEn: 'Imrata Magazine Issue 134 — A Tribute to a Legend',
    titleSd: 'امرتا رسالو، شمارو 134 — هڪ ليجنڊ کي خراجِ عقيدت',
    publication: 'Imrata Magazine, Issue 134',
    date: 'November 2023',
    language: 'English / Sindhi',
    type: 'Memorial Issue',
    publicationUrl: null,
    description: 'A complete tribute issue of Imrata Magazine dedicated to Vali Ram Vallabh (1941–2023). Editor: Faqir Muhammad Dhol. Editorial Board: Manzoor Jokhio & Mithal Jiskani. Contents: "My Nanu… My Inspiration" (Rahul Chhabria, Grandson); "He wasn\'t like other Nanus" (Komal, Grand Daughter); "For Nanu…" (Sameer Rai Chhabria, Grandson); "Vali Ram Vallab" — poem by Dr. Ranomal Pryans; "همت ۽ حوصلي واري شخصيت" by Dr. Chandi Ram Shahani; "سنڌي ادب جو منفرد ليکڪ" by Saeed Mangi. Includes "The Memoirs" — a rare photo album featuring Vali Ram Vallabh with Ayaz Gul, Murad Ali Mirza, Ibrahim Joyo, Shaikh Ayaz, Taj Joyo, Imdad Hussaini, and other literary greats.',
    descriptionSd: 'امراتا رسالي جو مڪمل خراجي شمارو ولي رام ولڀ (1941-2023) لاءِ وقف. مدير: فقير محمد ڍول. مواد: "منهنجو نانو... منهنجي حوصلي جو ذريعو" (راهل ڇابريا)، "نانو جهڙا ٻيا نه هئا" (ڪومل)، "نانو لاءِ..." (سمير راءِ ڇابريا)، ڊاڪٽر چندي رام شاهاڻي، سعيد منگي جا مضمون. نادر تصويري البم ۾ ولي رام ولڀ ۽ نامور ادبي شخصيتون.',
    featured: true,
  },
  {
    id: 18,
    image: '/valiram profile in sindhi/Screenshot 2026-11-04 101732.png',
    images: [
      '/valiram profile in sindhi/Screenshot 2026-11-04 101732.png',
      '/valiram profile in sindhi/Screenshot 2026-11-04 101747.png',
      '/valiram profile in sindhi/Screenshot 2026-11-04 101753.png',
      '/valiram profile in sindhi/Screenshot 2026-11-04 101758.png',
      '/valiram profile in sindhi/Screenshot 2026-11-04 101806.png',
      '/valiram profile in sindhi/Screenshot 2026-11-04 101810.png',
    ],
    titleEn: 'Vali Ram Vallabh — Complete Profile in Sindhi',
    titleSd: 'ولي رام ولپ — سنڌيءَ ۾ مڪمل پروفائيل',
    publication: 'Sindhi Literary Archive',
    date: '2023',
    language: 'Sindhi',
    type: 'Profile Article',
    publicationUrl: null,
    description: 'A comprehensive 6-page Sindhi profile of Vali Ram Vallabh covering his complete literary output: 10 translated novels, 8 translated short story collections, 112 translated stories from 26 languages, poetry collections, 7 translated plays, research works, edited volumes, and a chronological list of 26 awards (1989–2015). Born 18 August 1941 in Mithi, he worked at the Forest Department, advertising, and the Institute of Sindhology. Translated from Tolstoy, Moravia, Krishan Chander, Amrita Pritam, Tagore, and others.',
    descriptionSd: 'ولي رام ولڀ جو سنڌيءَ ۾ 6 صفحن تي مشتمل مڪمل پروفائيل: 10 ترجمو ٿيل ناول، 8 ڪهاڻيون، 26 ٻولين مان 112 ترجمو ٿيل ڪهاڻيون، شاعري، 7 ڊراما، تحقيقي ڪم، ادارتي جلد، ۽ 26 ايوارڊن جي تاريخي فهرست (1989-2015).',
    featured: false,
  },
  {
    id: 11,
    image: '/press/online article.png',
    titleEn: 'Vali Ram Vallabh — An Epoch-Making Litterateur',
    titleSd: 'ولي رام ولڀ — ايھد ساز اديب',
    publication: 'Express.pk',
    date: '2023',
    language: 'Urdu',
    type: 'Profile Article',
    publicationUrl: 'https://www.express.pk/story/2742353/walii-raam-walibh-ehad-saaz-adeeb-2742353',
    description: 'A detailed profile article on Express.pk about Vali Ram Vallabh — describing him as an epoch-making litterateur who transformed Sindhi literature through his translations and literary scholarship.',
    descriptionSd: 'ايڪسپريس.pk تي ولي رام ولڀ بابت تفصيلي پروفائيل مضمون — هن کي هڪ دور ساز اديب طور بيان ڪيو ويو جنهن پنهنجي ترجمن ۽ ادبي علم سان سنڌي ادب کي بدلائي ڇڏيو.',
    featured: false,
  },
]

// Sindhi text cards — standalone literary pieces
const sindhiCards = [
  {
    id: 'sd-1',
    titleEn: 'Opening Verse',
    textSd: 'اڄ نه اوطاقن ۾ جوڳين سندي ذات\nساري سنياسين کي رنم ساري رات\nمون جنين جي تات سي لاهوتي لڏي ويا',
    source: 'شاڪر عزيز سيتائي',
    type: 'verse',
  },
  {
    id: 'sd-2',
    titleEn: 'His Literary Devotion',
    textSd: 'وليرام ولڀ ولد ڪيول رام لوهاڻو جو شمار انهن ليکڪن ۾ ٿئي ٿو جن سڄي حياتي سنڌي ادب ۽ سنڌي لاکيڻي ٻوليء لئه ارپي ڇڏي۔ سندس علمي ادبي فڪري پورهئي ۽ ڪوششن کي جنهن ۾ ان نثر تي خاص طور ۽ ٻين صنفن کي اهڙي طرح سرجايو سنواريو جو سنڌي ادب جي تاريخ جي هر دور ۾ ان کي مڃتا ملندي رهندي۔',
    source: 'شاڪر عزيز سيتائي',
    type: 'prose',
  },
  {
    id: 'sd-3',
    titleEn: 'World Literature into Sindhi',
    textSd: 'ليو ٽالسٽاء، البرٽو موراويا، ڪرشن چندر، امرتا پريتم، ديال سڪسينا، رابندر ناٿ ٽئگور، عابد سورتي، احمد نديم قاسمي ۽ ٻين ليکڪن جي تحريرن کي ترجمو ڪري سنڌ واسين کي عالمي ادب سان روشناس ڪرايو۔ وليرام ولڀ سنڌي ۾ شاعري ڪئي، سندس هڪ شعري مجموعو پڻ شايع ٿيل آھي۔',
    source: 'شاڪر عزيز سيتائي',
    type: 'prose',
  },
  {
    id: 'sd-4',
    titleEn: 'His Mastery of Prose',
    textSd: 'وليرام ولڀ جي لکڻين مان معلوم ٿئي ٿو ته سندس لکيل نثر ۾ ڪٿي به اوپرائپ، اڻوڻندڙ، اڻ سهائيندڙ لفظ آھن ئي ڪين۔ جملن جي ڪا بي ترتيب ۽ بي ربطگي نه — هن نه رڳو بيهڪ جي نشانين تي خاص توجھ ڏني آھي پر گرامر جي ترتيب پڻ بي مثال آھي۔',
    source: 'شاڪر عزيز سيتائي',
    type: 'prose',
  },
  {
    id: 'sd-5',
    titleEn: 'His Noble Character',
    textSd: 'هي پر وقار شخصيت جو مالڪ، اکين ۾ نمرتا، چھري تي مڪمل اعتماد، نظم ۽ ضبط جو مجسمو، سڀاء ۾ انسان دوست ۽ هر تضاد کن آجو۔ ترقي پسند ادب جي اوج لئه پاڻ پتوڙيندڙ شخص — ظاهر ۾ ته اسان کان جدا ويو پر سندس روح هر ادبي علمي فڪري رهاڻين ۾ اسان سان ساڻ رهندو۔',
    source: 'شاڪر عزيز سيتائي',
    type: 'prose',
  },
  {
    id: 'sd-6',
    titleEn: 'Closing Verse — Shah Jo Risalo',
    textSd: 'مرڻا اڳي جي مئا، مري ٿين نه مات\nهوندا سي حيات مرڻا اڳي جي مئا\n— شاھ',
    source: 'شاھ عبداللطيف ڀٽائي',
    type: 'verse',
  },
  {
    id: 'sd-7',
    titleEn: 'Dr. Chandi Ram Shahani — Imrata Magazine',
    textSd: 'سائين ولي رام ولڀ پنهنجي 82 سالن جي حياتي علمي ادبي ۽ سماجي خدمت ۾ انتهائي شاندار ۽ باوقار طريقي سان گذاري۔ ادب جي دنيا جا ماڻهو، خاص ڪري سنڌي پڙهندڙ، سائين ولي رام ولڀ جي انهيءَ ادبي پورهئي کي صدين تائين وساري نه سگهندا۔',
    source: 'ڊاڪٽر چندي رام شاهاڻي — امراتا رسالو، شمارو 134، نومبر 2023',
    type: 'prose',
  },
  {
    id: 'sd-8',
    titleEn: 'Saeed Mangi — Institute of Sindhology',
    textSd: 'وليرام ولڀ سنڌي ادب جو اهو منفرد شخص آهي جنهن پنهنجو غير معمولي حصو مڪمل خاموشيءَ سان ادا ڪيو ۽ سنڌي ادب ۾ پنهنجي نالي جا اَمٽ نقش ڇڏيا۔ هو هڪ ٻوليءَ جو ماهر هو — جنهن به ڪتاب تي هٿ وڌو، اهو وڌيڪ بهتر ٿي ويو۔',
    source: 'سعيد منگي — ساٿي، انسٽيٽيوٽ آف سنڌالاجي',
    type: 'prose',
  },
  {
    id: 'sd-9',
    titleEn: 'Dr. Murli Dhar — A Personal Memory',
    textSd: 'سائين ولي رام ولڀ ڪتابن ۾ پڙھيا ويندا\n\nمنھنجي ڄاڻ سڃاڻ سائين ولي رام ولڀ سان ان وقت ٿي جڏھن مون ء منھنجي ڪجھ دوستن چانڊڪا ميڊيڪل ڪاليج مان ڏياري نالي ھڪ ميگزين ڇپي. اھا ۱۹۸۳ جي ڳالھ آھي. ميگزين طارق اشرف جي سھڻي مان ڇپرائي. سائين جو گھر طارق اشرف جي پريس جي ويجھو ھيو. اسين سائين کي پروف پڙھڻ لاء چيو. انھن ڏاڍي خوشي سان اسان جي ڳالھ رکي ء اسان کي ڪيتريون ھي چڱيون صلاحون به ڏنائون.\n\nاڳتي ھلي پشپا ولڀ سان واسطو پيو، ملاقات ٿي، ائين اسان رشتيدار ٿي وياسون ء سائين ولي رام ولڀ مان بابا ولي رام ولڀ ٿي ويا. انھن جا ڪتاب ء لائبريري ڏاڍا وڻندا ھيا. جڏھن به مان گھر ويندو ھيس انھن جي لائبريري ۾ ضرور ويندو ھيس ء نوان ڪتاب گولھيندو ھيس. ھو اڪثر ڪون ڪو ڪتاب مونکي پڙھڻ لاء ڏئي ڇڏيندا ھيا.\n\nھو ھميشه ياد رکيا ويندا. لکيل ڪتابن ۾ پڙھيا ويندا. ھو اسان سان گڏ آھن، گڏ رھندا. انھن ڪتاب لکيا، رشتا جوڙيا، دليون کٽيون — ھو آھن، ھو رھندا.',
    source: 'ڊاڪٽر مرلي ڌر',
    type: 'prose',
  },
]

const typeColors = {
  'Anniversary Notice': 'var(--gold)',
  'Tribute Article':    'var(--terracotta)',
  'Literary Tribute':   '#6366f1',
  'Legacy':             'var(--green)',
  'Memorial Book':      '#0891b2',
  'Magazine Feature':   '#db2777',
  'Academic Article':   '#d97706',
}

export default function PressPage() {
  const [lightbox, setLightbox] = useState(null)
  const [lightboxPage, setLightboxPage] = useState(0)
  const { lang } = useLanguage()

  const openLightbox = (item) => { setLightbox(item); setLightboxPage(0) }
  const isSd = lang === 'sd'

  const featured = pressItems.filter(p => p.featured)
  const rest = pressItems.filter(p => !p.featured)

  // current lightbox image (supports multi-page items)
  const lightboxImages = lightbox ? (lightbox.images || [lightbox.image]) : []
  const currentImg = lightboxImages[lightboxPage] || lightbox?.image

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(201,148,58,0.2)', borderColor: 'rgba(201,148,58,0.4)', color: '#E8B85A' }}>
            {tx(t.press.tag, lang)}
          </div>
          <h1 style={{ fontFamily: isSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#F5ECD7', marginBottom: 12, letterSpacing: isSd ? 0 : '-0.03em' }}>
            {tx(t.press.title, lang)}
          </h1>
          <p style={{ fontSize: isSd ? 20 : 16, color: 'rgba(245,236,215,0.75)', maxWidth: 560, fontFamily: isSd ? 'Lateef, serif' : 'inherit', lineHeight: isSd ? 2.1 : 1.6 }}>
            {tx(t.press.desc, lang)}
          </p>
          <div style={{ display: 'flex', gap: 24, marginTop: 24, flexWrap: 'wrap' }}>
            {[
              { n: '18', l: isSd ? 'اشاعتون' : 'Publications' },
              { n: '5',  l: isSd ? 'اخبارون' : 'Newspapers' },
              { n: '8',  l: isSd ? 'سنڌي متن' : 'Sindhi Texts' },
              { n: '3+', l: isSd ? 'سال' : 'Years Covered' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: isSd ? 'right' : 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, fontWeight: 800, color: '#C9943A', direction: 'ltr', unicodeBidi: 'isolate' }}>{s.n}</div>
                <div style={{ fontSize: isSd ? 14 : 11, color: 'rgba(245,236,215,0.6)', fontWeight: 600, textTransform: isSd ? 'none' : 'uppercase', letterSpacing: isSd ? 0 : '0.05em', fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured press items — full image cards */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="tag" style={{ marginBottom: 12, display: 'inline-flex' }}>{tx(t.press.featuredTag, lang)}</div>
          <h2 className="section-title" style={{ marginBottom: 8 }}>
            {isSd
              ? <><span style={{ background: 'linear-gradient(135deg,var(--terracotta),var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{tx(t.press.featuredH2, lang)}</span></>
              : <>Major <span style={{ background: 'linear-gradient(135deg,var(--terracotta),var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Publications</span></>
            }
          </h2>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 36 }}>{tx(t.press.featuredDesc, lang)}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24, marginBottom: 64 }}>
            {featured.map(item => (
              <div key={item.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 16px var(--shadow)', display: 'flex', flexDirection: 'column' }}>

                {/* Full clickable image */}
                <div
                  onClick={() => openLightbox(item)}
                  style={{ position: 'relative', width: '100%', aspectRatio: '3/4', cursor: 'zoom-in', flexShrink: 0, background: 'var(--bg-elevated)', overflow: 'hidden' }}
                >
                  <Image
                    src={item.image}
                    alt={item.titleEn}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: 'contain', objectPosition: 'center', background: 'var(--cream)', transition: 'transform 0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {/* Overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,24,16,0.7) 0%, transparent 50%)', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', top: 12, left: 12 }}>
                    <span style={{ fontSize: 10, padding: '3px 10px', borderRadius: 100, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', background: 'rgba(44,24,16,0.75)', color: '#F5ECD7', backdropFilter: 'blur(4px)' }}>
                      {item.language}
                    </span>
                  </div>
                  <div style={{ position: 'absolute', top: 12, right: 12 }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5ECD7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
                        <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
                      </svg>
                    </div>
                  </div>
                  <div style={{ position: 'absolute', bottom: 12, left: 12, right: 12 }}>
                    <p style={{ fontSize: 11, color: 'rgba(245,236,215,0.8)', fontWeight: 600 }}>
                      {item.publication} · {item.date}
                    </p>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: '18px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 10, padding: '3px 10px', borderRadius: 100, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', background: `${typeColors[item.type] || 'var(--terracotta)'}15`, color: typeColors[item.type] || 'var(--terracotta)', border: `1px solid ${typeColors[item.type] || 'var(--terracotta)'}30` }}>
                      {item.language}
                    </span>
                    {item.author && (
                      <span style={{ fontSize: isSd ? 14 : 11, color: 'var(--gold)', fontWeight: 600, fontFamily: isSd ? 'Lateef, serif' : 'inherit' }}>{isSd ? 'قلم:' : tx(t.press.by, lang)} {item.author}</span>
                    )}
                  </div>
                  <h3 style={{ fontFamily: isSd && item.titleSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: isSd && item.titleSd ? 20 : 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6, lineHeight: isSd && item.titleSd ? 2 : 1.35, direction: isSd && item.titleSd ? 'rtl' : 'ltr' }}>
                    {isSd && item.titleSd ? item.titleSd : item.titleEn}
                  </h3>
                  <p style={{ fontSize: isSd ? 15 : 13, color: 'var(--text-secondary)', lineHeight: isSd ? 2 : 1.7, flex: 1, marginBottom: 14, fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr', textAlign: isSd ? 'right' : 'left' }}>
                    {isSd && item.descriptionSd ? item.descriptionSd : item.description}
                  </p>
                  <button
                    onClick={() => openLightbox(item)}
                    className="btn-outline"
                    style={{ width: '100%', justifyContent: 'center', fontSize: 12, padding: '8px 16px' }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
                      <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
                    </svg>
                    {tx(t.press.openFull, lang)}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sindhi literary text cards */}
          <div className="tag" style={{ marginBottom: 12, display: 'inline-flex' }}>سنڌي ادبي تحريرون</div>
          <h2 className="section-title" style={{ marginBottom: 8 }}>
            {isSd
              ? <>{tx(t.press.sindhiH2a, lang)} <span style={{ background: 'linear-gradient(135deg,var(--terracotta),var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{tx(t.press.sindhiH2b, lang)}</span></>
              : <>Tributes in <span style={{ background: 'linear-gradient(135deg,var(--terracotta),var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Sindhi</span></>
            }
          </h2>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 32 }}>{tx(t.press.sindhiDesc, lang)}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20, marginBottom: 64 }}>
            {sindhiCards.map(card => (
              <div key={card.id} style={{
                background: card.type === 'verse' ? 'rgba(201,148,58,0.04)' : 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRight: `4px solid ${card.type === 'verse' ? 'var(--gold)' : 'var(--terracotta)'}`,
                borderRadius: 16, padding: '20px',
              }}>
                <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: card.type === 'verse' ? 'var(--gold)' : 'var(--terracotta)', marginBottom: 12 }}>
                  {isSd ? (card.type === 'verse' ? 'شعر' : 'نثر') : (card.type === 'verse' ? 'Verse' : 'Prose')}
                  {!isSd && ` · ${card.titleEn}`}
                </p>
                <p style={{ fontFamily: 'Lateef, serif', fontSize: card.type === 'verse' ? 18 : 15, color: 'var(--text-primary)', direction: 'rtl', textAlign: 'right', lineHeight: 2.1, whiteSpace: 'pre-line', marginBottom: 14 }}>
                  {card.textSd}
                </p>
                <p style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, textAlign: 'right', direction: 'rtl' }}>
                  — {card.source}
                </p>
              </div>
            ))}
          </div>

          {/* Rest of press items */}
          {rest.length > 0 && (
            <>
              <div className="tag" style={{ marginBottom: 12, display: 'inline-flex' }}>{tx(t.press.moreTag, lang)}</div>
              <h2 className="section-title" style={{ marginBottom: 32 }}>{tx(t.press.moreH2, lang)}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
                {rest.map(item => (
                  <div key={item.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    {item.image ? (
                      <div
                        onClick={() => openLightbox(item)}
                        style={{ position: 'relative', width: '100%', aspectRatio: '4/3', cursor: 'zoom-in', flexShrink: 0, background: 'var(--bg-elevated)', overflow: 'hidden' }}
                      >
                        <Image src={item.image} alt={item.titleEn} fill sizes="400px" style={{ objectFit: 'contain', objectPosition: 'center', background: 'var(--cream)' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,24,16,0.6), transparent 50%)', pointerEvents: 'none' }} />
                        <div style={{ position: 'absolute', top: 10, right: 10 }}>
                          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F5ECD7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
                              <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div style={{ width: '100%', aspectRatio: '4/3', flexShrink: 0, background: 'linear-gradient(135deg, var(--bg-elevated), var(--bg-card))', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, borderBottom: '1px solid var(--border)' }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14 2 14 8 20 8"/>
                          <line x1="16" y1="13" x2="8" y2="13"/>
                          <line x1="16" y1="17" x2="8" y2="17"/>
                          <polyline points="10 9 9 9 8 9"/>
                        </svg>
                        <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                          {isSd ? 'آنلائن مضمون' : 'Online Article'}
                        </span>
                      </div>
                    )}
                    <div style={{ padding: '16px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, flexWrap: 'wrap', gap: 4 }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: typeColors[item.type] || 'var(--terracotta)' }}>{item.publication}</span>
                        <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>{item.date}</span>                      </div>
                      <h3 style={{ fontFamily: isSd && item.titleSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: isSd && item.titleSd ? 18 : 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6, lineHeight: isSd && item.titleSd ? 2 : 1.3, direction: isSd && item.titleSd ? 'rtl' : 'ltr' }}>
                        {isSd && item.titleSd ? item.titleSd : item.titleEn}
                      </h3>
                      {!isSd && item.titleSd && (
                        <p style={{ fontFamily: 'Lateef, serif', fontSize: 13, color: 'var(--terracotta)', direction: 'rtl', textAlign: 'right', marginBottom: 8, lineHeight: 1.8 }}>{item.titleSd}</p>
                      )}
                      <p style={{ fontSize: isSd ? 15 : 12, color: 'var(--text-secondary)', lineHeight: isSd ? 2 : 1.65, flex: 1, marginBottom: 12, fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr' }}>
                        {isSd && item.descriptionSd ? item.descriptionSd : item.description}
                      </p>
                      {item.image ? (
                        <button onClick={() => openLightbox(item)} className="btn-outline" style={{ width: '100%', justifyContent: 'center', fontSize: 11, padding: '7px 14px' }}>
                          {tx(t.press.openImg, lang)}
                        </button>
                      ) : item.publicationUrl ? (
                        <a href={item.publicationUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ width: '100%', justifyContent: 'center', fontSize: 11, padding: '7px 14px', textAlign: 'center', display: 'block' }}>
                          {isSd ? 'آرٽيڪل پڙهو →' : 'Read Article →'}
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Submit */}
      <section style={{ background: 'var(--cream)', padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 640, textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: 16 }}>{tx(t.press.submitH2, lang)}</h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 28 }}>
            {tx(t.press.submitDesc, lang)}
          </p>
          <a href="mailto:info@valiramvallabh.com?subject=Article about Vali Ram Vallabh" className="btn-primary">
            {tx(t.press.submitBtn, lang)}
          </a>
        </div>
      </section>

      {/* Lightbox — full size image viewer with multi-page support */}
      {lightbox && (
        <div
          onClick={() => { setLightbox(null); setLightboxPage(0) }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(10,5,3,0.96)', backdropFilter: 'blur(8px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
            padding: '20px', overflowY: 'auto',
          }}
        >
          {/* Close */}
          <button
            onClick={() => { setLightbox(null); setLightboxPage(0) }}
            style={{ position: 'fixed', top: 20, right: 20, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#F5ECD7', fontSize: 18, cursor: 'pointer', width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000, flexShrink: 0 }}
          >✕</button>

          <div onClick={e => e.stopPropagation()} style={{ maxWidth: 900, width: '100%', margin: '40px auto 20px' }}>
            {/* Title */}
            <div style={{ marginBottom: 16, textAlign: 'center' }}>
              <span style={{ fontSize: 10, padding: '3px 12px', borderRadius: 100, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', background: 'rgba(201,148,58,0.2)', color: '#C9943A', border: '1px solid rgba(201,148,58,0.3)' }}>
                {lightbox.language} · {lightbox.publication}
              </span>
              <h3 style={{ fontFamily: isSd && lightbox.titleSd ? 'Lateef, serif' : 'Playfair Display, serif', fontSize: isSd && lightbox.titleSd ? 22 : 20, color: '#F5ECD7', marginTop: 12, marginBottom: 4, lineHeight: isSd && lightbox.titleSd ? 2 : 1.3, direction: isSd && lightbox.titleSd ? 'rtl' : 'ltr' }}>
                {isSd && lightbox.titleSd ? lightbox.titleSd : lightbox.titleEn}
              </h3>
              {lightbox.titleSd && (
                <p style={{ fontFamily: 'Lateef, serif', fontSize: 16, color: '#C9943A', direction: 'rtl', lineHeight: 1.8, marginBottom: 4 }}>{lightbox.titleSd}</p>
              )}
              <p style={{ fontSize: 12, color: 'rgba(245,236,215,0.5)' }}>{lightbox.date}{lightbox.author ? ` · ${tx(t.press.by, lang)} ${lightbox.author}` : ''}</p>
            </div>

            {/* Multi-page indicator */}
            {lightboxImages.length > 1 && (
              <div style={{ textAlign: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: 11, color: 'rgba(201,148,58,0.8)', fontWeight: 600 }}>
                  {isSd ? `صفحو ${lightboxPage + 1} مان ${lightboxImages.length}` : `Page ${lightboxPage + 1} of ${lightboxImages.length}`}
                </span>
              </div>
            )}

            {/* Full image */}
            <div style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 16, background: '#111' }}>
              <img
                src={currentImg}
                alt={lightbox.titleEn}
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '80vh', objectFit: 'contain' }}
              />
            </div>

            {/* Multi-page navigation */}
            {lightboxImages.length > 1 && (
              <div style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
                <button
                  onClick={() => setLightboxPage(p => Math.max(0, p - 1))}
                  disabled={lightboxPage === 0}
                  style={{ padding: '8px 20px', background: lightboxPage === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(201,148,58,0.15)', border: '1px solid rgba(201,148,58,0.3)', borderRadius: 8, color: lightboxPage === 0 ? 'rgba(245,236,215,0.3)' : '#C9943A', cursor: lightboxPage === 0 ? 'default' : 'pointer', fontSize: 13, fontWeight: 600 }}
                >← {isSd ? 'اڳيون' : 'Prev'}</button>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {lightboxImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setLightboxPage(i)}
                      style={{ width: 28, height: 28, borderRadius: 6, background: i === lightboxPage ? 'rgba(201,148,58,0.4)' : 'rgba(255,255,255,0.06)', border: `1px solid ${i === lightboxPage ? 'rgba(201,148,58,0.6)' : 'rgba(255,255,255,0.12)'}`, color: i === lightboxPage ? '#C9943A' : 'rgba(245,236,215,0.5)', cursor: 'pointer', fontSize: 11, fontWeight: 700 }}
                    >{i + 1}</button>
                  ))}
                </div>
                <button
                  onClick={() => setLightboxPage(p => Math.min(lightboxImages.length - 1, p + 1))}
                  disabled={lightboxPage === lightboxImages.length - 1}
                  style={{ padding: '8px 20px', background: lightboxPage === lightboxImages.length - 1 ? 'rgba(255,255,255,0.03)' : 'rgba(201,148,58,0.15)', border: '1px solid rgba(201,148,58,0.3)', borderRadius: 8, color: lightboxPage === lightboxImages.length - 1 ? 'rgba(245,236,215,0.3)' : '#C9943A', cursor: lightboxPage === lightboxImages.length - 1 ? 'default' : 'pointer', fontSize: 13, fontWeight: 600 }}
                >{isSd ? 'پوءِ' : 'Next'} →</button>
              </div>
            )}

            {/* Description */}
            <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '20px 24px', marginBottom: 16 }}>
              <p style={{ fontSize: isSd ? 16 : 14, color: 'rgba(245,236,215,0.75)', lineHeight: isSd ? 2 : 1.8, fontFamily: isSd ? 'Lateef, serif' : 'inherit', direction: isSd ? 'rtl' : 'ltr', textAlign: isSd ? 'right' : 'left' }}>
                {isSd && lightbox.descriptionSd ? lightbox.descriptionSd : lightbox.description}
              </p>
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              {pressItems.filter(p => p.id !== lightbox.id && p.image).slice(0, 3).map(p => (
                <button
                  key={p.id}
                  onClick={() => openLightbox(p)}
                  style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: 'rgba(245,236,215,0.7)', cursor: 'pointer', fontSize: 12, transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,148,58,0.15)'; e.currentTarget.style.color = '#C9943A' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(245,236,215,0.7)' }}
                >
                  {p.titleEn.slice(0, 30)}…
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
