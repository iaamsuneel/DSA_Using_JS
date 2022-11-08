function sumArray(arr, n) {
    if (n <= 0) return 0
    else {
        return (sumArray(arr, n - 1) + arr[n - 1])
    }
}
console.log(sumArray([8, 2, 3], 3))
