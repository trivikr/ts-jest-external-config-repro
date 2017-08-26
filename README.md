# ts-jest-external-config-repro
Repro repo for defining external Jest configuration in ts-jest@20.0.x

Steps to reproduce:
* `yarn` or `npm install` to install dependencies
* `npm run test1` will build and run tests, and throw following error:
```
● Validation Error:

  Module <rootDir>/node_modules/ts-jest/preprocessor.js in the transform option was not found.

  Configuration Documentation:
  https://facebook.github.io/jest/docs/configuration.html
```
* `npm run test2` will build and run tests successfully, as `--rootDir` is defined
