import { describe, expect, it } from "vitest";
import sevenBoom from "./solver";

describe("Determines the correct count of sevens in the array", () => {
	it("should return one 'Boom!' for the first array", () => {
		expect(sevenBoom([1, 2, 3, 4, 5, 6, 7])).toEqual("Boom!");
	});

	it("should return 'there is no 7 in the array' for the second array", () => {
		expect(sevenBoom([8, 6, 33, 100])).toEqual("there is not 7 in the array");
	});

	it("should return one 'Boom' for the third array", () => {
		expect(sevenBoom([2, 55, 60, 97, 86])).toEqual("Boom!");
	});

	it("should return three 'Boom' for the fourth array", () => {
		expect(sevenBoom([7, 77, 100])).toEqual("Boom! Boom! Boom!");
	});
});
