module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
      "@typescript-eslint"
  ],
  "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      'eslint-disable-next-line @typescript-eslint/no-var-requires'
  ],
  "rules": {
      "no-console": [
          "error",
          {
              "allow": [
                  "warn",
                  "error"
              ]
          }
      ]
  }
};
