const { readPackageUpSync } = require('readpkg-lit');

let hasReact = false;

try {
	const { packageJson } = readPackageUpSync();
	const allDeps = Object.keys({
		...packageJson.peerDependencies,
		...packageJson.devDependencies,
		...packageJson.dependencies,
	});
	hasReact = allDeps.includes('react');
} catch (error) {
	// ignore error
}

module.exports = {
	parser: require.resolve('@babel/eslint-parser'),
	extends: [
		'eslint:recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['compat', 'react'],
	env: {
		browser: true,
		es6: true,
		mocha: true,
		jest: true,
		node: true,
	},
	parserOptions: {
		requireConfigFile: false,
		ecmaVersion: 7,
		sourceType: 'module',
		ecmaFeatures: {
			modules: true,
			impliedStrict: true,
			experimentalObjectRestSpread: true,
			experimentalDecorators: true,
			jsx: true,
		},
	},
	globals: {
		sinon: true,
		expect: true,
		browser: true,
		global: true,
	},
	settings: {
		targets: ['last 2 versions'],
		polyfills: ['fetch', 'Promise'],
		...(hasReact
			? {
					react: {
						version: 'detect',
					},
				}
			: {}),
	},
	rules: {
		// prettier related rules
		'brace-style': 'off',
		'comma-dangle': ['warn', 'always-multiline'],
		indent: 'off',
		'require-atomic-updates': 'off',

		// react-related rules
		...(hasReact
			? {
					'react/jsx-boolean-value': [2, 'never'],
					'react/jsx-closing-bracket-location': 2,
					'react/jsx-curly-spacing': 2,
					'react/display-name': 0,
					'react/jsx-equals-spacing': 2,
					'react/jsx-indent-props': [2, 'tab'],
					'react/jsx-max-props-per-line': [2, { maximum: 6 }],
					'react/jsx-no-bind': 0,
					'react/jsx-no-comment-textnodes': 2,
					'react/jsx-no-duplicate-props': 2,
					'react/jsx-no-target-blank': 2,
					'react/jsx-no-undef': 2,
					'react/jsx-pascal-case': 2,
					'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always' }],
					'react/jsx-uses-react': 2,
					'react/jsx-uses-vars': 2,
					'react/jsx-wrap-multilines': 2,
					'react/no-danger': 2,
					'react/no-did-mount-set-state': 2,
					'react/no-did-update-set-state': 2,
					'react/no-find-dom-node': 2,
					'react/no-is-mounted': 2,
					'react/no-string-refs': 0,
					'react/prefer-es6-class': 2,
					'react/prefer-stateless-function': 1,
					'react/require-render-return': 2,
					'react/self-closing-comp': 2,
					'react/sort-comp': [
						1,
						{
							order: [
								'properties',
								'static-methods',
								'everything-else',
								'lifecycle',
								'rendering',
							],
							groups: {
								properties: ['state'],
								rendering: ['/^render.+$/', 'render'],
							},
						},
					],
				}
			: {}),

		// stylistic rules
		'arrow-body-style': [2, 'as-needed'],
		'arrow-parens': [0, 'always'],
		'arrow-spacing': 2,
		camelcase: [1, { properties: 'never' }],
		'comma-style': [2, 'last'],
		'constructor-super': 2,
		curly: [0, 'multi-line'],
		'dot-notation': [2, { allowPattern: '^[a-z]+(_[a-z]+)+$' }],
		eqeqeq: 0,
		'func-style': [2, 'declaration', { allowArrowFunctions: true }],
		'guard-for-in': 0,
		'handle-callback-err': 0,
		'jsx-quotes': [2, 'prefer-double'],
		'key-spacing': 2,
		'keyword-spacing': 2,
		'new-cap': 1,
		'new-parens': 2,
		'no-alert': 1,
		'no-array-constructor': 2,
		'no-caller': 2,
		'no-cond-assign': 1,
		'no-console': [1, { allow: ['warn', 'error'] }],
		'no-const-assign': 2,
		'no-delete-var': 2,
		'no-dupe-class-members': 2,
		'no-dupe-keys': 2,
		'no-duplicate-imports': 2,
		'no-else-return': 2,
		'no-empty-pattern': 0,
		'no-empty': 0,
		'no-extra-parens': 0,
		'no-iterator': 2,
		'no-lonely-if': 2,
		'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
		'no-multi-str': 2,
		'no-multiple-empty-lines': [2, { max: 2 }],
		'no-new-wrappers': 2,
		'no-proto': 2,
		'no-redeclare': 2,
		'no-shadow-restricted-names': 2,
		'no-shadow': 0,
		'no-spaced-func': 2,
		'no-this-before-super': 2,
		'no-trailing-spaces': [2, { skipBlankLines: true }],
		'no-undef-init': 2,
		'no-unneeded-ternary': 2,
		'no-unused-vars': [2, { args: 'none', varsIgnorePattern: '^h$' }],
		'no-useless-call': 2,
		'no-useless-computed-key': 2,
		'no-useless-concat': 2,
		'no-useless-constructor': 2,
		'no-useless-escape': 2,
		'no-useless-rename': 2,
		'no-var': 2,
		'no-with': 2,
		'object-curly-spacing': [2, 'always'],
		'object-shorthand': 2,
		'prefer-arrow-callback': 2,
		'prefer-rest-params': 1,
		'prefer-spread': 1,
		'prefer-template': 0,
		'quote-props': [2, 'as-needed'],
		quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
		radix: 2,
		'rest-spread-spacing': 2,
		semi: 2,
		'space-before-function-paren': [0, 'always'],
		'space-in-parens': [0, 'never'],
		strict: [2, 'never'],
		'unicode-bom': 2,
		'valid-jsdoc': [0, { requireReturn: false }],
	},
	overrides: [
		{
			files: ['**/*.ts?(x)'],
			parser: require.resolve('@typescript-eslint/parser'),
			parserOptions: {
				ecmaVersion: 2018,
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},

				// typescript-eslint specific options
				warnOnUnsupportedTypeScriptVersion: true,
			},
			plugins: ['@typescript-eslint'],
			// If adding a typescript-eslint version of an existing ESLint rule,
			// make sure to disable the ESLint rule here.
			rules: {
				// TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
				'default-case': 'off',
				// 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
				'no-dupe-class-members': 'off',
				// 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
				'no-undef': 'off',

				// Add TypeScript specific rules (and turn off ESLint equivalents)
				'@typescript-eslint/consistent-type-assertions': 'warn',
				'no-array-constructor': 'off',
				'@typescript-eslint/no-array-constructor': 'warn',
				'@typescript-eslint/no-namespace': 'error',
				'no-use-before-define': 'off',
				'@typescript-eslint/no-use-before-define': [
					'warn',
					{
						functions: false,
						classes: false,
						variables: false,
						typedefs: false,
					},
				],
				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': [
					'warn',
					{
						args: 'none',
						ignoreRestSiblings: true,
					},
				],
				'no-useless-constructor': 'off',
				'@typescript-eslint/no-useless-constructor': 'warn',
			},
		},
	],
};
