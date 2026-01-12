interface coordinate {
	x: number;
	y: number;
}

export default function traceWordPath(word: string, grid: string[][]): boolean | number[][] {
	// Input checking
	if (word.length <= 1) return false;
	if (grid.reduce((pre, cur) => (!pre ? false : cur.length !== grid[0].length), true)) return false;

	for (let y = 0; y < grid.length; y++) {
		for (let x = 0; x < grid.length; x++) {
			if (grid[y][x] === word.at(0)) {
				const p = goPath({ x, y }, word.slice(1));

				if (p.at(0)) {
					if (grid[p.at(0)!.y][p.at(0)!.x] === word.at(0) && grid[p.at(-1)!.y][p.at(-1)!.x] === word.at(-1)) {
						return convertPath(p);
					}
				}
			}
		}
	}

	return false;

	function goPath(pos: coordinate, word: string): coordinate[] {
		if (word.length <= 0) return [];

		const path = [pos];

		const createNewPath = (y: number, x: number) => {
			if (grid[pos.y + y][pos.x + x] === word.at(0)) {
				if (word.length === 1) return [...path, { y: pos.y + y, x: pos.x + x }];

				const newPath = goPath({ y: pos.y + y, x: pos.x + x }, word.slice(1));

				if (newPath.at(-1) !== undefined) {
					if (grid[newPath.at(-1)!.y][newPath.at(-1)!.x] === word.at(-1)) {
						return [...path, ...newPath];
					}
				}
			}
		};

		// Check directions
		if (pos.y - 1 >= 0) {
			const newPath = createNewPath(-1, 0);

			if (newPath) return newPath;
		}

		if (pos.x - 1 >= 0) {
			const newPath = createNewPath(0, -1);

			if (newPath) return newPath;
		}

		if (pos.y + 1 < grid.length) {
			const newPath = createNewPath(1, 0);

			if (newPath) return newPath;
		}

		if (pos.x + 1 < grid.length) {
			const newPath = createNewPath(0, 1);

			if (newPath) return newPath;
		}

		return path;
	}

	function convertPath(path: coordinate[]): number[][] {
		return path.reduce((pre, val) => {
			pre.push([val.y, val.x]);

			return pre;
		}, [] as number[][]);
	}
}
