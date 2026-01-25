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
		expect(bedTime("22:00", "08:00")).toEqual("10:00");
	});

	it("should return '23:30' for start time '09:30' and duration '10:00'", () => {
		expect(bedTime("22:30", "09:30")).toEqual("10:00");
	});

	it("should return '01:45' for start time '05:45' and duration '04:00'", () => {
		expect(bedTime("01:45", "05:45")).toEqual("04:00");
	});

	it("should return '02:40' for start time '07:10' and duration '04:30'", () => {
		expect(bedTime("02:40", "07:10")).toEqual("04:30");
	});
});

// describe("Another description for the tests. Maybe those which are throwing errors", () => {
// 	it("should return something for this input", () => {
// 		expect(true).toEqual(true);
// 	});
// });
