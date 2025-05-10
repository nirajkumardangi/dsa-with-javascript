// Q10. Print Fibonacci sequence up to N terms
function fibonacci(n) {
  if (n < 0) return 'Enter positive number';
  let a = 0;
  let b = 1;
  console.log(a);
  console.log(b);
  for (let i = 0; i <= n; i++) {
    let temp = a + b; // 1
    console.log(temp); // 1
    a = b;
    b = temp;
  }
}

// 0 1 1 2 3 5 8 13

fibonacci(5);
