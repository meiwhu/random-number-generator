const RandomNumberStream = require('../index');

describe('#GenerateNumber', () => {
  it('should generate 10 random numbers', (done) => {
    const reader = new RandomNumberStream({ total: 10 });

    reader.on('readable', () => {
      for (let i = 0; i < 10; i += 1) {
        if (typeof reader.read() !== 'number') {
          done(new Error('test fail'));
          return;
        }
      }
      if (reader.read() !== null) {
        done(new Error('test fail'));
        return;
      }
      done();
    });

    reader.on('error', done);
  });

  it('should generate more than 10000 numbers', (done) => {
    const reader = new RandomNumberStream();

    reader.on('readable', () => {
      for (let i = 0; i < 10000; i += 1) {
        if (typeof reader.read() !== 'number') {
          reader.removeAllListeners();
          reader.destroy();
          done(new Error('test fail'));
          return;
        }
      }
      reader.removeAllListeners();
      reader.destroy();
      done();
    });

    reader.on('error', (err) => {
      done(new Error(err.message));
    });
  });
});
