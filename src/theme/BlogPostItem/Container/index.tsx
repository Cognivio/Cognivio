import React, {type ReactNode} from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import type {Props} from '@theme/BlogPostItem/Container';
import clsx from 'clsx';

export default function BlogPostItemContainer({
  children,
  className,
}: Props): ReactNode {
  const {isBlogPostPage} = useBlogPost();
  return (
    <article className={clsx(
      className, 
      isBlogPostPage ? 'p-8 md:p-12 bg-white border border-slate-100 rounded-[40px] shadow-2xl shadow-amber-900/5 relative overflow-hidden z-10' : 
      'p-8 md:p-10 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-2xl hover:shadow-amber-900/5 hover:border-[#E5B351] transition-all duration-300 relative overflow-hidden group mb-8 last:mb-0'
    )}>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5B351] opacity-5 rounded-full -mr-32 -mt-32 group-hover:opacity-10 transition-opacity"></div>
      {children}
    </article>
  );
}
