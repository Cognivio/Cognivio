import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

const content = {
  en: {
    heroTag: 'Partnership',
    heroTitle: <>Accelerate Innovation <span className="brand-gold italic">Together.</span></>,
    heroDesc: 'Cognivio collaborates with industry leaders and research pioneers to build the next generation of intelligent ecosystems. Let’s multiply our impact.',
    
    modelsTitle: 'Collaboration Models',
    modelsDesc: 'We offer structured pathways for technical, strategic, and research-driven synergy.',
    models: [
      {
        title: 'Technical Integration',
        desc: 'Embed Cognivio’s cognitive vision and intelligence engines directly into your existing product ecosystem.',
        icon: 'T'
      },
      {
        title: 'Scientific Research',
        desc: 'Co-develop frontier neural architectures and data strategies with our world-class research laboratory.',
        icon: 'S'
      },
      {
        title: 'Venture Support',
        desc: 'Strategic technical backing and scale-up intelligence for high-impact AI/Data startups.',
        icon: 'V'
      }
    ],

    stepsTitle: 'How we Partner',
    steps: [
      { id: '01', title: 'Discovery', desc: 'Identifying areas of mutual strategic value and technical alignment.' },
      { id: '02', title: 'Protocol', desc: 'Defining the framework for data sharing, IP, and collaboration goals.' },
      { id: '03', title: 'Execution', desc: 'Agile co-development and integration phase with dedicated support.' },
      { id: '04', title: 'Scaling', desc: 'Full-scale market deployment and continuous strategic optimization.' }
    ],

    ctaTitle: 'Ready to Lead the Frontier?',
    ctaButton: 'Inquire about Partnership'
  },
  id: {
    heroTag: 'Kemitraan',
    heroTitle: <>Akselerasikan Inovasi <span className="brand-gold italic">Bersama.</span></>,
    heroDesc: 'Cognivio berkolaborasi dengan pemimpin industri dan pionir riset untuk membangun ekosistem cerdas generasi berikutnya. Mari lipat gandakan dampak kita.',
    
    modelsTitle: 'Model Kolaborasi',
    modelsDesc: 'Kami menawarkan jalur terstruktur untuk sinergi teknis, strategis, dan berbasis riset.',
    models: [
      {
        title: 'Integrasi Teknis',
        desc: 'Sematkan visi kognitif dan mesin intelijen Cognivio langsung ke dalam ekosistem produk Anda yang sudah ada.',
        icon: 'T'
      },
      {
        title: 'Riset Ilmiah',
        desc: 'Kembangkan bersama arsitektur saraf mutakhir dan strategi data dengan laboratorium riset kelas dunia kami.',
        icon: 'S'
      },
      {
        title: 'Dukungan Ventura',
        desc: 'Dukungan teknis strategis dan intelijen skala besar untuk startup AI/Data berdampak tinggi.',
        icon: 'V'
      }
    ],

    stepsTitle: 'Cara kami Bermitra',
    steps: [
      { id: '01', title: 'Penemuan', desc: 'Mengidentifikasi area nilai strategis timbal balik dan keselarasan teknis.' },
      { id: '02', title: 'Protokol', desc: 'Menentukan kerangka kerja untuk berbagi data, IP, dan tujuan kolaborasi.' },
      { id: '03', title: 'Eksekusi', desc: 'Fase pengembangan dan integrasi bersama yang gesit dengan dukungan khusus.' },
      { id: '04', title: 'Penskalaan', desc: 'Penyebaran pasar skala penuh dan optimalisasi strategis berkelanjutan.' }
    ],

    ctaTitle: 'Siap Memimpin Perbatasan?',
    ctaButton: 'Tanyakan tentang Kemitraan'
  }
};

export default function Partnership(): React.ReactNode {
  const { siteConfig, i18n } = useDocusaurusContext();
  const lang = (i18n.currentLocale || 'en') as 'en' | 'id';
  const t = content[lang] || content.en;

  return (
    <Layout title={`Partnership | ${siteConfig.title}`} description="Partner with Cognivio for strategic AI and Data research and integration.">
      {/* @ts-expect-error - React 19 type mapping issue with Docusaurus Head */}
      <Head>
        <style dangerouslySetInnerHTML={{ __html: `
          .hero-gradient-partnership {
            background: radial-gradient(circle at 70% 30%, rgba(229, 179, 81, 0.08) 0%, rgba(255, 255, 255, 0) 50%);
          }
        `}} />
      </Head>

      <main className="bg-white text-slate-900 overflow-x-hidden pt-12">
        <section className="relative pt-16 md:pt-24 pb-24 px-6 hero-gradient-partnership overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <div className="inline-block px-4 py-1 bg-amber-50 border border-amber-100 rounded-full">
                <span className="text-xs font-bold text-[#E5B351] uppercase tracking-[0.2em]">{t.heroTag}</span>
              </div>
              <h1 className="font-heading text-4xl md:text-7xl font-bold leading-[1.1] text-slate-900">
                {t.heroTitle}
              </h1>
              <p className="text-xl text-slate-500 max-w-xl leading-relaxed mx-auto lg:mx-0 italic">
                {t.heroDesc}
              </p>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-amber-100 rounded-full opacity-20 floating"></div>
                  <img src="/img/company/partnership.png" className="w-full h-full object-contain relative z-10" alt="Partnership Illustration" />
               </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-slate-900 text-white rounded-t-[60px] md:rounded-t-[100px] -mt-20 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center lg:text-left">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">{t.modelsTitle}</h2>
              <p className="text-slate-400 max-w-2xl text-lg">{t.modelsDesc}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {t.models.map((model, idx) => (
                <div key={idx} className="glass-card bg-white/5 border-white/10 p-10 hover:border-[#E5B351]/30 transition-all rounded-[40px] group">
                   <div className="w-14 h-14 rounded-2xl bg-[#E5B351] flex items-center justify-center text-slate-900 font-bold text-2xl mb-8 group-hover:scale-110 transition-transform">
                      {model.icon}
                   </div>
                   <h3 className="font-heading text-2xl font-bold mb-4">{model.title}</h3>
                   <p className="text-slate-400 leading-relaxed">{model.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
             <h2 className="font-heading text-3xl md:text-4xl font-bold mb-20 text-center">{t.stepsTitle}</h2>
             <div className="grid md:grid-cols-4 gap-12">
                {t.steps.map((step, idx) => (
                  <div key={idx} className="space-y-6 relative">
                     <div className="text-5xl font-bold text-slate-100 font-heading absolute -top-10 -left-4 z-0">{step.id}</div>
                     <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        <section className="py-20 px-6 text-center">
           <div className="max-w-4xl mx-auto p-12 bg-slate-50 border border-slate-100 rounded-[40px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5B351] opacity-5 rounded-full -mr-32 -mt-32"></div>
              <h2 className="font-heading text-3xl font-bold mb-6 italic">{t.ctaTitle}</h2>
              <a href="/contact" className="inline-flex px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-[#E5B351] transition-all hover:scale-105">
                {t.ctaButton}
              </a>
           </div>
        </section>
      </main>
    </Layout>
  );
}
