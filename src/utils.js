const getRandomNumber = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 2)) + min;

  return number;
};

export default getRandomNumber;
