import { describe, expect, it } from "vitest";
import trenneSilben from "./solver";

describe("Given tests: ", () => {
	it('should return "Mein Na|me ist Lars und ich es|se schreck|lich ger|ne Sau|er|kraut." as correct splitting', () => {
		expect(
			trenneSilben(
				"Mein Name ist Lars und ich esse schrecklich gerne Sauerkraut.",
			),
		).toEqual(
			"Mein Na|me ist Lars und ich es|se schreck|lich ger|ne Sau|er|kraut.",
		);
	});

	it('should return "Der Ka|pi|tän ist e|ben|falls Prä|si|dent der ört|li|chen Dampf|schiff|fahrts|ge|sell|schaft." as correct splitting', () => {
		expect(
			trenneSilben(
				"Der Kapitän ist ebenfalls Präsident der örtlichen Dampfschifffahrtsgesellschaft.",
			),
		).toEqual(
			"Der Ka|pi|tän ist e|ben|falls Prä|si|dent der ört|li|chen Dampf|schiff|fahrts|ge|sell|schaft.",
		);
	});

	it('should return "Es ist ar|schkalt!" as correct splitting', () => {
		expect(trenneSilben("Es ist arschkalt!")).toEqual("Es ist ar|schkalt!");
	});

	it('should return "Ist das Au|di|o|si|gnal im Ra|di|o schlecht?" as correct splitting', () => {
		expect(trenneSilben("Ist das Audiosignal im Radio schlecht?")).toEqual(
			"Ist das Au|di|o|si|gnal im Ra|di|o schlecht?",
		);
	});

	it('should return "Sein Va|ter ist Bau|er und ern|tet Mais." as correct splitting', () => {
		expect(trenneSilben("Sein Vater ist Bauer und erntet Mais.")).toEqual(
			"Sein Va|ter ist Bau|er und ern|tet Mais.",
		);
	});

	it('should return "Ich an|gle Kar|pfen." as correct splitting', () => {
		expect(trenneSilben("Ich angle Karpfen.")).toEqual("Ich an|gle Kar|pfen.");
	});

	it('should return "Was sind acht Hob|bits? Ein Hobby|te!" as correct splitting', () => {
		expect(trenneSilben("Was sind acht Hobbits? Ein Hobbyte!")).toEqual(
			"Was sind acht Hob|bits? Ein Hobby|te!",
		);
	});

	it('should return "Freu|de, schö|ner Göt|ter|fun|ken, Toch|ter aus E|li|si|um, Wir be|tre|ten feu|er|trun|ken, Himm|li|sche, dein" as correct splitting', () => {
		expect(
			trenneSilben(
				"Freude, schöner Götterfunken, Tochter aus Elisium, Wir betreten feuertrunken, Himmlische, dein Heiligthum. Deine Zauber binden wieder, Was die Mode streng getheilt, Alle Menschen werden Brüder, Wo dein sanfter Flügel weilt.",
			),
		).toEqual(
			"Freu|de, schö|ner Göt|ter|fun|ken, Toch|ter aus E|li|si|um, Wir be|tre|ten feu|er|trun|ken, Himm|li|sche, dein Hei|lig|thum. Dei|ne Zau|ber bin|den wie|der, Was die Mo|de streng ge|theilt, Al|le Men|schen wer|den Brü|der, Wo dein sanf|ter Flü|gel weilt.",
		);
	});
});

describe("Tests created by the Developer", () => {
	it('should return "Ich ha|be mich heu|te im|pfen las|sen und ha|be da|bei Tro|pfen auf dem Dach ge|se|hen, wel|che nicht mehr dort wa|ren, als ich fer|tig war." as correct splitting', () => {
		expect(
			trenneSilben(
				"Ich habe mich heute impfen lassen und habe dabei Tropfen auf dem Dach gesehen, welche nicht mehr dort waren, als ich fertig war.",
			),
		).toEqual(
			"Ich ha|be mich heu|te im|pfen las|sen und ha|be da|bei Tro|pfen auf dem Dach ge|se|hen, wel|che nicht mehr dort wa|ren, als ich fer|tig war.",
		);
	});

	it('should return "Ei|ne Schran|ke, die an ei|ner Stra|ße ge|baut ist, könn|te man auch Au|to|schran|ke nen|nen." as correct splitting', () => {
		expect(
			trenneSilben(
				"Eine Schranke, die an einer Straße gebaut ist, könnte man auch Autoschranke nennen.",
			),
		).toEqual(
			"Ei|ne Schran|ke, die an ei|ner Stra|ße ge|baut ist, könn|te man auch Au|to|schran|ke nen|nen.",
		);
	});

	it('should return "Ich sam|mel|te heu|te al|le Pfand|fla|schen ein und brach|te die|sen Ge|mein|schafts|pfand zum Su|per|markt." as correct splitting', () => {
		expect(
			trenneSilben(
				"Ich sammelte heute alle Pfandflaschen ein und brachte diesen Gemeinschaftspfand zum Supermarkt.",
			),
		).toEqual(
			"Ich sam|mel|te heu|te al|le Pfand|fla|schen ein und brach|te die|sen Ge|mein|schafts|pfand zum Su|per|markt.",
		);
	});
});
