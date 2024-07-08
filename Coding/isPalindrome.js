function isCheckPalindrome(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]) {
            return "Not Palindrome";
        }
    }
    return "Palindrome";
}
const str = "kanak";
console.log(isCheckPalindrome(str));
