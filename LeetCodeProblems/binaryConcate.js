function concatenatedBinary(n) {
    var res = ""
    let M = 1000000007
    for (i = 1; i <= n; i++) {
        res += i.toString(2);
    }
    return parseInt(res, 2) % M
};
console.log(concatenatedBinary(42))
