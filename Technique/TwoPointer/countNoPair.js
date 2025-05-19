const countFairPairs = function (nums, lower, upper) {
  let count = [];
  let i = 0,
    j = nums.length;
  const arr = [...nums].sort((a, b) => a - b);
  console.log("arr", arr);
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (lower <= sum && sum <= upper) {
      count.push([i, j]);
      i++;
      j++;
    } else if (lower > sum) {
      i++;
    } else {
      j--;
    }
  }
  return count;
};
const nums = [0, 1, 7, 4, 4, 5],
  lower = 3,
  upper = 6;
console.log(countFairPairs(nums, lower, upper));
