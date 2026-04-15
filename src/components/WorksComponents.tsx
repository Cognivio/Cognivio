import React from 'react';
import clsx from 'clsx';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, description, image, slug }) => {
  return (
    <div className="glass-card overflow-hidden rounded-[32px] group hover:border-[#E5B351]/50 transition-all duration-500">
      <div className="aspect-video overflow-hidden bg-slate-100 relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 bg-white/90 backdrop-blur text-[10px] font-bold text-slate-900 rounded-full shadow-sm uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>
      <div className="p-8 space-y-4">
        <h3 className="font-heading text-2xl font-bold leading-tight group-hover:text-[#E5B351] transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
        <div className="pt-2">
          <a 
            href={`#${slug}`} 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[#E5B351] transition-colors"
            onClick={(e) => { e.preventDefault(); alert('Case study coming soon!'); }}
          >
            View Case Study 
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
