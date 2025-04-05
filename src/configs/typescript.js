import js from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

/**
 * Configuration for TypeScript files. Can also parse TSX files.
 */
export default {
	files: ['**/*.{ts,tsx,mts,cts}'],
	plugins: {
		'@typescript-eslint': typescriptPlugin,
	},
	languageOptions: {
		sourceType: 'module',
		parser: typescriptParser,
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
		...typescriptPlugin.configs['eslint-recommended'].overrides[0].rules,
		...typescriptPlugin.configs.recommended.rules,
		'prefer-const': 0,
	},
};
