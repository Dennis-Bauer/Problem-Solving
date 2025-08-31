import fs from "fs";
import { beforeAll } from "vitest";

export default function calculateWinner (exampleFile: string): {bellaTurns: number, amiraTurns: number, winner: "Bella" | "Amira"} {

  // Erstellt eine Variable, die einen Text speichert, welcher durch eine separate Funktion eingeben wird.
  const text = getTextInput(exampleFile);

  // Spiel an sich
  // Speichert, wie viele Schritte die jeweilige Person benötigt hat. Die Berechnung erfolgt in einer separaten Funktion.
  const bella = runThroughGame(text, 0);
  const amira = runThroughGame(text, 1);

  // Gibt aus, wer gewonnen hat.
  if (bella <= amira) {
    return {bellaTurns: bella, amiraTurns: amira, winner: "Bella"}
  } else {
    return {bellaTurns: bella, amiraTurns: amira, winner: "Amira"}
  }
}

/**
 * Simuliert einen Spieler.
 * @param text Der Text, durch den das Programm läuft.
 * @param startPosition Die Position im Text, an der der Spieler startet.
 * @return Die Anzahl an Spielzügen, die das Programm benötigt hat.
 */
function runThroughGame(text: string, startPosition: number) {
  // Erstellt die Variable "pos", die die aktuelle Position im Text speichert, an der sich das Programm gerade befindet.   
  let pos = startPosition;

  // Erstellt die Variable "runs", die speichert, wie viele spiel Züge am Ende benötigt wurden.
  let runs = 0;

  // Die Schleife läuft, bis die Position über das Textende hinausgeht.
  while (pos + 1 <= text.length) {
    // Jeder Schleifendurchlauf entspricht einem Spielzug, daher wird die Variable erhöht.
    runs++;

    // Wandelt den Buchstaben an der aktuellen Position im Text in eine Zahl um (ASCII).
    let letterNumber = text.charCodeAt(pos) - 96;

    // Wandelt Zeichen, die keine Buchstaben des lateinischen Alphabets sind, in die entsprechende Zahl um.            
    if (letterNumber > 26 || letterNumber < 1) {
      switch (letterNumber) {
        case 132: letterNumber = 27; break; //ä
        case 150: letterNumber = 28; break; //ö
        case 156: letterNumber = 29; break; //ü
        case 127: letterNumber = 30; break; //ß
        default: throw new Error("There is a symbole in the text which isn't allowed!"); //Alles andere (Nicht möglich)
      }
    }

    // Erhöht die Position des Programmes um die Anzahl an "Sprünge" die der Buchstabe wieder spiegelt auf
    // dem das Programm sich grade befindet
    pos += letterNumber;
  }

  return runs;
}

/**
* Liest die Datei mit dem angegebenen Namen aus.
* @param fileName Der Name der Datei, die ausgelesen wird.
* @return Den Text der Datei, korrekt konvertiert, als einzelner String.
*/
function getTextInput(fileName: string): string {
  let text = fs.readFileSync(fileName, "utf-8");

  // Wandelt alle Buchstaben in der Zeile in Kleinbuchstaben um.
  text = text.toLowerCase();
  // Entfernt alle Zeichen, die nicht im Unicode-Bereich liegen.
  text = text.replace(/\n/g, "");
  text = text.replace(/[^a-zäöüß]/g, "");

  return text;
}