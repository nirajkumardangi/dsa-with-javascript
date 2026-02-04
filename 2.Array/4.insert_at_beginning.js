// Insert Element at the Beginning (without unshift)

function insertAtBeginning(arr, value) {
  // shift all elements right
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = value;
  return arr;
}

const result = insertAtBeginning([10, 20, 30], 5);

console.log(result); // [ 5, 10, 20, 30 ]
