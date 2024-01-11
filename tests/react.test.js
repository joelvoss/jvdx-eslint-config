import { describe, expect, test } from 'vitest';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import pkg from 'eslint/use-at-your-own-risk';
import config from '../src/index.js';

const modulePath = dirname(fileURLToPath(import.meta.url));

describe('react -> recommended', () => {
	const cli = new pkg.FlatESLint({
		overrideConfigFile: true,
		overrideConfig: [config.configs.react],
	});

	test.each([
		'react/display-name',
		'react/jsx-key',
		'react/jsx-no-comment-textnodes',
		'react/jsx-no-duplicate-props',
		'react/jsx-no-undef',
		'react/no-children-prop',
		'react/no-danger-with-children',
		'react/no-deprecated',
		'react/no-direct-mutation-state',
		'react/no-find-dom-node',
		'react/no-is-mounted',
		'react/no-render-return-value',
		'react/no-string-refs',
		'react/no-unescaped-entities',
		'react/require-render-return',
	])('%s', async rule => {
		const code = readFileSync(resolve(modulePath, `./react/${rule}.jsx`), {
			encoding: 'utf-8',
		});

		const [report] = await cli.lintText(code);

		let errors = report.messages.filter(({ ruleId }) => ruleId === rule);

		expect(errors.length).toBeGreaterThan(0);
		expect(errors).toMatchSnapshot();
	});
});

////////////////////////////////////////////////////////////////////////////////

describe('react -> react-hooks', () => {
	const cli = new pkg.FlatESLint({
		overrideConfigFile: true,
		overrideConfig: [config.configs.react],
	});

	test.each([
		'react-hooks/rules-of-hooks',
		'react-hooks/exhaustive-deps',
		'jsx-a11y/alt-text',
		'jsx-a11y/anchor-has-content',
		'jsx-a11y/anchor-is-valid',
		'jsx-a11y/aria-activedescendant-has-tabindex',
		'jsx-a11y/aria-props',
		'jsx-a11y/aria-proptypes',
		'jsx-a11y/aria-role',
		'jsx-a11y/aria-unsupported-elements',
		'jsx-a11y/autocomplete-valid',
		'jsx-a11y/click-events-have-key-events',
		'jsx-a11y/heading-has-content',
		'jsx-a11y/html-has-lang',
		'jsx-a11y/iframe-has-title',
		'jsx-a11y/img-redundant-alt',
		'jsx-a11y/interactive-supports-focus',
		'jsx-a11y/label-has-associated-control',
		'jsx-a11y/media-has-caption',
		'jsx-a11y/mouse-events-have-key-events',
		'jsx-a11y/no-access-key',
		'jsx-a11y/no-autofocus',
		'jsx-a11y/no-distracting-elements',
		'jsx-a11y/no-interactive-element-to-noninteractive-role',
		'jsx-a11y/no-noninteractive-element-interactions',
		'jsx-a11y/no-noninteractive-element-to-interactive-role',
		'jsx-a11y/no-noninteractive-tabindex',
		'jsx-a11y/no-redundant-roles',
		'jsx-a11y/no-static-element-interactions',
		'jsx-a11y/role-has-required-aria-props',
		'jsx-a11y/role-supports-aria-props',
		'jsx-a11y/scope',
		'jsx-a11y/tabindex-no-positive',
	])('%s', async rule => {
		const code = readFileSync(resolve(modulePath, `./react/${rule}.jsx`), {
			encoding: 'utf-8',
		});

		const [report] = await cli.lintText(code);

		let errors = report.messages.filter(({ ruleId }) => ruleId === rule);

		expect(errors.length).toBeGreaterThan(0);
		expect(errors).toMatchSnapshot();
	});
});

////////////////////////////////////////////////////////////////////////////////

describe('react -> jsx-a11y', () => {
	const cli = new pkg.FlatESLint({
		overrideConfigFile: true,
		overrideConfig: [config.configs.react],
	});

	test.each([
		'jsx-a11y/alt-text',
		'jsx-a11y/anchor-has-content',
		'jsx-a11y/anchor-is-valid',
		'jsx-a11y/aria-activedescendant-has-tabindex',
		'jsx-a11y/aria-props',
		'jsx-a11y/aria-proptypes',
		'jsx-a11y/aria-role',
		'jsx-a11y/aria-unsupported-elements',
		'jsx-a11y/autocomplete-valid',
		'jsx-a11y/click-events-have-key-events',
		'jsx-a11y/heading-has-content',
		'jsx-a11y/html-has-lang',
		'jsx-a11y/iframe-has-title',
		'jsx-a11y/img-redundant-alt',
		'jsx-a11y/interactive-supports-focus',
		'jsx-a11y/label-has-associated-control',
		'jsx-a11y/media-has-caption',
		'jsx-a11y/mouse-events-have-key-events',
		'jsx-a11y/no-access-key',
		'jsx-a11y/no-autofocus',
		'jsx-a11y/no-distracting-elements',
		'jsx-a11y/no-interactive-element-to-noninteractive-role',
		'jsx-a11y/no-noninteractive-element-interactions',
		'jsx-a11y/no-noninteractive-element-to-interactive-role',
		'jsx-a11y/no-noninteractive-tabindex',
		'jsx-a11y/no-redundant-roles',
		'jsx-a11y/no-static-element-interactions',
		'jsx-a11y/role-has-required-aria-props',
		'jsx-a11y/role-supports-aria-props',
		'jsx-a11y/scope',
		'jsx-a11y/tabindex-no-positive',
	])('%s', async rule => {
		const code = readFileSync(resolve(modulePath, `./react/${rule}.jsx`), {
			encoding: 'utf-8',
		});

		const [report] = await cli.lintText(code);

		let errors = report.messages.filter(({ ruleId }) => ruleId === rule);

		expect(errors.length).toBeGreaterThan(0);
		expect(errors).toMatchSnapshot();
	});
});
