function merge(arr1, arr2) {
    const arr3 = []
    var i = 0, j = 0, k = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr3[k++] = (arr1[i++])

        }
        else {
            arr3[k++] = (arr2[j++])

        }
    }
    while (i < arr1.length) {
        arr3[k++] = (arr1[i++])

    }
    while (j < arr2.length) {
        arr3[k++] = (arr1[j++])

    }
    return arr3
}
console.log(merge([1, 2, 3, 6, 7], [2, 4, 5]))