import readlineSync from 'readline-sync';

// Функция для генирации рандомного числа
const randomNumber = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;

  return num;
};

// Функция приветствия (возвращает имя пользователя)
const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
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

// Функция для создания массива из арифметической прогрессии
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

// Функция на проверку является ли число простым
const primeNumber = (number) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

// Функция на проверку является ли число четным
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

// Функция для изменения типа оператора
const operatorsChek = (num1, operator, num2) => {
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

// Логика всех игр
const logicsOfGames = (type = 'progression') => {
  const name = greetings(); // Приветствие, запоминаем имя
  if (type === 'progression') { // Проферяем тип игры - рандомная прогрессия
    console.log('What number is missing in the progression?');
    for (let i = 0; i <= 2; i += 1) {
      const array1 = arrProgression(); // Реализуем массив из рандомной арифметической прогресии
      const rezult = array1.splice(randomNumber(0, 9), 1, '..'); // Удаляем из массива выше рандомное число, заменяя его на '..'
      const condition = array1.join(' '); // Изменяем тип на строку
      console.log(`Question: ${condition}`);
      const answer = readlineSync.question('Your answer: ');
      if (rezult[0] === Number(answer)) {
        console.log('Correct!');
        if (i === 2) {
          console.log(`Congratulations, ${name}!`);
        }
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rezult}' \nLet's try again, ${name}!`);
        break;
      }
    }
  } else if (type === 'prime') { // Проверка типа - является ли число простым?
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i <= 2; i += 1) {
      const num = randomNumber(2, 101);
      console.log(`Question: ${num}`);
      const rezult = primeNumber(num); // Проверка числа (является ли оно простым? yes/no)
      const answer = readlineSync.question('Your answer: ');
      if (answer === rezult) {
        console.log('Correct!');
        if (i === 2) {
          console.log(`Congratulations, ${name}!`);
        }
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rezult}' \nLet's try again, ${name}!`);
        break;
      }
    }
  } else if (type === 'gcd') { // Проверка типа - Наибольший общий делитель
    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 0; i <= 2; i += 1) {
      const num1 = randomNumber(1, 10);
      const num2 = randomNumber(1, 10);
      console.log(`Question: ${num1} ${num2}`);
      const answer = readlineSync.question('Your answer: ');
      const rezult = nod(num1, num2); // Поиск функцией максимального общего делителя
      if (Number(answer) === rezult) {
        console.log('Correct!');
        if (i === 2) {
          console.log(`Congratulations, ${name}!`);
        }
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rezult}'. \nLet's try again, ${name}!`);
        break;
      }
    }
  } else if (type === 'even') { // Проверка типа - является ли число четным
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i <= 2; i += 1) {
      const randomNum = randomNumber(1, 100);
      console.log(`Question: ${randomNum}`);
      const answer = readlineSync.question('Your answer: ');
      const rezult = isNumberEven(randomNum, answer);
      if (answer === rezult) {
        console.log('Correct!');
        if (i === 2) {
          console.log(`Congratulations, ${name}!`);
        }
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rezult}'. \nLet's try again, ${name}!`);
        break;
      }
    }
  } else if (type === 'calc') { // Проверяем тип - калькулятор
    console.log('What is the result of the expression?');
    for (let i = 0; i <= 2; i += 1) {
      const arrOp = arrayOperators(3); // Создаем массив из рандомных операторов
      const num1 = randomNumber(1, 100);
      const num2 = randomNumber(1, 100);
      console.log(`Question: ${num1} ${arrOp[i]} ${num2}`);
      const rezult = operatorsChek(num1, arrOp[i], num2);
      const answer = readlineSync.question('Your answer: ');
      if (Number(answer) === rezult) {
        console.log('Correct!');
        if (i === 2) {
          console.log(`Congratulations, ${name}!`);
        }
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rezult}' \nLet's try again, ${name}!`);
        break;
      }
    }
  }
};

export default logicsOfGames;
