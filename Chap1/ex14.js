// logical operators
let a = 10;
let b = 20;
let c = 12;
console.log(a >= 0 && b >= 0 && c >= 0);
console.log(a > 10 || b > 10 || c > 10);
console.log((a > 10) ^ (b > 10) ^ (c > 10));
console.log((a > 15) ^ (b > 15) ^ (c > 15));

// demorgan's law
console.log(!(a > 10 && b > 10));
console.log(!(a > 10) || !(b > 10));

console.log(!(a > 10 || b > 10));
console.log(!(a > 10) && !(b > 10));
