function subArrayWithSize(arr, k) {
    const list = []
    for (let i = 0; i < arr.length - k + 1; i++) {
        let maxValue = -1
        for (let j = i; j < i + k; j++) {
            maxValue = Math.max(arr[j], maxValue);
            console.log("maxValue", maxValue)
        }
        list.push(maxValue);
    }
    return list;
}
console.log(subArrayWithSize([1, -1], 1))