import type { FixedArray } from "../../utilities/types/fixedArray";
import type { IntRange } from "../../utilities/types/intRange";

export default function missingNumber(array: FixedArray<IntRange<1, 11>, 9>): number {
	return 55 - array.reduce((preVal, val) => preVal + val, 0);
}
