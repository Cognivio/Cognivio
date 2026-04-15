import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
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
      <main className="bg-grid-pattern text-slate-900 pb-24 overflow-x-hidden pt-24 font-sans">

        {/* Hero Area */}
        <section className="relative text-center mx-auto max-w-4xl px-6 pt-16 pb-20 hero-gradient rounded-3xl z-10 mb-20">
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
              <Translate id="blogList.hero.title.line1">Discover Latest</Translate>
              <br/> <span className="brand-gold italic">
                <Translate id="blogList.hero.title.line2">Articles</Translate>
              </span>
            </h1>
        </section>

        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {/* Featured Post */}
          {/* Featured Post Card */}
          {featuredPost && (
            <div className="bg-white border border-slate-100 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-amber-900/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5B351] opacity-5 rounded-full -mr-32 -mt-32 group-hover:opacity-10 transition-opacity"></div>
              <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                <div className="lg:w-3/5">
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
                  <h2 className="font-heading text-4xl font-bold leading-tight hover:text-[#E5B351] transition-colors">
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
                  </div>
                  <div>
                    <a href={featuredPost.content.metadata.permalink} className="inline-block px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-[#E5B351] transition-all hover:-translate-y-1 shadow-lg shadow-slate-900/20">
                      <Translate id="blogList.readMore">Read more</Translate> &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts Grid */}
          {regularPosts.length > 0 && (
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {regularPosts.map((post) => (
                  <div key={post.content.metadata.permalink} className="bg-white border border-slate-100 rounded-[32px] p-6 shadow-sm hover:shadow-2xl hover:shadow-amber-900/5 hover:border-[#E5B351] transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5B351] opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity"></div>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 relative mb-6">
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
                          {post.content.metadata.tags && post.content.metadata.tags.length > 0 && (
                            <div className="absolute top-3 left-3">
                              <span className="px-2.5 py-1 bg-white/95 backdrop-blur text-[10px] font-bold text-slate-800 rounded-full shadow-sm uppercase tracking-wider">
                                {post.content.metadata.tags[0].label}
                              </span>
                            </div>
                          )}
                      </div>
                      <div className="flex flex-col flex-1">
                        <h3 className="font-heading text-xl font-bold leading-tight group-hover:text-[#E5B351] transition-colors mb-3">
                           <a href={post.content.metadata.permalink} className="text-inherit hover:no-underline">
                             {post.content.metadata.title}
                           </a>
                        </h3>
                        {post.content.metadata.description && (
                          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6 flex-1">
                            {post.content.metadata.description}
                          </p>
                        )}
                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                          <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            <span className="flex items-center gap-1">
                              {formatDate(post.content.metadata.date)}
                            </span>
                          </div>
                          <a href={post.content.metadata.permalink} className="text-[#E5B351] font-bold text-sm hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            <Translate id="blogList.readMoreShort">Read</Translate> &rarr;
                          </a>
                        </div>
                      </div>
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
