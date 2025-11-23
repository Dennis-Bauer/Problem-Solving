# Trace the Path of the Word

Given a grid of letters, check if a word can be traced by moving up, down, left, or right from one letter to the next.

Write a function that returns the path as a list of [row, col] positions, or "Not present" if the word is not found/can’t be created.

## Documentation

### Solution Idea

The idea is to look at every cell in the grid whose letter matches the first letter of the word. From there, we check all directions to see if the second letter matches. If it does, we call the same function again.

This creates a chain of recursive calls that should eventually reach the last letter of the word. The sequence is only returned if it actually ends on the correct final letter.

Since multiple sequences may be explored, only those that match the entire word are kept all others are discarded.
This is essentially a recursive search algorithm.

---

### [Implementation](./solver.ts)

The implementation starts by checking the input grid and the word. The word must have a minimum length of one, and all grid rows need to have the same length. If any of these conditions fail, the function returns false.

If everything is valid, two nested loops iterate over the entire grid and call the recursive function for every cell whose letter matches the first letter of the word.

The recursive function then checks all directions for the next letter. If a matching letter is found, it calls itself again on that position. These calls continue until either the end of the word is reached or no matching next letter exists. In both cases, the current path is returned.

The function that initiated the call then checks the returned path. It verifies that the path exists and that the last position in the path contains the final letter of the word. If that’s the case, it returns the path, including the position where the function was called.

This continues until the initial function call is reached. The main function then checks whether the returned path ends at the position of the last letter of the word. If so, this path is returned.

---

### Information's

This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com).
[Post](https://slothbytes.beehiiv.com/p/sdks) from September 16, 2025.
