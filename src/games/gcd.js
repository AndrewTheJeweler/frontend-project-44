import startEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGreaterDivisor = (num1, num2) => {
  let x = num1;
  let y = num2;
  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  return x + y;
};

const getRound = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const question = `${number1} ${number2}`;
  const greaterDivisor = findGreaterDivisor(number1, number2);
  return [question, String(greaterDivisor)];
};

const startGcdGame = () => {
  startEngine(description, getRound);
};

export default startGcdGame;
