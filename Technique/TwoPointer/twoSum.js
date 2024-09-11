const twoSum = (nums, target) => {
  let i = 0;
  let j = nums.length - 1;
  const res = [];
  while (i < j) {
    let sum = nums[i] + nums[j];
    if (sum < target) {
      i++;
    } else if (sum === target) {
      res.push([i, j]);
      i++, j++;
    } else {
      j--;
    }
  }
  return res;
};
const nums = [1, 2, 3, 4, 5, 6, 7, 11, 15],
  target = 9;
console.log(twoSum(nums, target));
