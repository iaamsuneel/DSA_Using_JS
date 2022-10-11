function rotate(nums, k) {
    const temp = []
    for (let i = 0; i < nums.length; i++) {
       // console.log("array", nums[i])
        temp[(i + k) % nums.length] = nums[i]
       // console.log("temp", temp[(i + k) % nums.length])

    }
    nums = temp
    return nums
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))

/* var rotate = function(nums, k) {
    var i = 0;
      while(i < k){
          var last = nums[nums.length-1];
          nums.pop();
          nums.unshift(last);
          i++;
      }
      return nums;
  }; */