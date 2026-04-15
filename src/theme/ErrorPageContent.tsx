import React, {type ReactNode} from 'react';
import Translate from '@docusaurus/Translate';
import {
  ErrorBoundaryError,
} from '@docusaurus/theme-common';
import type {Props} from '@theme/Error';
import Head from '@docusaurus/Head';

export default function ErrorPageContent({error, tryAgain}: Props): ReactNode {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      {/* @ts-expect-error - React 19 type mapping issue with Docusaurus Head */}
      <Head>
        <title>System Insight | Cognivio</title>
      </Head>

      <div className="max-w-3xl w-full">
         <div className="bg-white rounded-[40px] shadow-2xl border border-slate-100 overflow-hidden">
            <div className="bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400 opacity-20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
               <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                  <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center shrink-0 backdrop-blur-md border border-white/20">
                     <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                     </svg>
                  </div>
                  <div>
                    <h1 className="font-heading text-3xl md:text-4xl font-bold italic mb-3">
                      <Translate id="theme.ErrorPageContent.title">Vision Obstruction</Translate>
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      Our intelligence systems encountered an unexpected pattern. We are stabilizing the environment.
                    </p>
                  </div>
               </div>
            </div>

            <div className="p-8 md:p-12 space-y-8">
               <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Technical Logs</h3>
                  <div className="max-h-48 overflow-y-auto custom-scrollbar">
                     <ErrorBoundaryError error={error} />
                  </div>
               </div>

               <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                  <button 
                    onClick={tryAgain}
                    className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-[#E5B351] transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 group"
                  >
                    <span>Recalibrate Vision</span>
                    <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                  </button>
                  <a href="/" className="text-slate-500 font-bold hover:text-slate-900 transition-colors px-4">
                    Return to Dashboard
                  </a>
               </div>
            </div>

            <div className="px-12 py-6 bg-slate-50/50 border-t border-slate-50 text-center">
               <p className="text-xs text-slate-400 font-medium">Session ID: {Math.random().toString(36).substring(7).toUpperCase()}</p>
            </div>
         </div>
      </div>
    </main>
  );
}
