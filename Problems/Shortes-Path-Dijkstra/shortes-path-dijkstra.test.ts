import { describe, expect, it } from "vitest";
import findShortesPaths from "./solver";

describe("Returns the shortes path from 'A' to all other Destinations", () => {
	const stations1 = ["A", "B", "C", "D", "E", "F", "G"];
	const streets1 = [
		{
			A: "A",
			B: "B",
			length: 1,
		},
		{
			A: "A",
			B: "C",
			length: 4,
		},
		{
			A: "A",
			B: "G",
			length: 3,
		},
		{
			A: "B",
			B: "C",
			length: 2,
		},
		{
			A: "C",
			B: "D",
			length: 7,
		},
		{
			A: "D",
			B: "E",
			length: 3,
		},
		{
			A: "F",
			B: "G",
			length: 5,
		},
		{
			A: "G",
			B: "C",
			length: 2,
		},
		{
			A: "E",
			B: "F",
			length: 1,
		},
	];
	const result1 = [
		{
			length: 0,
			path: ["A"],
		},
		{
			length: 1,
			path: ["A", "B"],
		},
		{
			length: 3,
			path: ["A", "B", "C"],
		},
		{
			length: 10,
			path: ["A", "B", "C", "D"],
		},
		{
			length: 9,
			path: ["A", "G", "F", "E"],
		},
		{
			length: 8,
			path: ["A", "G", "F"],
		},
		{
			length: 3,
			path: ["A", "G"],
		},
	];

	it("should return all paths for 7 destinations", () => {
		expect(findShortesPaths("A", stations1, streets1)).toEqual(result1);
	});

	const stations2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
	const streets2 = [
		{
			A: "A",
			B: "B",
			length: 5,
		},
		{
			A: "A",
			B: "C",
			length: 2,
		},
		{
			A: "A",
			B: "D",
			length: 6,
		},
		{
			A: "B",
			B: "C",
			length: 9,
		},
		{
			A: "B",
			B: "D",
			length: 8,
		},
		{
			A: "C",
			B: "F",
			length: 20,
		},
		{
			A: "C",
			B: "D",
			length: 15,
		},
		{
			A: "D",
			B: "F",
			length: 13,
		},
		{
			A: "D",
			B: "G",
			length: 2,
		},
		{
			A: "E",
			B: "F",
			length: 6,
		},
		{
			A: "E",
			B: "H",
			length: 9,
		},
		{
			A: "E",
			B: "I",
			length: 7,
		},
		{
			A: "F",
			B: "H",
			length: 8,
		},
		{
			A: "G",
			B: "H",
			length: 8,
		},
		{
			A: "G",
			B: "J",
			length: 6,
		},
		{
			A: "I",
			B: "J",
			length: 6,
		},
		{
			A: "H",
			B: "J",
			length: 10,
		},
	];
	const result2 = [
		{
			length: 0,
			path: ["A"],
		},
		{
			length: 5,
			path: ["A", "B"],
		},
		{
			length: 2,
			path: ["A", "C"],
		},
		{
			length: 6,
			path: ["A", "D"],
		},
		{
			length: 25,
			path: ["A", "D", "G", "H", "E"],
		},
		{
			length: 19,
			path: ["A", "D", "F"],
		},
		{
			length: 8,
			path: ["A", "D", "G"],
		},
		{
			length: 16,
			path: ["A", "D", "G", "H"],
		},
		{
			length: 20,
			path: ["A", "D", "G", "J", "I"],
		},
		{
			length: 14,
			path: ["A", "D", "G", "J"],
		},
	];

	it("should return all paths for 10 destinations", () => {
		expect(findShortesPaths("A", stations2, streets2)).toEqual(result2);
	});

	const stations3 = ["A", "B", "C", "D", "E", "F", "G", "H", "Z"];
	const streets3 = [
		{ A: "A", B: "B", length: 2 },
		{ A: "A", B: "C", length: 2 },
		{ A: "A", B: "D", length: 3 },

		{ A: "B", B: "C", length: 1 },
		{ A: "B", B: "F", length: 2 },

		{ A: "C", B: "G", length: 8 },
		{ A: "C", B: "E", length: 9 },

		{ A: "D", B: "E", length: 1 },
		{ A: "D", B: "H", length: 2 },

		{ A: "E", B: "G", length: 5 },
		{ A: "E", B: "H", length: 2 },

		{ A: "F", B: "G", length: 2 },
		{ A: "F", B: "Z", length: 4 },

		{ A: "G", B: "Z", length: 1 },

		{ A: "H", B: "Z", length: 2 },
	];
	const result3 = [
		{
			length: 0,
			path: ["A"],
		},
		{
			length: 2,
			path: ["A", "B"],
		},
		{
			length: 2,
			path: ["A", "C"],
		},
		{
			length: 3,
			path: ["A", "D"],
		},
		{
			length: 4,
			path: ["A", "D", "E"],
		},
		{
			length: 4,
			path: ["A", "B", "F"],
		},
		{
			length: 6,
			path: ["A", "B", "F", "G"],
		},
		{
			length: 5,
			path: ["A", "D", "H"],
		},
		{
			length: 7,
			path: ["A", "D", "H", "Z"],
		},
	];

	it("should return all paths for 9 destinations", () => {
		expect(findShortesPaths("A", stations3, streets3)).toEqual(result3);
	});

	const stations4 = [
		"A",
		"AK1",
		"Lu",
		"Ma",
		"Vie",
		"We",
		"AK2",
		"Hd",
		"Sch",
		"Sp",
		"Nb",
		"SIL",
		"Br",
		"Ka",
		"Wo",
		"Kan",
		"LD",
		"Neu",
		"Ger",
	];
	const streets4 = [
		{ A: "A", B: "AK1", length: 12 },
		{ A: "AK1", B: "Lu", length: 10 },
		{ A: "Lu", B: "Ma", length: 3 },
		{ A: "Ma", B: "Vie", length: 9 },
		{ A: "Vie", B: "We", length: 8 },

		{ A: "Ma", B: "AK2", length: 16 },
		{ A: "AK2", B: "Hd", length: 9 },
		{ A: "Hd", B: "We", length: 19 },

		{ A: "AK2", B: "Sch", length: 8 },
		{ A: "Sch", B: "Hd", length: 8 },

		{ A: "AK1", B: "Sp", length: 20 },
		{ A: "Lu", B: "Sp", length: 15 },

		{ A: "Sp", B: "Nb", length: 11 },
		{ A: "Nb", B: "SIL", length: 8 },

		{ A: "SIL", B: "Hd", length: 15 },
		{ A: "SIL", B: "Br", length: 16 },

		{ A: "Br", B: "We", length: 12 },
		{ A: "Br", B: "Ka", length: 22 },

		{ A: "Ka", B: "We", length: 14 },
		{ A: "Ka", B: "Wo", length: 12 },

		{ A: "Wo", B: "Kan", length: 6 },
		{ A: "Kan", B: "LD", length: 11 },

		{ A: "LD", B: "Neu", length: 20 },
		{ A: "Neu", B: "AK1", length: 14 },

		{ A: "Neu", B: "Sp", length: 21 },
		{ A: "LD", B: "Sp", length: 28 },

		{ A: "Sp", B: "Ger", length: 18 },
		{ A: "Ger", B: "Br", length: 20 },
		{ A: "Ger", B: "Wo", length: 23 },
	];
	const result4 = [
		{
			length: 0,
			path: ["A"],
		},
		{
			length: 12,
			path: ["A", "AK1"],
		},
		{
			length: 22,
			path: ["A", "AK1", "Lu"],
		},
		{
			length: 25,
			path: ["A", "AK1", "Lu", "Ma"],
		},
		{
			length: 34,
			path: ["A", "AK1", "Lu", "Ma", "Vie"],
		},
		{
			length: 42,
			path: ["A", "AK1", "Lu", "Ma", "Vie", "We"],
		},
		{
			length: 41,
			path: ["A", "AK1", "Lu", "Ma", "AK2"],
		},
		{
			length: 50,
			path: ["A", "AK1", "Lu", "Ma", "AK2", "Hd"],
		},
		{
			length: 49,
			path: ["A", "AK1", "Lu", "Ma", "AK2", "Sch"],
		},
		{
			length: 32,
			path: ["A", "AK1", "Sp"],
		},
		{
			length: 43,
			path: ["A", "AK1", "Sp", "Nb"],
		},
		{
			length: 51,
			path: ["A", "AK1", "Sp", "Nb", "SIL"],
		},
		{
			length: 54,
			path: ["A", "AK1", "Lu", "Ma", "Vie", "We", "Br"],
		},
		{
			length: 56,
			path: ["A", "AK1", "Lu", "Ma", "Vie", "We", "Ka"],
		},
		{
			length: 63,
			path: ["A", "AK1", "Neu", "LD", "Kan", "Wo"],
		},
		{
			length: 57,
			path: ["A", "AK1", "Neu", "LD", "Kan"],
		},
		{
			length: 46,
			path: ["A", "AK1", "Neu", "LD"],
		},
		{
			length: 26,
			path: ["A", "AK1", "Neu"],
		},
		{
			length: 50,
			path: ["A", "AK1", "Sp", "Ger"],
		},
	];

	it("should return all paths for 19 destinations", () => {
		expect(findShortesPaths("A", stations4, streets4)).toEqual(result4);
	});
});

describe("When the given Stations are invalid, the function should throw the correct error!", () => {
	it("should throw an Error because the start isn't connected to other stations", () => {
		expect(() => findShortesPaths("A", ["A", "B", "C"], [{ A: "B", B: "C", length: 15 }])).toThrowError(
			`The station ${"A"} has no connection to any other station!`
		);
	});

	it("should throw an Error because some stations aren't connected to other stations", () => {
		expect(() => findShortesPaths("A", ["A", "B", "C"], [{ A: "A", B: "C", length: 15 }])).toThrowError(
			`It is not possible to calculate a path for station '${"B"}'. It probably hasn't a connection to other stations!`
		);
	});
});
