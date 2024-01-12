import type { DocsThemeConfig } from 'nextra-theme-docs';
import React from 'react';
import Image from 'next/image';

const thumbnailSrc =
  'https://jvk6hm88bttdy90i.public.blob.vercel-storage.com/Venture%20Thumbnail%20Transparent-ulTDs1NTztIA9wiL2CM5XinqnUDKdQ.png';

const iconSrc =
  'https://jvk6hm88bttdy90i.public.blob.vercel-storage.com/Venture%20Icon%20Transparent-qRRDBSbtha7jdnVVohNevqQEJD2Yvv.png';

function Logo() {
  return (
    <>
      <Image src={iconSrc} alt="venture.js" width="50" height="50" />
    </>
  );
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
