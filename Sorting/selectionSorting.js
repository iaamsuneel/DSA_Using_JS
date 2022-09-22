function selection(arr) {
    var i, j, temp;
    for (i = 0; i < arr.length - 1; i++) {
        var minIndex = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr
}
console.log(selection([64, 25, 12, 22, 11]))
console.log(selection([6, 2, 1, 22, 11]))
console.log(selection([ 1, 2, 3,5,4]))