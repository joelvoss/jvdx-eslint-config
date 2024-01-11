import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

/**
 * Base configuration for JavaScript files. Can potentially parse JSX files, if
 * the React configuration is also used.
 */
export default {
	files: ['**/*.{js,jsx,mjs,cjs}'],
	languageOptions: {
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
		globals: {
			...globals.browser,
			...globals.node,
		},
	},
	// 0 ("off"), 1 ("warn"), or 2 ("error")
	rules: {
		...js.configs.recommended.rules,
		...eslintConfigPrettier.rules,
	},
};
