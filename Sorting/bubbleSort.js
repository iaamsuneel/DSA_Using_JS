function bubbleSort(arr) {
    let n = arr.length;
    function swap(arr, x, y) {
        var temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}
console.log(bubbleSort([24, 18, 38, 43, 14, 40, 1, 54]));
// output => [1, 14, 18, 24,38, 40, 43, 54 ]
