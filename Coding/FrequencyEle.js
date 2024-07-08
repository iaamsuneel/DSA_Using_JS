const arr = [1, 3, 4, 6, 7, 8, 3, 4, 6, 6, 6, 6];
function frequencyofElement(arr) {
    const obj = {};
    arr.forEach((item) => {
        if (obj[item]) {
            obj[item]++;
        } else {
            obj[item] = 1;
        }
    });
    return obj;
    // return Object.values(obj).filter((item) => item >= 2);
}
console.log("Frequency Of Element:-", frequencyofElement(arr));
