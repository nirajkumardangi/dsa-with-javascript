// GCD/HCF (Highest Common Factor): Do numbers ko completely divide karne wale common factors mein jo sabse bada ho, wahi HCF hai.

// Common Way
function gcd(a, b) {
  let result = 1;
  let limit = Math.min(a, b);

  for (let i = 1; i <= limit; i++) {
    if (a % i === 0 && b % i === 0) {
      result = i;
    }
  }

  return result;
}

// console.log(gcd(12, 18)); // 6

// Optimized Way : Euclidean Algorithm - GCD(a, b) = GCD(b, a % b) repeat until b === 0
function hcf(a, b) { 
  while (b !== 0) { 
    let reminder = a % b; 

    a = b; 
    b = reminder; 
  }

  return a;
}

console.log(hcf(48, 18)); // 6
