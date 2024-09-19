function isValid(str) {
    const stack = [];
    const map = new Map([
        ["(", ")"],
        ["{", "}"],
        ["[", "]"],
    ]);
   // console.log("Stack", stack, str.length);
    if (str.length % 2 !== 0) {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            //console.log("iff", stack, str[i]);
            stack.push(map.get(str[i]));
        } else if (str[i] !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
}
let str1 = "({[]}}";
//let str1 = "{{ }}";
console.log("isvalid", isValid(str1));
