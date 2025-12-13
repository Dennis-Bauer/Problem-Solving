# Keyword Cipher
A Keyword Cipher replaces each letter of a message with a letter from a shifted alphabet built using a keyword.

## Documentation

### Solution Idea

The idea is quite simple.
We want to encrypt a word using a modified alphabet. The beginning of this alphabet is given, and we complete it by appending all remaining letters of the standard alphabet that are not already included. This results in a full, reordered alphabet.

To encrypt the word, each letter is replaced with the letter at the same position in the new alphabet as it has in the original alphabet.
The resulting sequence of letters is the encrypted word.

------------------------------------------------------------------------

### [Implementation](./solver.ts)

#### Overview

`keyword_cipher` encrypts a word by **substituting** each letter using a **reordered alphabet** derived from a given keyword.

The reordered (cipher) alphabet is built like this:

1. Start with the provided `keyword` (as the beginning of the new alphabet).
2. Append the rest of the letters from the normal alphabet **in order**, skipping any letters that already appear in the keyword.
3. Encrypt by replacing each plaintext letter with the cipher letter at the **same index**.

Example idea (simplified):

- Normal alphabet: `abcdefghijklmnopqrstuvwxyz`
- Keyword: `keyword`
- Cipher alphabet starts with: `keyword...` and then continues with remaining letters.

---------------------------

#### 1) Define reference alphabets

Two arrays represent the normal alphabet:

- `alphabetB`: used as the **reference** for letter positions (`a` → index 0, `b` → index 1, …)
- `alphabetA`: used as a **mutable pool** of remaining letters while building the cipher alphabet

#### 2) Build the cipher alphabet

```ts
let extraAlphabet = keyword;

extraAlphabet.split("").forEach((e) => {
  if (alphabetA.some((value) => value === e)) {
    alphabetA.splice(alphabetA.indexOf(e), 1);
  }
});

extraAlphabet = extraAlphabet + alphabetA.join("");
const eAlphabetArray = extraAlphabet.split("");
```

What this does:

- Start with `extraAlphabet = keyword`.
- For each character `e` in the keyword:
  - if `e` exists in `alphabetA`, remove it from `alphabetA`.
- Append all remaining letters from `alphabetA` to the end of the keyword.
- Split into `eAlphabetArray`, which becomes the final cipher alphabet mapping.

#### 3) Encrypt the word by index mapping

```ts
return word
  .split("")
  .map((value) => {
    // Not a letter from the alphabet? Keep it as-is.
    if (alphabetB.indexOf(value.toLowerCase()) === -1) return value;

    // Preserve uppercase
    if (value.toLowerCase() !== value)
      return eAlphabetArray[alphabetB.indexOf(value.toLowerCase())].toUpperCase();

    // Lowercase letter
    return eAlphabetArray[alphabetB.indexOf(value.toLowerCase())];
  })
  .join("");
```

Rules:

- **Non-letters** (anything not found in `alphabetB`) are returned unchanged.
- **Uppercase letters** are encrypted and converted back to uppercase.
- **Lowercase letters** are encrypted as lowercase.

------------------------------------------------------------------------

### Information's
This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com). 
[Post](https://slothbytes.beehiiv.com/p/random) from September 30, 2025.