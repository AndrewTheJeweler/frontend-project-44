import readlineSync from 'readline-sync';
import {
  greetings, randomNumber, arr, primeNumber,
} from '../index.js';

const primeGame = () => {
  const name = greetings();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const number = arr(randomNumber(2, 101));
  for (let i = 0; i <= 2; i += 1) {
    console.log(`Question: ${number[i]}`);
    const isPrime = primeNumber(number[i]);
    const answer = readlineSync.question('Your answer: ');
    if (answer === isPrime) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else if (isPrime === 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime}' \nLet's try again, ${name}!`);
      break;
    }
  }
};

export default primeGame;
