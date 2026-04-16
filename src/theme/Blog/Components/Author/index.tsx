import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link, {type Props as LinkProps} from '@docusaurus/Link';
import AuthorSocials from '@theme/Blog/Components/Author/Socials';
import type {Props} from '@theme/Blog/Components/Author';

export type BlogAuthorProps = Props;
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function MaybeLink(props: LinkProps): ReactNode {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}

function AuthorTitle({title}: {title: string}) {
  return (
    <small className={styles.authorTitle} title={title}>
      {title}
    </small>
  );
}

function AuthorName({name, as}: {name: string; as: Props['as']}) {
  if (!as) {
    return (
      <span className={styles.authorName} translate="no">
        {name}
      </span>
    );
  } else {
    return (
      <Heading as={as} className={styles.authorName} translate="no">
        {name}
      </Heading>
    );
  }
}

function AuthorBlogPostCount({count}: {count: number}) {
  return <span className={clsx(styles.authorBlogPostCount)}>{count}</span>;
}

export default function BlogAuthor({
  as,
  author,
  className,
  count,
}: Props): ReactNode {
  const {name, title, url, imageURL, email, page} = author;
  const link =
    page?.permalink || url || (email && `mailto:${email}`) || undefined;

  return (
    <div className={clsx('flex items-center gap-4 group', className)}>
      {imageURL && (
        <MaybeLink href={link} className="shrink-0">
          <img
            className="w-12 h-12 rounded-full border-2 border-white shadow-sm group-hover:border-[#E5B351] transition-colors object-cover"
            src={imageURL}
            alt={name}
          />
        </MaybeLink>
      )}

      {(name || title) && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            {name && (
              <MaybeLink href={link} className="hover:no-underline">
                <span className="font-heading font-bold text-slate-900 group-hover:text-[#E5B351] transition-colors">{name}</span>
              </MaybeLink>
            )}
            {count !== undefined && <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full text-slate-500 font-bold">{count}</span>}
          </div>
          {!!title && <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-1">{title}</span>}
          <AuthorSocials author={author} />
        </div>
      )}
    </div>
  );
}
