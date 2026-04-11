import React from 'react';

interface PartnerProgram {
  title: string;
  description: string;
}

interface PartnershipProps {
  title: React.ReactNode;
  description: React.ReactNode;
  p1: PartnerProgram;
  p2: PartnerProgram;
  partnerSub: string;
}

export const Partnership: React.FC<PartnershipProps> = ({ title, description, p1, p2, partnerSub }) => {
  return (
    <section id="partnership" className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white opacity-[0.02] pointer-events-none select-none">COGNIVIO</div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="heading-font text-3xl md:text-5xl font-bold mb-8 italic">{title}</h2>
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          {description}
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
          <div className="border border-white/10 p-6 rounded-2xl hover:border-[#E5B351]/50 transition-colors">
            <h4 className="text-amber-400 font-bold mb-2">{p1.title}</h4>
            <p className="text-sm text-slate-400">{p1.description}</p>
          </div>
          <div className="border border-white/10 p-6 rounded-2xl hover:border-[#E5B351]/50 transition-colors">
            <h4 className="text-amber-400 font-bold mb-2">{p2.title}</h4>
            <p className="text-sm text-slate-400">{p2.description}</p>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8 items-center opacity-60 grayscale">
          <span className="text-sm uppercase tracking-widest font-bold">{partnerSub}</span>
          <span className="px-4 py-2 bg-white/5 rounded-lg text-xs">FinTech</span>
          <span className="px-4 py-2 bg-white/5 rounded-lg text-xs">E-Commerce</span>
          <span className="px-4 py-2 bg-white/5 rounded-lg text-xs">Healthcare</span>
          <span className="px-4 py-2 bg-white/5 rounded-lg text-xs">Logistics</span>
        </div>
      </div>
    </section>
  );
};
