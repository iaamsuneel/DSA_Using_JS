var singleNumber = function (nums) {
    const op = []
    const res = nums.reduce((acc, curr) => {
        if (curr in acc) { acc[curr]++ }
        else { acc[curr] = 1 }
        return acc
    }, {});
    for (let item in res) {
        if (res[item] === 1) {
            op.push(item)
        }
    }
};
console.log(singleNumber([1, 2, 1, 3, 2, 5]))