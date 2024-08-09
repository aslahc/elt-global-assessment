import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    "plugin:react/recommended", // Add React recommended rules
    "plugin:react-hooks/recommended", // Add React hooks recommended rules
  ],
  files: ["**/*.{ts,tsx}"],
  ignores: ["dist"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: {
      ...globals.browser,
      // Include other globals as needed
    },
    parser: "@typescript-eslint/parser", // Use TypeScript parser
    parserOptions: {
      ecmaFeatures: {
        jsx: true, // Enable JSX support
      },
    },
  },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
    // You might want to include eslint-plugin-react here if it's not already imported
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": "off", // Disable prop-types since you're using TypeScript
  },
});
