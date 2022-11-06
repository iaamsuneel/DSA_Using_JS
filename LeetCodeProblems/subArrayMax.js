
var maxSubArray = function (nums) {
    let max = nums[0];
    let cur = 0;
    for (let i = 0; i < nums.length; i++) {
        cur = Math.abs(cur + nums[i])
        console.log("object", cur);
        if (cur > max) max = cur
        if (cur < 0) cur = 0
    }
    return max;
};
console.log(maxSubArray([2, -5, 1, -4, 3, -2]));