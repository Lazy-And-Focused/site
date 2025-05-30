// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see  https:\\prettier.io\docs\configuration
 * @type { import("prettier").Config }
 */
const config = {
  "endOfLine": "lf",
  "arrowParens": "always",
  "trailingComma": "all",
  "printWidth": 100,
  "jsxSingleQuote": true,
  "singleQuote": true,
  "bracketSpacing": true,
  "semi": true,
  "tabWidth": 2,
  "plugins": ["prettier-plugin-tailwindcss"]
};

export const PrettierConfiguration = config;
export default config;
