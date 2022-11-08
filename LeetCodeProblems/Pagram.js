function pangram(str) {
    let res = str.toLowerCase()
    let set = new Set(res)
    return set.size === 26

}
console.log(pangram("abcdefghijklmnopqrstuvwxy2"))