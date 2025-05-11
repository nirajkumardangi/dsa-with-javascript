// Q12. Count frequency of each character in a string (no Map/object)
function charFrequency(str) {
  let freq = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === '') continue;

    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }

  return freq;
}

console.log(charFrequency('aaazzzhiii'));
