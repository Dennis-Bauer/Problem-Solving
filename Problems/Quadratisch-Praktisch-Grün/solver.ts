import Decimal from "decimal.js";

/**
 * Diese Funktion führt die Berechnung der gesamten Aufgabe durch und gibt die Ergebnisse in der Konsole aus.
 * @param customers Diese Variable speichert die Anzahl der Interessenten.
 * @param gardenHeight Diese Variable speichert die Höhe des Gartens.
 * @param gardenWidth Diese Variable speichert die Breite des Gartens.
 */
export default function calculateAnswer(
	customers: number,
	gardenHeight: number,
	gardenWidth: number
): {
	areaGarden: number;
	miniGardenPerHeight: number;
	miniGardenPerWidth: number;
	miniGarden: { amount: number; height: number; width: number; area: number };
} {
	const resultObject = {
		areaGarden: 0,
		miniGardenPerHeight: 0,
		miniGardenPerWidth: 0,
		miniGarden: {
			amount: 0,
			height: 0,
			width: 0,
			area: 0,
		},
	};

	// Testet ob der Input richtig ist
	if (customers <= 0 || customers % 1 !== 0)
		throw new Error("Invalid customer input: Please enter a positive whole number greater than 0.");
	if (gardenHeight <= 0 || gardenWidth <= 0)
		throw new Error("Invalid garden size: Both height and width must be numbers greater than 0.");

	// Gibt den Flächeninhalt des Gartens aus.
	resultObject.areaGarden = gardenHeight * gardenWidth;

	// Berechnet, wie viele Kleingärten in der Höhe und in der Breite des Gartens Platz finden mithilfe einer mini dafür erstellten Funktion.
	const dividing = calculateBestDividing(customers, gardenWidth, gardenHeight);

	// Gibt die gerade berechneten Werte aus.
	resultObject.miniGardenPerHeight = dividing.gardenPerHeight;
	resultObject.miniGardenPerWidth = dividing.gardenPerWidth;

	// Berechnet die gesamte Anzahl an Kleingärten und deren aktuelle Höhe/Breite (die Breite/Höhe ändert sich durch die gerundeten Werte).
	const mGardenTotal = dividing.gardenPerHeight * dividing.gardenPerWidth;
	const mGardenHeight = parseFloat((gardenHeight / dividing.gardenPerHeight).toFixed(2));
	const mGardenWidth = parseFloat((gardenWidth / dividing.gardenPerWidth).toFixed(2));
	const mGardenSize = parseFloat((mGardenHeight * mGardenWidth).toFixed(2));

	// Gibt die gerade berechneten Werte aus.
	resultObject.miniGarden.amount = mGardenTotal;
	resultObject.miniGarden.height = mGardenHeight;
	resultObject.miniGarden.width = mGardenWidth;
	resultObject.miniGarden.area = mGardenSize;

	return resultObject;
}

/**
 * Diese Funktion berechnet aus den drei Werten (Interessenten, Höhe, Breite) die bestmögliche Aufteilung des Grundstücks, um eine sp quadratisch wie mögliche Aufteilung zu erreichen.
 * Dies geschieht durchs Durchlaufen aller Möglichkeiten für x (Anzahl der Kleingärten), wobei diese bis zu 10 % größer sein darf als die Anzahl der Interessenten. In diesem Durchlauf
 * berechnet die Funktion die bestmögliche Aufteilung in Höhe und Breite durch Testen der Möglichkeiten. Die verschiedenen Ergebnisse werden verglichen und das Beste wird
 * zurückgegeben.
 * @param customers Die Anzahl der Interessenten (x)
 * @param width Die Breite des Grundstücks (a)
 * @param height Die Höhe des Grundstücks (b)
 * @return Gibt die beste Aufteilung als int-Array zurück (Kleingärten pro Breite, Kleingärten pro Höhe)
 */
function calculateBestDividing(
	customers: number,
	width: Decimal.Value,
	height: Decimal.Value
): { gardenPerHeight: number; gardenPerWidth: number } {
	// Speichert die Differenz zwischen zwei Seitenlängen eines Kleingartens.
	// Je näher sie bei null liegt, desto quadratischer ist ein Kleingarten
	let bestDiff = new Decimal(Infinity);

	// Speichert die beste Aufteilung der Kleingärten in die Breite (m) und in die Höhe (n)
	const dividing = { gardenPerHeight: 0, gardenPerWidth: 0 };

	// Schleife starten, die 10 % von der Anzahl an Interessenten durchläuft.
	for (let i = 0; i <= Math.floor(customers / 10); i++) {
		// Neuer Interessentenwert wird mit i addiert
		const nCustomers = customers + i;

		// Speichert die beste Aufteilung der Kleingärten in die Breite (m) und in die Höhe (n)
		// für den neuen Interessentenwert
		let bestM = 0;
		let bestN = 0;

		// Erstellt eine Variable, die die bisher kleinste Differenz zwischen den Seitenlängen
		// eines Kleingartens speichert.
		let minDiff = new Decimal(Infinity);

		// Durchläuft mögliche Werte für die Anzahl der Kleingärten in Höhe und Breite
		for (let m = 1; m <= nCustomers; m++) {
			// Testet, ob die Anzahl der Kleingärten pro Breite möglich ist
			// (ob sie ein Teiler von nCustomers ist)
			if (nCustomers % m === 0) {
				// Da m (Kleingärten pro Breite) eine Möglichkeit ist, die Kleingärten
				// in der Breite zu unterteilen, wird die Höheneinteilung ausgerechnet
				const n = Math.trunc(nCustomers / m);

				// Berechnet die Seitengrößen der Kleingärten und speichert die Differenz zwischen den beiden.
				// Je kleiner die Differenz ist, desto quadratischer ist der Kleingarten.
				// Die .abs()-Methode wandelt jedes Ergebnis in ein positives Ergebnis um,
				// um die Vergleiche immer beizubehalten.
				const diff = new Decimal(width).div(m).minus(new Decimal(height).div(n)).abs();

				if (diff.cmp(minDiff) < 0) {
					minDiff = diff;
					bestM = m;
					bestN = n;
				}
			}
		}

		// Berechnet die neue Differenz für die beste Aufteilung in dieser Iteration
		const newDiff = new Decimal(height).div(bestN).minus(new Decimal(width).div(bestM)).abs();

		// Überprüft, ob die Aufteilung der Kleingärten besser ist
		if (newDiff.cmp(bestDiff) < 0) {
			dividing.gardenPerWidth = bestM;
			dividing.gardenPerHeight = bestN;

			bestDiff = newDiff;
		}

		// Überprüft, ob die bisherige beste Differenz 0 ist.
		// Wenn ja, wird der Array zurückgegeben, da es kein besseres Ergebnis geben kann.
		if (bestDiff.isZero()) {
			return dividing;
		}
	}

	return dividing;
}
