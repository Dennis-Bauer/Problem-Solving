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
	throw new Error("Solution yet not implemented!");
}
