import globals from 'globals'
import js from '@eslint/js'
import pluginCypress from 'eslint-plugin-cypress/flat'

export default [
  js.configs.recommended,
  {
    ignores: ['templates/'],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
  pluginCypress.configs.recommended,
  pluginCypress.configs.globals,
]
