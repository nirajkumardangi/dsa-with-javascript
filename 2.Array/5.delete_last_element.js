// Delete Last Element (without pop)
function deleteLastElement(arr) {
  arr.length = arr.length - 1;
  return arr;
}

const result = deleteLastElement([10, 20, 30, 40]);
console.log(result);
