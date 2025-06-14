// Q22. Check Triangle is valid or not

function isValidTriangle(a1, a2, a3) {
  if (a1 + a2 > a3 && a1 + a3 > a2 && a2 + a3 > a1) {
    return 'Valid';
  }
  return 'Not valid';
}

console.log(isValidTriangle(10, 12, 5)); // Valid
console.log(isValidTriangle(0, 20, 10)); // Not valid
console.log(isValidTriangle(10, 20, 0)); // Not valid
