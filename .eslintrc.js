module.exports = {
  "extends": [
    "airbnb-base",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "globals": {
    "Rollbar": true,
    "Twilio": true
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jquery": true,
    "mocha": true,
    "jest": true
  },
  "rules": {
    "no-class-assign": 0,
    "import/no-extraneous-dependencies": [
      2,
      {
        "devDependencies": true
      }
    ],
    "jsx-quotes": 2,
    "eol-last": [
      "error",
      "always"
    ],
    "indent": [
      "error",
      2
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 1
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "no-var": "error",
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "eqeqeq": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "space-infix-ops": "error",
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "curly": "error",
    "handle-callback-err": "error",
    "operator-linebreak": [
      "error",
      "after"
    ],
    "block-spacing": "error",
    "camelcase": "error",
    "comma-dangle": [
      "error",
      "never"
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "dot-location": [
      "error",
      "property"
    ],
    "func-call-spacing": [
      "error",
      "never"
    ],
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true,
        "mode": "strict"
      }
    ],
    "new-cap": "error",
    "new-parens": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-parens": [
      "error",
      "all",
      {
        "conditionalAssign": false,
        "returnAssign": false,
        "nestedBinaryExpressions": false,
        "ignoreJSX": "all",
        "enforceForArrowConditionals": false
      }
    ],
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-implied-eval": "error",
    "no-label-var": "error",
    "no-lone-blocks": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-return-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-useless-constructor": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "object-property-newline": "error",
    "object-shorthand": "error",
    "padded-blocks": [
      "error",
      "never"
    ],
    "rest-spread-spacing": [
      "error"
    ],
    "semi-spacing": "error",
    "space-before-blocks": "error",
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-unary-ops": "error",
    "template-curly-spacing": "error",
    "yoda": "error",
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ],
    "semi": "error"
  }
};
