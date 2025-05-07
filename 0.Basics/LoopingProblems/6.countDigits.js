// Q6. Count digits in a number
function countDigits(num) {
  // Handle negative numbers
  num = Math.abs(num);

  // Convert number to string and count length
  return num.toString().length;
}

console.log(countDigits(12345)); // Output: 5
console.log(countDigits(-987)); // Output: 3
console.log(countDigits(0)); // Output: 1
