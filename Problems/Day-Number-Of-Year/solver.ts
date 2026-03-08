export default function dayOfYear(date: string): number {
	const [month, day, year] = date.split("/").map(Number);

	if (day <= 0 || day > 31) throw new Error(`The day ${day} does not exist in any Month!`);

	// Check if leap year
	const leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	switchMonth(
		month,
		() => {},
		() => {
			if (day > 30) throw new Error(`The ${month} has only 30 days!`);
		},
		() => {
			if (!leap && day > 28) throw new Error("February has only 28 days (No Leap)");
			if (day > 29) throw new Error("February has only 29 days");
		}
	);

	let dayCount = day;

	for (let m = month - 1; m >= 1; m--) {
		switchMonth(
			m,
			() => {
				dayCount = dayCount + 31;
			},
			() => {
				dayCount = dayCount + 30;
			},
			() => {
				if (!leap) dayCount = dayCount + 28;
				else dayCount = dayCount + 29;
			}
		);
	}

	return dayCount;
}

function switchMonth(
	month: number,
	func31: (month?: number) => void,
	func30: (month?: number) => void,
	func2: (month?: number) => void
) {
	switch (month) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12: {
			func31(month);
			break;
		}
		case 4:
		case 6:
		case 9:
		case 11: {
			func30(month);
			break;
		}
		case 2: {
			func2(month);
			break;
		}
		default:
			throw new Error(`The Month ${month} isn't a valid Month!`);
	}
}
