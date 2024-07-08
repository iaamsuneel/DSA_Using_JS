function isCheckAnagram(str1, str2) {
    const counter = {};
    if (str1.length !== str2.length) {
        return false;
    }
    for (let item of str1) {
        counter[item] = (counter[item] || 0) + 1;
    }
    for (let item of str2) {
        if (!counter[item]) {
            return false;
        }
        counter[item] = counter[item] - 1;
    }
    return true;
}
console.log(isCheckAnagram("ans", "nad"));
