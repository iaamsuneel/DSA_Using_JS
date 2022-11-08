function print(n) {
    if (n == 0 || n == 1) return 1
    console.log(n);
    return n * print(n - 1)
}
console.log(print(5));