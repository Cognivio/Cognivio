import React, {memo} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {
  useVisibleBlogSidebarItems,
  BlogSidebarItemList,
} from '@docusaurus/plugin-content-blog/client';
import BlogSidebarContent from '@theme/BlogSidebar/Content';
import type {Props as BlogSidebarContentProps} from '@theme/BlogSidebar/Content';
import type {Props} from '@theme/BlogSidebar/Desktop';

import styles from './styles.module.css';

const ListComponent: BlogSidebarContentProps['ListComponent'] = ({items}) => {
  return (
    <BlogSidebarItemList
      items={items}
      ulClassName="space-y-3 list-none p-0 m-0"
      liClassName=""
      linkClassName="text-sm font-medium text-slate-600 hover:text-[#E5B351] hover:no-underline transition-colors block leading-tight"
      linkActiveClassName="text-[#E5B351] font-bold"
    />
  );
};

function BlogSidebarDesktop({sidebar}: Props) {
  const items = useVisibleBlogSidebarItems(sidebar.items);
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <nav
        className="sticky top-24 p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm overflow-hidden relative"
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog recent posts navigation',
          description: 'The ARIA label for recent posts in the blog sidebar',
        })}>
        {/* Subtle Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5B351] opacity-5 rounded-full -mr-16 -mt-16"></div>
        
        <div className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5B351] mb-6 relative z-10">
          {sidebar.title}
        </div>
        <div className="relative z-10">
            <BlogSidebarContent
              items={items}
              ListComponent={ListComponent}
              yearGroupHeadingClassName="font-heading text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-6 mb-2 first:mt-0"
            />
        </div>
      </nav>
    </aside>
  );
}

export default memo(BlogSidebarDesktop);
