import { describe, expect, it } from "vitest";
import evaluateEquation from "./solver";

describe("Tests given by 'Coding Trainer'", () => {
	it("should return something for this input", () => {
		expect(true).toEqual(true);
	});
});

describe("Solves basics Equation correctly", () => {
	it("should return 7 for '3 + 4'", () => {
		expect(evaluateEquation("3 + 4")).toEqual(7);
	});

	it("should return 0 for '2 * 0'", () => {
		expect(evaluateEquation("2 * 0")).toEqual(0);
	});

	it("should return -17 for '83 - 100'", () => {
		expect(evaluateEquation("83 - 100")).toEqual(-17);
	});

	it("should return 2 for '8 / 4'", () => {
		expect(evaluateEquation("8 / 4")).toEqual(2);
	});

	it("should return 10 for '3 * 2 + 4'", () => {
		expect(evaluateEquation("3 * 2 + 4")).toEqual(10);
	});

	it("should return 16 for '4 + 2 * 6'", () => {
		expect(evaluateEquation("4 + 2 * 6")).toEqual(16);
	});

	it("should return 5 for '3 + 4 / 2'", () => {
		expect(evaluateEquation("3 + 4 / 2")).toEqual(5);
	});
});

describe("Solved complex Bracket-Equations correctly", () => {
	it("should return 0.5 for '1 / (4 - 2)'", () => {
		expect(evaluateEquation("1 / (4 - 2)")).toEqual(0.5);
	});

	it("should return 42 for '  40  +   2  '", () => {
		expect(evaluateEquation("  40  +   2  ")).toEqual(42);
	});

	it("should return 4 for '2 * (10 - (2 * (1 + 2)))'", () => {
		expect(evaluateEquation("2 * (10 - (2 * (1 + 2)))")).toEqual(4);
	});

	it("should return -30 for '-2 * (5 + 5) * 1.5'", () => {
		expect(evaluateEquation("-2 * (5 + 5) * 1.5")).toEqual(-30);
	});

	it("should return 0 for '0 / 5'", () => {
		expect(evaluateEquation("0 / 5")).toEqual(0);
	});

	it("should return -36 for '-3 * (4 + (2 * (5 - 1)))'", () => {
		expect(evaluateEquation("-3 * (4 + (2 * (5 - 1)))")).toEqual(-36);
	});

	it("should return -14 for '5 + -3 * (-2 + 5) * 2'", () => {
		expect(evaluateEquation("5 + -3 * (-2 + 5) * 2")).toEqual(-14);
	});

	it("should return 12 for '-(-2 * 3) * 2'", () => {
		expect(evaluateEquation("-(-2 * 3) * 2")).toEqual(12);
	});

	it("should return 1 for '((((1 + 1) * 2) - 3) * 4) / 4'", () => {
		expect(evaluateEquation("((((1 + 1) * 2) - 3) * 4) / 4")).toEqual(1);
	});

	it("should return -2 for '10 + -12 / (3 + -1)'", () => {
		expect(evaluateEquation("10 + -12 / (3 + -1)")).toEqual(-2);
	});

	it("should return Infinity or throw for '5 / 0'", () => {
		expect(evaluateEquation("5 / 0")).toEqual(Infinity);
	});

	it("should return 120 for '1 + 2 * 3 * 4 * 5 - 1'", () => {
		expect(evaluateEquation("1 + 2 * 3 * 4 * 5 - 1")).toEqual(120);
	});

	it("should return 4 for '2 * (3 + (4 * (5 - (6 + 1 / 2))))'", () => {
		expect(evaluateEquation("2 * (3 + (4 * (5 - (6 + 1 / 2))))")).toEqual(4);
	});
});

describe("Solved equations with decimal numbers", () => {
	it("should return 0.05 for '0.1 * 0.5'", () => {
		expect(evaluateEquation("0.1 * 0.5")).toEqual(0.05);
	});

	it("should return 11 for '  (  10  + 2   ) -  ( 4 / 4 ) '", () => {
		expect(evaluateEquation("  (  10  + 2   ) -  ( 4 / 4 ) ")).toEqual(11);
	});

	it("should return 1.3333333333333333 for '4 / 3'", () => {
		expect(evaluateEquation("4 / 3")).toBeCloseTo(1.3333333333333333, 10);
	});

	it("should return 0.25 for '1 / 2 / 2'", () => {
		expect(evaluateEquation("1 / 2 / 2")).toEqual(0.25);
	});

	it("should return -0.5 for '-1.5 / (1.5 + 1.5)'", () => {
		expect(evaluateEquation("-1.5 / (1.5 + 1.5)")).toEqual(-0.5);
	});
});

describe("Throws the correct error when receiving an invalid equation", () => {
	it("should throw the correct error for an equation with a multiplication operator", () => {
		expect(() => evaluateEquation("a 3 + 6")).toThrowError(
			"The given equation contains elements which are not allowed!"
		);

		expect(() => evaluateEquation("[3 + 6] * 2")).toThrowError(
			"The given equation contains elements which are not allowed!"
		);

		expect(() => evaluateEquation("2 + (3 * 4 / 2")).toThrowError("The given equation has a wrong format!");

		expect(() => evaluateEquation("2 2 + 3")).toThrowError("The given equation has a wrong format!");
	});
});
