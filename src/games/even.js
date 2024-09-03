import enginOfGames from '../index.js';
import { getRandomNumber, isNumberEven } from '../utils.js';

const startEvenGame = () => {
  const exercise = 'Answer "yes" if the number is even, otherwise answer "no".';
  const round = () => {
    const question = getRandomNumber(1, 100);
    const answer = isNumberEven(question) ? 'yes' : 'no';
    return [question, answer];
  };
  enginOfGames(exercise, round);
};

export default startEvenGame;
