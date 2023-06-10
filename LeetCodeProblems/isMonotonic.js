function isMonotonic(arr) {
    let isDec = true
    let isInc = true
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) isInc = false
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < arr[j + 1]) isDec = false
    }
    return isDec || isInc
}
console.log("isMonotonic", isMonotonic([6, 5, 2, 4, 4]));