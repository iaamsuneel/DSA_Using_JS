var createTargetArray = function (nums, index) {
  const res = [];
  for (let i = 0; i < nums.length; ++i)
    console.log(res, res.splice(index[i], 0, nums[i]));
  return res;
};
console.log(createTargetArray([0, 12, 21, 13, 14], [0, 1, 2, 2, 1]));
// output- [ 0, 14, 12, 13, 21 ]
