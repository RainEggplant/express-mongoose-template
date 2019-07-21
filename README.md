# express-mongoose-template

express-mongoose-template

## Quick Start

Get started developing...

```shell
# install deps
yarn install

# run in development mode
yarn dev

# run tests
yarn test

# fix all linter errors
yarn lint
```

---

## Install Dependencies

Install all package dependencies (one time operation)

```shell
yarn install
```

## Run It

#### Run in _development_ mode:

Runs the application is development mode. Should not be used in production

```shell
yarn dev
```

or debug it

```shell
yarn dev:debug
```

#### Run in _production_ mode:

Compiles the application and starts it in production production mode.

```shell
yarn compile
yarn start
```

## Test It

Run the Mocha unit tests

```shell
yarn test
```

or debug them

```shell
yarn test:debug
```

Run the tests and output a JUnit-style XML test results file at `./test/test-results.xml`

```shell
yarn test:junit
```

## Try It

- Open you're browser to [http://localhost:3000](http://localhost:3000)
- Invoke the `/examples` endpoint
  ```shell
  curl http://localhost:3000/api/v1/examples
  ```

## Debug It

#### Debug the server:

```
yarn dev:debug
```

#### Debug Tests

```
yarn test:debug
```

#### Debug with VSCode

Use the configurations in `.vscode/launch.json` file

## Lint It

Fix all linter errors

```shell
yarn lint
```
