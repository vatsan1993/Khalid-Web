const carInventory = [
  {
    model: 'M3',
    make: 'BMW',
    color: 'Blue',
    engine: 'V8',
    topSpeed: 210,
    speedUnits: 'miles/hr',
    price: 120000,
    priceUnits: 'USD',
  },
  {
    model: 'X10',
    make: 'BMW',
    color: 'Black',
    engine: 'Electric',
    topSpeed: 230,
    speedUnits: 'miles/hr',
    price: 220000,
    priceUnits: 'USD',
  },
  {
    model: 'Supra',
    make: 'Toyota',
    color: 'Green',
    engine: 'V8',
    topSpeed: 175,
    speedUnits: 'miles/hr',
    price: 90000,
    priceUnits: 'USD',
  },
];
// Accessing inner object first and then the individual value.
// const innerObject = outerArray[index];
// const singleValue = innerObject.key  or innerObject[keyvariable]

const car1 = carInventory[0]; // car1 is an object
const name1 = `${car1.make} ${car1.model}`;
const price1 = car1['price'];

console.log(`Name: ${name1}`);
console.log(`Price: ${price1}`);

const car2 = carInventory[1]; //car2 is an object
const name2 = `${car2.make} ${car2.model}`;
// const price2 = car2['price'];
const price2 = car2.price;
console.log(`Name: ${name2}`);
console.log(`Price: ${price2}`);

// Accessing individual value using the array directly
// const singleValue = outerArray[index].key
// const singleValue = outerArray[index][keyvariable]
const name3 = `${carInventory[2].make} ${carInventory[2].model}`;
const price3 = carInventory[2]['price'];
console.log(`Name: ${name3}`);
console.log(`Price: ${price3}`);
