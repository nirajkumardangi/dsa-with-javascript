// Leetcode Problem 704 : Binary Search

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;

function search(nums, target) {
  let first = 0;
  let last = nums.length - 1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }

  return -1;
}

console.log("At index: ", search(nums, target));
