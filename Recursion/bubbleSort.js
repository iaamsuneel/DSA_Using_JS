function bubbleSort(arr, n) {
    if (n == 0 || n == 1) return arr; // base case
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i] // first case
            arr[i] = arr[i + 1]
            arr[i + 1] = temp;
        }
    }
    return bubbleSort(arr, n - 1) // recursion call
}
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90], 7))