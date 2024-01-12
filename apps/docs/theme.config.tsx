import type { DocsThemeConfig } from 'nextra-theme-docs';
import React from 'react';

function Logo() {
  return <strong className="font-bold">Vercel.js</strong>;
}

function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Vercel.js" />
      <meta property="og:description" content="Node.js module for the Vercel API" />
      <link rel="icon" href="/favicon.png" type="image/x-icon" />
    </>
  );
}

export default {
  head: <Head />,
  logo: <Logo />,

  project: {
    link: 'https://github.com/m1-dev/Vercel.js'
  },
  useNextSeoProps() {
    return {
      titleTemplate: 'Vercel.js'
    };
  },
  docsRepositoryBase: 'https://github.com/m1-dev/Vercel.js/tree/main/apps/docs',
  footer: {
    text: 'Built with Nextra by M1.'
  }
} as const as DocsThemeConfig;
