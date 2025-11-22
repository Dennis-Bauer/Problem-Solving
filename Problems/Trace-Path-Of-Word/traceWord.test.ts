import { describe, expect, it } from "vitest";
import traceWord from "./solver";

describe("Trace the correct path of a word", () => {
	it("should return the correct path for the word 'Biscuit'", () => {
		const grid = [
			["B", "I", "T", "R"],
			["I", "U", "A", "S"],
			["S", "C", "V", "W"],
			["D", "O", "N", "E"],
		];

		const solution = [
			[0, 0],
			[1, 0],
			[2, 0],
			[2, 1],
			[1, 1],
			[0, 1],
			[0, 2],
		];

		expect(traceWord("BISCUIT", grid)).toEqual(solution);
	});

	it("should return the correct path for the word 'Ukulele'", () => {
		const grid = [
			["N", "H", "B", "W"],
			["E", "X", "A", "D"],
			["L", "A", "U", "U"],
			["E", "L", "U", "K"],
		];

		const solution = [
			[2, 3],
			[3, 3],
			[3, 2],
			[3, 1],
			[3, 0],
			[2, 0],
			[1, 0],
		];

		expect(traceWord("UKULELE", grid)).toEqual(solution);
	});

	it("should return the correct path for the word 'Survival'", () => {
		const grid = [
			["V", "L", "R", "L"],
			["V", "A", "I", "V"],
			["I", "O", "S", "C"],
			["V", "R", "U", "F"],
		];

		const solution = [
			[
				[2, 2],
				[3, 2],
				[3, 1],
				[3, 0],
				[2, 0],
				[1, 0],
				[1, 1],
				[0, 1],
			],
		];

		expect(traceWord("SURVIVAL", grid)).toEqual(solution);
	});
});

describe("Finds correctly no path of a word", () => {
	it("should return the no path for the word 'HELPFUL'", () => {
		const grid = [
  ["L","I","T","R"],
  ["U","U","A","S"],
  ["L","U","P","O"],
  ["E","F","E","H"]
		];

		expect(traceWord("HELPFUL", grid)).toEqual(false);
	});
});
