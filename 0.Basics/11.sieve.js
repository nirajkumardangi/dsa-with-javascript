// find all prime number from 1 - n in time: O(n log log n)

function sieve(n) {
  let isPrime = new Array(n + 1);

  // Initialize all with letting prime
  for (let i = 0; i <= n; i++) {
    isPrime[i] = true;
  }

  // 0 and 1 is always not prime
  isPrime[0] = false;
  isPrime[1] = false;

  // Mark composite numbers
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Collect primes
  let primes = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
}

console.log(sieve(30));
