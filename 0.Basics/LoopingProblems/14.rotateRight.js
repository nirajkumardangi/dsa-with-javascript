// Q14. Rotate an array by 1 place to the right using loop
function rotateRight(arr) {
  const last = arr.length - 1;
  const rotatedArray = [];

  for (let i = last; i >= 0; i--) {
    rotatedArray.push(arr[i]);
  }

  return rotatedArray;
}

console.log(rotateRight([1, 2, 3, 4, 5])); // [ 5, 4, 3, 2, 1 ]
