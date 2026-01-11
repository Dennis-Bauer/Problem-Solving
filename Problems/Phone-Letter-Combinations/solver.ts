const numberMap = {
	1: [""],
	2: ["a", "b", "c"],
	3: ["d", "e", "f"],
	4: ["g", "h", "i"],
	5: ["j", "k", "l"],
	6: ["m", "n", "o"],
	7: ["p", "q", "r", "s"],
	8: ["t", "u", "v"],
	9: ["w", "x", "y", "z"],
	0: [" "],
};

export default function letterCombinations(input: number | "", addon: string = ""): string[] {
	if (input === "") return [];
	if (input < 0) throw new Error("The input can't be negativ!");

	const output: string[] = [];

	const firstDigit = Number(input.toString().split("")[0]) as keyof typeof numberMap;

	numberMap[firstDigit].forEach((char) => {
		if (input > 9) {
			output.push(...letterCombinations(Number(input.toString().split("").slice(1).join("")), addon + char));
		} else {
			output.push(addon + char);
		}
	});

	return output;
}
