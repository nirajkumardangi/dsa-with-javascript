// Q14. Identify type of triangle: Equilateral, Isosceles, or Scalene
function triangleType(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return 'Not a valid triangle';
  }

  if (a === b && b === c) {
    return 'Equilateral Triangle';
  } else if (a === b || b === c || a === c) {
    return 'Isosceles Triangle';
  } else {
    return 'Scalene Triangle';
  }
}

console.log(triangleType(5, 5, 5)); // Equilateral Triangle
console.log(triangleType(5, 5, 6)); // Isosceles Triangle
console.log(triangleType(5, 6, 5)); // Isosceles Triangle
console.log(triangleType(4, 5, 6)); // Scalene Triangle
