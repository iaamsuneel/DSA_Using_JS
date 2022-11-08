function sort(nums) {
    const zero = [], one = [], two = []
    for (let num of nums) {
        if (num === 0) zero.push(num)
        else if (num === 1) one.push(num)
        else two.push(num)
    }
    nums.length = 0
    nums.push(...zero)
    nums.push(...one)
    nums.push(...two)
    return nums
}
console.log(sort([2, 0, 2, 1, 1, 0]))