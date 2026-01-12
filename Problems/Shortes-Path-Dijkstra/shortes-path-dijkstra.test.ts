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
			length: 2,
		},
		{
			A: "G",
			B: "C",
			length: 2,
		},
	];

	it("should return all paths for 7 destinations", () => {
		expect(findShortesPaths("A", stations1, streets1)).toEqual(true);
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

	it("should return all paths for 10 destinations", () => {
		expect(findShortesPaths("A", stations2, streets2)).toEqual(true);
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

	it("should return all paths for 9 destinations", () => {
		expect(findShortesPaths("A", stations3, streets3)).toEqual(true);
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

	it("should return all paths for 19 destinations", () => {
		expect(findShortesPaths("A", stations4, streets4)).toEqual(true);
	});
});

// describe("Another description for the tests. Maybe those which are throwing errors", () => {
// 	it("should return something for this input", () => {
// 		expect(true).toEqual(true);
// 	});
// });
