const createLogger = () => {
  let arr = [];

  return {
    log(message) {
      arr.push(message);
    },

    getLogs() {
      return arr;
    },
  };
};

const createRandomGenerator = (min, max) => {
  return () => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
};

const logger = createLogger();
logger.log('одни');
logger.log('два');
console.log(logger.getLogs()); // [ 'одни', 'два' ]

const randomNumberGenerator = createRandomGenerator(1, 5);
console.log(randomNumberGenerator()); // случайное число в диапазоне от 1 до 5