let obj = {
	a: 1,
	b: {
		c: 2,
	},
	c: {
		d: {
			e: {
				f: 3,
			},
		},
	},
};
function flattenObject(obj, parentKey = "", result = {}) {
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			const newKey = parentKey ? `${parentKey}_${key}` : key;
			if (typeof obj[key] === "object" && obj[key] !== null) {
				flattenObject(obj[key], newKey, result);
			} else {
				result[newKey] = obj[key];
			}
		}
	}
	return result;
}
console.log("-->", flattenObject(obj));
//Output => { a: 1, b_c: 2, c_d_e_f: 3 }
