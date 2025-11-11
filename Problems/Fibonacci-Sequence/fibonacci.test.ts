import { describe, expect, it } from "vitest";
import Fibonacci from "./generator";

describe("Generating Fibonacci numbers", () => {
	it("should generate the correct number 1 -> 0", () => {
		expect(Fibonacci.fibonacci(1)).toEqual(0);
	});

	it("should generate the correct number 2 -> 1", () => {
		expect(Fibonacci.fibonacci(2)).toEqual(1);
	});

	it("should generate the correct number 16 -> 610", () => {
		expect(Fibonacci.fibonacci(16)).toEqual(610);
	});

	it("should generate the correct number 42 -> 165580141", () => {
		expect(Fibonacci.fibonacci(42)).toEqual(165580141);
	});
});

describe("Fibonacci Object", () => {
	const f = new Fibonacci();

	it("should contain the last generated number", () => {
		f.next();
		f.next();
		f.next();

		expect(f.getValue()).toEqual(1);
	});

	it("should contain the last generated number", () => {
		f.next(5);

		expect(f.getValue()).toEqual(13);
	});

	it("should return the generated sequence", () => {
		expect(f.getSequence()).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
	});

	it("should return the generated sequence", () => {
		f.next(40);

		expect(f.getSequence()).toEqual([
			0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
			2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418,
			317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465,
			14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296,
			433494437, 701408733, 1134903170, 1836311903, 2971215073,
		]);
	});
});
