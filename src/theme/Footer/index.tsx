import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';

type FooterLinkItem = {
  label: string;
  href?: string;
  to?: string;
};

type FooterLinkGroup = {
  title: string;
  items: FooterLinkItem[];
};

function Footer(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const {footer} = useThemeConfig();

  if (!footer) {
    return null;
  }

  const {copyright, links = [], logo} = footer;
  const footerLinks = links as FooterLinkGroup[];

  return (
    <footer className="cognivio-footer">
      <div className="container">
        <div className="cognivio-footer__inner">
          <div className="cognivio-footer__brand">
            {logo?.src ? (
              <Link
                to={logo.href ?? '/'}
                className="cognivio-footer__logo"
                aria-label={siteConfig.title}
              >
                <img
                  src={logo.src}
                  alt={logo.alt ?? siteConfig.title}
                  width={logo.width ?? 36}
                  height={logo.height ?? 36}
                />
                <span>{siteConfig.title}</span>
              </Link>
            ) : null}

            <p className="cognivio-footer__tagline">{siteConfig.tagline}</p>

            <p className="cognivio-footer__description">
              Building practical AI and data products with a clean, modern experience.
            </p>
          </div>

          <div className="cognivio-footer__links">
            {footerLinks.map((group) => (
              <div key={group.title} className="cognivio-footer__column">
                <h4>{group.title}</h4>
                <ul>
                  {group.items.map((item) => {
                    const isExternal = Boolean(item.href?.startsWith('http'));

                    return (
                      <li key={item.label}>
                        {item.to ? (
                          <Link to={item.to}>{item.label}</Link>
                        ) : (
                          <a
                            href={item.href}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noreferrer noopener' : undefined}
                          >
                            {item.label}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="cognivio-footer__bottom">
          <span>{copyright}</span>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
