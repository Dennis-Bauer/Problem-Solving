import { describe, expect, it } from "vitest";
import dayOfYear from "./solver";

describe("Returns the correct day number of the year", () => {
	it("should return 348 for 12/13/2020", () => {
		expect(dayOfYear("12/13/2020")).toEqual(348);
	});

	it("should return 321 for 11/16/2020", () => {
		expect(dayOfYear("11/16/2020")).toEqual(321);
	});

	it("should return 9 for 1/9/2019", () => {
		expect(dayOfYear("1/9/2019")).toEqual(9);
	});

	it("should return 61 for 3/1/2004", () => {
		expect(dayOfYear("3/1/2004")).toEqual(61);
	});

	it("should return 366 (leap) for 12/31/2000", () => {
		expect(dayOfYear("12/31/2000")).toEqual(366);
	});

	it("should return 365 for 12/31/2019", () => {
		expect(dayOfYear("12/31/2019")).toEqual(365);
	});

	it("should return 2 for 1/2/2019", () => {
		expect(dayOfYear("1/2/2019")).toEqual(2);
	});
});

describe("Catches a wrong date formate", () => {
	it("should throw a error for 14/13/2020", () => {
		expect(() => dayOfYear("14/13/2020")).toThrowError("The Month 14 isn't a valid Month!");
	});

	it("should throw a error for 11/31/2020", () => {
		expect(() => dayOfYear("11/31/2020")).toThrowError("The 11 has only 30 days!");
	});

	it("should throw a error for 1/40/2020", () => {
		expect(() => dayOfYear("1/40/2020")).toThrowError("The day 40 does not exist in any Month!");
	});

	it("should throw a error for 2/29/2019", () => {
		expect(() => dayOfYear("2/29/2019")).toThrowError("February has only 28 days (No Leap)");
	});

	it("should throw a error for 2/30/2020", () => {
		expect(() => dayOfYear("2/30/2020")).toThrowError("February has only 29 days");
	});
});
