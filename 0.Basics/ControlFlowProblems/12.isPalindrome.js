// Q11. Check if a string is a palindrome (no loops)
function isPalindrome(str) {
  if (typeof str !== 'string') {
    return 'Invalid input';
  }

  let reverseStr = str.toLowerCase().split('').reverse().join('');

  return str === reverseStr;
}

console.log(isPalindrome('level')); // true
console.log(isPalindrome('man')); // false
console.log(isPalindrome(12)); // Invalid input
