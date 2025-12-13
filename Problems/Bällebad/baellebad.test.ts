import * as fs from "node:fs";
import { describe, expect, it } from "vitest";
import solve, { type DayType } from "./solver";

const parseInput = (i: string) =>
	i
		.trim()
		.replace(/\r/g, "")
		.split("\n")
		.slice(1)
		.map((v) => {
			const [name, day, startHour, endHour, students] = v.split(" ");
			return {
				name,
				day: day as DayType,
				startHour: +startHour,
				endHour: +endHour,
				students: +students,
			};
		});

describe("Given tests: ", () => {
	// Get test inputs
	const examples = [
		parseInput(
			fs.readFileSync("./Problems/Bällebad/test-files/ball00.txt", "utf-8"),
		),
		parseInput(
			fs.readFileSync("./Problems/Bällebad/test-files/ball01.txt", "utf-8"),
		),
		parseInput(
			fs.readFileSync("./Problems/Bällebad/test-files/ball02.txt", "utf-8"),
		),
		parseInput(
			fs.readFileSync("./Problems/Bällebad/test-files/ball03.txt", "utf-8"),
		),
		parseInput(
			fs.readFileSync("./Problems/Bällebad/test-files/ball04.txt", "utf-8"),
		),
		parseInput(
			fs.readFileSync("./Problems/Bällebad/test-files/ball05.txt", "utf-8"),
		),
		parseInput(
			fs.readFileSync("./Problems/Bällebad/test-files/ball06.txt", "utf-8"),
		),
		parseInput(
			fs.readFileSync("./Problems/Bällebad/test-files/ball07.txt", "utf-8"),
		),
	];

	it("should return 60 balls for example00", () => {
		expect(solve(examples[0])).toEqual({
			amount: 60,
			day: "Montag",
			startHour: 14,
		});
	});

	it("should return 96 balls for example01", () => {
		expect(solve(examples[1])).toEqual({
			amount: 96,
			day: "Mittwoch",
			startHour: 11,
		});
	});

	it("should return 157 balls for example02", () => {
		expect(solve(examples[2])).toEqual({
			amount: 157,
			day: "Montag",
			startHour: 10,
		});
	});

	it("should return 152 balls for example03", () => {
		expect(solve(examples[3])).toEqual({
			amount: 152,
			day: "Freitag",
			startHour: 9,
		});
	});

	it("should return 31 balls for example04", () => {
		expect(solve(examples[4])).toEqual({
			amount: 31,
			day: "Montag",
			startHour: 10,
		});
	});

	it("should return 60 balls for example05", () => {
		expect(solve(examples[5])).toEqual({
			amount: 60,
			day: "Donnerstag",
			startHour: 8,
		});
	});

	it("should return 90 balls for example06", () => {
		expect(solve(examples[6])).toEqual({
			amount: 90,
			day: "Dienstag",
			startHour: 9,
		});
	});

	it("should return 59 balls for example07", () => {
		expect(solve(examples[7])).toEqual({
			amount: 59,
			day: "Freitag",
			startHour: 10,
		});
	});

	it("should return true", () => {
		expect(false).toBeTruthy();
	})
});

describe("Tests created by the Developer", () => {
	const examples = [
		parseInput(
			fs.readFileSync(
				"./Problems/Bällebad/test-files/eigenertest.txt",
				"utf-8",
			),
		),
		parseInput(
			fs.readFileSync(
				"./Problems/Bällebad/test-files/eigenertest1.txt",
				"utf-8",
			),
		),
	];

	it("should return XX balls for own example00", () => {
		expect(solve(examples[0])).toEqual({
			amount: 41,
			day: "Mittwoch",
			startHour: 14,
		});
	});

	it("should return XX balls for example00", () => {
		expect(solve(examples[1])).toEqual({
			amount: 40,
			day: "Mittwoch",
			startHour: 10,
		});
	});
});
