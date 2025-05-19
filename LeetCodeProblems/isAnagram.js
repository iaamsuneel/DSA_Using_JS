function isAnagram(s1, s2) {
    if (s1.length != s2.length) return false;
    const counter = {};
    for (let item of s1) {
        // console.log(item)
        counter[item] = (counter[item] || 0) + 1;
        // console.log(counter[item]);
    }
    for (let item1 of s2) {
        if (!counter[item1]) return false;

        counter[item1] = counter[item1] - 1;
    }
    return true;
}
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("anagram", "nagaraa"));
