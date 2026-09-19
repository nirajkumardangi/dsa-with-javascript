// Linear Seaarch

const arr = [10, 20, 5, 80, 30, 40];
const target = 30;

function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log("At index:", search(arr, target));
