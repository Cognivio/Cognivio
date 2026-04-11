import React from 'react';

interface ServiceItem {
  title: string;
  description: string;
  list: string[];
}

interface ServicesProps {
  title: React.ReactNode;
  description: React.ReactNode;
  s1: ServiceItem;
  s2: ServiceItem;
  s3: ServiceItem;
}

export const Services: React.FC<ServicesProps> = ({ title, description, s1, s2, s3 }) => {
  return (
    <section id="services" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="heading-font text-3xl md:text-4xl font-bold mb-6 italic">{title}</h2>
          <p className="text-slate-500">{description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<svg className="w-7 h-7 brand-gold group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>}
            {...s1} 
          />
          <ServiceCard 
            icon={<svg className="w-7 h-7 brand-gold group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>}
            {...s2} 
          />
          <ServiceCard 
            icon={<svg className="w-7 h-7 brand-gold group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 11-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>}
            {...s3} 
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<ServiceItem & { icon: React.ReactNode }> = ({ title, description, list, icon }) => (
  <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
    <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#E5B351] transition-colors">
      {icon}
    </div>
    <h3 className="heading-font text-xl font-bold mb-4">{title}</h3>
    <p className="text-slate-500 leading-relaxed mb-6">{description}</p>
    <ul className="space-y-3 text-sm font-medium text-slate-600">
      {list.map((item, idx) => (
        <li key={idx} className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div> {item}
        </li>
      ))}
    </ul>
  </div>
);
