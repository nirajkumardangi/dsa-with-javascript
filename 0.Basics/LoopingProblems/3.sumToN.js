// Q3. Sum of first N natural numbers
function sumToN(n) {
  if (n < 1) {
    console.log('Not a natural number');
  } else {
    let sum = 0;
    for (let i = 1; i < n; i++) {
      sum += i;
    }

    console.log(sum);
  }
}

sumToN(10); // 45
sumToN(0); // 45
