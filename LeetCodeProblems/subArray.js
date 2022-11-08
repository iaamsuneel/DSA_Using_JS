function subArray(arr) {
    let max = 0
    let curr = 0
    for (let i = 0; i < arr.length; i++) {
        curr = curr + arr[i]
        console.log("curr", curr)
        if (curr > max) max = curr
        max = Math.max(curr, max)
        console.log("max", max)
    }
    return max
}
console.log(subArray([15, -2, 2, -8, 1, 7, 10, 23]))