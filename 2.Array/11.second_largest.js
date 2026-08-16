function secondLargest(arr) {
  if (arr.length < 2) {
    return "Array should have atleast 2 elements";
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest; 
      firstLargest = arr[i]; 
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }

  if (secondLargest === -Infinity) {
    return "Second largest element does not exist";
  }

  return secondLargest;
}

console.log(secondLargest([20, -10, -30, 40, 50, 80, 30])); // 50
console.log(secondLargest([80, 50, 40, 30])); // 50
console.log(secondLargest([-10, -20, -30])); // -20
console.log(secondLargest([5, 5, 4, 3])); // 4
console.log(secondLargest([1])); // Array should have atleast 2 elements
console.log(secondLargest([])); // Array should have atleast 2 elements
console.log(secondLargest([5, 5, 5])); // Second largest element does not exist
