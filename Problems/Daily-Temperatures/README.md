# Daily Temperatures

You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.
Return an array where output[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set output[i] to 0 instead.

## Documentation

### Solution Idea & [Implementation](./solver.ts)

The idea is straightforward:

Loop over each number in the array.  
For every number, start a second loop that goes through the remaining elements of the array, beginning at the next index.

In this inner loop, check each number until you find one that is greater than the current number.  
Count how many steps it takes to find such a number.

- If a larger number is found, return the number of steps taken.
- If the end of the array is reached without finding a larger number, return `0`.

Repeat this process for every number in the array.

(Sorry for only one text. But don't want to write two :|)

---

### Information's

This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com).
[Post](https://slothbytes.beehiiv.com/p/docker-for-dummies) from March 25, 2026.
