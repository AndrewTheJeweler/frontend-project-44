import startEngin from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isNumberPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const startPrimeGame = () => {
  startEngin(description, getRound);
};

export default startPrimeGame;
