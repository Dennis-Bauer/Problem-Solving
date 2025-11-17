# Excel Sheet Column Title
Given a positive integer, return its corresponding column title displayed in Excel sheets.

## Documentation

### Solution Idea

The idea is simple: you divide the current number by 26 (the number of letters in the alphabet) and take the remainder using the modulo operator. That remainder is then converted into a letter.

After that, you update the current number by dividing it by 26.
You repeat this process as long as the number is greater than zero.

------------------------------------------------------------------------

### [Implementation](./solver.ts)

The first thing the program does is check whether the number is below or equal to 0. If so, it returns an empty string, because there is no valid title for a number below 1.

After that, it creates a function that converts numbers from 1–26 to their corresponding letters (1 → A, 2 → B, …, 26 → Z). It does this by taking the ASCII value of the given number plus 64. This puts it exactly at the position of the correct letter, and `String.fromCharCode` then returns that letter.

Once this function is defined, the while-loop starts and runs as long as the number is not below 1. Inside the loop, the remainder of the division of the number by 26 is calculated and stored.

Next, the program checks whether this remainder is 0. If it is, a Z is added to the result. This check is necessary because the modulo operator returns 0 when the number is 26, but for the conversion function we actually need a 1.
If the remainder is not 0, the program simply adds the converted letter to the result.

The program then checks if the current number x is less than or equal to 26. If it is, there’s no higher value left to process, so the loop can stop and the final result is returned.

If not, x gets reduced by 1 and then divided by 26 (truncated).


------------------------------------------------------------------------

### Information's
This problem comes from the newsletter [Sloth Bytes](https://slothbytes.beehiiv.com). 
[Post](https://slothbytes.beehiiv.com/p/the-80-20-rule-of-programming) from September 02, 2025.
This problem is also comes from leet code. [Problem 268](https://leetcode.com/problems/excel-sheet-column-title/)