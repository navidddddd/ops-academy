import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ops Academy 🚀',
  tagline: 'پایگاه دانش مهندسی زیرساخت و DevOps',
  favicon: 'img/favicon.ico',

  url: 'https://ops-academy.ir',
  baseUrl: '/',
  organizationName: 'navidddddd', 
  projectName: 'ops-academy', 

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // این بخش جادوی راست‌چین (RTL) و فارسی‌سازی است
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa'],
    localeConfigs: {
      fa: {
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false, // بخش بلاگ را فعلا غیرفعال کردیم
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark', // دارک مود پیش‌فرض شد
        disableSwitch: false,
      },
      navbar: {
        title: 'Ops Academy',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'مسیر لینوکس (RHCSA)',
          },
          {
            href: 'https://github.com/navidddddd',
            label: 'GitHub',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `ساخته شده با ❤️ | تمام حقوق برای Ops Academy محفوظ است © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula, // تم کدهای برنامه‌نویسی جذاب شد
      },
    }),
};

export default config;