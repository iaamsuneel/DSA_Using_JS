function isPrime(n) {
    let count = 0
    const arr = []
    prime = Array.from({ length: n + 1 }, (i) => true);
    console.log(prime)
    prime[0] = prime[1] = false
    for (let i = 2; i < n; i++) {
        if (prime[i]) {
            arr.push(i)
            count++
            for (let j = 2 * i; j < n; j = j + i) {
                console.log(j)
                prime[j] = 0
            }

        }
    }
    console.log("rer", arr)
    return count



}
console.log(isPrime(10))