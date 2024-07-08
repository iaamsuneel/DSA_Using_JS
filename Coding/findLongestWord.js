function findLongestWord(str) {
    let arr = str.split(" ");
    let longString = "";
    for (let item of arr) {
        if (item.length > longString.length) {
            longString = item;
        }
    }
    return longString;
}
console.log(findLongestWord("i am from allahabad and london and also dubai"));
