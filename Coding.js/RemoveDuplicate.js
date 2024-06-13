function removeDuplicate(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}
const arr = [1, 2, 3, 2, 4, 6, 7, 5, 6, 7];
console.log(removeDuplicate(arr));
