// Q15. Check character type: Uppercase, Lowercase, Digit, Symbol
function checkCharType(ch) {
  const code = ch.charCodeAt(0);

  if (code >= 65 && code <= 90) {
    return 'Uppercase';
  } else if (code >= 97 && code <= 122) {
    return 'Lowercase';
  } else if (code >= 48 && code <= 57) {
    return 'Digit';
  } else {
    return 'Symbol';
  }
}

console.log(checkCharType('R')); // Uppercase
console.log(checkCharType('a')); // Lowercase;
console.log(checkCharType('9')); // Digit;
console.log(checkCharType('#')); // Symbol;
