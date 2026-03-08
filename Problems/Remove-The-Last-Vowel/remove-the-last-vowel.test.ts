import { describe, expect, it } from "vitest";
import removeLastVowel from "./solver";

describe("Removes the last vowel for each word in each sentence", () => {
	it("should return: 'Keybord'", () => {
		expect(removeLastVowel("Keyboard")).toEqual("Keybord");
	});

	it("should return: 'Thos wh dar t fal miserbly cn achiev gretly.'", () => {
		expect(removeLastVowel("Those who dare to fail miserably can achieve greatly.")).toEqual(
			"Thos wh dar t fal miserbly cn achiev gretly."
		);
	});

	it("should return: 'Lov s  serios mentl diseas'", () => {
		expect(removeLastVowel("Love is a serious mental disease.")).toEqual("Lov s  serios mentl diseas.");
	});

	it("should return: 'Gt bsy livng r gt bsy dyng'", () => {
		expect(removeLastVowel("Get busy living or get busy dying.")).toEqual("Gt bsy livng r gt bsy dyng.");
	});

	it("should return: 'f yo wnt t liv  hppy lif, ti t t  gol, nt t peopl.'", () => {
		expect(removeLastVowel("If you want to live a happy life, tie it to a goal, not to people.")).toEqual(
			"f yo wnt t liv  hppy lif, ti t t  gol, nt t peopl."
		);
	});
});
