export default function verticalTxt(text: string): string[][] {
	const textArray = text.split(" ");
	const solution: string[][] = [];

	textArray.forEach((word, wordNumber) => {
		word.split("").forEach((char, charNumber) => {
			if (solution[charNumber] === undefined) solution[charNumber] = [];

			if (wordNumber > 0 && solution[charNumber][wordNumber - 1] === undefined)
				solution[charNumber][wordNumber - 1] = " ";

			solution[charNumber][wordNumber] = char;
		});
	});

	return solution;
}
