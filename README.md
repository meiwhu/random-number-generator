# random-number-generator
Generate random numbers as a <b>objectMode</b> stream.

# Install
`npm install -S random-number-stream`

# Usage
```js
const RandomNumberGenerator = require('random-number-stream');

// generate 100 numbers then close stream
new RandomNumberGenerator({ total: 100 });

// generate infinite numbers
new RandomNumberGenerator();
```

# Test
`npm test`