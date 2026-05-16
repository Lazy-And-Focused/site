import { prettierConfig } from '@lazy-and-focused/prettier-config';

/** @type {import("prettier").Config} */
const config = {
  ...prettierConfig,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
