function swapAlternate(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        if (i + 1 < arr.length) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
        }
    }
    return arr
}
console.log(swapAlternate([1, 5, 2, 4, 6, 8, 9, 4]))
console.log(swapAlternate([5, 2, 4, 6, 8, 9, 4]))