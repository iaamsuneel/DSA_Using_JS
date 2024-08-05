var compactObject = function (obj) {
	const newObj = {};
	if (obj === null || typeof obj != "object") return obj;
	if (Array.isArray(obj)) {
		return obj.filter((item) => Boolean(item)).map(compactObject);
	}
	for (key in obj) {
		let val = compactObject(obj[key]);
		if (obj[key]) {
			newObj[key] = val;
		}
	}
	return newObj;
};
console.log("compactObject-->", compactObject([null, 0, false, 1])); // [ 1 ]

console.log("compactObject-->", compactObject({ a: null, b: [false, 1] })); // {"b": [1]}
console.log(compactObject([null, 0, 5, [0], [false, 16]])); // [5, [], [16]]

/* if (obj === null || typeof obj !== 'object') return obj;
if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject)
let tempObj = {}
for (let key in obj) {
	 const value = compactObject(obj[key])
	 if (Boolean(value)) tempObj[key] = value
}
return tempObj */
