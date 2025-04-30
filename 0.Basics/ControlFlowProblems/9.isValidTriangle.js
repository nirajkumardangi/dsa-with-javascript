// Q8. Check if 3 sides form a valid triangle
function isValidTriangle(a, b, c) {
  // check for positive length
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }

  return (a + b > c) && (b + c > a) && (a + c > b);
}

console.log(isValidTriangle(3, 4, 5)); // true
console.log(isValidTriangle(1, 1, 3)); // false
console.log(isValidTriangle(0, 4, 5)); // false
