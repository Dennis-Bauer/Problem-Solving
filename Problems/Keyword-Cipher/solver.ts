export default function keyword_cipher(keyword: string, word: string): string {
	// biome-ignore format: the array should not be formatted
	const alphabetA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	// biome-ignore format: the array should not be formatted
	const alphabetB = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	if (word.length <= 0) throw new Error("An empty word cannot be encrypted");

	let extraAlphabet = keyword;

	extraAlphabet.split("").forEach((e) => {
		if (alphabetA.some((value) => value === e)) alphabetA.splice(alphabetA.indexOf(e), 1);
	});

	extraAlphabet = extraAlphabet + alphabetA.join("");

	const eAlphabetArray = extraAlphabet.split("");

	return word
		.split("")
		.map((value) => {
			if (alphabetB.indexOf(value.toLowerCase()) === -1) return value;

			if (value.toLowerCase() !== value) return eAlphabetArray[alphabetB.indexOf(value.toLowerCase())].toUpperCase();

			return eAlphabetArray[alphabetB.indexOf(value.toLowerCase())];
		})
		.join("");
}
