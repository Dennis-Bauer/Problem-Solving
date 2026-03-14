import { describe, expect, it } from "vitest";
import type { FixedArray } from "../../utilities/types/fixedArray";
import bingoCheck from "./solver";

type CardType = FixedArray<FixedArray<"x" | number, 5>, 5>;

describe("Validates correctly if a Bingo-Card has a bingo on it or not", () => {
	const firstCard: CardType = [
		[45, "x", 31, 74, 87],
		[64, "x", 47, 32, 90],
		[37, "x", 68, 83, 54],
		[67, "x", 98, 39, 44],
		[21, "x", 24, 30, 52],
	];

	it("should return true for the horizontal bingo", () => {
		expect(bingoCheck(firstCard)).toEqual(true);
	});

	const secondCard: CardType = [
		["x", 43, 31, 74, 87],
		[64, "x", 47, 32, 90],
		[37, 65, "x", 83, 54],
		[67, 98, 39, "x", 44],
		[21, 59, 24, 30, "x"],
	];

	it("should return true for the diagonal bingo", () => {
		expect(bingoCheck(secondCard)).toEqual(true);
	});

	const thirdCard: CardType = [
		["x", "x", "x", "x", "x"],
		[64, 12, 47, 32, 90],
		[37, 16, 68, 83, 54],
		[67, 19, 98, 39, 44],
		[21, 75, 24, 30, 52],
	];

	it("should return true for the diagonal bingo", () => {
		expect(bingoCheck(thirdCard)).toEqual(true);
	});

	const forthCard: CardType = [
		[45, "x", 31, 74, 87],
		[64, 78, 47, "x", 90],
		[37, "x", 68, 83, 54],
		[67, "x", 98, "x", 44],
		[21, "x", 24, 30, 52],
	];

	it("should return false for no bingo", () => {
		expect(bingoCheck(forthCard)).toEqual(false);
	});

	const fifthCard: CardType = [
		[45, 43, 31, 74, 87],
		["x", 29, 47, 32, 90],
		[37, "x", 41, 83, 54],
		[67, 98, "x", 58, 44],
		[21, 59, 24, "x", 59],
	];

	it("should return false for a wrong vertical bingo", () => {
		expect(bingoCheck(fifthCard)).toEqual(false);
	});
});
