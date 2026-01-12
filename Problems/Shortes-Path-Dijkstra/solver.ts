interface Street {
	A: string; // An id of a station
	B: string; // An id of a station
	length: number; // The length, how much time it will take to proceed
}

interface Output {
	path: string[];
	length: number;
}

export default function findShortesPaths(start: string, stations: string[], streets: Street[]): Output {
	const resultMap: Map<string, { length: number; previousStation: string }> = new Map();
	const connections: Map<string, Map<string, number>> = new Map(); // Map<Start, Map<End, Length>>
	const isStationVisited: Map<string, boolean> = new Map();

	const visitedStations = [];

	const findSmallest = () => {
		let smallest = "";
		let smallestLength = Infinity;
		resultMap.forEach((element, key) => {
			if (!isStationVisited.get(key) && element.length < smallestLength) {
				smallest = key;
				smallestLength = element.length;
			}
		});
		return smallest;
	};

	// Create result map
	stations.forEach((station) => {
		if (station === start) {
			resultMap.set(station, { length: 0, previousStation: "" });
		} else resultMap.set(station, { length: Infinity, previousStation: "" });
	});

	// Create connection map
	streets.forEach((street) => {
		const addConnection = (stationA: string, stationB: string) => {
			if (!connections.has(stationA)) {
				connections.set(stationA, new Map().set(stationB, street.length));
			} else {
				connections.get(stationA)?.set(stationB, street.length);
			}
		};

		addConnection(street.A, street.B);
		addConnection(street.B, street.A);
	});

	// Create isStationVisited
	stations.forEach((station) => isStationVisited.set(station, false));

	let current = start;
	let smallest = start;
	let smallestLength = Infinity;
	while (visitedStations.length < stations.length) {
		if (!connections.has(current)) {
			throw new Error("The given current location isn't connected to any other station!");
		} else {
			const currentLength = resultMap.get(current)!.length;

			if (current === smallest) {
				smallestLength = Infinity;
			}

			console.log(current);
			Array.from(connections.get(current)!.entries()).forEach(([key, distanz]) => {
				console.log(`${key} -> ${distanz}`);
				if (!isStationVisited.get(key)) {
					const length = currentLength + distanz;

					if (resultMap.get(key)!.length > length) {
						if (length < smallestLength) {
							smallest = key;
							smallestLength = length;
						}

						resultMap.set(key, { length, previousStation: current });
					}
				}
			});
			visitedStations.push(current);
			isStationVisited.set(current, true);

			current = smallestLength >= Infinity ? findSmallest() : findSmallest();
			// current = smallest;
		}
	}

	console.log(resultMap);
}
