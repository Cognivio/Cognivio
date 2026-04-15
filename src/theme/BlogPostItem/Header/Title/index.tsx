import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import type {Props} from '@theme/BlogPostItem/Header/Title';

import styles from './styles.module.css';

export default function BlogPostItemHeaderTitle({className}: Props): ReactNode {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {permalink, title} = metadata;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
  return (
    <TitleHeading className={clsx('font-heading text-4xl md:text-5xl font-bold leading-tight text-slate-900 mb-6', className)}>
      {isBlogPostPage ? title : <Link to={permalink} className="text-inherit hover:text-[#E5B351] hover:no-underline transition-colors">{title}</Link>}
    </TitleHeading>
  );
}
