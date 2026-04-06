import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Cognivio',
  tagline: 'Transforming Data into Intelligent Solutions',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://cognivio.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Cognivio', // Usually your GitHub org/user name.
  projectName: 'Cognivio', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      disableSwitch: true,
      respectPrefersColorScheme: false,
      defaultMode: 'light',
    },
    navbar: {
      title: 'Cognivio',
      logo: {
        alt: 'Cognivio Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Services',
          position: 'left',
          items: [
            { label: 'Data Solutions', to: '/services/data' },
            { label: 'AI Integration', to: '/services/ai' },
            { label: 'Consulting', to: '/services/consulting' },
          ],
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'dropdown',
          label: 'Company',
          position: 'left',
          items: [
            { label: 'About us', to: '/about' },
            { label: 'Careers', to: '/careers' },
            { label: 'Contact us', to: '/contact' },
            { label: 'Partnership', to: '/partnership' },
          ]
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social Media',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Cognivio',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/cognivio-lab',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@cognivio.lab',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Products',
              to: '/products',
            },
            {
              label: 'Services',
              to: '/services',
            },
          ]
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About us',
              to: '/about',
            },
            {
              label: 'Contact us',
              to: '/contact',
            },
            {
              label: 'Careers',
              to: '/careers',
            },
            {
              label: 'Partnership',
              to: '/partnership',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cognivio. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
