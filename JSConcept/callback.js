/* function f1(x, f2) {
    console.log("f1", x)
    f2()
}
function f2() {
    console.log("f2")
}

f1(5, f2) */
function set(x) {
    console.log("first", x)
    setTimeout(() => {
        console.log("Second")
    }, 3000)

}
set(6)