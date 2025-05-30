import { PrettierLafConfiguration } from 'prettier-config-laf';

/** @type {import("prettier").Config} */
const config = {
  ...PrettierLafConfiguration,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
