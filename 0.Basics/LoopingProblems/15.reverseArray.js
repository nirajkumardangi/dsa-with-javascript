// Q15. Reverse an array in-place (no extra space)
function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1; // 5
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

// OUTPUT:::
// [ 5, 4, 3, 2, 1 ]
