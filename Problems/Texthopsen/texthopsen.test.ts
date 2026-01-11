import { describe, expect, it } from "vitest";
import textHopsen from "./solver";

describe("Returning the correct winner", () => {
	const solutionTestOne = {
		bellaTurns: 68,
		amiraTurns: 70,
		winner: "Bella",
	};

	it("should return the correct winner for example one -> Bella", () => {
		expect(textHopsen("./Problems/Texthopsen/examples/hopsen1.txt")).toEqual(solutionTestOne);
	});

	const solutionTestTwo = {
		bellaTurns: 25,
		amiraTurns: 25,
		winner: "Bella",
	};

	it("should return the correct winner for example two -> Bella", () => {
		expect(textHopsen("./Problems/Texthopsen/examples/hopsen2.txt")).toEqual(solutionTestTwo);
	});

	const solutionTestThree = {
		bellaTurns: 18,
		amiraTurns: 18,
		winner: "Bella",
	};

	it("should return the correct winner for example three -> Bella", () => {
		expect(textHopsen("./Problems/Texthopsen/examples/hopsen3.txt")).toEqual(solutionTestThree);
	});

	const solutionTestFour = {
		bellaTurns: 35,
		amiraTurns: 32,
		winner: "Amira",
	};

	it("should return the correct winner for example one -> Amira", () => {
		expect(textHopsen("./Problems/Texthopsen/examples/hopsen4.txt")).toEqual(solutionTestFour);
	});

	const solutionTestFive = {
		bellaTurns: 923,
		amiraTurns: 930,
		winner: "Bella",
	};

	it("should return the correct winner for example Five -> Bella", () => {
		expect(textHopsen("./Problems/Texthopsen/examples/hopsen5.txt")).toEqual(solutionTestFive);
	});
});

describe("Throwing the correct errors", () => {
	it("should throw an error for an unknown file", () => {
		expect(() => textHopsen("./Problems/Texthopsen/examples/hopsen-falsch.txt")).toThrowError(
			"ENOENT: no such file or directory, open './Problems/Texthopsen/examples/hopsen-falsch.txt"
		);
	});
});
