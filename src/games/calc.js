import readlineSync from 'readline-sync';
import {
  greetings, arr, arrayOperators, operatorsChek,
} from '../index.js';

const array = arr(6);
const arrOp = arrayOperators(3);

const calcGames = () => {
  const name = greetings();
  console.log('What is the result of the expression?');
  let k = 1;
  let o = 0;
  for (let i = 0; i <= 2; i += 1) {
    console.log(`Question: ${array[o]} ${arrOp[i]} ${array[k]}`);
    const rezult = operatorsChek(array[o], arrOp[i], array[k]);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === rezult) {
      console.log('Correct!');
      k += 2;
      o += 2;
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rezult}' \nLet's try again, ${name}!`);
      break;
    }
  }
};

export default calcGames;
