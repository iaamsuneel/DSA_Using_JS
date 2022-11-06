var lengthOfLongestSubstring = function (s) {
    const set = new Set()
    let maxLength = 0
    let end = 0
    let start = 0
    if (!s) return 0
    while (end < s.length) {
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
};
console.log(lengthOfLongestSubstring("pwwkew"));