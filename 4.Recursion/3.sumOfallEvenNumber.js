// find the sum of all even number

let arr = [2, 4, 5, 2, 3];

function sum(n) {
  if (n === 0) {
    return arr[0] % 2 === 0 ? arr[0] : 0;
  }

  if (arr[n] % 2 === 0) {
    return arr[n] + sum(n - 1);
  }

  return sum(n - 1);
}

console.log(sum(arr.length - 1));
