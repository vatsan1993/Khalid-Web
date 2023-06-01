let favMovies = [
  {
    name: 'Fast X',
    year: 2023,
    duration: 141,
    ticketPrice: 5,
  },
  {
    name: 'Guardians Of Galaxy 3',
    year: 2023,
    duration: 160,
    ticketPrice: 7,
  },
  {
    name: 'RRR',
    year: 2023,
    duration: 250,
    ticketPrice: 4,
  },
];

// extract name and duration of first movie
const firstMovie = favMovies[0];
let name1 = firstMovie.name;
let duration1 = firstMovie['duration'];
console.log(`Name: ${name1}`);
console.log(`Duration: ${duration1}`);

// second movie name and year
const secondMovie = favMovies[1];
let name2 = secondMovie.name;
let year = secondMovie.year;

console.log(`Name: ${name2}`);
console.log(`Year: ${year}`);

// extract name and ticket price
let name3 = favMovies[2].name;
let ticketPrice = favMovies[2]['ticketPrice'];
console.log(`Name: ${name3}`);
console.log(`Ticket Price: ${ticketPrice}`);
