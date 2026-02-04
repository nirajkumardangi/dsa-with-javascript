// Find maximim value in an array
function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const result = findMax([20, 30, 10, 60]);
console.log(result); // 60
