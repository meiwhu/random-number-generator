[![travis-icon]][travis-link]
![Codecov](https://img.shields.io/codecov/c/github/meiwhu/random-number-stream.svg)

# random-number-stream
Generate random numbers as a <b>objectMode</b> stream.

# Install
`npm install -S random-number-stream`

# Usage
```js
// return Stream object
const RandomNumberStream = require('random-number-stream');

// generate 100 numbers then close stream
new RandomNumberStream({ total: 100 });

// generate infinite numbers
new RandomNumberStream();
```

# Test
`npm test`

[travis-icon]:https://travis-ci.org/meiwhu/random-number-stream.svg?branch=master
[travis-link]:https://travis-ci.org/meiwhu/random-number-stream