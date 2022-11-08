function palindrome(arr) {
    for (let item of arr) {
        let reverseItem = item.split("").reverse().join('')
        if (reverseItem === item) return item
    }
}
console.log(palindrome(["abc", "car", "ada", "racecar", "cool"]))