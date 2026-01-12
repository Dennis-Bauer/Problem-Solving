interface Street {
	A: string; // An id of a station
	B: string; // An id of a station
	length: number; // The length, how much time it will take to proceed
}

type Output = {
	path: string[];
	length: number;
}[];

// Tiny min-heap (priority queue) for { station, length }
type PQItem = { station: string; length: number };

class MinHeap {
	private data: PQItem[] = [];

	size() {
		return this.data.length;
	}

	push(item: PQItem) {
		this.data.push(item);
		this.bubbleUp(this.data.length - 1);
	}

	pop(): PQItem | undefined {
		if (this.data.length === 0) return undefined;
		const top = this.data[0];
		const last = this.data.pop()!;
		if (this.data.length > 0) {
			this.data[0] = last;
			this.bubbleDown(0);
		}
		return top;
	}

	private bubbleUp(i: number) {
		while (i > 0) {
			const p = Math.floor((i - 1) / 2);
			if (this.data[p].length <= this.data[i].length) break;
			[this.data[p], this.data[i]] = [this.data[i], this.data[p]];
			i = p;
		}
	}

	private bubbleDown(i: number) {
		for (;;) {
			const l = i * 2 + 1;
			const r = i * 2 + 2;
			let smallest = i;

			if (l < this.data.length && this.data[l].length < this.data[smallest].length) {
				smallest = l;
			}
			if (r < this.data.length && this.data[r].length < this.data[smallest].length) {
				smallest = r;
			}
			if (smallest === i) break;

			[this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
			i = smallest;
		}
	}
}

export default function findShortesPaths(start: string, stations: string[], streets: Street[]): Output {
	const resultMap: Map<string, { length: number; previousStation: string }> = new Map();
	const connections: Map<string, Map<string, number>> = new Map(); // Map<Start, Map<End, Length>>

	// Init resultMap
	for (const station of stations) {
		resultMap.set(station, {
			length: station === start ? 0 : Infinity,
			previousStation: "",
		});
	}

	// Build adjacency map (undirected)
	for (const street of streets) {
		const add = (from: string, to: string, len: number) => {
			if (!connections.has(from)) connections.set(from, new Map());
			connections.get(from)!.set(to, len);
		};
		add(street.A, street.B, street.length);
		add(street.B, street.A, street.length);
	}

	// Dijkstra with a priority queue (no findSmallest scan)
	const visited = new Set<string>();
	const pq = new MinHeap();
	pq.push({ station: start, length: 0 });

	while (pq.size() > 0) {
		const item = pq.pop()!;
		const current = item.station;
		const currentLength = resultMap.get(current)!.length;

		// Skip outdated queue entries (common trick when no decrease-key)
		if (item.length !== currentLength) continue;

		// If we already finalized this node, skip
		if (visited.has(current)) continue;
		visited.add(current);

		const neighbors = connections.get(current);
		if (!neighbors) throw new Error(`The station ${current} has no connection to any other station!`);

		for (const [next, dist] of neighbors.entries()) {
			if (visited.has(next)) continue;

			const newLen = currentLength + dist;
			if (newLen < resultMap.get(next)!.length) {
				resultMap.set(next, { length: newLen, previousStation: current });
				pq.push({ station: next, length: newLen });
			}
		}
	}

	const outputs: Output = [];

	for (const station of stations) {
		if (resultMap.get(station)!.length >= Infinity)
			throw new Error(
				`It is not possible to calculate a path for station '${station}'. It probably hasn't a connection to other stations!`
			);

		const path: string[] = [];
		let current = station;

		while (current !== "") {
			path.push(current);
			current = resultMap.get(current)!.previousStation;
		}

		path.reverse();

		outputs.push({
			path,
			length: resultMap.get(station)!.length,
		});
	}

	return outputs;
}
