import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {
  useBlogAuthorPageTitle,
  BlogAuthorsListViewAllLabel,
} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import Author from '@theme/Blog/Components/Author';

type Props = {
  readonly author: any;
  readonly items: readonly any[];
  readonly sidebar: any;
  readonly listMetadata: any;
};

function Metadata({author}: {author: Props['author']}): ReactNode {
  const title = useBlogAuthorPageTitle(author);
  return (
    <>
      <PageMetadata title={title} />
      <SearchMetadata tag="blog_authors_posts" />
    </>
  );
}

function ViewAllAuthorsLink() {
  return (
    <Link 
      href="/blog/authors" 
      className="inline-flex items-center gap-2 text-xs font-bold text-[#E5B351] hover:underline uppercase tracking-widest mt-4"
    >
      <BlogAuthorsListViewAllLabel /> &rarr;
    </Link>
  );
}

export default function BlogAuthorsPostsPage(props: any): ReactNode {
  const {author, items, sidebar, listMetadata} = props;
  
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogAuthorsPostsPage,
      )}>
      <Metadata author={author} />
      <BlogLayout sidebar={sidebar}>
        <div className="space-y-12">
          {/* Enhanced Author Header */}
          <header className="bg-white border border-slate-100 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-amber-900/5 relative overflow-hidden mb-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5B351] opacity-5 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
               <Author as="h1" author={author} />
               {author.description && (
                 <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-2xl">
                   {author.description}
                 </p>
               )}
               <ViewAllAuthorsLink />
            </div>
          </header>

          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-slate-100 flex-1"></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                {items.length} Articles by {author.name}
              </span>
              <div className="h-px bg-slate-100 flex-1"></div>
            </div>
            
            <BlogPostItems items={items} />
            <BlogListPaginator metadata={listMetadata} />
          </div>
        </div>
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}
