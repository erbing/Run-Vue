module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "comma-dangle": [2, "never"],
    "indent": [2, 4, {
        "SwitchCase": 1
    }],
    "no-console": 0,
    "no-alert": 0,
    "no-new": 0,
    "no-bitwise": 0,
    "no-plusplus": 0,
    "no-mixed-operators": 0,
    "no-param-reassign": 0,
    "no-underscore-dangle": 0,
    "prefer-template": 0
  }
}
