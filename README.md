# immutable-array.of

[![travis ci][1]][2]
[![npm version][3]][4]
[![Coverage Status][5]][6]
[![Dependency Status][7]][8]

`immutable-array.of` exports a function that creates a plain object useful for immutable array operations like

[immutable-array.push]()
[immutable-array.every]()
[immutable-array.reduce]()
[immutable-array.findIndexFrom]()

## Install

``` bash
$ npm install immutable-array.of --save
```

## Usage
``` javascript
const of = require('immutable-array.of')

of([1, 2, 3, 4, 5]) {array: [1, 2, 3, 4, 5], length: 5}
```

## Support
- Node.js >=6
- ES2015 transpilers

## License
MIT

  [1]: https://travis-ci.org/xgbuils/immutable-array.of.svg?branch=master
  [2]: https://travis-ci.org/xgbuils/immutable-array.of
  [3]: https://badge.fury.io/js/immutable-array.of.svg
  [4]: https://badge.fury.io/js/immutable-array.of
  [5]: https://coveralls.io/repos/github/xgbuils/immutable-array.of/badge.svg?branch=master
  [6]: https://coveralls.io/github/xgbuils/immutable-array.of?branch=master
  [7]: https://david-dm.org/xgbuils/immutable-array.of.svg
  [8]: https://david-dm.org/xgbuils/immutable-array.of
