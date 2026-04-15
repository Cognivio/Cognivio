import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/NotFound/Content';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

export default function NotFoundContent({className}: Props): ReactNode {
  return (
    <main className={clsx('relative min-h-[70vh] flex items-center justify-center py-20 px-6 overflow-hidden bg-white', className)}>
      {/* @ts-expect-error - React 19 type mapping issue with Docusaurus Head */}
      <Head>
        <title>Lost in Data | Cognivio</title>
      </Head>
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="inline-block px-4 py-1 bg-amber-50 border border-amber-100 rounded-full mb-6">
          <span className="text-xs font-bold text-[#E5B351] uppercase tracking-[0.2em]"> ERROR 404 </span>
        </div>

        <h1 className="font-heading text-4xl md:text-6xl font-bold text-slate-900 mb-6 italic">
          Lost in the <span className="brand-gold">Data?</span>
        </h1>
        
        <p className="text-xl text-slate-500 max-w-2xl leading-relaxed mb-12 mx-auto">
          <Translate id="theme.NotFound.p1">
            Even the clearest vision has its blind spots. The path you are looking for seems to have vanished or never existed in our current environment.
          </Translate>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link 
            to="/" 
            className="px-10 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-[#E5B351] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <Translate id="theme.NotFound.return">Return to Clarity</Translate>
          </Link>
          <Link 
            to="/contact" 
            className="px-10 py-4 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-all hover:border-slate-300"
          >
            <Translate id="theme.NotFound.contact">Reach Out</Translate>
          </Link>
        </div>
      </div>
    </main>
  );
}
