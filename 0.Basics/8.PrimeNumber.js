// Traditional way to find prime number
/**
function isPrime(num) {
  if (num < 2) {
    return `${num} is not a prime number`;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${num} is not a prime number`;
    }
  }

  return `${num} is prime number`;
}

console.log(isPrime(17)); 
console.log(isPrime(15)); 
*/

// Optimized way to find prime number - √n
function isPrime(num) {
  if (num < 2) {
    return `${num} is not a prime number`;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return `${num} is not a prime number`;
    }
  }

  return `${num} is a prime number`;
}

console.log(isPrime(17)); // true
console.log(isPrime(15)); // false
