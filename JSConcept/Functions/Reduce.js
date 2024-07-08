const user = [0, 7, 1, 2, 3, 3, 0, 0, 2, 1, 0, 0, 2, 8];
const res = user.reduce((acc, curr) => {
	//console.log(acc, curr)
	if (curr in acc) {
		acc[curr]++;
	} else {
		acc[curr] = 1;
	}
	return acc;
}, {});
console.log(res);
