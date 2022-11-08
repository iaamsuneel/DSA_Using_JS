/* function binary(arr, k) {
    let s = 0
    let e = arr.length - 1
    let mid = Math.floor(s + (e - s) / 2)
    while (s <= e) {
        if (arr[mid] == k) {
            console.log("mid")
            return mid
        }
        if (arr[mid] < k) {
            s = mid + 1
            console.log("mid+1")
        }
        else {
            console.log("mid-1")
            e = mid - 1
        }
        mid = Math.floor(s + (e - s) / 2)
    }
    return -1
}
console.log(binary([1, 2, 3, 4, 5], 1)) */
function binarySearch(arr, k) {
    let s = 0
    let e = arr.length - 1
    // for mid index
    let mid = Math.floor(s + (e - s) / 2)
    while (s <= e) {
        if (arr[mid] == k) {
            console.log("mid")
            return mid
        }
        // go to right 
        if (arr[mid] < k) {
            s = mid + 1
            console.log("mid+1")
        }
        else {
            // go to left
            e = mid - 1
            console.log("mid-1")
        }
        mid = Math.floor(s + (e - s) / 2)
    }
    return -1
}
console.log(binarySearch([2, 4, 6, 7, 9, 11, 27], 211))