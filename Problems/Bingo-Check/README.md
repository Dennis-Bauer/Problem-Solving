# Bingo-Check

Create a function that takes a 5x5 2D list and returns True if it has at least one Bingo, and False If it doesn't.

## Infos which are maybe needed

A board has a bingo, when a horizontal, vertical or diagonal 5 `x` line exists.

## Documentation

### Solution Idea

The board is represented as a 2D array (an array containing other arrays).

First, we check whether any inner array is completely filled with `"x"`.  
If such an array exists, it means there is a horizontal line and we return `true`.

If not, we check for vertical lines.  
For each possible index (0 → 4), we check the same index in every inner array.  
If all arrays contain `"x"` at that index, we have a vertical line and return `true`.

Finally, we check the two diagonals:

- positions `[i, i]`
- positions `[i, 4 - i]`

For each index `i`, we verify whether all elements on one of these diagonals are `"x"`.  
If either diagonal contains only `"x"`, we return `true`.

If none of these checks succeed, no winning line exists and the function returns `false`.

---

### [Implementation](./solver.ts)

It`s really simple. There are just 3 different for-loops. I don't think there is a description necessary :)

---

### Information's

This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com).
[Post](https://slothbytes.beehiiv.com/p/managing-data-is-complicated) from January 27, 2026.
