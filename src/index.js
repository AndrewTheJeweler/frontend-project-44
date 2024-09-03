import readlineSync from 'readline-sync';
import {
  // eslint-disable-next-line max-len
  randomNumber, greetings, isNumberEven, primeNumber, arrProgression, findGreaterDivisor, arrayOperators, operatorsCheck,
} from './utils.js';

const round = 2;
// Логика всех игр
const logicsOfGames = (type = 'progression') => {
  const name = greetings();
  if (type === 'progression') {
    console.log('What number is missing in the progression?');
    for (let i = 0; i <= round; i += 1) {
      const array1 = arrProgression();
      const rezult = array1.splice(randomNumber(0, 9), 1, '..');
      const condition = array1.join(' ');
      console.log(`Question: ${condition}`);
      const answer = readlineSync.question('Your answer: ');
      if (rezult[0] === Number(answer)) {
        console.log('Correct!');
        if (i === round) {
          console.log(`Congratulations, ${name}!`);
        }
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rezult}' \nLet's try again, ${name}!`);
        break;
      }
    }
  } else if (type === 'prime') {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i <= round; i += 1) {
      const num = randomNumber(2, 101);
      console.log(`Question: ${num}`);
      const rezult = primeNumber(num);
      const answer = readlineSync.question('Your answer: ');
      if (answer === rezult) {
        console.log('Correct!');
        if (i === round) {
          console.log(`Congratulations, ${name}!`);
        }
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rezult}' \nLet's try again, ${name}!`);
        break;
      }
    }
  } else if (type === 'gcd') {
    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 0; i <= round; i += 1) {
      const num1 = randomNumber(1, 10);
      const num2 = randomNumber(1, 10);
      console.log(`Question: ${num1} ${num2}`);
      const answer = readlineSync.question('Your answer: ');
      const rezult = findGreaterDivisor(num1, num2);
      if (Number(answer) === rezult) {
        console.log('Correct!');
        if (i === round) {
          console.log(`Congratulations, ${name}!`);
        }
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rezult}'. \nLet's try again, ${name}!`);
        break;
      }
    }
  } else if (type === 'even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i <= round; i += 1) {
      const randomNum = randomNumber(1, 100);
      console.log(`Question: ${randomNum}`);
      const answer = readlineSync.question('Your answer: ');
      const rezult = isNumberEven(randomNum, answer);
      if (answer === rezult) {
        console.log('Correct!');
        if (i === round) {
          console.log(`Congratulations, ${name}!`);
        }
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rezult}'. \nLet's try again, ${name}!`);
        break;
      }
    }
  } else if (type === 'calc') {
    console.log('What is the result of the expression?');
    for (let i = 0; i <= round; i += 1) {
      const arrayOfOperators = arrayOperators(3);
      const firstNumber = randomNumber(1, 100);
      const secondNumber = randomNumber(1, 100);
      console.log(`Question: ${firstNumber} ${arrayOfOperators[i]} ${secondNumber}`);
      const rezult = operatorsCheck(firstNumber, arrayOfOperators[i], secondNumber);
      const answer = readlineSync.question('Your answer: ');
      if (Number(answer) === rezult) {
        console.log('Correct!');
        if (i === round) {
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
