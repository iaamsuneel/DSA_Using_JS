function leastFrequent(arr) {
    let arr1 = arr.sort((a, b) => a - b)
    let maxValues = arr[0], maxCount
    for (let i = 0; i < arr1.length; i++) {
        let count = 0
        for (let j = i + 1; j < arr1.length; j++) {
            if (arr1[i] === arr1[j]) {
                count++
            }
        }
        if (maxCount > count) {
            maxCount = count
            maxValues = arr[i]
        }
    }
    return maxValues
}
console.log(leastFrequent([2, 2, 2, 3, 3, 3, 4, 4, 4, 2, 5, 5, 5, 6, 6, 5, 5, 5]))