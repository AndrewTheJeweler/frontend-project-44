import startEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (number, step, length) => {
  const arr = [];
  for (let i = 0; i < length - 1; i += 1) {
    arr.push(number + step * i);
  }
  return arr;
};

const getRound = () => {
  const randomProgression = getProgression(getRandomNumber(1, 100), getRandomNumber(1, 5), 10);
  const randomNumber = randomProgression.splice(getRandomNumber(0, randomProgression.length - 1), 1, '..');
  const question = randomProgression.join(' ');
  return [question, String(randomNumber[0])];
};

const startProgressionGame = () => {
  startEngine(description, getRound);
};

export default startProgressionGame;
