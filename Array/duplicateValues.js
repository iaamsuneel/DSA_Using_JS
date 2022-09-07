// remove duplicate values
// Example 1 using for loop
function duplicate(arr) {
    const dupArr = []
    for (let i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (!arr[i] == arr[j]) {
                dupArr.push(arr[i])
            }
        }
    }
    console.log(dupArr)
}
duplicate([7, 2, 4, 5, 6, 7, 5, 2]) // output-> [ 7, 2, 5 ]
// Example 2 Using filter Function
