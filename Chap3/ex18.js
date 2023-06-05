let footballPlayer = {
  jerseyNumber: 10,
  name: {
    firstName: 'Brian',
    lastName: 'Conor',
    middleName: 'O',
  },
  height: {
    feet: 6,
    inches: 2,
  },
  marchesWon: 20,
  matchesPlayed: 30,
  rating: 7.4,
  address: {
    street: 'Wellington Street',
    city: 'London',
    country: 'UK',
    zip: 51235,
  },
};
// console.log(Object.keys(footballPlayer));
let name = footballPlayer.name;
// console.log(Object.keys(name));
let fullName = `${name.firstName} ${name.middleName} ${name.lastName}`;

console.log(fullName);

let height = footballPlayer.height;
// console.log(Object.keys(height));
let heightString = `${height.feet}'${height.inches}''`;
console.log(`Height = ${heightString}`);

let address = footballPlayer.address;
// console.log(Object.keys(address));
let location = `${address.city}, ${address.country}`;
console.log(`Location:  ${location}`);
