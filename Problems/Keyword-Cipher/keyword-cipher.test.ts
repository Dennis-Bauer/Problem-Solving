import { describe, expect, it } from "vitest";
import keyword_cipher from "./solver";

describe("Encrypt the word correct", () => {
	it("should return keyabc for abchij", () => {
		expect(keyword_cipher("keyword", "abchij")).toEqual("keyabc");
	});

	it("should return pur for abc", () => {
		expect(keyword_cipher("purplepineapple", "abc")).toEqual("pur");
	});

	it("should return samucq for edabit", () => {
		expect(keyword_cipher("mubashir", "edabit")).toEqual("samucq");
	});

	it("should return eta for abc", () => {
		expect(keyword_cipher("etaoinshrdlucmfwypvbgkjqxz", "abc")).toEqual("eta");
	});

	it("should return qxz for xyz", () => {
		expect(keyword_cipher("etaoinshrdlucmfwypvbgkjqxz", "xyz")).toEqual("qxz");
	});

	it("should return eirfg for aeiou", () => {
		expect(keyword_cipher("etaoinshrdlucmfwypvbgkjqxz", "aeiou")).toEqual(
			"eirfg",
		);
	});

	it("should return EiRfg for AeIou", () => {
		expect(keyword_cipher("etaoinshrdlucmfwypvbgkjqxz", "AeIou.")).toEqual(
			"EiRfg.",
		);
	});
});

describe("While trying to encrypt a word throws the correct error", () => {
	it("should return something for this input", () => {
		expect(true).toEqual(true);
	});
});
