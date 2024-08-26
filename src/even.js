import readlineSync from 'readline-sync';
import { greetings, arr } from './index.js'; // Функция приветствия, функция определения массива из заданного количества случайных символов

const array = arr(3); // Создаем массив из рандомных

const evenGames = () => {
  const name = greetings(); // Передаем в констану name имя пользователя, возвращенное функцией
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0; // Определяем счетчик для цикла
  let i = 0; // Определяем счетчик для индекса массива
  while (count <= 2) {
    console.log(`Question: ${array[i]}`);
    const answer = readlineSync.question('Your answer: ');
    if ((array[i] % 2 === 0 && answer === 'yes') || (array[i] % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      i += 1;
      count += 1;
      if (count === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else if (array[i] % 2 === 0) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`);
      break;
    } else if (array[i] % 2 !== 0) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      break;
    }
  }
};

export default evenGames;
