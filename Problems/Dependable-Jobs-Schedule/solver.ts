export default function finishAll(taskAmount: number, dependencies: number[][]): boolean {
	const canBeFinished: Map<number, boolean> = new Map();
	const dep: Map<number, number[]> = new Map();

	for (let i = 0; i <= taskAmount; i++) {
		if (dependencies.some((dep) => dep[0] === i)) canBeFinished.set(i, false);
		else canBeFinished.set(i, true);

		for (const d of dependencies) {
			if (d[0] === i) {
				if (!dep.has(i)) dep.set(i, [d[1]]);
				else dep.get(i)!.push(d[1]);
			}
		}
	}

	for (let i = 0; i < dependencies.length; i++) {
		for (const d of Array.from(dep.entries())) {
			if (!canBeFinished.get(d[0])) {
				if (d[1].reduce((preVal, val) => (!preVal ? preVal : canBeFinished.get(val)!), true)) {
					canBeFinished.set(d[0], true);
				}
			}
		}
	}

	return Array.from(canBeFinished.entries()).reduce((preVal, val) => (!preVal ? preVal : val[1]), true);
}
