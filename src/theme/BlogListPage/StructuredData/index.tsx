import React, {type ReactNode} from 'react';
import Head from '@docusaurus/Head';
import {useBlogListPageStructuredData} from '@docusaurus/plugin-content-blog/client';
import type {Props} from '@theme/BlogListPage/StructuredData';

export default function BlogListPageStructuredData(props: Props): ReactNode {
  const structuredData = useBlogListPageStructuredData(props);
  return (
    // @ts-expect-error — React 19 children prop type mismatch in Docusaurus Head
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  );
}
