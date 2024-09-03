import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;

  return num;
};

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const operatorArray = ['*', '+', '-'];
const getRandomOperator = () => {
  const operatorIndex = getRandomNumber(0, operatorArray.length - 1);
  return operatorArray[operatorIndex];
};

const findGreaterDivisor = (x, y) => {
  while (x !== 0 && y !== 0) {
    if (x > y) {
      // eslint-disable-next-line no-param-reassign
      x %= y;
    } else {
      // eslint-disable-next-line no-param-reassign
      y %= x;
    }
  }
  return x + y;
};

const getArrayProgression = () => {
  const arr = [];
  const firstNumber = getRandomNumber(1, 100);
  const progression = getRandomNumber(1, 5);
  let nextNumber = firstNumber + progression;
  arr.push(firstNumber);
  for (let i = 0; i < 9; i += 1) {
    arr.push(nextNumber);
    nextNumber += progression;
  }
  return arr;
};

const isNumberPrime = (number) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const isNumberEven = (number) => number % 2 === 0;

const operatorsCheck = (num1, operator, num2) => {
  let rezult;
  switch (operator) {
    case '*':
      rezult = num1 * num2;
      break;
    case '+':
      rezult = num1 + num2;
      break;
    default:
      rezult = num1 - num2;
  }
  return rezult;
};

export {
  getRandomNumber, greetings, operatorsCheck, isNumberEven, isNumberPrime,
};

export { getArrayProgression, findGreaterDivisor, getRandomOperator };
