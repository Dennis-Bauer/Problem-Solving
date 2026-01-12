export default function nom_nom(numbers: number[]): number[] {
	if (numbers.length <= 1) return numbers;

	const result: (number | undefined)[] = numbers.slice();

	for (let i = 1; i < result.length; i++) {
		if ((result[i - 1] ?? 0) > (result[i] ?? 0)) {
			result[i] = (result[i - 1] ?? 0) + (result[i] ?? 0);
			result[i - 1] = undefined;
		}
	}

	return result.filter((r) => r !== undefined);
}
