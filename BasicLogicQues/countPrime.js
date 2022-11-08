function count(n) {
    // using recusion fibona series
    if (n == 0) return 0
    if (n == 1) return 1
    var ans = count(n - 1) + count(n - 2)
    return ans;
}
console.log(count(8))