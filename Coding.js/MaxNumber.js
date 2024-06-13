function maxNumber(arr) {
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (let item of arr) {
        if (max < item) {
            max = item;
        }
    }
    return max;
}
console.log(maxNumber([112, 2, 4, 6, 8, 9, 5, 19]));
