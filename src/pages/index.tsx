import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

const content = {
  en: {
    heroTag: 'Smarter Data. Clearer Vision.',
    heroTitle: <>See Beyond the <br/><span className="brand-gold italic">Raw Data.</span></>,
    heroDesc: "Cognivio bridges the gap between complex information and actionable intelligence. We don't just process data; we provide the cognitive vision your business needs to scale.",
    heroBtn: 'Start Your Transformation',
    exploreBtn: 'Explore Solutions',
    visionScore: 'VISION SCORE',
    cognitiveFlow: 'Cognitive Flow',
    serviceTitle: 'Empowering Decisions with Intelligent Vision',
    serviceDesc: 'We specialize in turning overwhelming data streams into precise, visual, and cognitive strategies.',
    s1: { 
      t: 'Intelligent Data Analytics', 
      d: 'Automate your reporting and discover hidden trends using our custom-built algorithmic models.',
      l1: 'Real-time Dashboards', l2: 'Predictive Modeling' 
    },
    s2: { 
      t: 'Cognitive Vision AI', 
      d: 'Implementing computer vision and neural networks to help machines "see" and interpret your world.',
      l1: 'Object Recognition', l2: 'Visual Pattern Analysis'
    },
    s3: { 
      t: 'Digital Strategy Design', 
      d: "We don't just provide tech; we design the architecture for your digital future from the ground up.",
      l1: 'Ecosystem Mapping', l2: 'Growth Automation' 
    },
    visionTitle: <>Beyond "Data-Driven" to <span className="brand-gold italic">Intelligence-Led.</span></>,
    visionDesc: 'In a world drowning in data, most companies are just trying to keep their heads above water. At Cognivio, we believe in using data as a lens to see clearly.',
    v1: { t: 'Human-Centric Algorithms', d: 'We build AI that understands the human context of your business.' },
    v2: { t: 'Agile Scalability', d: 'Our solutions grow as your data volume increases, never missing a beat.' },
    partnerTitle: "Let's Build the Future Together",
    partnerDesc: "As a fast-moving AI & Data startup, we thrive on high-impact partnerships. Whether you're an established enterprise looking for a digital edge or a fellow innovator looking to collaborate, our doors are open.",
    p1: { t: 'Early-Adopter Program', d: 'Collaborate with us on custom pilot projects at preferential rates.' },
    p2: { t: 'Strategic Integration', d: 'Integrate our Cognitive Vision API into your existing platform.' },
    partnerSub: 'Open to Partnerships in:',
    contactTitle: 'Ready for clarity?',
    contactDesc: 'Reach out today for a consultation on how we can transform your data landscape.',
    formName: 'Your Name',
    formEmail: 'Email Address',
    formDropdown: 'What solution are you looking for?',
    formMsg: 'Message',
    formBtn: 'Send Request',
    placeholderName: 'John Doe',
    placeholderMsg: 'How can we help you see clearly?',
    activeLog: 'Transforming...'
  },
  id: {
    heroTag: 'Data Lebih Cerdas. Visi Lebih Jelas.',
    // User requested to keep English for hero title
    heroTitle: <>See Beyond the <br/><span className="brand-gold italic">Raw Data.</span></>,
    heroDesc: 'Cognivio menjembatani celah antara informasi kompleks dan kecerdasan yang dapat ditindaklanjuti. Kami memberikan visi kognitif yang dibutuhkan bisnis Anda untuk berkembang.',
    heroBtn: 'Mulai Transformasi Anda',
    exploreBtn: 'Eksplorasi Solusi',
    visionScore: 'SKOR VISI',
    cognitiveFlow: 'Aliran Kognitif',
    serviceTitle: 'Memberdayakan Keputusan dengan Visi Cerdas',
    serviceDesc: 'Kami ahli dalam mengubah aliran data yang rumit menjadi strategi kognitif dan visual yang presisi.',
    s1: { 
      t: 'Analitik Data Cerdas', 
      d: 'Otomatiskan laporan Anda dan temukan tren tersembunyi menggunakan model algoritme khusus kami.',
      l1: 'Dasbor Real-time', l2: 'Pemodelan Prediktif'
    },
    s2: { 
      t: 'AI Visi Kognitif', 
      d: 'Menerapkan computer vision dan jaringan saraf untuk membantu mesin "melihat" dan menginterpretasikan dunia Anda.',
      l1: 'Pengenalan Objek', l2: 'Analisis Pola Visual'
    },
    s3: { 
      t: 'Desain Strategi Digital', 
      d: 'Kami tidak sekadar menyediakan teknologi; kami merancang arsitektur untuk masa depan digital Anda dari bawah ke atas.',
      l1: 'Pemetaan Ekosistem', l2: 'Otomatisasi Pertumbuhan'
    },
    visionTitle: <>Melampaui Data-Driven Menuju <span className="brand-gold italic">Intelligence-Led.</span></>,
    visionDesc: 'Dalam dunia yang dibanjiri data, kami memandang data sebagai lensa untuk melihat dengan jelas.',
    v1: { t: 'Algoritma yang Berpusat pada Manusia', d: 'Kami membangun AI yang memahami konteks manusia dalam bisnis Anda.' },
    v2: { t: 'Skalabilitas Agil', d: 'Solusi kami tumbuh seiring peningkatan volume data, tanpa henti.' },
    partnerTitle: 'Mari Membangun Masa Depan Bersama',
    partnerDesc: 'Sebagai startup AI & Data yang bergerak cepat, kami berkembang melalui kemitraan berdampak tinggi. Baik Anda perusahaan mapan atau inovator yang ingin berkolaborasi, pintu kami terbuka lebar.',
    p1: { t: 'Program Pengadopsi Awal', d: 'Berkolaborasi dengan kami pada proyek percontohan kustom dengan harga khusus.' },
    p2: { t: 'Integrasi Strategis', d: 'Integrasikan API Visi Kognitif kami ke dalam platform Anda.' },
    partnerSub: 'Menerima Kemitraan di Bidang:',
    contactTitle: 'Siap untuk kejelasan?',
    contactDesc: 'Hubungi kami hari ini untuk konsultasi.',
    formName: 'Nama Anda',
    formEmail: 'Alamat Email',
    formDropdown: 'Solusi apa yang Anda cari?',
    formMsg: 'Pesan',
    formBtn: 'Kirim Permintaan',
    placeholderName: 'Budi Santoso',
    placeholderMsg: 'Bagaimana kami dapat membantu Anda melihat lebih jelas?',
    activeLog: 'Menganalisis...'
  }
};

