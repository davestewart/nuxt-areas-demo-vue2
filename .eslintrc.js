module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'comma-dangle': ['error', 'only-multiline'],
  },
}
