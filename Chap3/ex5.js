// changing value using dot operator.
const game = {
  name: 'Resident Evil Village',
  publisher: 'Capcom',
  year: 2021,
  price: 30,
};
console.log(game);

game.price = 28;

console.log(game);

// Changing value using []
const movie = {
  name: 'Fast X',
  year: 2023,
  duration: 141,
  ticketPrice: 5,
};
console.log(movie);
let key1 = 'duration';
let key2 = 'ticketPrice';
movie[key1] = 160;
movie[key2] = 6;
console.log(movie);

// adding new item
// using dot operator
const mobile = {
  manufacturer: 'Samsung',
};

mobile.model = 'Galaxy S24';
mobile.color = 'Black';

console.log(mobile);

// using [] operator
let newKey = 'price';
let price = 1300;
mobile[newKey] = price;
console.log(mobile);
