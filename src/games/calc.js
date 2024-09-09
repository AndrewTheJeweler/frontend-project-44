import startEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const operators = ['*', '+', '-'];

const getRound = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${randomOperator} ${number2}`;
  const answer = calculate(number1, randomOperator, number2);
  return [question, String(answer)];
};

const startCalcGame = () => {
  startEngine(description, getRound);
};

export default startCalcGame;
