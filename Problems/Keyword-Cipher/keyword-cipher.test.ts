import { describe, expect, it } from "vitest";
import keywordCipher from "./solver";

describe("Encrypt the word correct", () => {
	it("should return keyabc for abchij", () => {
		expect(keywordCipher("keyword", "abchij")).toEqual("keyabc");
	});

	it("should return pur for abc", () => {
		expect(keywordCipher("purplepineapple", "abc")).toEqual("pur");
	});

	it("should return samucq for edabit", () => {
		expect(keywordCipher("mubashir", "edabit")).toEqual("samucq");
	});

	it("should return eta for abc", () => {
		expect(keywordCipher("etaoinshrdlucmfwypvbgkjqxz", "abc")).toEqual("eta");
	});

	it("should return qxz for xyz", () => {
		expect(keywordCipher("etaoinshrdlucmfwypvbgkjqxz", "xyz")).toEqual("qxz");
	});

	it("should return eirfg for aeiou", () => {
		expect(keywordCipher("etaoinshrdlucmfwypvbgkjqxz", "aeiou")).toEqual("eirfg");
	});

	it("should return EiRfg for AeIou", () => {
		expect(keywordCipher("etaoinshrdlucmfwypvbgkjqxz", "AeIou.")).toEqual("EiRfg.");
	});
});
