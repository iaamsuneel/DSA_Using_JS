function shuffle(nums, n) {
    let arr = []

    for (let i = 0; i < n; i++) {
        arr.push(nums[i])
       // console.log("nums[i]",i, nums[i])
        arr.push(nums[n + i])
       // console.log("nums[N+i]",i+n, nums[i + n])
    }
    return arr
};
console.log(shuffle([2, 5, 1, 3, 4, 7], 3))