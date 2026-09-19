// Bubbole Sort

const arr = [5, -1, 5, 10, 2, 4];
const arr2 = [1, 0, 2, 3, 4, 5];

function sort(arr) {
  let length = arr.length - 1;

  while (length > 0) {
    let isSwapped = false;

    for (let i = 0; i < length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;

        isSwapped = true;
      }
    }

    if (!isSwapped) {
      break;
    }

    length = length - 1;
  }

  return arr;
}

console.log(sort(arr2));
