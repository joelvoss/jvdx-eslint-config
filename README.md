# @jvdx/eslint-config-jvdx

jvdx's eslint configuration, with sensible defaults for ES6, React and
Typescript projects.

## Installation

(1) Install this configuration as well as it's peer dependencies:

```bash
# Using npm
$ npm i -D eslint prettier typescript @jvdx/eslint-config-jvdx

# Using yarn
$ yarn add -D eslint prettier typescript @jvdx/eslint-config-jvdx
```

(2) Configure eslint in your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@jvdx/eslint-config-jvdx"
  }
}
```