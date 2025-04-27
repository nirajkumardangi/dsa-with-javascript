// Q2. Find max of two numbers
function maxOfTwo(a, b) {
  return a > b
    ? `${a} is max` : a == b
    ? `${a} is equal to ${b}` : `${b} is max`;
}

console.log(maxOfTwo(5, 15)); // 15 is max
console.log(maxOfTwo(10, 10)); // 10 is equal to 10
