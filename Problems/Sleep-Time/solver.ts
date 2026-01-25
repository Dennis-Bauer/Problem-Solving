const checkBoundaries = (time: string) => {
	const hour = Number.parseInt(time.split(":")[0], 10);
	const minutes = Number.parseInt(time.split(":")[1], 10);

	if (hour > 24 || minutes > 59 || hour < 0 || minutes < 0)
		throw new Error("The given times haven't the correct format!");
};

export default function bedTime(wakeTime: string, sleepTime: string): string {
	checkBoundaries(wakeTime);
	checkBoundaries(sleepTime);

	const endTimeHour = Number.parseInt(wakeTime.split(":")[0], 10);
	const endTimeMinutes = Number.parseInt(wakeTime.split(":")[1], 10);

	const durationTimeHour = Number.parseInt(sleepTime.split(":")[0], 10);
	const durationTimeMinutes = Number.parseInt(sleepTime.split(":")[1], 10);

	let startTimeHours = endTimeHour - durationTimeHour;
	let startTimeMinutes = endTimeMinutes - durationTimeMinutes;

	if (startTimeMinutes < 0) {
		startTimeMinutes = 60 + startTimeMinutes;

		startTimeHours--;
	}

	if (startTimeHours < 0) {
		startTimeHours = 24 + startTimeHours;
	}

	return `${startTimeHours < 9 ? `0${startTimeHours}` : startTimeHours}:${startTimeMinutes < 9 ? `0${startTimeMinutes}` : startTimeMinutes}`;
}
