const revVowelString = (str) => {
    const arr = ["a", "e", "i", "o", "u"];
    const newArr = str.split("");
    let temp = "";
    let j = 0;
    for (var i = 0; i < newArr.length; i++) {
        if (arr.includes(newArr[i])) {
            if (i > j) {
                temp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = temp;
                console.log("temp-->", temp, "newArr[j]", newArr[i]);
                j = i;
            }
        }
    }
    return newArr.join("");
};
console.log("revVowelString-->", revVowelString("sandeep")); // sendeap
