export default function howManyMissing(list: number[]): number {
	if (list.length <= 0) return 0;
	return list.at(-1)! - list.at(0)! - list.length + 1;
}
