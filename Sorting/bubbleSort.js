function bubbleSort(arr) {
    let n = arr.length
    function swap(arr, x, y) {
        console.log("swap", arr[x], arr[y])
        var temp = arr[x]
        arr[x] = arr[y]
        arr[y] = temp
    }
    for (var i = 0; i < n - 1; i++) {
        console.log("firstLoop", arr[i])
        for (var j = 0; j < n - i - 1; j++) {
            console.log("secondLoop", arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }

    }
    return arr;
}
console.log(bubbleSort([24, 18, 38, 43, 14, 40, 1, 54]))