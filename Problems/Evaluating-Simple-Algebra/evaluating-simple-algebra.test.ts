import { describe, expect, it } from "vitest";
import evaluatingSimpleAlgebra from "./solver";

describe("Solves the equation correctly", () => {
	it("should return 17 for '2 + x = 19'", () => {
		expect(evaluatingSimpleAlgebra("2 + x = 19")).toEqual(17);
	});

		it("should return 3 for '4 - x = 1'", () => {
		expect(evaluatingSimpleAlgebra("4 - x = 1")).toEqual(3);
	});

		it("should return 43 for 'x + 10 = 53'", () => {
		expect(evaluatingSimpleAlgebra("x + 10 = 53")).toEqual(43);
	});

		it("should return 3 for '-23 + x = -20'", () => {
		expect(evaluatingSimpleAlgebra("-23 + x = -20")).toEqual(3);
	});

		it("should return -5 for '10 + x = 5'", () => {
		expect(evaluatingSimpleAlgebra("10 + x = 5")).toEqual(-5);
	});

		it("should return 131 for '-49 - x = -180'", () => {
		expect(evaluatingSimpleAlgebra("-49 - x = -180")).toEqual(131);
	});

		it("should return -34 for 'x - 22 = -56'", () => {
		expect(evaluatingSimpleAlgebra("x - 22 = -56")).toEqual(-34);
	});
});
