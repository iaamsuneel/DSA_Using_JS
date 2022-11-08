function removeDuplicate(arr) {
    const res = []
    const arr1 = arr.sort((a, b) => a - b)
    for (let i = 1; i < arr.length; i++) {
        if (arr1[i - 1] === arr1[i]) {
            if (!res.includes(arr[i])) {
                res.push(arr1[i])
            }
        }
    }
    return res

}
console.log(removeDuplicate([3, 4, 5, 6, 3, 5, 4, 5, 6, 6, 7]))