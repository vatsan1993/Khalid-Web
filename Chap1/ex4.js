let age = '20';
let ageNum = parseInt(age);
console.log(typeof age); // string
console.log(typeof ageNum); // number

let marks = '99.9';
let marksNum = parseFloat(marks);
console.log(typeof marks); // string
console.log(typeof marksNum); // number

// permanent edit to the original variable
let salary = '20000';
salary = parseInt(salary);
console.log(typeof salary); // number

// not very useful
let age2 = 10;
let ageStr = '' + age2;
