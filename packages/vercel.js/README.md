<div align="center">
  <img
    src="https://jvk6hm88bttdy90i.public.blob.vercel-storage.com/vercel-js-wk3MNC1oVXn8N6OaYErDBKAfZue0Pc.png"
    width="550" 
  />

  <br />

  <a href="https://npmjs.com/package/venture.js">
    <img alt="version" src="https://img.shields.io/npm/v/venture.js" />
  </a>

</div>

## About

venture.js is a module for Node.js that allows you to interact with Vercel's API.

## Installation

Use your preferred package manager to install venture.js.

```sh
npm install venture.js
pnpm add venture.js
yarn add venture.js
```

## Example

```js
import { VercelClient } from 'venture.js';

// Obtain a Vercel token:
// https://vercel.com/account/tokens
const vercel = new VercelClient('TOKEN');

// Get the currently logged in user:
const user = await vercel.user.getCurrent();
```
