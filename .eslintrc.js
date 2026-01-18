module.exports = {
  extends: ['react-app'],
  rules: {
    'no-unused-vars': 'off',
    'react/jsx-no-comment-textnodes': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': 'off'
  },
  ignorePatterns: ['build/', 'node_modules/']
};