# Nom Nom Numbers

A number can "eat" the number to its right if it’s larger than that number.
When it eats, it becomes the sum of both numbers.
Keep repeating this process from left to right until no more eating can happen.

## Infos which are maybe needed

Some Infos. This section can also just get deleted

## Documentation

### Solution Idea

This is a really simple approach.
The base idea is to loop over the given array and check the current number with the previous number. If this previous number is bigger than the current number, we set the current number to the sum of current and previous, and also set the previous number to undefined which indicates that this number ate a other number.
We repeat the progress until the last number is reached. Now we return the array without undefined values and this will be the result.

---

### [Implementation](./solver.ts)

---

### Information's %Informations where the problem comes from. Most of them came from Sloth Byte%

This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com).
[Post](https://slothbytes.beehiiv.com/p/the-future-of-software-engineering-interviews) from October 28, 2025.
