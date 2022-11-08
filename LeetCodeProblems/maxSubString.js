function maxString(s) {
    if (!s) return 0
    const set = new Set()
    let end = 0
    let start = 0
    let maxLength = 0
    while (s.length > end) {
        if (!set.has(s[end])) {
            set.add(s[end])
            end++
            maxLength = Math.max(maxLength, set.size)
        }
        else {
            set.delete(s[start])
            start++
        }
    }
    return maxLength
}
console.log(maxString("abcabcbb"))