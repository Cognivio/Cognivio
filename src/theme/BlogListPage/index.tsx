import React, {type ReactNode} from 'react';
import clsx from 'clsx';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props} from '@theme/BlogListPage';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';

function BlogListPageMetadata(props: Props): ReactNode {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

// Custom Date formatter helper
function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function BlogListPageContent({metadata, items}: Props): ReactNode {
  const featuredPost = items.length > 0 ? items[0] : null;
  const regularPosts = items.slice(1);

  return (
    <Layout title={metadata.blogTitle} description={metadata.blogDescription}>
      <main className="bg-white text-slate-900 pb-24 overflow-x-hidden pt-24 font-['Inter']">
        {/* Abstract Floating Tags (Background Element) */}
        <div className="absolute inset-x-0 top-0 overflow-hidden h-[600px] pointer-events-none">
          <div className="absolute -left-10 top-40 w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center text-xs font-bold text-slate-600 floating" style={{animationDelay: "0s"}}>AI Tool</div>
          <div className="absolute left-1/4 top-72 w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center text-xs font-bold text-slate-600 floating" style={{animationDelay: "2s"}}>Technology</div>
          <div className="absolute left-10 top-[400px] w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center text-xs font-bold text-slate-600 floating" style={{animationDelay: "1s"}}>Foods</div>
          
          <div className="absolute right-10 top-32 w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-xs font-bold text-slate-600 floating" style={{animationDelay: "1.5s"}}>Play</div>
          <div className="absolute right-1/4 top-60 w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center text-xs font-bold text-slate-600 floating" style={{animationDelay: "0.5s"}}>Intelligence</div>
          <div className="absolute right-20 top-96 w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center text-xs font-bold text-slate-600 floating" style={{animationDelay: "2.5s"}}>Lifestyle</div>
        </div>

        {/* Hero Area */}
        <section className="relative text-center mx-auto max-w-4xl px-6 pt-16 pb-20 hero-gradient rounded-3xl z-10 mb-20">
            <h1 className="heading-font text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
              Discover Latest<br/> <span className="brand-gold italic">Articles</span>
            </h1>
        </section>

        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {/* Featured Post */}
          {featuredPost && (
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-3/5">
                {console.log('Post Metadata:', featuredPost.content.metadata)}
                <div className="aspect-4/3 rounded-[32px] overflow-hidden bg-slate-100 shadow-lg">
                  {featuredPost.content.frontMatter.image ? (
                    <img 
                      src={featuredPost.content.frontMatter.image as string} 
                      alt={featuredPost.content.metadata.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-linear-to-tr from-amber-100 to-slate-200 flex items-center justify-center">
                      <span className="text-slate-400 font-medium">No Cover Provided</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="lg:w-2/5 space-y-6">
                <h2 className="heading-font text-4xl font-bold leading-tight hover:text-[#E5B351] transition-colors">
                  <a href={featuredPost.content.metadata.permalink} className="text-inherit hover:no-underline">
                    {featuredPost.content.metadata.title}
                  </a>
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed line-clamp-3">
                  {featuredPost.content.metadata.description}
                </p>
                <div className="flex items-center gap-6 text-sm font-semibold text-slate-600">
                  {featuredPost.content.metadata.authors && featuredPost.content.metadata.authors.length > 0 && (
                    <span className="flex items-center gap-2">
                       <svg className="w-4 h-4 text-[#E5B351]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                      {featuredPost.content.metadata.authors[0].name}
                    </span>
                  )}
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#E5B351]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    {formatDate(featuredPost.content.metadata.date)}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#E5B351]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {Math.ceil(featuredPost.content.metadata.readingTime || 2)} min read
                  </span>
                </div>
                <div>
                  <a href={featuredPost.content.metadata.permalink} className="inline-block px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-[#E5B351] transition-all hover:-translate-y-1">
                    Read more &rarr;
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts Grid */}
          {regularPosts.length > 0 && (
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {regularPosts.map((post) => (
                  <div key={post.content.metadata.permalink} className="space-y-5 group">
                    <div className="aspect-video rounded-3xl overflow-hidden bg-slate-100 relative">
                       {post.content.frontMatter.image ? (
                          <img 
                            src={post.content.frontMatter.image as string} 
                            alt={post.content.metadata.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-linear-to-tr from-amber-50 to-slate-100 flex items-center justify-center">
                            <span className="text-slate-300">No Cover Provided</span>
                          </div>
                        )}
                        {/* Tags */}
                        {post.content.metadata.tags && post.content.metadata.tags.length > 0 && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold text-slate-800 rounded-full shadow-sm">
                              {post.content.metadata.tags[0].label}
                            </span>
                          </div>
                        )}
                    </div>
                    <div>
                      <h3 className="heading-font text-2xl font-bold leading-tight group-hover:text-[#E5B351] transition-colors mb-3">
                         <a href={post.content.metadata.permalink} className="text-inherit hover:no-underline">
                           {post.content.metadata.title}
                         </a>
                      </h3>
                      {post.content.metadata.description && (
                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
                          {post.content.metadata.description}
                        </p>
                      )}
                      <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-4">
                        <span className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          {formatDate(post.content.metadata.date)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          {Math.ceil(post.content.metadata.readingTime || 2)} min read
                        </span>
                      </div>
                      <a href={post.content.metadata.permalink} className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-slate-200 text-slate-800 rounded-full text-sm font-bold hover:border-[#E5B351] hover:text-[#E5B351] transition-all">
                        Read more <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                ))}
             </div>
          )}

          {/* Docusaurus Standard Pagination */}
          {metadata.totalPages > 1 && (
            <div className="pt-10 border-t border-slate-100">
               <BlogListPaginator metadata={metadata} />
            </div>
          )}

        </div>
      </main>
    </Layout>
  );
}

export default function BlogListPage(props: Props): ReactNode {
  return (
    // @ts-expect-error — React 19 children prop type mismatch in Docusaurus wrapper
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
