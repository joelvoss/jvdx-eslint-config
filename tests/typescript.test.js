import { describe, expect, test } from 'vitest';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import pkg from 'eslint/use-at-your-own-risk';
import config from '../src/index.js';

const modulePath = dirname(fileURLToPath(import.meta.url));

describe('typescript -> eslint recommended', () => {
	const cli = new pkg.FlatESLint({
		overrideConfigFile: true,
		overrideConfig: [
			{
				...config.configs.typescript,
				files: ['**/*.{js,ts,tsx,mts,cts}'],
			},
		],
	});

	test.each([
		'for-direction',
		'no-async-promise-executor',
		'no-case-declarations',
		'no-class-assign',
		'no-compare-neg-zero',
		'no-cond-assign',
		'no-constant-condition',
		'no-control-regex',
		'no-debugger',
		'no-delete-var',
		'no-dupe-else-if',
		'no-duplicate-case',
		'no-empty',
		'no-empty-character-class',
		'no-empty-pattern',
		'no-ex-assign',
		'no-extra-boolean-cast',
		'no-fallthrough',
		'no-global-assign',
		'no-inner-declarations',
		'no-invalid-regexp',
		'no-irregular-whitespace',
		'no-misleading-character-class',
		'no-nonoctal-decimal-escape',
		'no-octal',
		'no-prototype-builtins',
		'no-regex-spaces',
		'no-self-assign',
		'no-shadow-restricted-names',
		'no-sparse-arrays',
		'no-unsafe-finally',
		'no-unsafe-optional-chaining',
		'no-unused-labels',
		'no-useless-backreference',
		'no-useless-catch',
		'no-useless-escape',
		'no-with',
		'require-yield',
		'use-isnan',
		'valid-typeof',
		'no-var',
		'prefer-rest-params',
		'prefer-spread',
	])('%s', async rule => {
		const code = readFileSync(resolve(modulePath, `./typescript/${rule}.ts`), {
			encoding: 'utf-8',
		});

		const [report] = await cli.lintText(code);
		let errors = report.messages.filter(({ ruleId }) => ruleId === rule);

		// NOTE(joel): A few ESLint rules are not valid TypeScript code.
		if (rule === 'no-nonoctal-decimal-escape' && errors.length === 0) {
			errors = report.messages.filter(({ message }) =>
				message.includes(
					"Parsing error: Escape sequence '\\8' is not allowed.",
				),
			);
		}
		if (rule === 'no-octal' && errors.length === 0) {
			errors = report.messages.filter(({ message }) =>
				message.includes(
					"Parsing error: Octal literals are not allowed. Use the syntax '0o71'.",
				),
			);
		}

		expect(errors.length).toBeGreaterThan(0);
		expect(errors).toMatchSnapshot();
	});
});

////////////////////////////////////////////////////////////////////////////////

describe('typescript -> recommended', () => {
	const cli = new pkg.FlatESLint({
		overrideConfigFile: true,
		overrideConfig: [
			{
				...config.configs.typescript,
				files: ['**/*.{js,ts,tsx,mts,cts}'],
			},
		],
	});

	test.each([
		'@typescript-eslint/ban-ts-comment',
		'@typescript-eslint/ban-types',
		'@typescript-eslint/no-array-constructor',
		'@typescript-eslint/no-duplicate-enum-values',
		'@typescript-eslint/no-explicit-any',
		'@typescript-eslint/no-extra-non-null-assertion',
		'@typescript-eslint/no-loss-of-precision',
		'@typescript-eslint/no-misused-new',
		'@typescript-eslint/no-namespace',
		'@typescript-eslint/no-non-null-asserted-optional-chain',
		'@typescript-eslint/no-this-alias',
		'@typescript-eslint/no-unnecessary-type-constraint',
		'@typescript-eslint/no-unsafe-declaration-merging',
		'@typescript-eslint/no-unused-vars',
		'@typescript-eslint/no-var-requires',
		'@typescript-eslint/prefer-as-const',
		'@typescript-eslint/triple-slash-reference',
	])('%s', async rule => {
		const code = readFileSync(resolve(modulePath, `./typescript/${rule}.ts`), {
			encoding: 'utf-8',
		});

		const [report] = await cli.lintText(code);
		let errors = report.messages.filter(({ ruleId }) => ruleId === rule);

		expect(errors.length).toBeGreaterThan(0);
		expect(errors).toMatchSnapshot();
	});
});
