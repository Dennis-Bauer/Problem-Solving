export default function sameUpsideDown(string: string): boolean {
  if (string.split("").some(char => !["0","6","9"].includes(char))) return false;

  return string === string.split("").reverse().map(char => char === "6" ? "9" : char === "9" ? "6" : char).join("");
}