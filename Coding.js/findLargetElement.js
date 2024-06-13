function findLargetElement(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let newmax = Math.max(...arr[i]);
        // console.log("max00<", max);
        if (max < newmax) {
            max = newmax;
        }
    }
    return max;
}
const arr = [
    [3, 4, 58],
    [709, 8, 9],
    [10, 11],
    [111, 23],
];
console.log(findLargetElement(arr));
