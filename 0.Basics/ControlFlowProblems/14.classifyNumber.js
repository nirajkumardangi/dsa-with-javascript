// Q13. Classify number by divisibility (2 and/or 3)
function classifyNumber(n) {
  if (n % 2 === 0 && n % 3 === 0) {
    return 'Divisible by Both 2 and 3';
  } else if (n % 3 === 0) {
    return 'Divisible by 3';
  } else if (n % 2 === 0) {
    return 'Divisible by 2';
  } else {
    return 'Divisible by neither';
  }
}

console.log(classifyNumber(12)); // Divisible by Both 2 and 3
console.log(classifyNumber(3)); // Divisible by 3
console.log(classifyNumber(11)); // Divisible by neither
console.log(classifyNumber(8)); // Divisible by 2
