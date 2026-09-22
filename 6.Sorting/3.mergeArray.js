// Merge 2 Sorted Array into a Single Array

const arr1 = [2, 5, 7, 8];
const arr2 = [0, 1, 9];

function mergeTwoArray(arr1, arr2) {
  let result = []; // for storing sorted array element;
  let i = 0; // for arr1 element
  let j = 0; // for arr2 element
  let k = 0; // index where i store in result

  // condition which
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result[k] = arr1[i];
      i++;
    } else {
      result[k] = arr2[j];
      j++;
    }
    k++;
  }

  while (i < arr1.length) {
    result[k] = arr1[i];
    i++;
    k++;
  }

  while (j < arr2.length) {
    result[k] = arr2[j];
    j++;
    k++;
  }

  return result;
}

console.log(mergeTwoArray(arr1, arr2));
