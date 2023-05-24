module.exports = {
  extends: [
      "next",
      "turbo",
      "prettier"
  ],
  plugins: [
    "prettier"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "quoteProps": "preserve",
        "singleQuote": true,
        "tabWidth": 2,
        "trailingComma": "es5"
      }
    ],
    "prefer-const": "warn",
    "no-console": [
        "warn",
        {
          "allow":
            [ "warn", "error" ]
        }
      ]
  },
  "ignorePatterns": [
    "**/lib/**/*"
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
