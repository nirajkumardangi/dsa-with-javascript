// Q9. Check if a number is prime
function isPrime(n) {
  if (n < 2) return false;
  
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(2));  // true
