import readlineSync from 'readline-sync';

const roundsCount = 3;

const greetTheUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const startEngin = (description, getRound) => {
  const userName = greetTheUser();
  console.log(description);
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = getRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}' \nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  } console.log(`Congratulations, ${userName}!`);
};

export default startEngin;
