
function FindMissingRepeated(arr1) {
    const arr = arr1.flat();
    let repeatedArr = [],
        missingArr = [];
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    console.log("----->", max, min);
    for (let i = min; i <= arr.length; i++) {
        if (!arr.includes(i)) {
            missingArr.push(i);
        }
    }
    repeatedArr = arr.filter((item, index) => arr.indexOf(item) !== index);
    //console.log("repeatedArr-->", repeatedArr, missingArr);
    return [...repeatedArr, ...missingArr];
}
console.log(
    "FindMissingRepeated-->",
    FindMissingRepeated([
        [9, 1, 7],
        [8, 9, 2],
        [3, 4, 6],
    ])
);
