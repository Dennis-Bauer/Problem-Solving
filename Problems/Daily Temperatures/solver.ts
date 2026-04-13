export default function dailyTemperatures(temps: number[]): number[] {
	return temps.map((temp, i) => {
		for (let index = i + 1; index < temps.length; index++) if (temp < temps[index]) return index - i;

		return 0;
	});
}
