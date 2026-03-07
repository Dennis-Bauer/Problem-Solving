const symbole = {
	WALL: "#",
	EMPTY: ".",
	START: "@",
	END: "E",
};

export default function canReachExit(givenMaze: string[]): boolean {
	const maze: string[][] = givenMaze.map((val) => val.split(""));
	const start = encodePos(
		maze[maze.findIndex((val) => val.some((v) => v === "@"))].indexOf("@"),
		maze.findIndex((val) => val.some((v) => v === "@"))
	); // You can do that way better, I know...

	// Input checking
	if (maze.reduce((pre, cur) => (!pre ? false : cur.length !== maze[0].length), true)) return false;

	const visitedPlaces: string[] = [];

	function move(string: string): boolean {
		const checkPossibleMove = (y: number, x: number) => {
			if (
				y >= 0 &&
				y < maze.length &&
				x >= 0 &&
				x < maze[0].length &&
				(maze[y][x] === symbole.END || maze[y][x] === symbole.EMPTY)
			) {
				const newPos = encodePos(x, y);

				if (!visitedPlaces.some((val) => val === newPos)) {
					return move(newPos);
				} else return false;
			}
		};

		const { x, y } = decodePos(string);

		if (maze[y][x] === symbole.END) return true;

		visitedPlaces.push(string);

		if (
			checkPossibleMove(y + 1, x) ||
			checkPossibleMove(y, x + 1) ||
			checkPossibleMove(y - 1, x) ||
			checkPossibleMove(y, x - 1)
		)
			return true;

		return false;
	}

	return move(start);
}

function encodePos(x: number, y: number): string {
	return `${x}|${y}`;
}

function decodePos(string: string): { x: number; y: number } {
	const [x, y] = string.split("|").map((val) => Number(val));

	return { x, y };
}
