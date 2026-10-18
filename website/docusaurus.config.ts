
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // Website identity
  title: 'Datum',
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
      title: 'Datum',
      logo: {
        alt: 'Datum logo',
        src: '/img/favicons/teal-light.png',
        srcDark: '/img/favicons/teal-dark.png',
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
                position: 'left',
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
