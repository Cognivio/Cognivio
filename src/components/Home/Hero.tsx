import React from 'react';

interface HeroProps {
  tag: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  startBtn: React.ReactNode;
  exploreBtn: React.ReactNode;
  visionScoreLabel: string;
  visionScoreValue: string;
  cognitiveFlowLabel: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  tag, 
  title, 
  description, 
  startBtn, 
  exploreBtn,
  visionScoreLabel,
  visionScoreValue,
  cognitiveFlowLabel
}) => {
  return (
    <section className="relative min-h-[100dvh] pt-32 lg:pt-20 pb-20 px-6 hero-gradient overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-24 relative z-10 w-full">
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left mt-10 lg:mt-0 xl:pr-12">
          <div className="inline-block px-4 py-1 bg-amber-50 border border-amber-100 rounded-full">
            <span className="text-xs font-bold text-[#E5B351] uppercase tracking-[0.2em]">{tag}</span>
          </div>
          <h1 className="heading-font text-5xl md:text-7xl font-bold leading-[1.1] text-slate-900">
            {title}
          </h1>
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed mx-auto lg:mx-0">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              {startBtn}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
            <a href="#services" className="px-8 py-4 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center justify-center">
              {exploreBtn}
            </a>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative mb-12 lg:mb-0 flex justify-center lg:justify-end">
          <div className="relative w-full aspect-square max-w-[320px] xs:max-w-sm lg:max-w-xl mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-linear-to-t from-amber-100 to-transparent rounded-full opacity-20 floating"></div>
            <div className="absolute -top-24 left-0 lg:top-1/4 lg:-left-8 glass-card p-3 lg:p-6 rounded-2xl w-44 lg:w-48 shadow-xl floating z-20" style={{animationDelay: "0.5s"}}>
              <div className="h-2 w-12 bg-amber-400 rounded mb-4"></div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-slate-100 rounded"></div>
                <div className="h-2 w-4/5 bg-slate-100 rounded"></div>
              </div>
              <div className="mt-4 flex justify-between items-end">
                <div className="text-xs font-bold text-slate-400 uppercase">{visionScoreLabel}</div>
                <div className="text-lg font-bold brand-gold">{visionScoreValue}</div>
              </div>
            </div>
            <div className="absolute -bottom-28 right-0 lg:bottom-1/4 lg:-right-12 glass-card p-3 lg:p-6 rounded-2xl w-48 lg:w-56 shadow-xl floating z-20" style={{animationDelay: "1.2s"}}>
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div className="text-sm font-bold pt-1">{cognitiveFlowLabel}</div>
              </div>
              <div className="flex items-end gap-1 h-12">
                <div className="w-2 bg-amber-200 h-1/2 rounded-t"></div>
                <div className="w-2 bg-amber-300 h-3/4 rounded-t"></div>
                <div className="w-2 bg-amber-500 h-full rounded-t"></div>
                <div className="w-2 bg-amber-400 h-2/3 rounded-t"></div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="w-[280px] lg:w-[450px] aspect-square bg-white shadow-[0_0_120px_rgba(229,179,81,0.15)] rounded-full flex items-center justify-center border border-amber-50 relative flex-shrink-0">
                <img src="https://raw.githubusercontent.com/lucide-react/lucide/main/icons/eye.svg" className="w-20 h-20 lg:w-40 lg:h-40 opacity-[0.03] lg:opacity-[0.05]" alt=""/>
                <div className="absolute text-[110px] lg:text-[200px] font-bold text-slate-50 select-none tracking-tighter">AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
