import enginOfGames from '../index.js';
import { getArrayProgression, getRandomNumber } from '../utils.js';

const startProgressionGame = () => {
  const exercise = 'What number is missing in the progression?';
  const round = () => {
    const getRandomProgression = getArrayProgression();
    const removeRandomNumber = getRandomProgression.splice(getRandomNumber(1, 9), 1, '..');
    const question = getRandomProgression.join(' ');
    return [question, String(removeRandomNumber[0])];
  };
  enginOfGames(exercise, round);
};

export default startProgressionGame;
