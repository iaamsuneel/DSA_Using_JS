var addBinary = function (a, b) {
    var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    console.log(Number(parseInt(a, 2)))
    console.log(dec)
    return dec.toString(2);
};
console.log(addBinary("11", "1"))