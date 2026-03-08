# Remove-The-Last-Vowel

Write a function that removes the last vowel from each word in a sentence.

A vowel is one of: `a, e, i, o, u` (case-insensitive).

Each word in the sentence should be processed independently, and only the **last vowel** of each word should be removed.

Extra challenge (TypeScript/JavaScript):
Try to implement the solution as a **one-liner**, meaning the function should contain only a `return` statement using method chaining.

## Documentation

### Solution Idea

The sentence is first split into an array of words. Each word is then processed individually.

For every word, create a new variable that will store the modified version of that word.  
Then iterate through the word from **right to left**, checking each character.

- If the character is **not a vowel**, add it to the new word.
- If the character **is a vowel**, check whether the new word currently matches the original word up to that position.
  - If it matches, it means that no vowel has been removed yet, so we **skip this vowel** (this removes the last vowel).
  - If it does not match, a vowel has already been removed earlier, so we **add the vowel** to the new word.

After processing the whole word, continue with the next word in the array.

Finally, join the modified words back together into a sentence and return the result.

---

### [Implementation](./solver.ts)

First, the sentence is split at each space `" "` to get an array of words.  
Then we use `map` to process each word individually.

For each word, we split it into characters. To keep the number of methods small, we use `[...str]` to convert the word into an array of characters.

Next, we process this array using `reduceRight`.  
We could also reverse the array and use `reduce`, but `reduceRight` saves us that extra step.

Inside the `reduceRight` function, we check whether the substring of the original word up to the current index matches the value that is currently being built (`current + previous`). If it matches, it means that **no vowel has been removed yet**.

- If the current character is a vowel, we skip it by returning only the previous value.
- If it is not a vowel, we return `current + previous`.

If the substring does **not** match anymore, it means a vowel has already been removed earlier, so we simply return `current + previous`.

After `reduceRight` finishes, we have the word without its last vowel.

Once the `map` function has processed all words, we join the array back into a sentence using a space `" "` and return the result.

---

### Information's

This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com).
[Post](https://slothbytes.beehiiv.com/p/5-things-tutorials-never-teach) from January 07, 2026.
