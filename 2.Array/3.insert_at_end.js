// Insert Element at the End (without push)
function insertAtEnd(arr, value) {
  arr[arr.length] = value; // place element at next free index
  return arr; // new size
}

result = insertAtEnd([10, 20, 30, 40], 50);
console.log(result);

// arr = [10, 20, 30, 40, 50]
