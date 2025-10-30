module.exports = {
  env: {
    node: true,
    jest: true,
    es2021: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'indent': ['error', 2],                    // ← enforce 2 spaces
    'eol-last': ['error', 'always'],           // ← require newline at EOF
    'no-multiple-empty-lines': ['error', { max: 1 }], // optional
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
  },
};
