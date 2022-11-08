function checkKey(arr, n, key) {
    if (n === 0) return false
    else if (arr[n - 1] == key) {
        return true;
    }
    else {
        return checkKey(arr, n - 1, key)
    }

}
console.log(checkKey([2, 10, 6, 8, 9], 5, 81))