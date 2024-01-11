import { describe, expect, test } from 'vitest';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import pkg from 'eslint/use-at-your-own-risk';
import config from '../src/index.js';

const modulePath = dirname(fileURLToPath(import.meta.url));

describe('recommended -> eslint recommended', () => {
	const cli = new pkg.FlatESLint({
		overrideConfigFile: true,
		overrideConfig: [config.configs.recommended],
	});

	test.each([
		'constructor-super',
		'for-direction',
		'getter-return',
		'no-async-promise-executor',
		'no-case-declarations',
		'no-class-assign',
		'no-compare-neg-zero',
		'no-cond-assign',
		'no-const-assign',
		'no-constant-condition',
		'no-control-regex',
		'no-debugger',
		'no-delete-var',
		'no-dupe-args',
		'no-dupe-class-members',
		'no-dupe-else-if',
		'no-dupe-keys',
		'no-duplicate-case',
		'no-empty',
		'no-empty-character-class',
		'no-empty-pattern',
		'no-ex-assign',
		'no-extra-boolean-cast',
		'no-extra-semi',
		'no-fallthrough',
		'no-func-assign',
		'no-global-assign',
		'no-import-assign',
		'no-inner-declarations',
		'no-invalid-regexp',
		'no-irregular-whitespace',
		'no-loss-of-precision',
		'no-misleading-character-class',
		'no-mixed-spaces-and-tabs',
		'no-new-symbol',
		'no-nonoctal-decimal-escape',
		'no-obj-calls',
		'no-octal',
		'no-prototype-builtins',
		'no-redeclare',
		'no-regex-spaces',
		'no-self-assign',
		'no-setter-return',
		'no-shadow-restricted-names',
		'no-sparse-arrays',
		'no-this-before-super',
		'no-undef',
		'no-unexpected-multiline',
		'no-unreachable',
		'no-unsafe-finally',
		'no-unsafe-negation',
		'no-unsafe-optional-chaining',
		'no-unused-labels',
		'no-unused-vars',
		'no-useless-backreference',
		'no-useless-catch',
		'no-useless-escape',
		'no-with',
		'require-yield',
		'use-isnan',
		'valid-typeof',
	])('%s', async rule => {
		const code = readFileSync(resolve(modulePath, `./recommended/${rule}.js`), {
			encoding: 'utf-8',
		});

		const [report] = await cli.lintText(code);
		let errors = report.messages.filter(({ ruleId }) => ruleId === rule);

		// NOTE(joel): A few ESLint rules are not valid JavaScript code in Node,
		// thus we cannot test them.
		if (rule === 'no-delete-var' && errors.length === 0) {
			errors = report.messages.filter(({ message }) =>
				message.includes(
					'Parsing error: Deleting local variable in strict mode',
				),
			);
		}
		if (rule === 'no-dupe-args' && errors.length === 0) {
			errors = report.messages.filter(({ message }) =>
				message.includes('Parsing error: Argument name clash'),
			);
		}
		if (rule === 'no-extra-semi' && errors.length === 0) {
			errors = [{ message: 'This rule was deprecated in ESLint v8.53.0.' }];
		}
		if (rule === 'no-inner-declarations' && errors.length === 0) {
			errors = report.messages.filter(({ message }) =>
				message.includes('Parsing error: Unexpected token function'),
			);
		}
		if (rule === 'no-mixed-spaces-and-tabs' && errors.length === 0) {
			errors = [{ message: 'This rule was deprecated in ESLint v8.53.0.' }];
		}
		if (rule === 'no-nonoctal-decimal-escape' && errors.length === 0) {
			errors = report.messages.filter(({ message }) =>
				message.includes('Parsing error: Invalid escape sequence'),
			);
		}
		if (rule === 'no-octal' && errors.length === 0) {
			errors = report.messages.filter(({ message }) =>
				message.includes('Parsing error: Invalid number'),
			);
		}
		if (rule === 'no-unexpected-multiline' && errors.length === 0) {
			errors = [
				{ message: 'This rule is being disabled by eslint-config-prettier.' },
			];
		}
		if (rule === 'no-with' && errors.length === 0) {
			errors = report.messages.filter(({ message }) =>
				message.includes(`Parsing error: 'with' in strict mode`),
			);
		}

		expect(errors.length).toBeGreaterThan(0);
		expect(errors).toMatchSnapshot();
	});
});

////////////////////////////////////////////////////////////////////////////////

describe('recommended -> prettier recommended', () => {
	const cli = new pkg.FlatESLint({
		overrideConfigFile: true,
		overrideConfig: [config.configs.recommended],
	});

	// NOTE(joel): Prettier only disables a few rules, so we only need to test
	// those that are actually enabled in the eslint/recommended config.
	test.each(['curly', 'no-unexpected-multiline'])('%s', async rule => {
		const code = readFileSync(resolve(modulePath, `./recommended/${rule}.js`), {
			encoding: 'utf-8',
		});

		const [report] = await cli.lintText(code);
		const errors = report.messages.filter(({ ruleId }) => ruleId === rule);

		expect(errors.length).toBe(0);
	});
});
