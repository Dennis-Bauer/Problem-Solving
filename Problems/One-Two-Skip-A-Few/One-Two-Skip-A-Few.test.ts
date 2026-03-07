import { describe, expect, it } from "vitest";
import howManyMissing from "./solver";

describe("Returns the correct number of missing numbers", () => {
	it("should return 4 for [1, 2, 3, 8, 9]", () => {
		expect(howManyMissing([1, 2, 3, 5, 8])).toEqual(4);
	});

	it("should return 1 for [1, 3]", () => {
		expect(howManyMissing([1, 3])).toEqual(1);
	});

	it("should return 2 for [7, 10, 11, 12]", () => {
		expect(howManyMissing([7, 10, 11, 12])).toEqual(2);
	});

	it("should return 5 for [1, 3, 5, 7, 9, 11]", () => {
		expect(howManyMissing([3, 5, 7, 9, 11])).toEqual(5);
	});

	it("should return 0 for [5, 6, 7, 8]", () => {
		expect(howManyMissing([5, 6, 7, 8])).toEqual(0);
	});

	it("should return 100 for [5, 6, 86, 87, 90, 97, 107]", () => {
		expect(howManyMissing([5, 6, 86, 87, 90, 97, 107])).toEqual(100);
	});
});
