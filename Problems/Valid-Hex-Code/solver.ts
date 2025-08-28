export default function isValidHexCode(string: string): boolean {
  return string.length === 7 && string.startsWith("#") && string.replaceAll(/[a-fA-F0-9]/g, "") === "#";
}