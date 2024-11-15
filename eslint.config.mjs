import globals from "globals";
import parser from "svelte-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended", "plugin:svelte/recommended"), {
    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.es6,
            ...globals.browser,
        },

        ecmaVersion: 2021,
        sourceType: "module",
    },

    settings: {},

    rules: {
        "arrow-spacing": 2,

        "keyword-spacing": [2, {
            before: true,
            after: true,
        }],

        "no-console": ["error", {
            allow: ["warn", "error"],
        }],

        "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
        "no-var": 2,
        "object-shorthand": [2, "always"],
        "one-var": [2, "never"],
        "prefer-arrow-callback": 2,
        "prefer-const": 2,
        "quote-props": [2, "as-needed"],
        semi: [2, "always"],
        "space-before-blocks": [2, "always"],

        "space-before-function-paren": [2, {
            anonymous: "always",
            named: "never",
            asyncArrow: "always",
        }],
    },
}, {
    files: ["**/*.svelte"],

    languageOptions: {
        parser: parser,
    },
}];