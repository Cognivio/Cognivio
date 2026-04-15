import React from 'react';

interface ContactProps {
  title: string;
  description: string;
  formName: string;
  formEmail: string;
  formDropdown: string;
  formMsg: string;
  formBtn: string;
  placeholderName: string;
  placeholderMsg: string;
}

export const Contact: React.FC<ContactProps> = ({ 
  title, 
  description, 
  formName, 
  formEmail, 
  formDropdown, 
  formMsg, 
  formBtn, 
  placeholderName, 
  placeholderMsg 
}) => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border border-slate-100 shadow-2xl rounded-[40px] overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-amber-50 p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <h2 className="heading-font text-4xl font-bold mb-6 brand-gold">{title}</h2>
              <p className="text-slate-600 mb-8">{description}</p>
              
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
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-400">{formName}</label>
                  <input type="text" placeholder={placeholderName} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-amber-400 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-400">{formEmail}</label>
                  <input type="email" placeholder="hello@company.com" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-amber-400 transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-400">{formDropdown}</label>
                <select className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-amber-400 transition-all outline-none">
                  <option>Data Analytics</option>
                  <option>Computer Vision AI</option>
                  <option>Digital Strategy</option>
                  <option>Partnership Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-400">{formMsg}</label>
                <textarea rows={4} placeholder={placeholderMsg} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-amber-400 transition-all outline-none"></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 shadow-xl hover:shadow-2xl transition-all">
                {formBtn}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
