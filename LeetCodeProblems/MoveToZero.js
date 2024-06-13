var moveZeroes = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }
    }
    return nums;
};
console.log(moveZeroes([2, 0, 1, 0, 10, 3, 0, 6, 8]));
