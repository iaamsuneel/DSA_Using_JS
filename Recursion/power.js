function power(a, b) {
    if (b == 0) return 1
    if (b == 1) return a
    var ans = power(a, b / 2)
    if (b % 2 == 0) {
        // power is even 
        return ans * ans;
    }
    else {
        // power is odd
        return a * ans * ans;
    }
}
console.log(power(2, 9))