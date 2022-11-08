function reverse(arr) {
    var s = 3
    var e = arr.length - 1;

    while (s <= e) {
        var temp = arr[s]
        arr[s] = arr[e]
        arr[e] = temp
        s++
        e--
    }
    return arr
}
console.log(reverse([1, 2, 3, 4, 5, 6]))