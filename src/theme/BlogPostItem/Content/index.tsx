import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {blogPostContainerID} from '@docusaurus/utils-common';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import MDXContent from '@theme/MDXContent';
type Props = {
  children: ReactNode;
  className?: string;
};

export default function BlogPostItemContent({
  children,
  className,
}: Props): ReactNode {
  const {isBlogPostPage} = useBlogPost();
  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx(
        'markdown', 
        {
          'text-lg text-slate-700 leading-relaxed max-w-none': isBlogPostPage,
        }, 
        className
      )}>
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
