module.exports = {
  root: true,
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
    'plugin:storybook/recommended',
  ],
  plugins: [
    'prettier',
    'react-hooks',
    '@typescript-eslint',
    'formatjs',
    'eslint-plugin-jsx-a11y',
    'jest',
    'testing-library',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  globals: {
    React: true,
    Styles: false,
    jsdom: true,
    JSX: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/react-in-jsx-scope': 0,
    'prettier/prettier': 'error',
    'object-shorthand': ['error', 'always'],
    'dot-notation': 'error',
    'array-callback-return': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'react/no-unknown-property': 'error',
    'react/jsx-key': 'warn',
    'jsx-a11y/no-autofocus': 'off',
    '@typescript-eslint/no-shadow': [
      'warn',
      {
        builtinGlobals: false,
        hoist: 'all',
        allow: [],
      },
    ],
    curly: 'error',
    'formatjs/enforce-description': 'warn',
    'formatjs/no-multiple-whitespaces': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-console': [
      'warn',
      {
        allow: ['error'],
      },
    ],
    'no-debugger': 'warn',
  },
  overrides: [
    {
      files: ['*.test.*'],
      rules: {
        'array-callback-return': 'off',
      },
    },
    {
      files: ['serviceWorker.ts'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
}