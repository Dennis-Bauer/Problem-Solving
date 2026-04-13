import { describe, expect, it } from "vitest";
import verticalTxt from "./solver";

describe("Returns the same Text written from up to down", () => {
	it("should return a 2x7 Matrix for 'Holy bananas'", () => {
		expect(verticalTxt("Holy bananas")).toEqual([
			["H", "b"],
			["o", "a"],
			["l", "n"],
			["y", "a"],
			[" ", "n"],
			[" ", "a"],
			[" ", "s"],
		]);
	});

	it("should return a 2x6 Matrix for 'Hello fellas'", () => {
		expect(verticalTxt("Hello fellas")).toEqual([
			["H", "f"],
			["e", "e"],
			["l", "l"],
			["l", "l"],
			["o", "a"],
			[" ", "s"],
		]);
	});

	it("should return a 4x6 Matrix for 'Hello fellas I'm Dennis'", () => {
		expect(verticalTxt("Hello fellas I'm Dennis")).toEqual([
			["H", "f", "I", "D"],
			["e", "e", "'", "e"],
			["l", "l", "m", "n"],
			["l", "l", " ", "n"],
			["o", "a", " ", "i"],
			[" ", "s", " ", "s"],
		]);
	});
});
