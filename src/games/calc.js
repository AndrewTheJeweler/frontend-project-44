import enginOfGames from '../index.js';
import { getRandomOperator, getRandomNumber, operatorsCheck } from '../utils.js';

const startCalcGame = () => {
  const exercise = 'What is the result of the expression?';
  const round = () => {
    const firstNumber = getRandomNumber(1, 10);
    const secondNumber = getRandomNumber(1, 10);
    const randomOperator = getRandomOperator();
    const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
    const answer = operatorsCheck(firstNumber, randomOperator, secondNumber);
    return [question, String(answer)];
  };
  enginOfGames(exercise, round);
};

export default startCalcGame;
