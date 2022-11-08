function print(n) {
    // base case 
    if (n === 0)
        return
    // console.log(n) // 6 5 4 3 2 1
    // recursive calls
    print(n - 1)
    console.log(n) // 1 2 3 4 5 6

}
console.log(print(6))