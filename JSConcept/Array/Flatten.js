let arr = [
	[1, 2],
	[3, 4],
	[5, 6, [7, 8], 9],
	[10, 11, 12],
];
// every level
function customFlatten(arr) {
	const res = [];
	arr.forEach((ele) => {
		//console.log(ele);
		if (Array.isArray(ele)) {
			//console.log(ele, "...customFlatten(ele))", ...customFlatten(ele));
			return res.push(...customFlatten(ele));
		} else {
			//console.log("first", ele);
			return res.push(ele);
		}
	});
	return res;
}

// depth leval
function customFlattenDepthL(arr, l) {
	const result = [];
	arr.forEach((ele) => {
		if (Array.isArray(arr) && l > 0) {
			return result.push(...customFlattenDepthL(ele, l - 1));
		}
		return result.push(ele);
	});
}

console.log("customFlatten-->", customFlatten(arr));
