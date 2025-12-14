import { describe, expect, it } from "vitest";
import letterCombinations from "./solver";

describe("Returns all possible letter combinations", () => {
	it("should return all possible combinations for 23", () => {
		expect(letterCombinations(23)).toEqual([
			"ad",
			"ae",
			"af",
			"bd",
			"be",
			"bf",
			"cd",
			"ce",
			"cf",
		]);
	});

	it("should return all possible combinations for ''", () => {
		expect(letterCombinations("")).toEqual([]);
	});

	it("should return all possible combinations for 2", () => {
		expect(letterCombinations(2)).toEqual(["a", "b", "c"]);
	});

	it("should return all possible combinations for 27", () => {
		expect(letterCombinations(27)).toEqual([
			"ap",
			"aq",
			"ar",
			"as",
			"bp",
			"bq",
			"br",
			"bs",
			"cp",
			"cq",
			"cr",
			"cs",
		]);
	});

	it("should return all possible combinations for 234", () => {
		expect(letterCombinations(234)).toEqual([
			"adg",
			"adh",
			"adi",
			"aeg",
			"aeh",
			"aei",
			"afg",
			"afh",
			"afi",
			"bdg",
			"bdh",
			"bdi",
			"beg",
			"beh",
			"bei",
			"bfg",
			"bfh",
			"bfi",
			"cdg",
			"cdh",
			"cdi",
			"ceg",
			"ceh",
			"cei",
			"cfg",
			"cfh",
			"cfi",
		]);
	});

	it("should return all possible combinations for 79", () => {
		expect(letterCombinations(79)).toEqual([
			"pw",
			"px",
			"py",
			"pz",
			"qw",
			"qx",
			"qy",
			"qz",
			"rw",
			"rx",
			"ry",
			"rz",
			"sw",
			"sx",
			"sy",
			"sz",
		]);
	});

	it("should return all possible combinations for 20", () => {
		expect(letterCombinations(79)).toEqual([
			"a ",
			"b ",
			"c ",
			" a",
			" b",
			" c",
		]);
	});
});
