module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/img-redundant-alt': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'no-alert': 'off',
    'react/destructuring-assignment': 'off',
  },
};
