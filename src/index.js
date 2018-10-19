const crypto = require('crypto');
const { Readable } = require('stream');

const OPTIONS = Symbol('options');
const GENERATE = Symbol('number of generate numbers');
const bytesPerTime = 1000;

class RandomNumberStream extends Readable {
  /**
   * @param {{total?: number}} options
   */
  constructor(options = {}) {
    super({ objectMode: true, highWaterMark: 1000 });
    this[OPTIONS] = options;
    this[GENERATE] = 0;
  }

  /**
   * @implements {Readable}
   */
  _read() {
    const { total } = this[OPTIONS];
    const generate = this[GENERATE];

    let bytesNum = bytesPerTime;
    let isLast = false;

    if (total) {
      if (total === generate) {
        this.push(null);
        return;
      }
      if (total - generate <= bytesPerTime) {
        bytesNum = total - generate;
        isLast = true;
      }
    }

    const buf = crypto.randomBytes(bytesNum);

    let ok = true;
    for (let i = 0; i < bytesNum; i += 1) {
      ok = this.push(buf[i]);
      this[GENERATE] += 1;
      if (!ok) {
        return;
      }
    }

    if (isLast) {
      this.push(null);
    }
  }
}

module.exports = RandomNumberStream;
