import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { ProjectCard } from '../components/WorksComponents';

const content = {
  en: {
    heroTag: 'Portfolio',
    heroTitle: <>Innovation in <span className="brand-gold italic">Action.</span></>,
    heroDesc: "Exploring the frontier of Intelligence. Here are some of the strategic solutions we've built to transform the digital landscape for our partners.",
    
    projectsTitle: 'Featured Projects',
    projectsDesc: 'Discover how we help businesses scale with custom AI, Data Analytics, and Strategic Intelligence.',
    
    projects: [
      {
        title: 'NeuralPath Logistics',
        category: 'Logistics AI',
        description: 'Optimizing complex delivery routes and predicting supply chain bottlenecks using real-time predictive vision and neural pattern recognition.',
        image: '/img/projects/logistics.png',
        slug: 'logistics-ai'
      },
      {
        title: 'Vanguard Finance',
        category: 'Fintech Analytics',
        description: 'A high-performance intelligence engine for real-time fraud detection and market sentiment analysis, processing millions of transactions daily.',
        image: '/img/projects/fintech.png',
        slug: 'fintech-analytics'
      },
      {
        title: 'Lumina Retail',
        category: 'Computer Vision',
        description: 'Advanced in-store customer behavior tracking and heat-map generation to optimize product placement and improve shopper engagement.',
        image: '/img/projects/retail.png',
        slug: 'retail-cv'
      }
    ],

    ctaTitle: 'Have a project in mind?',
    ctaButton: "Let's Collaborate"
  },
  id: {
    heroTag: 'Portofolio',
    heroTitle: <>Inovasi dalam <span className="brand-gold italic">Aksi.</span></>,
    heroDesc: "Menjelajahi batas kecerdasan. Berikut adalah beberapa solusi strategis yang telah kami bangun untuk mentransformasi lanskap digital bagi mitra kami.",
    
    projectsTitle: 'Proyek Unggulan',
    projectsDesc: 'Temukan bagaimana kami membantu bisnis berkembang dengan AI kustom, Analitik Data, dan Intelijen Strategis.',
    
    projects: [
      {
        title: 'Logistik NeuralPath',
        category: 'AI Logistik',
        description: 'Mengoptimalkan rute pengiriman yang kompleks dan memprediksi hambatan rantai pasokan menggunakan visi prediktif real-time dan pengenalan pola saraf.',
        image: '/img/projects/logistics.png',
        slug: 'logistics-ai'
      },
      {
        title: 'Keuangan Vanguard',
        category: 'Analitik Fintech',
        description: 'Mesin intelijen berkinerja tinggi untuk deteksi penipuan real-time dan analisis sentimen pasar, memproses jutaan transaksi setiap hari.',
        image: '/img/projects/fintech.png',
        slug: 'fintech-analytics'
      },
      {
        title: 'Ritel Lumina',
        category: 'Visi Komputer',
        description: 'Pelacakan perilaku pelanggan di toko yang canggih dan pembuatan peta panas untuk mengoptimalkan penempatan produk dan meningkatkan keterlibatan pembeli.',
        image: '/img/projects/retail.png',
        slug: 'retail-cv'
      }
    ],

    ctaTitle: 'Punya proyek dalam pikiran?',
    ctaButton: 'Mari Berkolaborasi'
  }
};

export default function Works(): React.ReactNode {
  const { siteConfig, i18n } = useDocusaurusContext();
  const lang = (i18n.currentLocale || 'en') as 'en' | 'id';
  const t = content[lang] || content.en;

  return (
    <Layout
      title={`Works | ${siteConfig.title}`}
      description="Explore Cognivio's portfolio of intelligent solutions, from logistics AI to fintech analytics and computer vision.">
      {/* @ts-expect-error - React 19 type mapping issue with Docusaurus Head */}
      <Head>
        <style dangerouslySetInnerHTML={{ __html: `
          .hero-gradient-works {
            background: radial-gradient(circle at 70% 20%, rgba(229, 179, 81, 0.05) 0%, rgba(255, 255, 255, 0) 50%);
          }
        `}} />
      </Head>

      <main className="bg-white text-slate-900 overflow-x-hidden pt-12">
        {/* Hero Section */}
        <section className="relative pt-16 md:pt-24 pb-16 px-6 hero-gradient-works overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-amber-50 border border-amber-100 rounded-full mb-8">
              <span className="text-xs font-bold text-[#E5B351] uppercase tracking-[0.2em]">{t.heroTag}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-7xl font-bold leading-[1.1] text-slate-900 mb-8 max-w-4xl mx-auto">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed mx-auto italic">
              {t.heroDesc}
            </p>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">{t.projectsTitle}</h2>
              <p className="text-slate-500 max-w-xl text-lg">{t.projectsDesc}</p>
              <div className="w-24 h-1 bg-[#E5B351] rounded-full mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {t.projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action or Footer Spacer */}
        <section className="py-20 px-6 text-center">
           <div className="max-w-4xl mx-auto p-12 bg-slate-900 rounded-[40px] text-white overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5B351] opacity-10 rounded-full -mr-32 -mt-32"></div>
              <h2 className="font-heading text-3xl font-bold mb-6 italic">{t.ctaTitle}</h2>
              <a href="/contact" className="inline-flex px-8 py-4 bg-[#E5B351] text-slate-900 rounded-xl font-bold hover:bg-amber-400 transition-all hover:scale-105">
                {t.ctaButton}
              </a>
           </div>
        </section>
      </main>
    </Layout>
  );
}
