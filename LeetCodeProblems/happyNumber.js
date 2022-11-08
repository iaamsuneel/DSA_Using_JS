function happy(n) {
    let sum = 0;
    while (n > 0) {
        let e = n % 10;
        // console.log("e", e)
        n = Math.floor(n / 10);
        sum += e * e;
        //console.log("Sum", sum)
    }
    if (sum === 1) {
        console.log("hello")
        return true;
    }
}
console.log("Happy Number", happy(19))