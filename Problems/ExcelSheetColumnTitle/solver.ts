export default function convertToTitle(number: number): string {
	const convertNumberToLetter = (n: number) => String.fromCharCode(n + 64);

	let x = number;
	let result = "";
	do {
		const calculationResult = x % 26;
		
		if (calculationResult === 0) result = `Z${result}`;
		else result = convertNumberToLetter(calculationResult) + result;
		
		if (x <= 26) break;

		x = Math.trunc((x - 1) / 26);
	} while (x > 0);

	return result;
}
