import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxAlly from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

/**
 * Configuration for React files. Can potentially parse TSX files, if the
 * TypeScript configuration is also used.
 */
export default {
	files: ['**/*.{js,jsx,ts,tsx}'],
	languageOptions: {
		parserOptions: {
			...react.configs.recommended.parserOptions,
			...react.configs['jsx-runtime'].parserOptions,
			...jsxAlly.configs.recommended.parserOptions,
		},
		globals: {
			...globals.serviceworker,
			...globals.browser,
		},
	},
	plugins: {
		react,
		'react-hooks': reactHooks,
		'jsx-a11y': jsxAlly,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	// 0 ("off"), 1 ("warn"), or 2 ("error")
	rules: {
		...react.configs.recommended.rules,
		...react.configs['jsx-runtime'].rules,
		...reactHooks.configs.recommended.rules,
		...jsxAlly.configs.recommended.rules,
		'react/no-unknown-property': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'jsx-a11y/aria-props': 'warn',
		'jsx-a11y/aria-proptypes': 'warn',
		'jsx-a11y/aria-unsupported-elements': 'warn',
		'jsx-a11y/role-has-required-aria-props': 'warn',
		'jsx-a11y/role-supports-aria-props': 'warn',
		'react/jsx-no-target-blank': 'off',
	},
};
