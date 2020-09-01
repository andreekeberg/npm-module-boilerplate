# NPM Module Boilerplate

## Boilerplate for UMD (ES6 and CommonJS) npm modules with Webpack

**Start developing your NPM module in seconds** ✨

Readymade boilerplate setup with all the best practices to kick start your npm/node module development.

# Features

* **ES2019** - Write _ES2019_ code and _Webpack_ will transpile it to ES5 for backwards compatibility
* **Tests** - _Mocha_ with _Istanbul_ coverage
* **Linting** - Preconfigured _ESlint_
* **CI** - _TravisCI_ configuration setup
* **Minify** - Built code will be minified for performance
* **UMD (Universal Module Definition)** - Publish packages for use in both Node.js and browsers

# Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with linting and coverage results.
- `npm test:only` - Run tests without linting or coverage.
- `npm test:watch` - You can even re-run tests on file changes!
- `npm test:prod` - Run tests with minified code.
- `npm run lint` - Run ESlint.
- `npm run cover` - Get coverage report for your code.
- `npm run build` - Webpack will transpile ES2019 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.

# Installation

Just clone this repo and remove the `.git` folder.

## License

Licensed under the [MIT license](LICENSE).
