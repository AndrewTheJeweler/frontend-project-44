import readlineSync from 'readline-sync';

// Определяем функцию для генирации рандомного числа
const randomNumber = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;

  return num;
};

const evenGames = () => {
  const name = readlineSync.question('Welcom to the Brain Games! \nMay I have your name? '); // Приветствие
  console.log(`Hello, ${name}! 
Answer "yes" if the number is even, otherwise answer "no".`);
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100); // Генирируем рандомные числа
  const number3 = randomNumber(1, 100);
  const array = [number1, number2, number3]; // Создаем массив из рандомных чисел
  let count = 0; // Определяем счетчик для цикла
  let i = 0; // Определяем счетчик для индекса массива
  while (count <= 2) {
    console.log(`Question: ${array[i]}`);
    const question1 = readlineSync.question('Your answer: ');
    if ((array[i] % 2 === 0 && question1 === 'yes') || (array[i] % 2 !== 0 && question1 === 'no')) {
      console.log('Correct!');
      i += 1;
      count += 1;
      if (count === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else if (array[i] % 2 === 0) {
      console.log(`"${question1}" is wrong answer ;(. Correct answer was 'yes'.`);
      break;
    } else if (array[i] % 2 !== 0) {
      console.log(`"${question1}" is wrong answer ;(. Correct answer was 'no'.`);
      break;
    }
  }
};

export default evenGames;
