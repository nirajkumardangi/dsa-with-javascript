// Q18. Simulate boolean logic (AND, OR, XOR)
function booleanLogic(a, b, operation) {
  switch (operation.toUpperCase()) {
    case 'AND':
      return a && b;
    case 'OR':
      return a || b;
    case 'XOR':
      return a !== b;
    default:
      return "Invalid operator! Use 'AND', 'OR', or 'XOR'.";
  }
}

console.log(booleanLogic(true, false, 'AND')); // false
console.log(booleanLogic(true, false, 'OR')); // true
console.log(booleanLogic(true, true, 'XOR')); // false
console.log(booleanLogic(false, true, 'XOR')); // true
