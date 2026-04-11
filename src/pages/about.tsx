import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { TeamMemberCard, TimelineItem } from '../components/AboutComponents';

const content = {
  en: {
    heroTag: 'Our Story',
    heroTitle: <>Pioneering the <span className="brand-gold italic">Cognitive Revolution.</span></>,
    heroDesc: "Beyond algorithms, we build vision. Cognivio was founded on the belief that data should not just be processed, but understood with human-like intuition.",
    
    aboutTitle: 'Who We Are',
    aboutDesc: "Cognivio is a research-driven AI and Data solutions firm. We specialize in transforming complex datasets into visible, actionable strategies using our proprietary Cognitive Vision technology. Our team blends deep technical expertise with a passion for building systems that actually make sense for the people using them.",
    
    visionTitle: 'Vision',
    visionDesc: 'To empower every organization with human-centric artificial intelligence that sees beyond numbers.',
    missionTitle: 'Mission',
    missionDesc: 'Bridging the gap between raw data and actionable wisdom through innovative cognitive technologies and strategic architectural design.',
    
    teamTitle: 'The Minds Behind Cognivio',
    teamDesc: 'Meet the visionaries, engineers, and strategists working to redefine the data landscape.',
    
    journeyTitle: 'Our Journey',
    journeyDesc: 'From a small research lab to a growing hub of AI innovation.',
    
    journey: [
      { year: '2023', title: 'The Spark', desc: 'Cognivio was founded as a boutique data research lab focusing on neural pattern recognition.' },
      { year: '2024', title: 'Cognitive API v1', desc: 'Launched our flagship Cognitive Vision API, allowing businesses to interpret visual data in real-time.' },
      { year: '2025', title: 'Strategic Scaling', desc: 'Expanded our operations across Southeast Asia and secured key partnerships in the Logistics and Fintech sectors.' },
      { year: '2026', title: 'The Future', desc: 'Continuing our pursuit of the "Beyond-Data" philosophy, building the next generation of intelligence-led ecosystems.' }
    ],

    team: [
      { name: 'Farrel Augusta Dinata', role: 'Data Analyst', image: 'https://github.com/FarrelAD.png', linkedin: 'https://linkedin.com/in/farrelad', github: 'https://github.com/FarrelAD' },
      { name: 'Cakra Wangsa May Ahmad Widodo', role: 'Data Analyst', image: 'https://github.com/MiracleCakra.png', linkedin: 'https://linkedin.com/in/cakra-wangsa-may-ahmad-widodo', github: 'https://github.com/MiracleCakra' },
      { name: 'Vidi Joshubzky Saviola', role: 'AI Engineer', image: 'https://github.com/TMTMPST.png', linkedin: 'https://linkedin.com/in/vidi-joshubzky-saviola', github: 'https://github.com/TMTMPST' },
      { name: 'Muhammad Rifda Musyaffa', role: 'Data Engineer', image: 'https://github.com/MRifdaM.png', linkedin: 'https://linkedin.com/in/muhammad-rifda-musyaffa-01b8b6238', github: 'https://github.com/MRifdaM' },
      { name: 'Hidayat Widi', role: 'AI Engineer', image: 'https://github.com/Raruu.png', linkedin: 'https://linkedin.com/in/raruu', github: 'https://github.com/Raruu' }, 
    ],
    ctaTitle: 'Ready to see your data from a new perspective?',
    ctaButton: "Let's Talk"
  },
  id: {
    heroTag: 'Cerita Kami',
    heroTitle: <>Mempelopori <span className="brand-gold italic">Revolusi Kognitif.</span></>,
    heroDesc: 'Melampaui algoritma, kami membangun visi. Cognivio didirikan atas keyakinan bahwa data tidak hanya harus diproses, tetapi dipahami dengan intuisi mirip manusia.',
    
    aboutTitle: 'Siapa Kami',
    aboutDesc: 'Cognivio adalah firma solusi Data dan AI yang didorong oleh riset. Kami ahli dalam mengubah kumpulan data kompleks menjadi strategi yang terlihat dan dapat ditindaklanjuti menggunakan teknologi Cognitive Vision milik kami. Tim kami memadukan keahlian teknis yang mendalam dengan semangat untuk membangun sistem yang benar-benar masuk akal bagi orang yang menggunakannya.',
    
    visionTitle: 'Visi',
    visionDesc: 'Memberdayakan setiap organisasi dengan kecerdasan buatan yang berpusat pada manusia yang mampu melihat melampaui angka.',
    missionTitle: 'Misi',
    missionDesc: 'Menjembatani celah antara data mentah dan kebijaksanaan yang dapat ditindaklanjuti melalui teknologi kognitif inovatif dan desain arsitektur strategis.',
    
    teamTitle: 'Pikiran di Balik Cognivio',
    teamDesc: 'Kenali para visioner, insinyur, dan strategis yang bekerja untuk mendefinisikan ulang lanskap data.',
    
    journeyTitle: 'Perjalanan Kami',
    journeyDesc: 'Dari laboratorium riset kecil menjadi pusat inovasi AI yang berkembang.',
    
    journey: [
      { year: '2023', title: 'Percikan Awal', desc: 'Cognivio didirikan sebagai laboratorium riset data butik yang berfokus pada pengenalan pola saraf.' },
      { year: '2024', title: 'Cognitive API v1', desc: 'Meluncurkan API Visi Kognitif andalan kami, memungkinkan bisnis untuk menginterpretasikan data visual secara real-time.' },
      { year: '2025', title: 'Skalabilitas Strategis', desc: 'Memperluas operasi kami di Asia Tenggara dan menjalin kemitraan utama di sektor Logistik dan Fintech.' },
      { year: '2026', title: 'Masa Depan', desc: 'Melanjutkan filosofi "Beyond-Data" kami, membangun ekosistem berbasis intelijen generasi berikutnya.' }
    ],

    team: [
      { name: 'Farrel Augusta Dinata', role: 'Data Analyst', image: 'https://github.com/FarrelAD.png', linkedin: 'https://linkedin.com/in/farrelad', github: 'https://github.com/FarrelAD' },
      { name: 'Cakra Wangsa May Ahmad Widodo', role: 'Data Analyst', image: 'https://github.com/MiracleCakra.png', linkedin: 'https://linkedin.com/in/cakra-wangsa-may-ahmad-widodo', github: 'https://github.com/MiracleCakra' },
      { name: 'Vidi Joshubzky Saviola', role: 'AI Engineer', image: 'https://github.com/TMTMPST.png', linkedin: 'https://linkedin.com/in/vidi-joshubzky-saviola', github: 'https://github.com/TMTMPST' },
      { name: 'Muhammad Rifda Musyaffa', role: 'Data Engineer', image: 'https://github.com/MRifdaM.png', linkedin: 'https://linkedin.com/in/muhammad-rifda-musyaffa-01b8b6238', github: 'https://github.com/MRifdaM' },
      { name: 'Hidayat Widi', role: 'AI Engineer', image: 'https://github.com/Raruu.png', linkedin: 'https://linkedin.com/in/raruu', github: 'https://github.com/Raruu' }, 
    ],
    ctaTitle: 'Siap untuk melihat data Anda dari perspektif baru?',
    ctaButton: 'Mari Berbicara'
  }
};

