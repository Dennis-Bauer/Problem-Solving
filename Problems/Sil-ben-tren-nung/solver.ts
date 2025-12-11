// Vokale, Selbstlaute die in jeder Silbe sind.
const vokale = ["a", "e", "i", "o", "u", "ö", "ä", "ü"];
// Diphthongs, ein Doppellaut bestehend aus zwei Vokalen.
const diphthongs = ["au", "ei", "ai", "eu", "äu", "oi", "ui", "ee", "aa", "ie"];
// Digraphen, zwei Buchstaben die ein Laut bilden (Mit einem Trigraphen ('sch')).
const digraphen = ["ck", "ch", "ph", "th", "qu", "sch"];
// Kombination aus den digraphen und diphthongs.
const paare = [...diphthongs, ...digraphen];
// Anlaute, Laute mit welcher eine Silbe beginnen muss.
const anlaute = [
	["sch"],
	[
		"bl",
		"pf",
		"br",
		"dr",
		"fl",
		"fr",
		"gl",
		"gr",
		"gn",
		"kl",
		"kr",
		"pl",
		"pr",
		"tr",
		"st",
		"sp",
		"ch",
		"ph",
		"th",
		"qu",
	],
	[
		"a",
		"e",
		"i",
		"o",
		"u",
		"ä",
		"ö",
		"ü",
		"b",
		"d",
		"f",
		"g",
		"h",
		"j",
		"k",
		"l",
		"m",
		"n",
		"p",
		"r",
		"s",
		"t",
		"v",
		"w",
		"z",
		"ß",
	],
];

/**
 * Diese Funktion teilt das gegebene Wort in Silben ein, gekennzeichnet mit einem |.
 *
 * @param wort Das Wort, welches getrennt werden soll
 * @returns Das getrennte Wort
 */
function splitWort(wort: string): string {
	const wortArray = wort
		.toLowerCase()
		.replaceAll(/[^a-zäöüß]/g, "")
		.split("");

	const positionSilbe: number[] = [];

	// Trenne das Wort
	for (let i = 0; i < wortArray.length; i++) {
		// 7. Eine Silbe muss einen Vokal enthalten.
		if (!besitzenSilbenVokale(i)) {
		}
		// 6. Führt die Trennung dazu, dass ein Buchstabenpaar
		// (z. B. „sch“, „ch“, „au“ …) getrennt würde,
		// darf hier nicht getrennt werden.
		else if (istPaar(i)) {
			if (wortArray[i] === "s") i++;
		}
		// 5. Beginnt die neu entstehende Silbe nicht mit
		// einem Anlaut, darf nicht getrennt werden.
		else if (!startetMitAnlaut(i)) {
		}
		// 4. Folgen auf einen Vokal nicht zwei Konsonanten,
		// wird nach dem Vokal getrennt.
		else if (
			istVokal(i) &&
			(istVokal(i, 1) || istVokal(i, 2) || i === wortArray.length - 2)
		) {
			positionSilbe.push(i);
		}
		// 3. Bei drei oder mehr aufeinanderfolgenden Konsonanten
		//  wird nach dem ersten Konsonanten getrennt.
		else if (
			i <= wortArray.length - 3 &&
			!istVokal(i) &&
			!istVokal(i, 1) &&
			!istVokal(i, 2)
		) {
			positionSilbe.push(i);
		}
		// 2. Der erste und der letzte Buchstabe dürfen nicht getrennt werden.
		else if (i === 0 || i >= wortArray.length - 2) {
		}
		// 1. Trenne das Wort.
		else {
			positionSilbe.push(i);
		}
	}

	// Füge das Wort mit Trennstellen wieder zusammen
	const trennStrich = "|";
	let ergebnis = "";
	for (let i = 0, j = 0; i < wort.length; i++) {
		if (wort[i].toLowerCase() === wortArray[j]) {
			ergebnis = ergebnis + wort[i];

			if (positionSilbe.some((value) => value === j)) ergebnis += trennStrich;
			j++;
		} else {
			ergebnis += wort[i];
		}
	}

	return ergebnis;

	/* Hilf Funktionen */

	function besitzenSilbenVokale(position: number): boolean {
		return (
			wortArray
				.slice(positionSilbe.at(-1)! + 1, position + 1)
				.some((b) => vokale.includes(b.toLowerCase())) &&
			wortArray
				.slice(position + 1)
				.some((b) => vokale.includes(b.toLowerCase()))
		);
	}

	/**
	 * Prüft, ob an einer bestimmten Position (mit optionalem Zusatz) im Wort ein Vokal steht.
	 *
	 * @param position Die aktuelle Position des Buchstabens, an dem sich das Programm gerade befindet.
	 * @param additionToPos Ein optionaler Zusatz zur Position, um eine Verschiebung vorzunehmen.
	 * @returns Gibt zurück, ob das Array 'wortArray' an der berechneten Position einen Vokal enthält.
	 */
	function istVokal(position: number, additionToPos: number = 0): boolean {
		if (!wortArray[position + additionToPos]) return false;

		return vokale.includes(wortArray[position + additionToPos].toLowerCase());
	}

	/**
	 * Prüft, ob sich an einer bestimmten Position im Wort ein Buchstabenpaar befindet oder darauf folgt.
	 *
	 * @param pos Die aktuelle Position des Buchstabens, an dem sich das Programm gerade befindet.
	 * @returns Gibt zurück, ob im Array 'wortArray' an der angegebenen Position ein Buchstabenpaar vorhanden ist oder folgt.
	 */
	function istPaar(pos: number): boolean {
		if (pos > wortArray.length - 2) return false;

		if (
			paare.some(
				(value) =>
					value.substring(0, 2) === wortArray.slice(pos, pos + 2).join(""),
			)
		) {
			if (wortArray.slice(pos, pos + 2000).join("") !== "sc") return true;

			if (wortArray.slice(pos, pos + 3).join("") === "sch") return true;
		}

		return false;
	}

	/**
	 * Prüft, ob sich zwischen einer bestimmten Position und dem nächsten Vokal ein Anlaut befindet.
	 *
	 * @param position Die aktuelle Position des Buchstabens, an dem sich das Programm gerade befindet.
	 * @returns Gibt zurück, ob sich im Array 'wortArray' zwischen der angegebenen Position und dem nächsten Vokal ein Anlaut befindet.
	 */
	function startetMitAnlaut(position: number): boolean {
		if (istVokal(position + 1)) return true;

		let nextVokal = position + 1;

		while (!istVokal(nextVokal) && position < wortArray.length - 1) nextVokal++;

		const abstandZuVokal = nextVokal - 1 - position;

		if (abstandZuVokal <= 3 && abstandZuVokal > 0) {
			return anlaute
				.flat(2)
				.some((v) => v === wortArray.slice(position + 1, nextVokal).join(""));
		} else if (abstandZuVokal === 4) {
			return (
				wortArray.slice(position + 1, position + 4).join("") ===
					anlaute[0][0] && anlaute[2].some((v) => v === wortArray[position + 4])
			);
		}
		return false;
	}
}

export default function trenneSilben(text: string): string {
	return text.split(" ").map(splitWort).join(" ");
}
