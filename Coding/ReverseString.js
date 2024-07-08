function ReverseString(str) {
    let revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revString = revString + str[i];
    }
    return revString;
}
console.log("res-->", ReverseString("Suneel"));
