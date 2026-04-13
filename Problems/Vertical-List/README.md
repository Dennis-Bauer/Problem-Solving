# Vertical-List

Create a function that converts a string into a matrix of characters that can be read vertically. Add spaces when characters are missing.

## Documentation

### Solution Idea & [Implementation](./solver.ts)

The idea is to loop over every word in the text and process each character separately.

For every character, we first check whether an array already exists in the solution array at the index of the character's position in the word.  
If not, we create a new array there.

Then we place the character into the solution array at this position:

\[character position\]\[word index\]

This correctly rearranges the characters, but the spaces for shorter words are still missing.

To fix this, whenever the word index is greater than `0`, we check whether the previous character position exists for the previous word.  
If it does not exist, we know that the previous word was shorter, so we insert an empty space at that position.

By doing this for every word and every character, the solution array is built correctly and the final transformed text can be returned.

---

### Information's

This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com).
[Post](https://slothbytes.beehiiv.com/p/why-your-delete-button-is-a-lie) from May 18, 2026.
