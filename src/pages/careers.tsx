import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { ProjectCard } from '../components/WorksComponents'; // We can reuse the Card structure or similar

const content = {
  en: {
    heroTag: 'Careers',
    heroTitle: <>Define the Future of <span className="brand-gold italic">Intelligence.</span></>,
    heroDesc: 'At Cognivio, we dont just build systems—we cultivate the minds that define the frontier of AI and Data Strategy. Join our world-class team of engineers and scientists.',
    
    rolesTitle: 'Open Positions',
    rolesDesc: 'Apply your expertise to solve the most complex challenges in data and cognitive intelligence.',
    roles: [
      {
        title: 'Senior AI Researcher',
        category: 'Research',
        description: 'Lead the development of next-generation neural architectures and predictive vision systems for enterprise logistics.',
        image: '/img/company/careers.png',
        slug: 'ai-researcher'
      },
      {
        title: 'Lead Data Scientist',
        category: 'Data Strategy',
        description: 'Architect scalable data intelligence pipelines and market sentiment engines for global financial partners.',
        image: '/img/projects/fintech.png',
        slug: 'data-scientist'
      },
      {
        title: 'Fullstack Engineer (AI UI)',
        category: 'Engineering',
        description: 'Build premium, responsive interfaces that bring complex data intelligence to life for our world-class partners.',
        image: '/img/projects/retail.png',
        slug: 'frontend-engineer'
      }
    ],

    cultureTitle: 'Why Cognivio?',
    cultureItems: [
      { title: 'Radical Autonomy', desc: 'We trust our experts. You define your path and the technologies you use.' },
      { title: 'Technical Excellence', desc: 'Work alongside global leaders in AI, Mathematics, and Strategic Intelligence.' },
      { title: 'Global Impact', desc: 'Your code and models directly transform how the worlds largest industries operate.' }
    ],

    ctaTitle: 'Dont see a perfect fit?',
    ctaButton: 'Send Open Application'
  },
  id: {
    heroTag: 'Karir',
    heroTitle: <>Definisikan Masa Depan <span className="brand-gold italic">Intelijen.</span></>,
    heroDesc: 'Di Cognivio, kami tidak hanya membangun sistem—kami membina pemikiran yang mendefinisikan batas AI dan Strategi Data. Bergabunglah dengan tim insinyur dan ilmuwan kelas dunia kami.',
    
    rolesTitle: 'Posisi Terbuka',
    rolesDesc: 'Terapkan keahlian Anda untuk menyelesaikan tantangan paling kompleks dalam data dan intelijen kognitif.',
    roles: [
      {
        title: 'Peneliti AI Senior',
        category: 'Riset',
        description: 'Memimpin pengembangan arsitektur saraf generasi berikutnya dan sistem visi prediktif untuk logistik perusahaan.',
        image: '/img/company/careers.png',
        slug: 'ai-researcher'
      },
      {
        title: 'Lead Data Scientist',
        category: 'Strategi Data',
        description: 'Arsitek pipeline intelijen data yang skalabel dan mesin sentimen pasar untuk mitra keuangan global.',
        image: '/img/projects/fintech.png',
        slug: 'data-scientist'
      },
      {
        title: 'Insinyur Fullstack (UI AI)',
        category: 'Rekayasa',
        description: 'Bangun antarmuka premium dan responsif yang menghidupkan intelijen data kompleks bagi mitra kelas dunia kami.',
        image: '/img/projects/retail.png',
        slug: 'frontend-engineer'
      }
    ],

    cultureTitle: 'Mengapa Cognivio?',
    cultureItems: [
      { title: 'Otonomi Radikal', desc: 'Kami mempercayai para ahli kami. Anda menentukan jalan dan teknologi yang Anda gunakan.' },
      { title: 'Keunggulan Teknis', desc: 'Bekerja bersama para pemimpin global dalam AI, Matematika, dan Intelijen Strategis.' },
      { title: 'Dampak Global', desc: 'Kode dan model Anda secara langsung mentransformasi cara industri terbesar di dunia beroperasi.' }
    ],

    ctaTitle: 'Tidak menemukan posisi yang cocok?',
    ctaButton: 'Kirim Lamaran Terbuka'
  }
};

export default function Careers(): React.ReactNode {
  const { siteConfig, i18n } = useDocusaurusContext();
  const lang = (i18n.currentLocale || 'en') as 'en' | 'id';
  const t = content[lang] || content.en;

  return (
    <Layout title={`Careers | ${siteConfig.title}`} description="Join Cognivio and help us define the frontier of AI and Data Strategy.">
      {/* @ts-expect-error - React 19 type mapping issue with Docusaurus Head */}
      <Head>
        <style dangerouslySetInnerHTML={{ __html: `
          .hero-gradient-careers {
            background: radial-gradient(circle at 70% 20%, rgba(229, 179, 81, 0.05) 0%, rgba(255, 255, 255, 0) 50%);
          }
        `}} />
      </Head>

      <main className="bg-white text-slate-900 overflow-x-hidden pt-12">
        <section className="relative pt-16 md:pt-24 pb-16 px-6 hero-gradient-careers">
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

        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">{t.rolesTitle}</h2>
              <p className="text-slate-500 max-w-xl text-lg mx-auto">{t.rolesDesc}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {t.roles.map((role, idx) => (
                 <div key={idx} className="glass-card p-10 flex flex-col justify-between h-full group hover:border-[#E5B351]/50 transition-all">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{role.category}</span>
                      <h3 className="font-heading text-2xl font-bold mt-4 mb-4 group-hover:text-[#E5B351] transition-colors">{role.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{role.description}</p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <a href={`#${role.slug}`} className="font-bold text-slate-900 hover:text-[#E5B351] flex items-center gap-2 group/link" onClick={(e) => { e.preventDefault(); alert('Please send your resume to careers@cognivio.org'); }}>
                        Apply Now
                        <svg className="w-4 h-4 transition-transform group-link-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                      </a>
                    </div>
                 </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 text-center lg:text-left">
            {t.cultureItems.map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
                   <div className="w-6 h-6 bg-[#E5B351] rounded-lg"></div>
                </div>
                <h3 className="font-heading text-2xl font-bold">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto p-12 bg-slate-900 rounded-[40px] text-white text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#E5B351] opacity-10 rounded-full -ml-32 -mt-32"></div>
              <h2 className="font-heading text-3xl font-bold mb-6 italic">{t.ctaTitle}</h2>
              <button className="px-8 py-4 bg-[#E5B351] text-slate-900 rounded-xl font-bold hover:bg-amber-400 transition-all hover:scale-105" onClick={() => alert('Send your application to careers@cognivio.org')}>
                {t.ctaButton}
              </button>
          </div>
        </section>
      </main>
    </Layout>
  );
}
