// bitwise operator  // not useful
//64 32 16 8 4 2 1

let a = 10; // 1010
let b = 12; // 1100
console.log(a & b); // 1000 --> 8
console.log(a | b); // 1110 --> 14

console.log(a << 2); //101000

a = -4;
console.log(a >> 2); //0010 // 2s complement
console.log(a >>> 2);
