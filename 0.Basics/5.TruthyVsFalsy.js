// Falsy Values: false, 0, -0, 0n, "", null, undefined, NaN
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Everything else is truth: "false", [], {}, function() {}, Infinity
console.log(Boolean('false')); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(function () {})); // true
console.log(Boolean(Infinity)); // true

// Q1. Predict the output
console.log('2' + 2); // 22
console.log('2' - 2); // 0
console.log(true + 1); // 2
console.log(null + 1); // 1

// Q2. Custom Type Conversion Function
function toBoolean(val) {
  if (val) return true;
  return false;
}

console.log(toBoolean(0)); // false
console.log(toBoolean(undefined)); // false
console.log(toBoolean(NaN)); // false

console.log(toBoolean("false")); // true
console.log(toBoolean([])); // true
console.log(toBoolean({})); // true


// Q3. Fix the bug
let a = "5";
let b = 5;

if (a == b || a === b) {
  console.log("Equal");
} else {
  console.log("Not equal");
}

// Convert both to same type safely