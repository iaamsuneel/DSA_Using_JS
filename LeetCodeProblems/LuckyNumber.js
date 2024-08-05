var luckyNumbers = function (matrix) {
	const res = [];
	for (let i = 0; i < matrix.length; i++) {
		let min = Math.min(...matrix[i]);
		res.push([min]);
	}
	console.log(res);
	return [Math.max(...res)];
};
console.log(
	luckyNumbers(
		/* [
		[3, 7, 8],
		[9, 11, 13],
		[15, 16, 17],
	] */ [
			[3, 6],
			[7, 1],
			[5, 2],
			[4, 8],
		]
	)
);
