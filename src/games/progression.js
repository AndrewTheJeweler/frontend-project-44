import startEngin from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getArrayProgression = (number, step, characterOfNumbers) => {
  const arr = [];
  let nextNumber = number + step;
  arr.push(number);
  for (let i = 0; i < characterOfNumbers - 1; i += 1) {
    arr.push(nextNumber);
    nextNumber += step;
  }
  return arr;
};

const getRound = () => {
  const randomProgression = getArrayProgression(getRandomNumber(1, 100), getRandomNumber(1, 5), 10);
  const randomNumber = randomProgression.splice(getRandomNumber(0, randomProgression.length - 1), 1, '..');
  const question = randomProgression.join(' ');
  return [question, String(randomNumber[0])];
};

const startProgressionGame = () => {
  startEngin(description, getRound);
};

export default startProgressionGame;
