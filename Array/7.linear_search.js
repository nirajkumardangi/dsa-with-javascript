// Search an element (Linear search)

function linerSearch(arr, target) {
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      found = true;
      break;
    }
  }
  return found;
}

const isFound = linerSearch([10, 20, 40, 30], 40);
console.log(isFound ? "Found" : "Not Found");
