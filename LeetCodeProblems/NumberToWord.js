var numberToWords = function (num) {
	if (num === 0) return "Zero";
	const below20 = [
		"",
		"One",
		"Two",
		"Three",
		"Four",
		"Five",
		"Six",
		"Seven",
		"Eight",
		"Nine",
		"Ten",
		"Eleven",
		"Twelve",
		"Thirteen",
		"Fourteen",
		"Fifteen",
		"Sixteen",
		"Seventeen",
		"Eighteen",
		"Nineteen",
	];
	const tens = [
		"",
		"",
		"Twenty",
		"Thirty",
		"Forty",
		"Fifty",
		"Sixty",
		"Seventy",
		"Eighty",
		"Ninety",
	];
	const thousands = ["", "Thousand", "Million", "Billion"];
	const helper = (num) => {
		if (num === 0) return "";
		else if (num < 20) return below20[num] + " ";
		else if (num < 100)
			return tens[Math.floor(num / 10)] + " " + helper(num % 10);
		else
			return (
				below20[Math.floor(num / 100)] + " Hundred " + helper(num % 100)
			);
	};
	let words = "";
	let i = 0;
	while (num > 0) {
		if (num % 1000 !== 0) {
			words = helper(num % 1000) + thousands[i] + " " + words;
		}
		num = Math.floor(num / 1000);
		i++;
	}
	return words.trim();
};

// Example usage:
console.log(numberToWords(123)); // "One Hundred Twenty Three"
console.log(numberToWords(12345)); // "Twelve Thousand Three Hundred Forty Five"
console.log(numberToWords(1234567)); // "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
