// [5 10 30 40 50] Insert 25 at index 2

function insert(arr, position, value) {
  let length = arr.length;
  for (let i = length; i > position; i--) {
    arr[i] = arr[i - 1];
  }

  arr[position] = value;

  return arr;
}

console.log(insert([5, 10, 30, 40, 50], 2, 25));
