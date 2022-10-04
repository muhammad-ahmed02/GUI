module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'react-app',
    'reac-app/jest',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  }
}
