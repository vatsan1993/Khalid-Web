let randVal = Math.random();

console.log(randVal);
let player = randVal > 0.5 ? 'Player1' : 'player2';
console.log(`${player} won the game`);

let max = 50;
let min = 10;

let randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);

player = randomInt > 30 ? 'player 1' : 'player 2 ';
console.log(`${player} won the game`);
