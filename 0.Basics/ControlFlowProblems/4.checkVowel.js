// Q4. Check if a character is a vowel (use switch)
function checkVowel(char) {
  switch (char.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}

let isVowel = checkVowel('p');

isVowel ? console.log('Vowel') : console.log('Consonant');
