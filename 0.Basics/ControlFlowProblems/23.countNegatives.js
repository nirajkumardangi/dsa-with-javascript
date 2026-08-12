// Write a function that returns the number of negative elements in an array
function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

const result = countNegatives([10, -9, 4, -7, -8, 9, 3, 2]);
console.log(result); // 3
