import startEngin from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const operatorsCheck = (num1, operator, num2) => {
  let rezult;
  switch (operator) {
    case '*':
      rezult = num1 * num2;
      break;
    case '+':
      rezult = num1 + num2;
      break;
    case '-':
      rezult = num1 - num2;
      break;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
  return rezult;
};

const operatorsArray = ['*', '+', '-'];

const getRound = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const randomOperator = operatorsArray[getRandomNumber(0, operatorsArray.length - 1)];
  const question = `${number1} ${randomOperator} ${number2}`;
  const answer = operatorsCheck(number1, randomOperator, number2);
  return [question, String(answer)];
};

const startCalcGame = () => {
  startEngin(description, getRound);
};

export default startCalcGame;
