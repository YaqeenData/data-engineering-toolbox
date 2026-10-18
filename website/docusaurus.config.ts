
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // ==========================================
  // DATUM — WEBSITE IDENTITY
  // ==========================================

  title: 'Datum',
  tagline: 'Data Engineering, Beyond the Basics.',

  url: 'https://datum.yaqeenalhalal.dev',
  baseUrl: '/',

  favicon: '/img/favicons/teal-light.png',

  // Temporarily prevent search-engine indexing.
  // Remove this when Datum is ready to launch.
  noIndex: true,

  future: {
    v4: true,
  },

  onBrokenLinks: 'throw',

  // ==========================================
  // INTERNATIONALIZATION
  // ==========================================

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // ==========================================
  // DOCUSAURUS PRESETS
  // ==========================================

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // ==========================================
  // THEME CONFIGURATION
  // ==========================================

  themeConfig: {
    // ----------------------------------------
    // GLOBAL SEO METADATA
    // ----------------------------------------

    metadata: [
      {
        name: 'application-name',
        content: 'Datum',
      },
      {
        name: 'author',
        content: 'Yaqeen Alhalal',
      },
      {
        property: 'og:site_name',
        content: 'Datum',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
    ],

    // ----------------------------------------
    // LIGHT AND DARK MODES
    // ----------------------------------------

    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },

    // ----------------------------------------
    // NAVIGATION
    // ----------------------------------------

    navbar: {
      title: 'Datum',

      logo: {
        alt: 'Datum logo',
        src: '/img/favicons/teal-light.png',
        srcDark: '/img/favicons/teal-dark.png',
        width: 36,
        height: 36,
      },

      items: [
        {
          label: 'Start Here',
          to: '/docs/intro',
          position: 'left',
          activeBaseRegex: '^/docs/intro/?$',
        },

        {
          label: 'Roadmaps',
          to: '/docs/category/roadmaps',
          position: 'left',
          activeBaseRegex:
            '^/docs/(category/roadmaps|roadmaps(?:/|$))',
        },

        // Custom appearance selector
        {
          type: 'custom-appearance',
          position: 'right',
        },
      ],
    },

    // ----------------------------------------
    // FOOTER
    // ----------------------------------------

    footer: {
      style: 'light',

      links: [
        {
          title: 'Explore',
          items: [
            {
              label: 'Start Here',
              to: '/docs/intro',
            },
            {
              label: 'Roadmaps',
              to: '/docs/category/roadmaps',
            },
          ],
        },
      ],

      copyright:
        `Copyright © ${new Date().getFullYear()} ` +
        'Yaqeen Alhalal. All rights reserved.',
    },

    // ----------------------------------------
    // CODE SYNTAX HIGHLIGHTING
    // ----------------------------------------

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
