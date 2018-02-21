# Browser TDD Example

Simple TDD setup for a browser framework using:
- [mocha](https://mochajs.org)
- [jsdom](https://github.com/jsdom/jsdom)
- [docker-compose](https://docs.docker.com/compose/)

Write mocha tests for your browser framework with the least amount of dependencies.

### Getting Started

Clone the repo, then
```bash
docker-compose up -d console
# wait for the build to happen
docker-compose exec console bash
```
From the running console container, you can run the tests via:
```bash
npm run test -- --reporter nyan
```

```bash
 2   -_-_,------,
 0   -_-_|   /\_/\
 0   -_-^|__( ^ .^)
     -_-  ""  ""

  2 passing (1s)
```