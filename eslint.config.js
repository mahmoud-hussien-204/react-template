import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import { defineConfig, globalIgnores } from "eslint/config"
import pluginQuery from "@tanstack/eslint-plugin-query"
import prettierConfig from "eslint-config-prettier"
import prettier from "eslint-plugin-prettier"
import unusedImports from "eslint-plugin-unused-imports"

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettierConfig,
      ...pluginQuery.configs["flat/recommended-strict"],
    ],
    plugins: {
      prettier,
      // import: importPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      // delete unused imports
      "unused-imports/no-unused-imports": "error",

      // error on unused variables, but ignore those that start with an underscore
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // prettier as eslint rule
      "prettier/prettier": "error",
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
])
