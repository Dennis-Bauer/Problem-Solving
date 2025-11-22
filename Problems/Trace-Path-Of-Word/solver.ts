interface coordinate {
	x: number;
	y: number;
}

export default function traceWordPath(
	word: string,
	grid: string[][],
): boolean | number[][] {
	// Input checking
	if (word.length <= 1) return false;
	if (
		grid.reduce(
			(pre, cur) => (!pre ? false : cur.length !== grid[0].length),
			true,
		)
	)
		return false;

	for (let y = 0; y < grid.length; y++) {
		for (let x = 0; x < grid.length; x++) {
			if (grid[y][x] === word.at(0)) {
				const p = goPath({ x, y }, word.slice(1));

				if (p.at(0)) {
					if (
						grid[p.at(0)!.y][p.at(0)!.x] === word.at(0) &&
						grid[p.at(-1)!.y][p.at(-1)!.x] === word.at(-1)
					) {
            console.log(convertPath(p))
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

		// Check directions
		if (pos.y - 1 >= 0) {
			if (grid[pos.y - 1][pos.x] === word.at(0)) {
				if (word.length === 1) return [...path, { y: pos.y - 1, x: pos.x }];

				const newPath = goPath({ y: pos.y - 1, x: pos.x }, word.slice(1));

				if (newPath.at(-1) !== undefined) {
					if (grid[newPath.at(-1)!.y][newPath.at(-1)!.x] === word.at(-1)) {
						return [...path, ...newPath];
					}
				}
			}
		}

		if (pos.x - 1 >= 0) {
			if (grid[pos.y][pos.x - 1] === word.at(0)) {
				if (word.length === 1) return [...path, { y: pos.y, x: pos.x - 1}];

				const newPath = goPath({ y: pos.y, x: pos.x - 1 }, word.slice(1));

				if (newPath.at(-1) !== undefined) {
					if (grid[newPath.at(-1)!.y][newPath.at(-1)!.x] === word.at(-1)) {
						return [...path, ...newPath];
					}
				}
			}
		}

		if (pos.y + 1 < grid.length) {
			if (grid[pos.y + 1][pos.x] === word.at(0)) {
				if (word.length === 1) return [...path, { y: pos.y + 1, x: pos.x }];
			
				const newPath = goPath({ y: pos.y + 1, x: pos.x }, word.slice(1));

				if (newPath.at(-1) !== undefined) {
					if (grid[newPath.at(-1)!.y][newPath.at(-1)!.x] === word.at(-1)) {
						return [...path, ...newPath];
					}
				}
			}
		}

		if (pos.x + 1 < grid.length) {
			if (grid[pos.y][pos.x + 1] === word.at(0)) {
				if (word.length === 1) return [...path, { y: pos.y, x: pos.x + 1}];

				const newPath = goPath({ y: pos.y, x: pos.x + 1 }, word.slice(1));

				if (newPath.at(-1) !== undefined) {
					if (grid[newPath.at(-1)!.y][newPath.at(-1)!.x] === word.at(-1)) {
						return [...path, ...newPath];
					}
				}
			}
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
