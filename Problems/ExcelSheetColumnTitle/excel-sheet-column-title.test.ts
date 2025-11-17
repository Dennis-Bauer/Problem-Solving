import { describe, expect, it } from "vitest";
import convertToTitle from "./solver";

describe("Converts an Integer to the correct title", () => {
	it("should return 'A' for 1", () => {
		expect(convertToTitle(1)).toEqual("A");
	});

	it("should return 'Z' for 26", () => {
		expect(convertToTitle(26)).toEqual("Z");
	});

	it("should return 'R' for 18", () => {
		expect(convertToTitle(18)).toEqual("R");
	});

	it("should return 'AB' for 28", () => {
		expect(convertToTitle(28)).toEqual("AB");
	});

	it("should return 'AZ' for 52", () => {
		expect(convertToTitle(52)).toEqual("AZ");
	});

	it("should return 'ZY' for 701", () => {
		expect(convertToTitle(701)).toEqual("ZY");
	});

	it("should return 'MATT' for 229704", () => {
		expect(convertToTitle(229704)).toEqual("MATT");
	});

	it("should return 'ZATOICHI' for 209380622941", () => {
		expect(convertToTitle(209380622941)).toEqual("ZATOICHI");
	});
});

describe("Converts wrong input to empty string", () => {
	it("should return '' for -1", () => {
		expect(convertToTitle(-1)).toEqual("");
	});

	it("should return '' for 0", () => {
		expect(convertToTitle(0)).toEqual("");
	});

	it("should return '' for -124634", () => {
		expect(convertToTitle(-124634)).toEqual("");
	});
});
