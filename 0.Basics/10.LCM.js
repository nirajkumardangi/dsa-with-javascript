// LCM (Least Common Multiple):
// Formula: GCD(a, b) × LCM(a, b) = a × b;
//       => LCM(a, b) = a × b / GCD(a, b)

// function to calculate lcm
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// function to calculate gcd/hcf
function gcd(a, b) {
  while (b !== 0) {
    let reminder = a % b;

    a = b;
    b = reminder;
  }

  return a;
}

console.log(lcm(12, 18)); // 36
console.log(lcm(3, 6)); // 6