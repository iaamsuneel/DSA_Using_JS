function zero(nums) {
    let i = 0
    for (let j = 0; j < nums.length; j++) {
        console.log("enter in loop", nums[j], nums[i])
        if (nums[j] != 0) {
            let temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp
            console.log("i+++", i)
            i++;
        }
    }
    return nums
}
console.log(zero([0, 1, 0, 3, 12]))