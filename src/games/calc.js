import readlineSync from 'readline-sync';
import { greetings, arr, arrayOperators } from '../index.js'; // функции приветствия, массивов со случайными числами и операторами

const array = arr(6);
const arrOp = arrayOperators(3);

const calcGames = () => {
  const name = greetings();
  console.log('What is the result of the expression?');
  let count = 0;
  let i = 0;
  let k = 1;
  let o = 0;
  while (count <= 2) {
    console.log(`Question: ${array[i]} ${arrOp[o]} ${array[k]}`);
    let rezult;
    switch (arrOp[o]) {
      case '*':
        rezult = array[i] * array[k];
        break;
      case '+':
        rezult = array[i] + array[k];
        break;
      default:
        rezult = array[i] - array[k];
    }
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === rezult) {
      console.log('Correct!');
      i += 2;
      k += 2;
      o += 1;
      count += 1;
      if (count === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rezult}' \nLet's try again, ${name}!`);
      break;
    }
  }
};

export default calcGames;
