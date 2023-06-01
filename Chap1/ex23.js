// quadratic equation
let a = 2;
let b = 20;
let c = 3;

// console.log(b ** 2 - 4 * a * c);
let commonExpression = Math.sqrt(b ** 2 - 4 * a * c);
let x1 = (-b + commonExpression) / (2 * a);
let x2 = (-b - commonExpression) / (2 * a);
console.log(x1, x2);
