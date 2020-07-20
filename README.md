# @jvdx/eslint-config-jvdx

jvdx's eslint configuration, with sensible defaults for ES6, React and
Typescript projects.

## Installation

(1) Install this configuration as well as `eslint` and `typescript`
_(peer dependencies)_:

```bash
# Using npm
$ npm i -D eslint typescript eslint-config-jvdx

# Using yarn
$ yarn add -D eslint typescript eslint-config-jvdx
```

> Notice: This config ships eslint as part of it's dependencies, so you don't
> need to install it separately.

(2) Configure eslint in your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "eslint-config-jvdx"
  }
}
```