export default function Home(): React.ReactNode {
  const {siteConfig, i18n} = useDocusaurusContext();
  const lang = (i18n.currentLocale || 'en') as 'en' | 'id';
  const t = content[lang] || content.en;

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      {/* @ts-expect-error - React 19 type mapping issue with Docusaurus Head */}
      <Head>
        <style dangerouslySetInnerHTML={{__html: `
          .navbar { z-index: 100 !important; }
        `}} />
      </Head>
      
      <main className="bg-white text-slate-900 overflow-x-hidden pt-12">
        {/* Hero Section */}
        <section className="relative pt-24 pb-24 px-6 hero-gradient overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                    <div className="inline-block px-4 py-1 bg-amber-50 border border-amber-100 rounded-full">
                        <span className="text-xs font-bold text-[#E5B351] uppercase tracking-[0.2em]">{t.heroTag}</span>
                    </div>
                    <h1 className="heading-font text-5xl md:text-7xl font-bold leading-[1.1] text-slate-900">
                        {t.heroTitle}
                    </h1>
                    <p className="text-lg text-slate-500 max-w-xl leading-relaxed mx-auto lg:mx-0">
                        {t.heroDesc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="#contact" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                            {t.heroBtn}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                        <a href="#services" className="px-8 py-4 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center justify-center">
                            {t.exploreBtn}
                        </a>
                    </div>
                </div>
                
                <div className="lg:w-1/2 relative">
                    <div className="relative w-full aspect-square max-w-lg mx-auto">
                        <div className="absolute inset-0 bg-linear-to-t from-amber-100 to-transparent rounded-full opacity-20 floating"></div>
                        <div className="absolute top-1/4 left-0 glass-card p-6 rounded-2xl w-48 shadow-xl floating" style={{animationDelay: "0.5s"}}>
                            <div className="h-2 w-12 bg-amber-400 rounded mb-4"></div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-slate-100 rounded"></div>
                                <div className="h-2 w-4/5 bg-slate-100 rounded"></div>
                            </div>
                            <div className="mt-4 flex justify-between items-end">
                                <div className="text-xs font-bold text-slate-400 uppercase">{t.visionScore}</div>
                                <div className="text-lg font-bold brand-gold">98%</div>
                            </div>
                        </div>
                        <div className="absolute bottom-1/4 right-0 glass-card p-6 rounded-2xl w-56 shadow-xl floating" style={{animationDelay: "1.2s"}}>
                            <div className="flex gap-2 mb-4">
                                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <div className="text-sm font-bold pt-1">{t.cognitiveFlow}</div>
                            </div>
                            <div className="flex items-end gap-1 h-12">
                                <div className="w-2 bg-amber-200 h-1/2 rounded-t"></div>
                                <div className="w-2 bg-amber-300 h-3/4 rounded-t"></div>
                                <div className="w-2 bg-amber-500 h-full rounded-t"></div>
                                <div className="w-2 bg-amber-400 h-2/3 rounded-t"></div>
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-64 bg-white shadow-[0_0_100px_rgba(229,179,81,0.1)] rounded-full flex items-center justify-center border border-amber-50">
                                <img src="https://raw.githubusercontent.com/lucide-react/lucide/main/icons/eye.svg" className="w-24 h-24 opacity-5" alt=""/>
                                <div className="absolute text-[120px] font-bold text-slate-50 select-none">AI</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Core Services */}
        <section id="services" className="py-24 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="heading-font text-3xl md:text-4xl font-bold mb-6 italic">{t.serviceTitle}</h2>
                    <p className="text-slate-500">{t.serviceDesc}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                        <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#E5B351] transition-colors">
                            <svg className="w-7 h-7 brand-gold group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                        </div>
                        <h3 className="heading-font text-xl font-bold mb-4">{t.s1.t}</h3>
                        <p className="text-slate-500 leading-relaxed mb-6">{t.s1.d}</p>
                        <ul className="space-y-3 text-sm font-medium text-slate-600">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div> {t.s1.l1}</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div> {t.s1.l2}</li>
                        </ul>
                    </div>

                    <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                        <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#E5B351] transition-colors">
                            <svg className="w-7 h-7 brand-gold group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        </div>
                        <h3 className="heading-font text-xl font-bold mb-4">{t.s2.t}</h3>
                        <p className="text-slate-500 leading-relaxed mb-6">{t.s2.d}</p>
                        <ul className="space-y-3 text-sm font-medium text-slate-600">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div> {t.s2.l1}</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div> {t.s2.l2}</li>
                        </ul>
                    </div>

                    <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                        <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#E5B351] transition-colors">
                            <svg className="w-7 h-7 brand-gold group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 11-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
                        </div>
                        <h3 className="heading-font text-xl font-bold mb-4">{t.s3.t}</h3>
                        <p className="text-slate-500 leading-relaxed mb-6">{t.s3.d}</p>
                        <ul className="space-y-3 text-sm font-medium text-slate-600">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div> {t.s3.l1}</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div> {t.s3.l2}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                <div className="lg:w-1/2 relative">
                    <div className="bg-slate-900 rounded-[40px] p-2 aspect-video overflow-hidden shadow-2xl">
                        <div className="w-full h-full bg-[#1a1a1a] rounded-[38px] p-12 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="space-y-4">
                                    <div className="w-16 h-1 bg-[#E5B351]"></div>
                                    <div className="text-3xl font-bold text-white tracking-tighter italic">{t.activeLog}</div>
                                </div>
                                <div className="text-[#E5B351] font-mono text-sm">[ACTIVE_LOG]</div>
                            </div>
                            <div className="space-y-3 opacity-40 font-mono text-[10px] text-white">
                                <p>{"> Analyzing dataset_v2.0..."}</p>
                                <p>{"> Applying Cognitive Vision Filters..."}</p>
                                <p>{"> 84,293 data points converted to solutions."}</p>
                                <p>{"> Intelligence output: OPTIMIZED."}</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl"></div>
                </div>

                <div className="lg:w-1/2 space-y-8">
                    <h2 className="heading-font text-4xl font-bold leading-tight">{t.visionTitle}</h2>
                    <p className="text-slate-500 text-lg">
                        {t.visionDesc}
                    </p>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-1">
                                <svg className="w-3 h-3 text-[#E5B351]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">{t.v1.t}</h4>
                                <p className="text-sm text-slate-500">{t.v1.d}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-1">
                                <svg className="w-3 h-3 text-[#E5B351]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">{t.v2.t}</h4>
                                <p className="text-sm text-slate-500">{t.v2.d}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Partnership / Startup Focus Section */}
        <section id="partnership" className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white opacity-[0.02] pointer-events-none select-none">COGNIVIO</div>
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="heading-font text-3xl md:text-5xl font-bold mb-8 italic">{t.partnerTitle}</h2>
                <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                    {t.partnerDesc}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                    <div className="border border-white/10 p-6 rounded-2xl hover:border-[#E5B351]/50 transition-colors">
                        <h4 className="text-amber-400 font-bold mb-2">{t.p1.t}</h4>
                        <p className="text-sm text-slate-400">{t.p1.d}</p>
                    </div>
                    <div className="border border-white/10 p-6 rounded-2xl hover:border-[#E5B351]/50 transition-colors">
                        <h4 className="text-amber-400 font-bold mb-2">{t.p2.t}</h4>
                        <p className="text-sm text-slate-400">{t.p2.d}</p>
                    </div>
                </div>

                <div className="mt-12 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8 items-center opacity-60 grayscale">
                    <span className="text-sm uppercase tracking-widest font-bold">{t.partnerSub}</span>
                    <span className="px-4 py-2 bg-white/5 rounded-lg text-xs">FinTech</span>
                    <span className="px-4 py-2 bg-white/5 rounded-lg text-xs">E-Commerce</span>
                    <span className="px-4 py-2 bg-white/5 rounded-lg text-xs">Healthcare</span>
                    <span className="px-4 py-2 bg-white/5 rounded-lg text-xs">Logistics</span>
                </div>
            </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white border border-slate-100 shadow-2xl rounded-[40px] overflow-hidden flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 bg-amber-50 p-12 lg:p-16 flex flex-col justify-between">
                        <div>
                            <h2 className="heading-font text-4xl font-bold mb-6 brand-gold">{t.contactTitle}</h2>
                            <p className="text-slate-600 mb-8">{t.contactDesc}</p>
                            
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-slate-700">
                                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                                        <svg className="w-5 h-5 brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <span className="font-medium">hello@cognivio.org</span>
                                </div>
                                <div className="flex items-center gap-4 text-slate-700">
                                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                                        <svg className="w-5 h-5 brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    <span className="font-medium">Indonesia</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3 p-12 lg:p-16">
                        <form action="#" className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent! Cognivio will reach out soon.'); }}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-slate-400">{t.formName}</label>
                                    <input type="text" placeholder={t.placeholderName} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-amber-400 transition-all outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-slate-400">{t.formEmail}</label>
                                    <input type="email" placeholder="hello@company.com" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-amber-400 transition-all outline-none" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-slate-400">{t.formDropdown}</label>
                                <select className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-amber-400 transition-all outline-none">
                                    <option>Data Analytics</option>
                                    <option>Computer Vision AI</option>
                                    <option>Digital Strategy</option>
                                    <option>Partnership Inquiry</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-slate-400">{t.formMsg}</label>
                                <textarea rows={4} placeholder={t.placeholderMsg} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-amber-400 transition-all outline-none"></textarea>
                            </div>
                            <button type="submit" className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 shadow-xl hover:shadow-2xl transition-all">
                                {t.formBtn}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </Layout>
  );
}
