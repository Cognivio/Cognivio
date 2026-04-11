import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

const content = {
  en: {
    heroTag: 'Contact Us',
    heroTitle: <>Let's Architect <span className="brand-gold italic">Intelligence.</span></>,
    heroDesc: 'Ready to transform your data into a strategic advantage? Connect with our experts today.',
    
    formTitle: 'Send a Message',
    nameLabel: 'Full Name',
    emailLabel: 'Email Address',
    subjectLabel: 'Subject',
    messageLabel: 'How can we help?',
    submitBtn: 'Submit Inquiry',

    contactInfo: [
      { 
        title: 'Global Headquarters',
        address: 'Sudirman Central Business District, Jakarta, Indonesia',
        email: 'hello@cognivio.org'
      },
      { 
        title: 'Partnerships',
        address: 'For strategic alliances and research collaborations.',
        email: 'partners@cognivio.org'
      }
    ]
  },
  id: {
    heroTag: 'Hubungi Kami',
    heroTitle: <>Mari Rancang <span className="brand-gold italic">Intelijen.</span></>,
    heroDesc: 'Siap mengubah data Anda menjadi keuntungan strategis? Terhubung dengan pakar kami hari ini.',
    
    formTitle: 'Kirim Pesan',
    nameLabel: 'Nama Lengkap',
    emailLabel: 'Alamat Email',
    subjectLabel: 'Subjek',
    messageLabel: 'Bagaimana kami bisa membantu?',
    submitBtn: 'Kirim Permintaan',

    contactInfo: [
      { 
        title: 'Kantor Pusat Global',
        address: 'Sudirman Central Business District, Jakarta, Indonesia',
        email: 'hello@cognivio.org'
      },
      { 
        title: 'Kemitraan',
        address: 'Untuk aliansi strategis dan kolaborasi riset.',
        email: 'partners@cognivio.org'
      }
    ]
  }
};

export default function Contact(): React.ReactNode {
  const { siteConfig, i18n } = useDocusaurusContext();
  const lang = (i18n.currentLocale || 'en') as 'en' | 'id';
  const t = content[lang] || content.en;

  return (
    <Layout title={`Contact Us | ${siteConfig.title}`} description="Connect with Cognivio for strategic AI and Data solutions.">
      {/* @ts-expect-error - React 19 type mapping issue with Docusaurus Head */}
      <Head>
        <style dangerouslySetInnerHTML={{ __html: `
          .hero-gradient-contact {
            background: radial-gradient(circle at 70% 20%, rgba(229, 179, 81, 0.05) 0%, rgba(255, 255, 255, 0) 50%);
          }
        `}} />
      </Head>

      <main className="bg-white text-slate-900 overflow-x-hidden pt-12">
        <section className="relative pt-16 md:pt-24 pb-16 px-6 hero-gradient-contact">
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

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
            {/* Contact Form */}
            <div className="lg:w-3/5">
               <div className="glass-card p-8 md:p-12 rounded-[40px] shadow-2xl border-slate-100">
                  <h2 className="font-heading text-3xl font-bold mb-10">{t.formTitle}</h2>
                  <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent! Our team will contact you shortly.'); }}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 capitalize">{t.nameLabel}</label>
                        <input type="text" required className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:outline-none focus:border-[#E5B351] transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 capitalize">{t.emailLabel}</label>
                        <input type="email" required className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:outline-none focus:border-[#E5B351] transition-colors" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 capitalize">{t.subjectLabel}</label>
                      <input type="text" required className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:outline-none focus:border-[#E5B351] transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 capitalize">{t.messageLabel}</label>
                      <textarea rows={5} required className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:outline-none focus:border-[#E5B351] transition-colors resize-none"></textarea>
                    </div>
                    <div className="pt-4">
                      <button type="submit" className="w-full md:w-auto px-10 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-[#E5B351] transition-all">
                        {t.submitBtn}
                      </button>
                    </div>
                  </form>
               </div>
            </div>

            {/* Contact Details */}
            <div className="lg:w-2/5 space-y-12 py-8">
               {t.contactInfo.map((info, idx) => (
                 <div key={idx} className="space-y-4">
                    <h3 className="font-heading text-xl font-bold text-[#E5B351] uppercase tracking-wider">{info.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">{info.address}</p>
                    <a href={`mailto:${info.email}`} className="text-slate-900 font-bold hover:text-[#E5B351] transition-colors text-lg">
                      {info.email}
                    </a>
                 </div>
               ))}
               
               <div className="pt-10 border-t border-slate-100 flex gap-6">
                  {/* Social Icons Placeholder */}
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center hover:bg-amber-50 cursor-pointer transition-colors group">
                    <div className="w-6 h-6 bg-slate-300 group-hover:bg-[#E5B351] rounded-sm"></div>
                  </div>
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center hover:bg-amber-50 cursor-pointer transition-colors group">
                    <div className="w-6 h-6 bg-slate-300 group-hover:bg-[#E5B351] rounded-sm"></div>
                  </div>
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center hover:bg-amber-50 cursor-pointer transition-colors group">
                    <div className="w-6 h-6 bg-slate-300 group-hover:bg-[#E5B351] rounded-sm"></div>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
