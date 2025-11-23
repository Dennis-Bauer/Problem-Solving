export default function exitMaze(maze: number[][]): boolean {
	// Input checking
	if (
		maze.reduce(
			(pre, cur) => (!pre ? false : cur.length !== maze[0].length),
			true,
		)
	)
		return false;

	if (maze[maze.length - 1][maze[0].length - 1] !== 0 || maze[0][0] !== 0)
		return false;

	return tracePath(0, 0, []);

	function tracePath(
		x: number,
		y: number,
		lockedPositions: { x: number; y: number }[],
	): boolean {
		lockedPositions.push({ x, y });

		if (y === maze.length - 1 && x === maze[0].length - 1) return true;

		// Check directions
		if (
			y - 1 >= 0 &&
			!lockedPositions.some((v) => v.x === x && v.y === y - 1)
		) {
			if (maze[y - 1][x] === 0) {
				if (tracePath(x, y - 1, lockedPositions)) return true;
			}
		}

		if (
			x - 1 >= 0 &&
			!lockedPositions.some((v) => v.x === x - 1 && v.y === y)
		) {
			if (maze[y][x - 1] === 0) {
				if (tracePath(x - 1, y, lockedPositions)) return true;
			}
		}

		if (
			y + 1 < maze.length &&
			!lockedPositions.some((v) => v.x === x && v.y === y + 1)
		) {
			if (maze[y + 1][x] === 0) {
				if (tracePath(x, y + 1, lockedPositions)) return true;
			}
		}

		if (
			x + 1 < maze[0].length &&
			!lockedPositions.some((v) => v.x === x + 1 && v.y === y)
		) {
			if (maze[y][x + 1] === 0) {
				if (tracePath(x + 1, y, lockedPositions)) return true;
			}
		}

		return false;
	}
}
