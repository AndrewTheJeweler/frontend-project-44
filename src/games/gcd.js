import enginOfGames from '../index.js';
import { getRandomNumber, findGreaterDivisor } from '../utils.js';

const startGcdGame = () => {
  const exercise = 'Find the greatest common divisor of given numbers.';
  const round = () => {
    const firstNumber = getRandomNumber(1, 10);
    const secondNumber = getRandomNumber(1, 10);
    const question = `${firstNumber} ${secondNumber}`;
    const greaterDivisor = findGreaterDivisor(firstNumber, secondNumber);
    return [question, String(greaterDivisor)];
  };
  enginOfGames(exercise, round);
};

export default startGcdGame;
