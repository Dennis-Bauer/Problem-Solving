import { describe, expect, it } from "vitest";
import dailyTemperatures from "./solver";

describe("Should return the correct days it takes to the next warm day", () => {
	it("should return [1, 4, 1, 2, 1, 0, 0] for the first input", () => {
		expect(dailyTemperatures([30, 38, 30, 36, 35, 40, 28])).toEqual([1, 4, 1, 2, 1, 0, 0]);
	});

	it("should return [0,0,0] for the second input", () => {
		expect(dailyTemperatures([22, 21, 20])).toEqual([0, 0, 0]);
	});

	it("should return [1, 4, 1, 2, 1, 0, 0] for the first input", () => {
		expect(dailyTemperatures([30, 38, 30, 37, 35, 40, 28])).toEqual([1, 4, 1, 2, 1, 0, 0]);
	});
});
