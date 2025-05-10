// Q11. Find largest element in an array using loop
function findMax(arr) {
  let greatestElement = arr[0]; // 20
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > greatestElement) {
      greatestElement = arr[i];
    }
  }
  return greatestElement;
}

console.log(findMax([20, 4, 52, 45, 20, 10])); // 52
