import readlineSync from 'readline-sync';
import { greetings, arrProgression, randomNumber } from '../index.js';

const progressionGame = () => {
  const name = greetings();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const array = arrProgression(); // Реализуем массив из рандомной арифметической прогресии
    const removeNumber = array.splice(randomNumber(0, 9), 1, '..'); // Удаляем из массива выше рандомное число, заменяя его на '..'
    console.log(`Question: ${array.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    if (removeNumber[0] === Number(answer)) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${removeNumber}' \nLet's try again, ${name}!`);
      break;
    }
  }
};

export default progressionGame;
