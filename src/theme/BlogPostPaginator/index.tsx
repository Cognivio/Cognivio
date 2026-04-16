import React, {type ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import PaginatorNavLink from '@theme/PaginatorNavLink';
import type {Props} from '@theme/BlogPostPaginator';

export default function BlogPostPaginator(props: Props): ReactNode {
  const {nextItem, prevItem} = props;

  return (
    <div className="pt-20 border-t border-slate-100 mt-20">
      <h3 className="font-heading text-2xl font-bold text-slate-900 mb-10 flex items-center gap-4">
         <Translate id="blog.exploreMore">Explore More Articles</Translate>
         <div className="h-px bg-slate-100 flex-1 hidden md:block"></div>
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        {prevItem ? (
          <a href={prevItem.permalink} className="group relative p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:border-[#E5B351] hover:shadow-2xl hover:shadow-amber-900/5 transition-all duration-300 hover:-translate-y-1 hover:no-underline">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 block group-hover:text-[#E5B351] transition-colors flex items-center gap-2">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                 <Translate id="blog.newerArticle">Newer Article</Translate>
            </span>
            <div className="font-heading text-xl font-bold text-slate-900 leading-tight">
              {prevItem.title}
            </div>
          </a>
        ) : <div className="hidden md:block" />}
        
        {nextItem ? (
          <a href={nextItem.permalink} className="group relative p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:border-[#E5B351] hover:shadow-2xl hover:shadow-amber-900/5 transition-all duration-300 hover:-translate-y-1 text-right hover:no-underline">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 block group-hover:text-[#E5B351] transition-colors flex items-center gap-2 justify-end">
                 <Translate id="blog.olderArticle">Older Article</Translate>
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </span>
            <div className="font-heading text-xl font-bold text-slate-900 leading-tight">
              {nextItem.title}
            </div>
          </a>
        ) : <div className="hidden md:block" />}
      </div>
    </div>
  );
}
