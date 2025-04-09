// Decimal: 0,1,2,3,4,5,6,7,8,9
// Binario: 0,1
// bit: 0 1
// Byte: 8 bits
// Byte: 0000 0000 -> 0
// Byte: 0000 0001 -> 1
// Byte: 0000 0010 -> 2
// Byte: 0000 0011 -> 3
// Byte: 0000 0100 -> 4
// Byte: 0000 0101 -> 5
// Byte: 0000 0110 -> 6

console.log(1 | 3); // 0000 0011
console.log(1 | 4); // 0000 0101
console.log(3 | 5); // 0000 0111

console.log(1 & 3); // 0000 0001
console.log(1 & 4); // 0000 0000
console.log(3 & 5); // 0000 0001