import { describe, expect, it } from "vitest";
import canReachExit from "./solver";

describe("The Maze can be exit", () => {
	const mazeOne = ["@..", ".#E", "..."];

	it("should return true for the first maze", () => {
		expect(canReachExit(mazeOne)).toEqual(true);
	});

	const mazeTwo = ["@#E"];

	it("should return false for the second maze", () => {
		expect(canReachExit(mazeTwo)).toEqual(false);
	});

	const mazeThree = ["@.#.", "..#E", "####"];

	it("should return false for the third maze", () => {
		expect(canReachExit(mazeThree)).toEqual(false);
	});

	const mazeFour = ["@...", ".###", "...E"];

	it("should return true for the fourth maze", () => {
		expect(canReachExit(mazeFour)).toEqual(true);
	});
});
