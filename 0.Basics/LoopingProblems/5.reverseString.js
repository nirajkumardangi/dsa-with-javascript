// Q5. Reverse a string using a loop
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("niraj")); // jarni
console.log(reverseString("hello")); // olleh
