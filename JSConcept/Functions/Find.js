//find Method:
// It will return the first element of array that passes specified condition.
const arr = [2, 8, 5, 3, 0];
let arr1 = [
	{ id: 3, name: "sai" },
	{ id: 1, name: "krishna" },
	{ id: 2, name: "Radha" },
];
function findMethod(arr) {
	let res = arr.find((x) => {
		return x > 9;
	});
	return res;
}
console.log("findMethod--->", findMethod(arr));
//console.log("findMethod--->", findMethod(arr1)); // { id: 1, name: 'krishna' }
//findIndex Method:
//It will return the index of first element of an array that passes the specified condition.
function findMethod(arr) {
	let res = arr.findIndex((x) => {
		return x.id > 3;
	});
	return res;
}
console.log("find Index Method--->", findMethod(arr1));
// Differences and Summary
//Both methods do not modify the original array
//Find() will return the value of the first element based on the provided condition
//and returns undefined if none of the elements passed the condition.
//FindIndex() will return the index of the first element based on the condition
//and returns -1 if none of the elements passed the condition.
/* let a = true;
setTimeout(() => {
    a = false;
}, 2);
while (a) {
    console.log(" -- inside whilee -- ");
} */
var b = 10;
{
	var b = 20;
	{
		var b = 20;
		function sum() {
			var b = 30;
			setTimeout(() => {
				console.log("b-->", b);
			});
		}
		sum();
	}
}
console.log("----->b", b);
