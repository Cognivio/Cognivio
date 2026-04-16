import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';

import type {Props} from '@theme/BlogLayout';

export default function BlogLayout(props: Props): ReactNode {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  return (
    <Layout {...layoutProps}>
      <main className="bg-grid-pattern min-h-screen text-slate-900 pb-24 overflow-x-hidden pt-12">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 pt-12">
            <BlogSidebar sidebar={sidebar} />
            <div
              className={clsx('flex-1 min-w-0', {
                'lg:w-2/3': hasSidebar,
              })}>
              {children}
            </div>
            {toc && <div className="hidden xl:block w-64 shrink-0">{toc}</div>}
          </div>
        </div>
      </main>
    </Layout>
  );
}
