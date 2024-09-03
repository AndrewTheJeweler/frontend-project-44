import enginOfGames from '../index.js';
import { getRandomNumber, isNumberPrime } from '../utils.js';

const startPrimeGame = () => {
  const exercise = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const round = () => {
    const question = getRandomNumber(2, 101);
    const answer = isNumberPrime(question) ? 'yes' : 'no';
    return [question, answer];
  };
  enginOfGames(exercise, round);
};

export default startPrimeGame;
