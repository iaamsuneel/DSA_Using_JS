function isCheckArray(arr, n) {
    if (n === 0 || n === 1) return true
    // using recursion
    /* if (arr[n - 1] < arr[n - 2]) return false
    return isCheckArray(arr, n - 1) */
    // using iterative
    for (let i = 1; i<n; i++) {
        if (arr[i - 1] > arr[i]) {
            return false
        }
    }
    return true
}
console.log("isCheckArray", isCheckArray([2,2,2], 3)); 