export type DayType =
	| "Montag"
	| "Dienstag"
	| "Mittwoch"
	| "Donnerstag"
	| "Freitag";

export default function solve(
	input: {
		name: string;
		day: DayType;
		startHour: number;
		endHour: number;
		students: number;
	}[],
): {
	amount: number;
	day: DayType;
	startHour: number;
	endHour: number;
} {

	console.log(input)

	throw new Error("Solution not yet implemented!");
}
