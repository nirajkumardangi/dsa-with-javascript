// Leetcode Problem 344 : Reverse String

function reverseString(s) {
  let arrLen = s.length;
  let half = Math.floor(arrLen / 2);

  for (let i = 0; i < half; i++) {
    let temp = s[i];
    s[i] = s[arrLen - 1 - i];
    s[arrLen - 1 - i] = temp;
  }

  return s
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
