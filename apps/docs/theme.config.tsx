import type { DocsThemeConfig } from 'nextra-theme-docs';
import React from 'react';

function Logo() {
  return <strong className='font-bold'>Vercel.js</strong>;
}

export default {
  project: {
    link: 'https://github.com/m1-dev/Vercel.js'
  },
  chat: {
    link: 'https://discord.com/invite/amK8sjpp5M'
  },
  docsRepositoryBase: 'https://github.com/m1-dev/Vercel.js/tree/main/apps/docs',
  footer: {
    text: 'Built with Nextra by M1.'
  },
  logo: Logo()
} satisfies DocsThemeConfig;
