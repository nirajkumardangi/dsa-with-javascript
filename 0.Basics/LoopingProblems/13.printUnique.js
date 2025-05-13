// Q13. Print all unique elements in an array
function printUnique(arr) {
  const freq = {};
  // Step 1: Count frequencies using a basic loop
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (freq[element] === undefined) {
      freq[element] = 1;
    } else {
      freq[element]++;
    }
  }

  // Step 2: Print elements with frequency 1
  for (let element in freq) {
    if (freq[element] === 1) {
      console.log(+element);
    }
  }
}

printUnique([6, 5, 8, 5, 4, 4]);  // 6, 8
