import React from 'react';

interface CareerRoleProps {
  title: string;
  category: string;
  description: string;
  slug: string;
}

export const CareerRoleCard: React.FC<CareerRoleProps> = ({ title, category, description, slug }) => (
  <div className="glass-card p-10 flex flex-col justify-between h-full group hover:border-[#E5B351]/50 transition-all">
    <div>
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{category}</span>
      <h3 className="font-heading text-2xl font-bold mt-4 mb-4 group-hover:text-[#E5B351] transition-colors">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
    <div className="mt-8 pt-6 border-t border-slate-100">
      <a href={`#${slug}`} className="font-bold text-slate-900 hover:text-[#E5B351] flex items-center gap-2 group/link" onClick={(e) => { e.preventDefault(); alert('Please send your resume to careers@cognivio.org'); }}>
        Apply Now
        <svg className="w-4 h-4 transition-transform group-link-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </a>
    </div>
  </div>
);
