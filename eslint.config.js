import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["*.js"],
    plugins: { js, prettier },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      ...eslintConfigPrettier.rules,
      "prettier/prettier": [
        "error",
        {
          endOfLine: "lf",
          insertFinalNewline: true,
        },
      ],
      "no-unused-vars": "error",
      semi: ["error", "always"],
    },
  },
]);
