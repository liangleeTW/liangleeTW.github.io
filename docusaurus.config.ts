import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Liang Lee',
  tagline: 'PhD Student in Neuroscience | AI Researcher',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://liangleeTW.github.io',
  baseUrl: '/',

  organizationName: 'liangleeTW',
  projectName: 'liangleeTW.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'research',
          routeBasePath: 'research',
          sidebarPath: './sidebarsResearch.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
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

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'talks',
        path: 'talks',
        routeBasePath: 'talks',
        sidebarPath: './sidebarsTalks.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'personal',
        path: 'personal',
        routeBasePath: 'personal',
        sidebarPath: './sidebarsPersonal.ts',
      },
    ],
  ],

  themeConfig: {
    // image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Liang Lee',
      logo: {
        alt: 'Liang Lee Logo',
        src: 'img/logo.jpg',
      },
      items: [
        {to: '/', label: 'Home', position: 'left', activeBaseRegex: '^/$'},
        {
          type: 'docSidebar',
          sidebarId: 'researchSidebar',
          position: 'left',
          label: 'Research',
        },
        {
          type: 'docSidebar',
          sidebarId: 'talksSidebar',
          docsPluginId: 'talks',
          position: 'left',
          label: 'Talks',
        },
        {to: '/blog', label: 'Notes', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'personalSidebar',
          docsPluginId: 'personal',
          position: 'left',
          label: 'Personal',
        },
        {
          href: '/LiangLee_CV.pdf',
          label: 'CV',
          position: 'right',
          target: '_blank',
        },
        {
          href: 'https://github.com/liangleeTW',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright \u00A9 ${new Date().getFullYear()} Liang Lee. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
