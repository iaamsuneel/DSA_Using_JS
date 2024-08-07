//A closure is a function having access to the parent scope,
// even after the parent function has closed
/* A closure is the combination of a function bundled together (enclosed)
 with references to its surrounding state (the lexical environment).
 In other words, a closure gives you access to 
 an outer function's scope from an inner function. In JavaScript, 
closures are created every time a function is created, at function creation time. */
function x() {
    var a = 7; // a is a local variable created by x
    function y() {
        // y() is the inner function, a closure
        console.log(a); // use variable declared in the parent function
    }
    y();
}
x();
// another example
function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}
const add5 = makeAdder(5);
const add10 = makeAdder(10);
console.log(add5(2)); // 7
console.log(add10(2)); // 12

//Closure Scope Chain
/*Every closure has three scopes:
Local Scope (Own scope)
Outer Functions Scope
Global Scope */
// global scope
var e = 10;
debugger;
function sum(a) {
    debugger;
    return function (b) {
        return function (c) {
            // outer functions scope
            return function (d) {
                // local scope
                return a + b + c + d + e;
            };
        };
    };
}
const res = sum(10)(2)("3")(4);
console.log("res--->", res);

