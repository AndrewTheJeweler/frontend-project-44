import readlineSync from 'readline-sync';
import { greetings, arr, isNumberEven } from '../index.js'; // Функция приветствия, функция определения массива из заданного количества случайных символов

const array = arr(3); // Создаем массив из рандомных чисел

const evenGames = () => {
  const name = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
    console.log(`Question: ${array[i]}`);
    const answer = readlineSync.question('Your answer: ');
    const number = isNumberEven(array[i], answer);
    if (answer === number) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${number}'. \nLet's try again, ${name}!`);
      break;
    }
  }
};

export default evenGames;
