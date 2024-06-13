var applyOperations = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            console.log(i);
            i++
            j++
        }
    }
};
console.log(applyOperations([[1, 2, 2, 1, 1, 0]]));
//[1,4,2,0,0,0]
