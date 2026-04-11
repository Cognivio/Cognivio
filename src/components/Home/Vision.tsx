import React from 'react';

interface VisionPoint {
  title: string;
  description: string;
}

interface VisionProps {
  activeLog: string;
  title: React.ReactNode;
  description: React.ReactNode;
  v1: VisionPoint;
  v2: VisionPoint;
}

export const Vision: React.FC<VisionProps> = ({ activeLog, title, description, v1, v2 }) => {
  return (
    <section id="vision" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 relative">
          <div className="bg-slate-900 rounded-[40px] p-2 aspect-video overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-[#1a1a1a] rounded-[38px] p-12 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="space-y-4">
                  <div className="w-16 h-1 bg-[#E5B351]"></div>
                  <div className="text-3xl font-bold text-white tracking-tighter italic">{activeLog}</div>
                </div>
                <div className="text-[#E5B351] font-mono text-sm">[ACTIVE_LOG]</div>
              </div>
              <div className="space-y-3 opacity-40 font-mono text-[10px] text-white">
                <p>{"> Analyzing dataset_v2.0..."}</p>
                <p>{"> Applying Cognitive Vision Filters..."}</p>
                <p>{"> 84,293 data points converted to solutions."}</p>
                <p>{"> Intelligence output: OPTIMIZED."}</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="lg:w-1/2 space-y-8">
          <h2 className="heading-font text-4xl font-bold leading-tight">{title}</h2>
          <p className="text-slate-500 text-lg">
            {description}
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-[#E5B351]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">{v1.title}</h4>
                <p className="text-sm text-slate-500">{v1.description}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-[#E5B351]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">{v2.title}</h4>
                <p className="text-sm text-slate-500">{v2.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
