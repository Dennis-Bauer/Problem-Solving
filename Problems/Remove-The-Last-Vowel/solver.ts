/** biome-ignore-all lint/complexity/useIndexOf: Can't use here, searching in an array*/

const vowels: readonly string[] = ["a", "e", "i", "o", "u"];

export default function removeLastVowel(text: string): string {
	return text
		.split(" ")
		.map((str) =>
			[...str].reduceRight(
				(preVal, curVal, curI) =>
					str.substring(curI) === curVal + preVal && vowels.includes(curVal.toLowerCase()) ? preVal : curVal + preVal,
				""
			)
		)
		.join(" ");
}
