import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginImport from 'eslint-plugin-import'
import stylistic from '@stylistic/eslint-plugin'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'

export default [
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReactHooks.configs.flat.recommended,
  pluginJsxA11y.flatConfigs.recommended,
  pluginImport.flatConfigs.recommended,
  // stylistic.configs.recommended, // Disabled for flexibility

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.es2025,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    settings: {
      'react': { version: 'detect' },
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 0,
      'react/jsx-uses-react': 2,
      'react/jsx-uses-vars': 2,
      'react/prop-types': 0,
      'react/destructuring-assignment': 0,
      'react/jsx-first-prop-new-line': 0,
      'react/jsx-filename-extension': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/no-noninteractive-element-interactions': 0,
      'react/jsx-one-expression-per-line': 0,
    },
  },
  {
    files: ['cypress/**/*.{js,jsx}'],
    languageOptions: {
      globals: { ...globals.browser, cy: 'readonly', Cypress: 'readonly' },
    },
    rules: {
      'no-unused-expressions': 'off',
    },
  },
]
