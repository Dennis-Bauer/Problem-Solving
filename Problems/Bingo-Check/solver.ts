import type { FixedArray } from "../../utilities/types/fixedArray";

export default function bingoCheck(card: FixedArray<FixedArray<"x" | number, 5>, 5>): boolean {
	if (
		card.reduce(
			(preVal, row) => (preVal ? true : row.reduce((p, element) => (p ? element === "x" : false), true)),
			false
		)
	)
		return true;

	let leftDiagonal = true;
	let rightDiagonal = true;
	for (let i = 0; i < card.length; i++) {
		if (card.reduce((preVal, val) => (preVal ? val[i] === "x" : false), true)) return true;

		if (!(leftDiagonal && card[i][i] === "x")) leftDiagonal = false;
		if (!(rightDiagonal && card[i][4 - i] === "x")) rightDiagonal = false;
	}

	return rightDiagonal || leftDiagonal;
}
