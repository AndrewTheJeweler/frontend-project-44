import startEngin from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => number % 2 === 0;

const getRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isNumberEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const startEvenGame = () => {
  startEngin(description, getRound);
};

export default startEvenGame;
