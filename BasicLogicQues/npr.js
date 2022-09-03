function npr(n, r) {
    var nfact = 1
    for (var i = 1; i <= n; i++) {
        nfact = nfact * i;
    }
    console.log("nfact=" + nfact);
    var nmrfact = 1
    for (i = 1; i <= n - r; i++) {
        nmrfact = nmrfact * i
    }
    console.log("nmrfact=" + nmrfact)
    var npr = nfact / nmrfact;
    console.log("npr=" + npr)
}
npr(5, 4);
// using DSA Logic

function npr(n, r) {
    function fact(n) {
        var fact = 1;
        for (var i = 1; i <= n; i++) {
            fact = fact * i;
        }
        return fact;
    }
    var nfact = fact(n);
    var nmrfact = fact(n - r);
    var npr = nfact / nmrfact;
    console.log("nfact=" + nfact + "nmrfact=" + nmrfact + "npr=" + npr);
}
npr(5, 2)
