import readlineSync from 'readline-sync';
import { greetings, arr, nod } from '../index.js';

const array = arr(6); // Определяем массив из случайных 6 символов (диапазон 1-100 включительно)

const gcdGames = () => {
  const name = greetings();
  console.log('Find the greatest common divisor of given numbers.');
  let count = 0; // определяем счетчик для цикла
  let i = 0; // Определяем счетчики для массивов
  let k = 1; //
  while (count <= 2) {
    console.log(`Question: ${array[i]} ${array[k]}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === nod(array[i], array[k])) {
      console.log('Correct!');
      count += 1;
      i += 2;
      k += 2;
      if (count === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${nod(array[i], array[k])}'. \nLes't try again, ${name}!`);
      break;
    }
  }
};

export default gcdGames;
