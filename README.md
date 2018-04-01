# Task list example

A basic task list example built on [Create React App](https://github.com/facebook/create-react-app)
For more details, check the included [README](CRA-README.md)

## Dependencies:

- #### Bootstrapper:
  - **[Create React App](https://github.com/facebook/create-react-app)** - Create React apps with no build configuration.

    - ##### Core:
      - **[React](https://github.com/facebook/react)** - A declarative, efficient, and flexible JavaScript library for building user interfaces. [https://reactjs.org](https://reactjs.org)
        - **[React DOM](https://www.npmjs.com/package/react-dom)** - DOM-related rendering library
    - ##### Build script:
      - **[Webpack](https://github.com/webpack/webpack)** - Awesome bundler for javascript and more, enables code splitting, file processing, and more. [https://webpack.js.org](https://webpack.js.org)
        - **[Webpack Dev Server](https://github.com/webpack/webpack-dev-server)** - Serves a webpack app. Updates the browser on changes with hot reloading.

    - ##### Testing:
      - **[Jest](https://github.com/facebook/jest)** - Delightful JavaScript Testing. [https://facebook.github.io/jest/](https://facebook.github.io/jest/)

    - ##### Pre/Postprocessing:
      - **[Babel](https://github.com/babel/babel)** - Babel is a compiler for writing next generation JavaScript. https://babeljs.io/
      - **[PostCSS](https://github.com/postcss/postcss)** - Transforming styles with JS plugins
        - **[Autoprefixer](https://github.com/postcss/autoprefixer)** - Parse CSS and add vendor prefixes to rules by Can I Use 

    - ##### Code Style, Formatting, and Standardization:
      - **[ESLint](https://github.com/eslint/eslint)** - A fully pluggable tool for identifying and reporting on patterns in JavaScript.

- #### Code Style, Formatting, and Standardization:
  - **[Commitizen](http://commitizen.github.io/cz-cli/)** - Detailed, standardized commit messages via CLI
    - **[CZ-Conventional-Changelog](https://github.com/commitizen/cz-conventional-changelog)** - Angular-changelog-style commit message standard for Commitizen
  - **[Prettier](https://prettier.io/)** - Standardized code style
  - ##### Helpers:
    - **[Husky](https://github.com/typicode/husky/tree/master)** - Easier management of git hooks for precommit, prepush, and more
    - **[Lint-Staged](https://github.com/okonet/lint-staged)** - Run linters and other processors (in our case, Prettier as well) against staged git files

- #### Testing:
  - **[Enzyme](https://github.com/airbnb/enzyme)** - JavaScript Testing utilities for React, easy shallow rendering and more
    - **[Enzyme-Adapter-React-16](https://github.com/airbnb/enzyme/tree/master/packages/enzyme-adapter-react-16)** - Enzyme adapter to allow Enzyme to work with React
    - **[Enzyme-To-JSON](https://github.com/adriantoine/enzyme-to-json)** - Serializes Enzyme wrappers to JSON for snapshot testing with Jest
