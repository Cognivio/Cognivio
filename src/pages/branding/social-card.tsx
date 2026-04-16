import React from 'react';
import Layout from '@theme/Layout';

export default function SocialCardGenerator() {
  return (
    <Layout 
      noFooter
      title="Branded Social Card"
      wrapperClassName="social-card-page-wrapper"
    >
      <style>{`
        .social-card-page-wrapper .navbar {
          display: none !important;
        }
      `}</style>
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-12">
        {/* The Open Graph Canvas - 1200x630 */}
        <div className="w-[1200px] h-[630px] bg-[#0f172a] border border-white/5 shadow-2xl relative overflow-hidden flex items-center px-16">
          
          {/* Custom Dark Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>

          {/* Premium Radial Glows */}
          <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute top-1/2 -right-1/4 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none transform -translate-y-1/2"></div>
          
          <div className="flex w-full items-center justify-between relative z-10">
            {/* Left Content */}
            <div className="w-1/2 space-y-10">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-2xl flex items-center justify-center">
                  <img src="/img/cognivio-eagle.svg" alt="Cognivio" className="w-10 h-10" />
                </div>
                <span className="heading-font text-5xl font-bold tracking-tight text-white">
                  Cognivio
                </span>
              </div>

              <div className="space-y-5">
                <h1 className="heading-font text-7xl font-bold leading-[1.05] text-white">
                  See Beyond the <br />
                  <span className="text-amber-400">Raw Data.</span>
                </h1>
                <p className="text-2xl text-slate-400 font-medium max-w-lg leading-relaxed">
                  The cognitive vision your business needs to scale with AI-driven intelligence.
                </p>
              </div>

              <div className="pt-6 flex items-center gap-6">
                <div className="px-6 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-lg font-bold text-xl shadow-inner">
                   cognivio.org
                </div>
                <div className="h-[1px] w-20 bg-linear-to-r from-amber-500/50 to-transparent"></div>
              </div>
            </div>

            {/* Right Visuals */}
            <div className="w-1/2 relative flex justify-center">
              <div className="relative w-[500px] h-[500px]">
                {/* AI Circle with Outer Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-[420px] h-[420px] bg-white shadow-[0_0_100px_rgba(229,179,81,0.4)] rounded-full flex items-center justify-center border border-white relative">
                     <img src="https://raw.githubusercontent.com/lucide-react/lucide/main/icons/eye.svg" className="w-40 h-40 opacity-[0.06] grayscale brightness-0" alt=""/>
                     <div className="absolute text-[240px] font-bold text-slate-100 select-none tracking-tighter opacity-[0.08]">AI</div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-9xl font-bold brand-gold tracking-tighter">AI</span>
                     </div>
                   </div>
                </div>

                {/* Dark Floating Cards - Static for screenshot */}
                <div className="absolute -top-6 -left-8 bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-7 rounded-3xl w-56 shadow-2xl">
                  <div className="h-2 w-16 bg-amber-400 rounded-full mb-5"></div>
                  <div className="space-y-2.5">
                    <div className="h-2 w-full bg-white/10 rounded-full"></div>
                    <div className="h-2 w-4/5 bg-white/10 rounded-full"></div>
                  </div>
                  <div className="mt-6 flex justify-between items-end">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Cognitive Flow</div>
                    <div className="text-2xl font-bold text-amber-400">98%</div>
                  </div>
                </div>

                <div className="absolute -bottom-10 -right-6 bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-7 rounded-3xl w-64 shadow-2xl" style={{animationDelay: "1s"}}>
                  <div className="flex gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="text-sm font-bold pt-2 text-white">Vision Score</div>
                  </div>
                  <div className="flex items-end gap-1.5 h-16">
                    <div className="w-2.5 bg-amber-500/30 h-1/2 rounded-full"></div>
                    <div className="w-2.5 bg-amber-500/50 h-3/4 rounded-full"></div>
                    <div className="w-2.5 bg-amber-500 h-full rounded-full"></div>
                    <div className="w-2.5 bg-amber-500/70 h-2/3 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Golden Highlight Border */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-amber-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-3 bg-linear-to-r from-amber-600 via-amber-400 to-amber-600"></div>
        </div>
      </div>
    </Layout>
  );
}
