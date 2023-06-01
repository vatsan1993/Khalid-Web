// Dot Operator

const student = {
  name: 'Max',
  age: 20,
  marks: 99.9,
};

let studentName = student.name;
console.log(studentName);

let studentMark = student.marks;
console.log(`${studentName} scored ${studentMark} marks`);
console.log(`${student.name} scored ${student.marks} marks`);

const book = {
  id: 'AB123H',
  name: 'Harry Potter',
  author: 'J. K. Rowling',
  publishYear: 2012,
  price: 49.9,
  edition: 5,
};

let bookName = book.name;
let author = book.author;
console.log(`Book Name : ${bookName}`);
console.log(`Author: ${author}`);

let price = book.price;
price -= price * 0.05;
console.log(`Discounted Price: ${price}`);
