import type { DocsThemeConfig } from 'nextra-theme-docs';
import React from 'react';

function Logo() {
  return <strong className="font-bold">venture.js</strong>;
}

function Head() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="venture.js" />
      <meta property="og:description" content="Node.js module for the Vercel API" />
    </>
  );
}

export default {
  head: <Head />,
  logo: <Logo />,

  project: {
    link: 'https://github.com/m1-dev/venture.js'
  },
  useNextSeoProps() {
    return {
      titleTemplate: 'venture.js'
    };
  },
  docsRepositoryBase: 'https://github.com/m1-dev/venture.js/tree/main/apps/docs',
  footer: {
    text: 'Built with Nextra by M1.'
  }
} as const as DocsThemeConfig;
