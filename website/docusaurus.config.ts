
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // Website identity
  title: 'Data Engineering Toolbox',
  tagline: 'From fundamentals to real-world engineering decisions.',
  url: 'https://datum.yaqeenalhalal.dev',
  baseUrl: '/',

  future: {
    v4: true,
  },

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  favicon: '/img/favicons/teal-light.png',

  // Docusaurus presets
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

  themeConfig: {
    // Light and dark appearance
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },

    // Navigation
    navbar: {
      title: 'Data Engineering Toolbox',

      items: [
        {
          type: 'doc',
          docId: 'intro',
          label: 'Start Here',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Roadmaps',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'roadmaps/careers/data-engineer',
              label: 'Data Engineer Roadmap',
            },
            {
              type: 'doc',
              docId: 'roadmaps/tools/sql',
              label: 'SQL Roadmap',
            },
          ],
        },

        // Custom appearance selector
        {
          type: 'custom-appearance',
          position: 'right',
        },
      ],
    },

    // Footer
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
              label: 'Data Engineer Roadmap',
              to: '/docs/roadmaps/careers/data-engineer',
            },
            {
              label: 'SQL Roadmap',
              to: '/docs/roadmaps/tools/sql',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yaqeen Alhalal. All rights reserved.`,
    },

    // Code syntax highlighting
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  
};

export default config;
