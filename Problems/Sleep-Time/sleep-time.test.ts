import { describe, expect, it } from "vitest";
import bedTime from "./solver";

describe("Returns always the correct time to go to sleep", () => {
	it("should return '00:00' for start time '07:50' and duration '07:50'", () => {
		expect(bedTime("07:50", "07:50")).toEqual("00:00");
	});

	it("should return '20:15' for start time '06:15' and duration '10:00'", () => {
		expect(bedTime("06:15", "10:00")).toEqual("20:15");
	});

	it("should return '22:00' for start time '08:00' and duration '10:00'", () => {
		expect(bedTime("08:00", "10:00")).toEqual("22:00");
	});

	it("should return '23:30' for start time '09:30' and duration '10:00'", () => {
		expect(bedTime("09:30", "10:00")).toEqual("23:30");
	});

	it("should return '01:45' for start time '05:45' and duration '04:00'", () => {
		expect(bedTime("05:45", "04:00")).toEqual("01:45");
	});

	it("should return '02:40' for start time '07:10' and duration '04:30'", () => {
		expect(bedTime("07:10", "04:30")).toEqual("02:40");
	});
});

describe("Throws the correct error when having the wrong time format", () => {
	it("should throw an Error because the hour is bigger than allowed", () => {
		expect(() => bedTime("26:23", "00:00")).toThrowError("The given times haven't the correct format!");
	});

	it("should throw an Error because the minute is bigger than allowed", () => {
		expect(() => bedTime("00:59", "00:80")).toThrowError("The given times haven't the correct format!");
	});
});
