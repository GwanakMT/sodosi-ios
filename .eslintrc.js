module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'prettier', 'flowtype'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': 'error',
    'no-empty-function': 'off',
    'react/display-name': 'off',
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'no-console': 'off'
  }
}
