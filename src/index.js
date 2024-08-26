import readlineSync from 'readline-sync';

// Функция для генирации рандомного числа
const randomNumber = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;

  return num;
};

// Функция приветствия (возвращает имя пользователя)
const greetings = () => {
  console.log('Welcom to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// Функция создания массива из заданного количества случайных символов в диапазоне 1-100
const array = (numberOfNumbers) => {
  const arrayOfNumber = [];
  for (let i = 0; i < numberOfNumbers; i += 1) {
    arrayOfNumber.push(randomNumber(1, 100));
  }
  return arrayOfNumber;
};

// Функция вызова рандомного оператора из массива
const operatorArray = ['*', '+', '-'];
const randomOperator = () => {
  const operatorIndex = randomNumber(0, operatorArray.length - 1);
  return operatorArray[operatorIndex];
};

// Функция создания массива из рандомных операторов
const arrayOperators = (numbersOfOperators) => {
  const arrayOp = [];
  for (let i = 0; i < numbersOfOperators; i += 1) {
    arrayOp.push(randomOperator());
  }
  return arrayOp;
};

// Функция для нахождения наибольшего делителя (Евклид)
const nod = (x, y) => {
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

export {
  randomNumber, greetings, arrayOperators, array as arr, nod,
};
