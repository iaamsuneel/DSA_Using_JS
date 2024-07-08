function isStringCreated(str1, str2) {
    const frequency = {};
    if (str1.length !== str2.length) return false;
    for (let item of str1) {
        frequency[item] = (frequency[item] || 0) + 1;
    }
    for (let item of str2) {
        if (frequency[item]) {
            frequency[item] = frequency[item] - 1;
        } else {
            return false;
        }
    }
    return true;
}
console.log(isStringCreated("aaz", "zza"));
