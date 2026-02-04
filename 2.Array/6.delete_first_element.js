// Delete First Element (without shift)
function deleteFromBeginning(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}

const result = deleteFromBeginning([10, 20, 30, 40]);
console.log(result); // [ 20, 30, 40 ]
