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

export default function letterCombinations(input: number | ""): string[] {
	if (input === "") return [];
	if (input < 0) throw new Error("The input can't be negativ!");

	return createOutput(input, "");
}

const createOutput = (input: number, addon: string): string[] => {
	const output: string[] = [];

	const num = Number(input.toString().split("")[0]) as keyof typeof numberMap;

	numberMap[num].forEach((char) => {
		if (input > 9) {
			output.push(
				...createOutput(
					Number(input.toString().split("").slice(1).join("")),
					addon + char,
				),
			);
		} else {
			output.push(addon + char);
		}
	});

	return output;
};
