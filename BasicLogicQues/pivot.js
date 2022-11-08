function pivot(arr) {
    let s = 0
    let e = arr.length - 1
    let mid = Math.floor(s + (e - s) / 2)
    while (s < e) {
        if (arr[mid] >= arr[0]) {
            s = mid + 1
        }
        else {
            e = mid
        }
        return s
    }
    return -1;

}
console.log(pivot([3, 4, 5, 1, 2], 3))