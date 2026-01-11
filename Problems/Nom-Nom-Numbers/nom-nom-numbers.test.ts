import { describe, expect, it } from "vitest";
import nom_nom from "./solver";

describe("Returns the correct remaining numbers", () => {
	it("should return [15] for [5, 3, 7] input", () => {
		expect(nom_nom([5, 3, 7])).toEqual([15]);
	});

	it("should return [8, 9] for [5, 3, 7] input", () => {
		expect(nom_nom([5, 3, 7])).toEqual([15]);
	});

	it("should return [1, 2, 3] for [1, 2, 3] input", () => {
		expect(nom_nom([1, 2, 3])).toEqual([1, 2, 3]);
	});

	it("should return [3, 3] for [2, 1, 3] input", () => {
		expect(nom_nom([2, 1, 3])).toEqual([3, 3]);
	});

	it("should return [22] for [8, 5, 9] input", () => {
		expect(nom_nom([8, 5, 9])).toEqual([22]);
	});

	it("should return [17, 100] for [6, 5, 6, 100] input", () => {
		expect(nom_nom([6, 5, 6, 100])).toEqual([17, 100]);
	});
});

// describe("Another description for the tests. Maybe those which are throwing errors", () => {
// 	it("should return something for this input", () => {
// 		expect(true).toEqual(true);
// 	});
// });
