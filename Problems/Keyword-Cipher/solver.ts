export default function keyword_cipher(keyword: string, word: string): string {

  if (keyword.length > 26) throw new Error("Keyword is to long!");
  if (word.length <= 0) throw new Error("An empty word cannot be encrypted")


  throw new Error("Solution isn't implemented yet!");
}