export default function About(): React.ReactNode {
  const { siteConfig, i18n } = useDocusaurusContext();
  const lang = (i18n.currentLocale || 'en') as 'en' | 'id';
  const t = content[lang] || content.en;

  return (
    <Layout
      title={`About Us | ${siteConfig.title}`}
      description="Learn more about Cognivio, our vision, mission, and the team behind our intelligent solutions.">
      {/* @ts-expect-error - React 19 type mapping issue with Docusaurus Head */}
      <Head>
        <style dangerouslySetInnerHTML={{ __html: `
          .hero-gradient-about {
            background: radial-gradient(circle at 30% 20%, rgba(229, 179, 81, 0.05) 0%, rgba(255, 255, 255, 0) 50%);
          }
        `}} />
      </Head>

      <main className="bg-white text-slate-900 overflow-x-hidden pt-12">
        {/* Hero Section */}
        <section className="relative pt-16 md:pt-24 pb-16 px-6 hero-gradient-about overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-amber-50 border border-amber-100 rounded-full mb-8">
              <span className="text-xs font-bold text-[#E5B351] uppercase tracking-[0.2em]">{t.heroTag}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-7xl font-bold leading-[1.1] text-slate-900 mb-8 max-w-4xl mx-auto">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed mx-auto">
              {t.heroDesc}
            </p>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-font text-3xl md:text-4xl font-bold mb-8 italic">{t.aboutTitle}</h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>{t.aboutDesc}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-8 rounded-3xl border-l-4 border-l-[#E5B351]">
                  <h3 className="heading-font text-xl font-bold mb-4">{t.visionTitle}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{t.visionDesc}</p>
                </div>
                <div className="glass-card p-8 rounded-3xl border-l-4 border-l-slate-900 mt-8">
                  <h3 className="heading-font text-xl font-bold mb-4">{t.missionTitle}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{t.missionDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="heading-font text-3xl md:text-4xl font-bold mb-6 italic">{t.teamTitle}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-16">{t.teamDesc}</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {t.team.map((member, idx) => (
                <TeamMemberCard key={idx} {...member} />
              ))}
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/2">
                <div className="sticky top-32">
                  <h2 className="heading-font text-3xl md:text-4xl font-bold mb-6 italic">{t.journeyTitle}</h2>
                  <p className="text-slate-500 text-lg mb-8">{t.journeyDesc}</p>
                  <div className="w-24 h-1 bg-[#E5B351] rounded-full"></div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="space-y-8 md:space-y-4">
                  {t.journey.map((item, idx) => (
                    <TimelineItem 
                      key={idx} 
                      {...item} 
                      isLast={idx === t.journey.length - 1} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action or Footer Spacer */}
        <section className="py-20 px-6 text-center">
           <div className="max-w-4xl mx-auto p-12 bg-slate-900 rounded-[40px] text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5B351] opacity-10 rounded-full -mr-32 -mt-32"></div>
              <h2 className="heading-font text-3xl font-bold mb-6 italic">{t.ctaTitle}</h2>
              <a href="/contact" className="inline-flex px-8 py-4 bg-[#E5B351] text-slate-900 rounded-xl font-bold hover:bg-amber-400 transition-all">
                {t.ctaButton}
              </a>
           </div>
        </section>
      </main>
    </Layout>
  );
}
