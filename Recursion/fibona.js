function fibona(n) {
    if (n == 0) return 0
    if (n == 1) return 1
    return fibona(n - 1) + fibona(n - 2)
}
console.log(fibona(7)) // 13