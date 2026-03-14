export default function sevenBoom(array: number[]): string {
	const sevenCount = array
		.join("")
		.split("")
		.reduce((count, current) => (current === "7" ? count + 1 : count), 0);

	if (sevenCount === 0) return "there is no 7 in the array";
	else return "Boom! ".repeat(sevenCount).trim();
}
