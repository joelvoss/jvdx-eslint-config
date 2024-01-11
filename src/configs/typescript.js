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
		// // TypeScript's `noFallthroughCasesInSwitch` option is more robust
		// 'default-case': 0,
		// // 'tsc' already handles these
		// // @see https://github.com/typescript-eslint/typescript-eslint/issues/291
		// // @see https://github.com/typescript-eslint/typescript-eslint/issues/477
		// 'no-dupe-class-members': 0,
		// 'no-undef': 0,
		// // Add TypeScript specific rules (and turn off ESLint equivalents)
		// '@typescript-eslint/consistent-type-assertions': 1,
		// 'no-array-constructor': 0,
		// '@typescript-eslint/no-array-constructor': 1,
		// '@typescript-eslint/no-namespace': 2,
		// 'no-use-before-define': 0,
		// '@typescript-eslint/no-use-before-define': [
		// 	1,
		// 	{ functions: false, classes: false, variables: false, typedefs: false },
		// ],
		// 'no-unused-vars': 0,
		// '@typescript-eslint/no-unused-vars': [
		// 	1,
		// 	{ args: 'none', ignoreRestSiblings: true },
		// ],
		// 'no-useless-constructor': 0,
		// '@typescript-eslint/no-useless-constructor': 1,
	},
};
