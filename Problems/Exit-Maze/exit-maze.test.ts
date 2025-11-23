import { describe, expect, it } from "vitest";
import exitMaze from "./solver";

describe("The Maze can be exit", () => {
	it("should return true for the given maze (1)", () => {
		const maze = [
			[0, 1, 1, 1, 1, 1, 1],
			[0, 0, 1, 1, 0, 1, 1],
			[1, 0, 0, 0, 0, 1, 1],
			[1, 1, 1, 1, 0, 0, 1],
			[1, 1, 1, 1, 1, 0, 0],
		];

		expect(exitMaze(maze)).toEqual(true);
	});

	it("should return true for the given maze (2)", () => {
		const maze = [
			[0, 1, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 1, 0, 0],
			[1, 1, 1, 0, 0, 0, 0],
			[1, 0, 0, 0, 1, 1, 0],
			[1, 1, 1, 1, 1, 1, 0],
		];

		expect(exitMaze(maze)).toEqual(true);
	});
});

describe("The Maze can not be exit", () => {
	it("should return false for the given maze (1)", () => {
		const maze = [
			[0, 1, 1, 1, 1, 1, 1],
			[0, 0, 1, 0, 0, 1, 1],
			[1, 0, 0, 0, 0, 1, 1],
			[1, 1, 0, 1, 0, 0, 1],
			[1, 1, 0, 0, 1, 1, 1],
		];

		expect(exitMaze(maze)).toEqual(false);
	});

	it("should return false for the given maze (2)", () => {
		const maze = [
			[0, 1, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 1, 0, 0],
			[1, 1, 1, 0, 0, 0, 0],
			[1, 1, 1, 1, 1, 1, 0],
			[1, 1, 1, 1, 1, 1, 1],
		];

		expect(exitMaze(maze)).toEqual(false);
	});

	it("should return false for the given maze (3)", () => {
		const maze = [
			[0, 1, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 1, 0, 0],
			[1, 1, 1, 0, 0, 0, 0],
			[1, 1, 1, 1, 1, 1, 1],
			[1, 1, 1, 1, 1, 1, 0],
		];

		expect(exitMaze(maze)).toEqual(false);
	});

	it("should return false for a wrong maze (1)", () => {
		const maze = [
			[0, 1, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 1, 0],
			[1, 1, 1, 0, 0, 0, 0],
			[1, 1, 1, 1, 1, 1, 1],
			[1, 1, 1, 1, 1, 1, 0],
		];

		expect(exitMaze(maze)).toEqual(false);
	});
});
