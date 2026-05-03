import { describe, expect, it } from "vitest";
import findPath from "./solver";

describe("Finds the correct path for given tickets", () => {
	it("should return the correct path for 4 tickets", () => {
		expect(
			findPath([
				{ start: "C", end: "F" },
				{ start: "A", end: "C" },
				{ start: "I", end: "Z" },
				{ start: "F", end: "I" },
			])
		).toEqual(["A", "C", "F", "I", "Z"]);
	});

	it("should return the correct path for 5 tickets with same start destinations", () => {
		expect(
			findPath([
				{ start: "A", end: "C" },
				{ start: "A", end: "B" },
				{ start: "C", end: "B" },
				{ start: "B", end: "A" },
				{ start: "B", end: "C" },
			])
		).toEqual(["A", "B", "A", "C", "B", "C"]);
	});

	it("should return the correct path for 5 tickets", () => {
		expect(
			findPath([
				{ start: "Y", end: "L" },
				{ start: "D", end: "A" },
				{ start: "A", end: "D" },
				{ start: "R", end: "Y" },
				{ start: "A", end: "R" },
			])
		).toEqual(["A", "D", "A", "R", "Y", "L"]);
	});

	it("should return the correct path for 6 tickets which have the same start and end", () => {
		expect(
			findPath([
				{ start: "A", end: "A" },
				{ start: "B", end: "B" },
				{ start: "A", end: "B" },
				{ start: "B", end: "C" },
				{ start: "C", end: "C" },
				{ start: "C", end: "C" },
			])
		).toEqual(["A", "A", "B", "B", "C", "C", "C"]);
	});
});

describe("Throws the correct error when handling wrong input", () => {
	it("should throw the correct error when no start ticket (Ticket with start = 'A') is given", () => {
		expect(() =>
			findPath([
				{ start: "B", end: "C" },
				{ start: "D", end: "A" },
			])
		).toThrowError("No start Ticket was given (Ticket with start = 'A'");
	});
});
