// Insert Element at the Beginning (without unshift)

const arr = [20, 30, 40];
const value = 10;

for (let i = arr.length; i > 0; i--) {
  arr[i] = arr[i - 1];
}

arr[0] = value;

console.log(arr);
