function sumEven(n) {
    if (n === 20) return 20
    return n + sumEven(n + 2)
}
console.log(sumEven(0));