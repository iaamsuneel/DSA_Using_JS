var plusOne = function (digits) {
    let str = ""
    digits.forEach(element => {
        str = str + element
    });
    console.log(str)
    var num = BigInt(str) + 1n
    console.log("BigInt", num)
    return num.toString().split('').map((num) => parseInt(num));
};
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))