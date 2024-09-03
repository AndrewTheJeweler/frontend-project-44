import readlineSync from 'readline-sync';

const randomNumber = (min, max) => {
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
const randomOperator = () => {
  const operatorIndex = randomNumber(0, operatorArray.length - 1);
  return operatorArray[operatorIndex];
};

const arrayOperators = (numbersOfOperators) => {
  const arrayOp = [];
  for (let i = 0; i < numbersOfOperators; i += 1) {
    arrayOp.push(randomOperator());
  }
  return arrayOp;
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

const arrProgression = () => {
  const arr = [];
  const firstNumber = randomNumber(1, 100);
  const progression = randomNumber(1, 5);
  let nextNumber = firstNumber + progression;
  arr.push(firstNumber);
  for (let i = 0; i < 9; i += 1) {
    arr.push(nextNumber);
    nextNumber += progression;
  }
  return arr;
};

const primeNumber = (number) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

// eslint-disable-next-line consistent-return
const isNumberEven = (num, answer) => {
  if ((num % 2 === 0 && answer === 'yes')) {
    return 'yes';
  } if (num % 2 !== 0) {
    return 'no';
  } if (num % 2 === 0) {
    return 'yes';
  }
};

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
  randomNumber, greetings, operatorsCheck, isNumberEven, primeNumber,
};

export { arrProgression, findGreaterDivisor, arrayOperators };
