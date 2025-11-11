import { describe, expect, it } from "vitest";
import isValidHexCode from "./solver";

describe("Validate a string to a truthfully HEXCode", () => {
	it("should return true for '#CD5C5C'", () => {
		expect(isValidHexCode("#CD5C5C")).toEqual(true);
	});

	it("should return true for '#EAECEE'", () => {
		expect(isValidHexCode("#EAECEE")).toEqual(true);
	});

	it("should return true for '#eaecee'", () => {
		expect(isValidHexCode("#eaecee")).toEqual(true);
	});
});

describe("Validate a string to a falsy HEXCode", () => {
	it("should return false for '#CD5C58C'", () => {
		expect(isValidHexCode("#CD5C58C")).toEqual(false);
	});

	it("should return false for '#CD5C5Z'", () => {
		expect(isValidHexCode("#CD5C5Z")).toEqual(false);
	});

	it("should return false for '#CD5C&C'", () => {
		expect(isValidHexCode("#CD5C&C")).toEqual(false);
	});

	it("should return false for 'CD5C5C'", () => {
		expect(isValidHexCode("CD5C5C")).toEqual(false);
	});

	it("should return false for 'eaecee#'", () => {
		expect(isValidHexCode("eaecee#")).toEqual(false);
	});
});
