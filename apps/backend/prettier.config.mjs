import { prettierConfig } from "@lazy-and-focused/prettier-config";

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...prettierConfig,
  singleQuote: false,
};

export default config;
