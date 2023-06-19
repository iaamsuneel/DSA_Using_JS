var largestNumber = function (nums) {
  const nums1 = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 10) {
      nums1.push(nums[i]);
      nums.splice(i, 1);
      i = i - 1;
    }
  }

  const num3 = nums1.sort((a, b) => b - a);
  const num = nums.sort((a, b) => b - a);
  // console.log(num);
  const res = num.join("");
  const nums2 = res.split("").sort((a, b) => b - a);
  return [...num3, ...nums2].join("");
};
console.log(largestNumber([3, 30, 34, 5, 9]));
