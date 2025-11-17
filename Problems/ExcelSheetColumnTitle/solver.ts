export default function convertToTitle(number: number): string {
	const convertNumberToLetter = (n: number) => String.fromCharCode(n + 64);

	// number = 25;

	let x = number;
	let result = "";
	while (x > 0) {
		result = convertNumberToLetter(Math.trunc(x % 26)) + result;

		x = Math.trunc(x / 26);
	}

	// console.log(229704 / 26)
	// console.log(convertNumberToLetter(229704 % 26))
	// console.log(convertNumberToLetter(8834 % 26))

	// console.log(convertNumberToLetter(Math.trunc(number / 26)) + convertNumberToLetter(Math.trunc(number % 26)))

	return result;
}

// 26 - Z

// 25 - Y

// 27 - AZ
