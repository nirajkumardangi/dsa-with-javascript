// find the sum of all elements in an array

let arr = [1, 4, 5, 2, 3];

function sum(n) {
  if (n === 0) return arr[0];

  return arr[n] + sum(n - 1);
}

console.log(sum(arr.length - 1)); // 15
