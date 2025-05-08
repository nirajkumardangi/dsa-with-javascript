// Q8. Count vowels in a string
function countVowels(str) {
  let vowelContained = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
        vowelContained += 1;
        break;
    }
  }
  return vowelContained;
}

console.log(countVowels('banana')); // 3
console.log(countVowels('orange')); // 3
