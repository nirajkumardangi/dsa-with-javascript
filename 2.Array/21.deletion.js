// Deletion in Array
const arr = [5, 10, 25, 30, 40, 50];
const position = 2;

function deletion(arr, position) {
  let length = arr.length;

  // Shift elements to the left
  for (let i = position; i < length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  // Remove last duplicate element
  arr.length = arr.length - 1;

  return arr;
}

console.log(deletion(arr, position));
