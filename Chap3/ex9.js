const game = {
  name: 'Resident Evil Village',
  publisher: 'Capcom',
  year: 2021,
  price: 30,
};

const extraProps = {
  rating: 9.5,
  numOfInstalls: 10042042,
  award: 'Game of the year',
};

const completeGameObj = Object.assign(game, extraProps);
console.log(completeGameObj);

// never do this
// this does not copy
// const newGame = completeGameObj;
// newGame.name = 'Rocket League';
// newGame.publisher = 'Phyosics';
// newGame.price = 0;
// newGame.rating = 8;
// console.log(newGame);
// console.log(completeGameObj);

// copying objects
const newGame = Object.assign({}, completeGameObj);
newGame.name = 'Rocket League';
newGame.publisher = 'Phyosics';
newGame.price = 0;
newGame.rating = 8;
console.log(newGame);
console.log(completeGameObj);
