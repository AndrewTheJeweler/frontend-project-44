import readlineSync from 'readline-sync';
import { greetings, arr, nod } from '../index.js';

const array = arr(6); // Определяем массив из случайных 6 символов (диапазон 1-100 включительно)

const gcdGames = () => {
  const name = greetings();
  console.log('Find the greatest common divisor of given numbers.');
  let k = 1;
  let o = 0;
  for (let i = 0; i <= 2; i += 1) {
    console.log(`Question: ${array[o]} ${array[k]}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === nod(array[o], array[k])) {
      console.log('Correct!');
      o += 2;
      k += 2;
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${nod(array[o], array[k])}'. \nLes't try again, ${name}!`);
      break;
    }
  }
};

export default gcdGames;
