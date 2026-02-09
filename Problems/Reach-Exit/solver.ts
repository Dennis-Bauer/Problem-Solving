const symbole = [".", "#", "@", "E"];

export default function canReachExit(givenMaze: string[]): boolean {
	const maze: string[][] = givenMaze.map((val) => val.split(""));

	// Input checking
	if (maze.reduce((pre, cur) => (!pre ? false : cur.length !== maze[0].length), true)) return false;

	return false;
}
