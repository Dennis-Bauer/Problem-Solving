export type DayType =
	| "Montag"
	| "Dienstag"
	| "Mittwoch"
	| "Donnerstag"
	| "Freitag";

export type ClassType = {
	name: string;
	day: DayType;
	startHour: number;
	endHour: number;
	students: number;
};

export type SolutionType = {
	amount: number;
	day: DayType;
	startHour: number;
};

export default function solve(input: ClassType[]): SolutionType {
	const dayArray: Record<string, ClassType[]> = {};

	input.forEach((e) => {
		if (!dayArray[e.day]) dayArray[e.day] = [];

		dayArray[e.day].push(e);
	});

	const solution: Record<string, { amount: number; time: number }> = {};

	Object.entries(dayArray).forEach(([day, items]) => {
		const ballAmounts: Record<number, number> = {};

		items.forEach((c) => {
			for (let i = c.startHour; i < c.endHour; i++) {
				if (!ballAmounts[i]) ballAmounts[i] = 0;
				ballAmounts[i] = ballAmounts[i] + c.students;

				if (i === 10 && day === "Freitag") {
					console.log(ballAmounts[i]);
				}
			}
		});

		if (day === "Freitag") {
			console.log(ballAmounts);
		}

		let best = -1;
		let bestTime = -1;
		Object.entries(ballAmounts).forEach(([time, amount]) => {
			if (amount > best) {
				best = amount;
				bestTime = +time;
			}
		});

		solution[day] = { amount: best, time: bestTime };
	});

	let bestAmount = -1;
	let bestObj: SolutionType | null = null;
	Object.entries(solution).forEach(([day, obj]) => {
		if (obj.amount > bestAmount) {
			bestAmount = obj.amount;

			bestObj = {
				amount: obj.amount,
				day: day as DayType,
				startHour: obj.time,
			};
		}
	});

	if (bestObj === null) throw new Error("Something went wrong!");

	return bestObj;
}
