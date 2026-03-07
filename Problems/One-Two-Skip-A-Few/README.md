# One-Two-Skip-A-Few

You are given a sorted list `l` of length `n`, for example `[1, 3, 4, 5, 7]`.

Your task is to determine how many numbers are missing between `l[0]` and `l[n - 1]`.  
In other words, count how many numbers would appear if you counted from `l[0]` up to `l[n - 1]`, but are not present in the list.

Example:

Input:
l = [1, 3, 4, 5, 7]

Numbers between 1 and 7 would be:
1, 2, 3, 4, 5, 6, 7

Missing numbers:
2, 6

Output:
2

## Documentation

### Solution Idea

This problem can be solved with a simple mathematical observation.

If `x` is the starting number (`l[0]`) and `y` is the final number (`l[n - 1]`), then there are always `y - x + 1` total numbers when counting from `x` to `y`.

Since the list already contains `n` of those numbers, the number of missing numbers is:

`(y - x + 1) - n`

### [Implementation](./solver.ts)

(I don't need to explain that 🙃)

---

### Information's

This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com).
[Post](https://slothbytes.beehiiv.com/p/ai-agents) from November 18, 2025.
