import { describe, expect, it } from "vitest";
import finishAll from "./solver";

describe("Should be correct when checking if the jobs can be finished", () => {
	it("should return true for two jobs which can be finished", () => {
		expect(finishAll(2, [[1, 0]])).toEqual(true);
	});

	it("should return false for two jobs which can't be finished", () => {
		expect(
			finishAll(2, [
				[1, 0],
				[0, 1],
			])
		).toEqual(false);
	});

	it("should return true for three jobs which can be finished", () => {
		expect(
			finishAll(3, [
				[1, 0],
				[2, 1],
			])
		).toEqual(true);
	});

	it("should return true for only one job", () => {
		expect(finishAll(1, [])).toEqual(true);
	});

	it("should return true for eleven jobs which can be finished", () => {
		expect(
			finishAll(11, [
				[6, 10],
				[4, 3],
				[9, 2],
				[2, 3],
				[6, 1],
				[2, 8],
				[10, 1],
				[10, 2],
				[5, 3],
				[0, 10],
				[7, 4],
				[6, 1],
			])
		).toEqual(true);
	});

	it("should return false for eleven jobs which can't be finished", () => {
		expect(
			finishAll(11, [
				[6, 10],
				[4, 3],
				[9, 2],
				[2, 3],
				[6, 1],
				[2, 8],
				[10, 1],
				[10, 2],
				[5, 3],
				[0, 10],
				[7, 4],
				[6, 1],
				[10, 0],
			])
		).toEqual(false);
	});

	it("should return true for one jobs without dependencies", () => {
		expect(finishAll(1, [])).toEqual(true);
	});

	it("should return false for one jobs with a dependencies", () => {
		expect(finishAll(1, [[1, 3]])).toEqual(false);
	});
});
