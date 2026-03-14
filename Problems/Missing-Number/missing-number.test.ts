import { describe, expect, it } from "vitest";
import missingNumber from "./solver";

describe("Finds the missing number", () => {
	it("should return 5 for the first number-row", () => {
		expect(missingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10])).toEqual(5);
	});

	it("should return 10 for the second number-row", () => {
		expect(missingNumber([7, 2, 3, 6, 5, 9, 1, 4, 8])).toEqual(10);
	});

	it("should return 7 for the third number-row", () => {
		expect(missingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9])).toEqual(7);
	});
});
