// Delete First Element (without shift)
const arr = [10, 20, 30, 40];

for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}

console.log(arr); // [ 20, 30, 40, 40 ]

arr.length = arr.length - 1;

console.log(arr); // [ 20, 30, 40 ]
