<div align="center">
  <a href="https://github.com/m1-dev/venture">
    <img
      src="https://jvk6hm88bttdy90i.public.blob.vercel-storage.com/venture-thumb-transparent-nUxsOx38taPQJVijJMUyDASzGxyzKA"
      width="550" 
    />
  </a>
</div>

<br />

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
import { VentureClient } from 'venture.js';

// Obtain a Vercel token:
// https://vercel.com/account/tokens
const venture = new VentureClient('TOKEN');

// Get the currently logged in user:
const user = await venture.user.getCurrent();
```
