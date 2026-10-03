function hasDuplicate(nums) {
  let seen = {};

  for (let i = 0; i < nums.length; i++) {
    if (seen[nums[i]]) {
      return true;
    } else {
      seen[nums[i]] = true;
    }
  }

  return false;
}

hasDuplicate([1, 2, 3, 3]);
