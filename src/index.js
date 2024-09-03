import readlineSync from 'readline-sync';
import { greetings } from './utils.js';

const countRound = 3;
const enginOfGames = (exercise, round) => {
  const name = greetings();
  console.log(exercise);
  for (let i = 1; i <= countRound; i += 1) {
    const [question, correctAnswer] = round();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}' \nLet's try again, ${name}!`);
      return;
    }
  } console.log(`Congratulations, ${name}!`);
};

export default enginOfGames;
