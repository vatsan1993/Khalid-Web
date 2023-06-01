let students = [
  ['Max', 20, 99.9, 'Computer Science'],
  ['James', 20, 74.2, 'Mechanical Engineering'],
  ['Jack', 19, 87.4, 'Civil Engineering'],
  ['Alice', 20, 77.4, 'Political Studies'],
];

// Extract name and subject of the first student
let firstStudent = students[0];
let name1 = firstStudent[0];
let subject1 = firstStudent[3];
console.log(`${name1} has a major in ${subject1}`);

// Extract name and age of second student
let secondStudent = students[1];
let name2 = secondStudent[0];
let age2 = secondStudent[1];
console.log(`${name2} is ${age2} years old.`);

// Extract jack and his marks
let thirdStudent = students[2];

let name3 = thirdStudent[0];
let score = thirdStudent[2];
let subject3 = thirdStudent[3];
console.log(`${name3} scored ${score} marks in ${subject3}`);
