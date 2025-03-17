function sum(nums) {
  var arr = [];
  for (let i = 0; i < nums.length; i = i + 1) {
    console.log("i", nums[i], i);
    for (let j = i + 1; j < nums.length - 1; j = j + 1) {
      console.log("j", nums[j], j);
      for (let k = j + 1; k < nums.length - 2; k = k + 1) {
        console.log("k", nums[k], k);
        if (nums[i] + nums[j] + nums[k] == 0) {
          arr.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return arr;
}

console.log(sum([-1, 0, 1, 2, -1, -4]));
